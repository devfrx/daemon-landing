// The bench: runs tasks of the landing's plan from the plan's own text, by the rules of §14–§17 of its test log.
// A block is taken as it is; a file is written only if its step names it, in backticks, before the block; a command of
// the text runs only if it is found, letter for letter, in its step, and so «lo stesso comando del passo N»; the
// fragments of tasks 4, 6 and 13 are grafted where the text says, each into the block that follows its own words. Step
// 7 of task 5, the review of the English, and step 13 of task 13, the CI on GitHub, are skipped.
// The text is compared as it reads: the plan wraps inside sentences, so line breaks count as spaces.
//
// The bench lives in the session's scratchpad, $S, and never in a repository: daemon cloned without a working tree,
// its origin on GitHub and its origin/main the real one; the kit's SVGs and its two pages beside it; the landing inside,
// pushing to a bare repository, so that `git push` reaches nothing real. From Git Bash, with $D daemon's root folder:
//
//   mkdir -p "$S/b" && cd "$S/b"
//   git clone --no-checkout -q "$D" daemon
//   git -C daemon remote set-url origin https://github.com/devfrx/daemon.git
//   git -C daemon update-ref refs/remotes/origin/main "$(git -C "$D" rev-parse origin/main)"
//   mkdir daemon/daemon_kit
//   cp "$D"/daemon_kit/*.svg "$D/daemon_kit/daemon - studio del marchio.html" "$D/daemon_kit/daemon — splash.html" daemon/daemon_kit/
//   git init --bare -q landing-remote.git
//   git clone -q "$D/landing" daemon/landing
//   git -C daemon/landing remote set-url origin "$S/b/landing-remote.git"
//   git -C daemon/landing push -q -u origin main
//
// Then, from a copy of this file in $S, with Windows paths (cygpath -w), the tasks in their order:
//
//   node bench.mjs <the plan> <$S>\b\daemon\landing <$S>\logs 1 2 3 …
//
// Each command runs in Git Bash, from the landing; its whole output goes to a log of its own in <logs>, and report.txt
// shows the lines that matter beside the «Atteso» of the step, the first 60 of each command. A new task adds its
// commands to INLINE, below, and its fragments to GRAFTS.
import { spawnSync } from 'node:child_process';
import { appendFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const [planPath, landingArg, logsArg, ...taskArgs] = process.argv.slice(2);
const landing = resolve(landingArg);
const logs = resolve(logsArg);
const folder = resolve(landing, '..', '..'); // <cartella>: the bench, outside the repository
const folderForBash = folder.replaceAll('\\', '/');
const BASH = 'C:\\Program Files\\Git\\bin\\bash.exe';
mkdirSync(logs, { recursive: true });
const report = join(logs, 'report.txt');
const say = (line) => {
  process.stdout.write(`${line}\n`);
  appendFileSync(report, `${line}\n`);
};

function parse(text) {
  const tasks = new Map();
  let task = null;
  let step = null;
  let fence = null;
  // A copy cloned before the .gitattributes has Windows line breaks: the plan is read whatever they are.
  for (const line of text.split(/\r?\n/)) {
    if (fence) {
      if (line === '```') {
        step?.parts.push({ kind: 'block', lang: fence.lang, code: `${fence.lines.join('\n')}\n` });
        fence = null;
      } else fence.lines.push(line);
      continue;
    }
    const open = line.match(/^```(\S*)$/);
    if (open) {
      fence = { lang: open[1], lines: [] };
      continue;
    }
    const heading = line.match(/^#{2,3} (.*)$/);
    if (heading) {
      const t = heading[1].match(/^Compito (\d+) — /);
      task = t ? { n: Number(t[1]), steps: new Map() } : null;
      if (task) tasks.set(task.n, task);
      step = null;
      continue;
    }
    const s = line.match(/^- \[ \] \*\*Passo (\d+)/);
    if (s && task) {
      step = { n: Number(s[1]), parts: [{ kind: 'text', text: line }] };
      task.steps.set(step.n, step);
      continue;
    }
    if (step) {
      const last = step.parts.at(-1);
      if (last.kind === 'text') last.text += `\n${line}`;
      else step.parts.push({ kind: 'text', text: line });
    }
  }
  return tasks;
}

// The commands written in the text, step by step: each runs only if found letter for letter in its step.
const INLINE = {
  1: { 7: ['git push'] },
  2: { 3: ['node <cartella>/verify-brand.mjs'], 6: ['node <cartella>/verify-brand.mjs'], 9: ['git push'] },
  3: { 5: [{ same: 3 }], 6: ['npm audit'], 7: ['git status --short'], 8: ['git push'] },
  4: { 3: ['npx vitest run src/lib/daemon.test.ts'], 5: ['npm test'], 6: ['npm run build'], 8: ['git push'] },
  5: { 1: ['npx vitest run src/lib/texts.test.ts'], 3: ['npx vitest run src/lib/texts.test.ts'], 5: ['npm run build'], 9: ['git push'] },
  6: {
    1: ['npx vitest run src/lib/sources.test.ts'],
    3: ['npx vitest run src/lib/sources.test.ts'],
    4: ['npx vitest run src/lib/daemon.test.ts'],
    6: ['npx vitest run src/lib/daemon.test.ts'],
    7: ['npx vitest run checks/sources.test.ts'],
    9: ['npm run build'],
    11: ['git push'],
  },
  7: {
    2: ['npx vitest run src/lib/words.test.ts'],
    4: ['npx vitest run src/lib/words.test.ts'],
    5: ['npx vitest run checks/words.test.ts'],
    7: ['npm run build', 'npm audit'],
    9: ['git push'],
  },
  8: {
    2: ['npx vitest run src/lib/address.test.ts src/lib/links.test.ts'],
    4: [{ same: 2 }],
    5: ['npx vitest run checks/support/server.test.ts'],
    6: [{ same: 5 }],
    10: [{ same: 8 }],
    12: ['npm test -- --project checks', 'npm audit'],
    14: ['git push'],
  },
  9: { 2: ['npx vitest run src/lib/tokens.test.ts'], 3: [{ same: 2 }], 8: ['npm test -- --project checks', 'npm audit'], 10: ['git push'] },
  10: { 5: ['npm test -- --project checks', 'npm audit'], 7: ['git push'] },
  11: { 3: [{ same: 2 }], 6: [{ same: 4 }], 8: ['npm test -- --project checks', 'npm audit'], 10: ['git push'] },
  12: { 4: ['npm test -- --project checks', 'npm audit'], 6: ['git push'] },
  // Step 13, the CI on GitHub, does not run here: the bench's push reaches nothing real.
  13: {
    1: ['npx vitest run src/lib/brand.test.ts'],
    2: [{ same: 1 }],
    3: ['npx vitest run checks/brand.test.ts'],
    5: ['npm run gate'],
    7: ['npm run gate'],
    12: ['git push'],
  },
  ...JSON.parse(process.env.BENCH_INLINE ?? '{}'),
};

function replaceOnce(file, from, to) {
  const text = readFileSync(file, 'utf8');
  const found = typeof from === 'string' ? text.split(from).length - 1 : (text.match(new RegExp(from, 'g')) ?? []).length;
  if (found !== 1) throw new Error(`graft: ${from} is in ${file} ${found} times`);
  writeFileSync(file, text.replace(from, to));
}
const insertBefore = (file, anchor, block) => replaceOnce(file, anchor, `${block}${anchor}`);
const insertAfter = (file, anchor, block) => replaceOnce(file, anchor, `${anchor}${block}`);

// The fragments of tasks 4 and 6, grafted where the text says: the anchor is the text's own words.
const GRAFTS = {
  '4.1': [
    {
      anchor: 'in `package.json`, lo script dei test accanto a quello della build',
      apply: (b) => replaceOnce(join(landing, 'package.json'), /  "scripts": \{\n[^}]*\},\n/, b),
    },
  ],
  '6.4': [
    { anchor: '`origin` subito dopo `git init`', apply: (b) => replaceOnce(join(landing, 'src/lib/daemon.test.ts'), "  git(root, 'init', '--quiet');\n", b) },
    {
      anchor: 'prima di `refuses a repository without origin/main`',
      apply: (b) => insertBefore(join(landing, 'src/lib/daemon.test.ts'), "  test('refuses a repository without origin/main'", `${b}\n`),
    },
  ],
  '6.5': [
    { anchor: "il campo nell'interfaccia, dopo `commit`", apply: (b) => insertAfter(join(landing, 'src/lib/daemon.ts'), '  readonly commit: string;\n', b) },
    { anchor: 'prima di `let commit: string;`', apply: (b) => insertBefore(join(landing, 'src/lib/daemon.ts'), '  let commit: string;\n', b) },
    { anchor: "nell'oggetto restituito", apply: (b) => replaceOnce(join(landing, 'src/lib/daemon.ts'), '  return {\n    commit,\n', b) },
  ],
  '13.6': [
    {
      anchor: 'in `package.json`, lo script del cancello accanto agli altri due',
      apply: (b) => replaceOnce(join(landing, 'package.json'), /  "scripts": \{\n[^}]*\},\n/, b),
    },
  ],
};

const isPath = (token) => /^\.[a-z]+$/.test(token) || /^[\w@.\-/]+\.(ts|mjs|js|json|astro|css|yml|yaml)$/.test(token);
const ANSI = /\x1b\[[0-9;]*[A-Za-z]/g;
const RELEVANT =
  /(passed|failed|skipped|\berrors?\b|built|Error|vulnerabilit|Cannot find|Test Files|Tests {2}|No packages|fingerprint|identical|both pages|the icon|LANDING_|Unrecognized|two checks|Missing pages|unreviewed|^\s*[×✓❯↓]|FAIL|w\/crlf|eol:|text:|^\s*\d+\s*$|^[AMD?]{1,2} |^ [AMD] |warn|gate|-----|exit)/i;

function envFor(task) {
  const env = { ...process.env, NO_COLOR: '1' };
  // From task 8, the address of the trial is in the environment, given once at the start of the session (§5 of the plan).
  if (task >= 8) Object.assign(env, { LANDING_SITE: 'https://landing.invalid', LANDING_BASE: '/daemon-landing/', MSYS_NO_PATHCONV: '1' });
  return env;
}

let counter = 0;
const ran = [];
function run(task, step, raw) {
  const command = raw.replaceAll('<cartella>', folderForBash);
  const id = String(++counter).padStart(3, '0');
  const started = Date.now();
  const result = spawnSync(BASH, ['-c', `exec 2>&1\n${command}`], {
    cwd: landing,
    env: envFor(task),
    encoding: 'utf8',
    maxBuffer: 256 * 1024 * 1024,
    timeout: 30 * 60 * 1000,
  });
  const output = (result.stdout ?? '').replace(ANSI, '');
  const end = `exit ${result.status}${result.signal ? `, signal ${result.signal}` : ''}${result.error ? `, ${result.error.message}` : ''}`;
  const log = join(logs, `${id}-t${task}-p${step}.log`);
  writeFileSync(log, `$ ${command}\n\n${output}\n[${end}]\n`);
  const seconds = ((Date.now() - started) / 1000).toFixed(1);
  say(`  [${id}] $ ${command.split('\n')[0].slice(0, 160)}${command.includes('\n') ? ' …' : ''}`);
  say(`        ${end}, ${seconds} s`);
  const all = output.split('\n').map((line) => line.trimEnd());
  const lines = all.filter((line) => RELEVANT.test(line));
  for (const line of lines.slice(0, 60)) say(`        | ${line.slice(0, 220)}`);
  if (lines.length > 60) say(`        | … ${lines.length - 60} more, in ${log}`);
  // The last lines always: what a program says before it ends is often what matters.
  const last = all.filter((line) => line !== '').slice(-3);
  for (const line of last) if (!lines.includes(line)) say(`        > ${line.slice(0, 220)}`);
  ran.push({ id, task, step, status: result.status, seconds });
}

function commandsOf(task, step) {
  const own = step.parts.filter((part) => part.kind === 'block' && part.lang === 'bash').map((part) => part.code);
  const inline = (INLINE[task.n]?.[step.n] ?? []).filter((entry) => typeof entry === 'string');
  return [...inline, ...own];
}

const tasks = parse(readFileSync(planPath, 'utf8'));
for (const n of taskArgs.map(Number)) {
  const task = tasks.get(n);
  if (!task) throw new Error(`no task ${n} in the plan`);
  say(`\n=================== TASK ${n}`);
  for (const step of task.steps.values()) {
    const text = step.parts.filter((part) => part.kind === 'text').map((part) => part.text).join('\n');
    say(`\n--- T${n} P${step.n}: ${step.parts[0].text.replace(/^- \[ \] /, '').slice(0, 140)}`);
    const pending = [...(INLINE[n]?.[step.n] ?? [])];
    const grafts = [...(GRAFTS[`${n}.${step.n}`] ?? [])];
    let before = '';
    for (const part of step.parts) {
      if (part.kind === 'text') {
        // The text wraps inside sentences: words are compared as they read, one space between them.
        before = part.text.replace(/\s+/g, ' ');
        for (const entry of [...pending]) {
          if (typeof entry === 'string' && before.includes(entry)) {
            pending.splice(pending.indexOf(entry), 1);
            run(n, step.n, entry);
          } else if (typeof entry === 'object' && new RegExp(`stess[oi] comand[oi] del passo ${entry.same}\\b`, 'i').test(before)) {
            pending.splice(pending.indexOf(entry), 1);
            say(`  (the same command as step ${entry.same})`);
            for (const command of commandsOf(task, task.steps.get(entry.same))) run(n, step.n, command);
          }
        }
        continue;
      }
      if (part.lang === '') {
        // What a command should print.
        say(`  EXPECTED (block): ${part.code.trim().replaceAll('\n', ' / ')}`);
        continue;
      }
      if (part.lang === 'bash') {
        run(n, step.n, part.code);
        continue;
      }
      // A fragment goes where the text says: into the block that follows the graft's own words.
      const graft = grafts.find((each) => before.includes(each.anchor));
      if (graft) {
        grafts.splice(grafts.indexOf(graft), 1);
        graft.apply(part.code);
        say(`  graft: ${graft.anchor}`);
        continue;
      }
      const paths = [...before.matchAll(/`([^`]+)`/g)].map((match) => match[1]).filter(isPath);
      if (paths.length === 0) throw new Error(`T${n} P${step.n}: a ${part.lang} block, and no file named before it`);
      const targets = before.includes('uguali') ? paths : [paths.at(-1)];
      for (const target of targets) {
        const file = before.includes('fuori dal repository') ? join(folder, target) : join(landing, target);
        mkdirSync(resolve(file, '..'), { recursive: true });
        writeFileSync(file, part.code);
        say(`  write: ${target}${before.includes('fuori dal repository') ? ' (outside the repository)' : ''}`);
      }
    }
    if (pending.length > 0) throw new Error(`T${n} P${step.n}: not found in its step: ${JSON.stringify(pending)}`);
    if (grafts.length > 0) throw new Error(`T${n} P${step.n}: the graft's words are before no block: ${grafts.map((each) => each.anchor).join('; ')}`);
    const expected = text.split(/(?=Atteso)/).slice(1).map((piece) => piece.replace(/\s+/g, ' ').trim());
    for (const piece of expected) say(`  EXPECTED: ${piece.slice(0, 600)}`);
  }
}
say('\n=================== EXITS');
for (const entry of ran) say(`  [${entry.id}] T${entry.task} P${entry.step}: exit ${entry.status}, ${entry.seconds} s`);
