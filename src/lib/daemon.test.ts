import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, test } from 'vitest';
import { openDaemon } from './daemon';

const roots: string[] = [];
afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true });
});

// A repository built the same way on every machine: no global identity, no line-ending conversion.
function git(root: string, ...args: string[]): string {
  const settings = ['-c', 'user.name=test', '-c', 'user.email=test@example.invalid', '-c', 'core.autocrlf=false', '-c', 'init.defaultBranch=main'];
  return execFileSync('git', ['-C', root, ...settings, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
}

// origin/main says "on main"; a local commit after it and the working tree say something else.
function repository(): { root: string; main: string } {
  const root = mkdtempSync(join(tmpdir(), 'landing-daemon-'));
  roots.push(root);
  git(root, 'init', '--quiet');
  writeFileSync(join(root, 'notes.md'), 'on main\n');
  git(root, 'add', 'notes.md');
  git(root, 'commit', '--quiet', '-m', 'main');
  const main = git(root, 'rev-parse', 'HEAD');
  git(root, 'update-ref', 'refs/remotes/origin/main', main);
  writeFileSync(join(root, 'notes.md'), 'on a local commit\n');
  git(root, 'commit', '--quiet', '-am', 'local');
  writeFileSync(join(root, 'notes.md'), 'in the working tree\n');
  return { root, main };
}

describe('openDaemon', () => {
  test('takes the commit of origin/main', () => {
    const { root, main } = repository();
    expect(openDaemon(root).commit).toBe(main);
  });

  test('reads a file at the commit it took: not at HEAD, not in the working tree, not at a later origin/main', () => {
    const { root } = repository();
    const daemon = openDaemon(root);
    // A git fetch after the opening moves origin/main; the reads stay on the commit taken at the opening.
    git(root, 'update-ref', 'refs/remotes/origin/main', git(root, 'rev-parse', 'HEAD'));
    expect(daemon.read('notes.md')).toBe('on main\n');
  });

  test('refuses a repository without origin/main', () => {
    const { root } = repository();
    git(root, 'update-ref', '-d', 'refs/remotes/origin/main');
    expect(() => openDaemon(root)).toThrow(/no origin\/main/);
  });

  test('refuses a file that is not at origin/main, even if HEAD and the working tree have it', () => {
    const { root } = repository();
    writeFileSync(join(root, 'local.md'), 'on a local commit\n');
    git(root, 'add', 'local.md');
    git(root, 'commit', '--quiet', '-m', 'local file');
    expect(() => openDaemon(root).read('local.md')).toThrow(/local\.md is not in daemon/);
  });
});
