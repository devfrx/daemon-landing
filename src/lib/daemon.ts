import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';

/** daemon as the landing reads it: one commit of `origin/main`, never the working tree (§6.2 of the design). */
export interface Daemon {
  /** The full hash of the commit every read comes from. */
  readonly commit: string;
  /** The content of `path`, relative to daemon's root, at that commit. */
  read(path: string): string;
}

function git(root: string, args: string[]): string {
  // `maxBuffer: Infinity`: daemon has documents larger than the 1 MiB that execFileSync allows by default.
  return execFileSync('git', ['-C', root, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: Infinity });
}

/** Opens daemon at `root` — by default the folder that holds the landing — on the commit of its `origin/main`. */
export function openDaemon(root: string = resolve(process.cwd(), '..')): Daemon {
  let commit: string;
  try {
    commit = git(root, ['rev-parse', '--verify', '--quiet', 'refs/remotes/origin/main^{commit}']).trim();
  } catch {
    throw new Error(`no origin/main in ${root}: the landing reads daemon at origin/main, so fetch it first`);
  }
  return {
    commit,
    read(path) {
      try {
        return git(root, ['show', `${commit}:${path}`]);
      } catch {
        throw new Error(`${path} is not in daemon at ${commit}`);
      }
    },
  };
}
