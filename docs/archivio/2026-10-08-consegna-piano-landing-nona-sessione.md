# La consegna della nona sessione, del 2026-10-08 — il piano del traguardo 1 della landing

> 🗄️ **Che cos'è questo file.** La consegna che stava nella §6 del
> [piano del traguardo 1](../superpowers/plans/2026-10-07-landing-traguardo-1.md), qui parola per parola. È com'era nel
> commit `1e8df06`, dove è stata scritta alla chiusura della nona sessione, e così è rimasta fino alla chiusura della
> decima.

> 🔶 Oggi questa sezione è la consegna della nona sessione, del 2026-10-08: il piano è scritto e approvato per intero, e
> qui c'è come si esegue. Le consegne di prima sono in archivio, parola per parola:
> [del mattino](../../archivio/2026-10-07-consegna-piano-landing-mattina.md),
> [del pomeriggio](../../archivio/2026-10-07-consegna-piano-landing-pomeriggio.md),
> [della terza sessione](../../archivio/2026-10-07-consegna-piano-landing-terza-sessione.md),
> [della quarta](../../archivio/2026-10-07-consegna-piano-landing-quarta-sessione.md),
> [della quinta](../../archivio/2026-10-07-consegna-piano-landing-quinta-sessione.md),
> [della sesta](../../archivio/2026-10-08-consegna-piano-landing-sesta-sessione.md),
> [della settima](../../archivio/2026-10-08-consegna-piano-landing-settima-sessione.md) e
> [dell'ottava](../../archivio/2026-10-08-consegna-piano-landing-ottava-sessione.md).

**Dove siamo:**

| Parte | Stato |
|---|---|
| §1–§4 | approvate, coi richiami del 2026-10-07 |
| §5, compiti 1–13 | ✅ approvati: l'1–11 il 2026-10-07, il 12 e il 13 il 2026-10-08; rifatti tutti dal testo sul banco, uno dopo l'altro, con daemon a `ca2a0d4`: tutto come scritto |
| l'esecuzione | ⏳ da cominciare: nessun compito è eseguito, e la landing ha soltanto i documenti |

La storia delle prove è nel [verbale](../../archivio/2026-10-07-prove-piano-landing.md). Il programma del banco,
[`2026-10-08-banco-prove-piano-landing.mjs`](../../archivio/2026-10-08-banco-prove-piano-landing.mjs), rifà dal testo i
compiti 1–13.

**Come si esegue.** Una fase per sessione (§7.1 del disegno): prima il pre-controllo, poi un compito per sessione,
nell'ordine 1–13.

| Fase | Che cosa si fa |
|---|---|
| il pre-controllo, in una sessione | ogni compito si legge come un'ipotesi: le quattro domande e le regole 5–8 di *«Prima di eseguire un compito di un piano»*, nel `CLAUDE.md` di daemon. Ogni difetto va al proprietario in A/B, uno per volta; il piano si corregge col richiamo datato, e un compito che cambia si rifà dal testo sul banco |
| un compito, in una sessione | il coordinatore rilegge il compito contro la landing di adesso — la regola 5 —, poi lo esegue con `superpowers:subagent-driven-development`: i subagenti e il loro costo seguono la riga di quella skill nel `CLAUDE.md` di daemon. Il codice nasce dai test, `superpowers:test-driven-development`. Il compito si chiude col suo commit, `t1(compito N): …`, e col push |

**Il prossimo passo**, in una sessione nuova — il pre-controllo:

1. dentro `landing/`: `git fetch --all --prune`, `git status -sb`, e il fast-forward se serve;
2. leggi `CLAUDE.md`, questo piano e il disegno, per intero;
3. le skill: `anthropic-skills:decision-principles`, `anthropic-skills:dev-discipline`, `anthropic-skills:dev-communication`
   e `superpowers:writing-plans`;
4. rilancia ciò che invecchia, coi comandi della tabella in fondo;
5. il pre-controllo dei compiti 1–13, come dice la tabella qui sopra; commit e push a ogni correzione;
6. alla chiusura, la consegna qui, con questa in archivio; commit e push. La sessione dopo esegue il compito 1.

**Da sapere subito:**

- ⚠️ daemon si muove mentre si lavora: in questa sessione `origin/main` è passato da `ca2a0d4` a `8e88ae1`, un commit di
  documenti dell'audit che non tocca né le cinque fonti né la GUI. Un commit di daemon non si scrive mai come vero: si
  rilancia `git -C .. rev-parse --short origin/main`;
- ⚠️ **questa macchina è corta di memoria**: 16 GB, e in questa sessione 1,7 GB liberi. La memoria del momento:
  `powershell -NoProfile -Command "Get-CimInstance Win32_OperatingSystem | Select-Object FreePhysicalMemory,
  TotalVisibleMemorySize, FreeVirtualMemory, TotalVirtualMemorySize"`;
- ⚠️ dopo il giorno del piano sono uscite `astro` 7.3.7 e `playwright` 1.64.0: il piano resta alla 7.3.6 e alla 1.63.0,
  per la regola della §2.1 — Playwright segue la GUI di daemon, e una versione nuova si prende con un atto apposta;
- ⚠️ GitHub sposta `ubuntu-latest` su Ubuntu 26 dal 2026-10-19, dice un avviso nel giro di daemon: la CI della landing
  gira per la prima volta al compito 13, forse già lì;
- il cancello della GUI di daemon ha anche `npm run lint`, con eslint; la landing no: né il disegno né il piano hanno un
  linter. Segnalato al proprietario il 2026-10-08, senza una decisione;
- il banco: i comandi in testa al suo programma, poi `node bench.mjs <il piano> <la landing del banco> <la cartella dei
  log> 1 2 … 13`. Il programma legge il piano con qualunque a-capo, e innesta un frammento nel blocco che segue le sue
  parole; il compito 13 lancia il cancello cinque volte;
- su questa macchina daemon sta su `main`. `daemon_kit/` non è nascosta a daemon, `/landing/` sì:
  `git -C .. check-ignore -v daemon_kit landing/CLAUDE.md`. Il `.gitignore` di daemon non ha ancora la riga `landing/`,
  ed è lavoro di daemon;
- Vitest 4 non mostra la console dei test verdi: per vedere i valori di una misura, `--reporter=verbose --silent=false`;
- in Git Bash, con `MSYS_NO_PATHCONV=1`, un percorso `/c/…` o `/tmp/…` passato a Node o a `git` non viene tradotto: si
  passa `cygpath -w`, o si toglie il flag in una subshell. `git init` lo legge come `C:\tmp\…`;
- Git Bash a volte non riesce a creare un processo, *«fork: retry: Resource temporarily unavailable»*: è l'ambiente, e si
  rilancia il passo;
- su Windows `chrome.exe --version` apre il browser invece di scrivere la versione: la versione si legge dal nome della
  cartella, `ls "/c/Program Files/Google/Chrome/Application/"`.

**Verificato fra il 2026-10-07 e il 2026-10-08, dalla sesta alla nona sessione.** Si rilancia, non si crede. I comandi
`git` dalla radice di daemon, in Git Bash, dopo `export MSYS_NO_PATHCONV=1`.

| Fatto | Comando o fonte |
|---|---|
| le versioni della §2.1, e `web-vitals` 6.2.3; dopo il giorno del piano `astro` 7.3.7, del 2026-10-07 alle 21:37 UTC, e `playwright` 1.64.0; Node 24.19.0 e npm 11.17.0 su questa macchina | `npm view <pacchetto> version license`; `npm view <pacchetto> time`; `git show "origin/main:gui/package.json"`; `node --version`; `npm --version` |
| `origin/main` di daemon era `8e88ae1` alla chiusura, uguale a GitHub; l'audit c'è, col segno «(col N)» | `git rev-parse --short origin/main`; `git ls-remote origin refs/heads/main`; `git merge-base --is-ancestor origin/repo-audit/20260930-1510 origin/main`; `git show "origin/main:docs/README.md" \| grep -c 'col N'` |
| le cinque citazioni della §3.4 si trovano, e fra `fc43188` e `8e88ae1` nessuna delle cinque fonti è cambiata | per ciascuna: `git show "origin/main:<fonte>" \| tr -d '\r' \| tr '\n' ' ' \| tr -s ' ' \| grep -cF -- '<citazione>'`; `git diff --stat fc43188 origin/main -- <le cinque fonti>` |
| fra `973153f` e `8e88ae1` la GUI non è cambiata: manifesto, token, cancello, CI | `git diff --stat 973153f origin/main -- gui/package.json gui/src/tokens scripts/gate-gui.sh .github` |
| `themes.css` di daemon: `:root` con le `--ref-*`; `[data-theme="dark"]` e `[data-theme="light"]` coi ruoli `--color-*` e `color-scheme` | `git show "origin/main:gui/src/tokens/themes.css"` |
| in daemon i ruoli non di testo da 3:1 sono `border-strong`, `focus`, `mark` e `border-accent`; il radio acceso della GUI usa `--color-mark` | `git show "origin/main:gui/src/tokens/contrast.test.ts" \| grep -n 'non-text'`; `git grep -n 'color-mark' origin/main -- gui/src/components` |
| la GUI: il testo in Geist Variable, le etichette e i numeri in Barlow 300–600, importati da `gui/src/tokens/index.ts` | `git show "origin/main:gui/src/tokens/index.ts"` |
| la CI di daemon: `actions/checkout@v4`; `actions/setup-node@v7` con `node-version-file` e `package-manager-cache: false`; la matrice con `fail-fast: false`; `shell: bash`; nessuna azione di terzi; verde, con l'avviso che `actions/checkout@v4` gira su Node 24 per forza | `git show "origin/main:.github/workflows/quality-gate.yml"`; `gh run list -R devfrx/daemon -L 4`; `gh api repos/devfrx/daemon/check-runs/<id del giro>/annotations --jq '.[].message'` |
| sui runner di GitHub, `actions/setup-node@v7` con l'intervallo della GUI prende Node 24.21.0, con npm 11.19.0 | `gh run view -R devfrx/daemon --job <id> --log \| grep -E 'Found in cache\|node: v\|npm: '` |
| `actions/setup-node` alla `v7` è la v7.1.0, e legge `node-version-file` a partire da `GITHUB_WORKSPACE`: per la landing, `daemon/landing/package.json` | `gh api repos/actions/setup-node/releases/latest --jq .tag_name`; `gh api "repos/actions/setup-node/contents/src/main.ts?ref=v7" --jq .content \| base64 -d \| grep -n -A3 'const versionFilePath'` |
| `actions/checkout`: l'ultima è la v7.0.1, e il tag `v7` punta lì; la v4 gira su `node20`, dalla v5 in poi su `node24`; alla v4 e alla v7.0.1 `getFetchUrl` dà `https://github.com/devfrx/daemon`, e `getRefSpec` di `main` scrive `refs/remotes/origin/main` | `gh api repos/actions/checkout/releases/latest --jq .tag_name`; `gh api repos/actions/checkout/git/ref/tags/<tag> --jq .object.sha`, per `v7` e `v7.0.1`; `gh api "repos/actions/checkout/contents/action.yml?ref=<tag>" --jq .content \| base64 -d \| grep using`; `src/url-helper.ts` e `src/ref-helper.ts` ai due tag |
| un checkout svuota una cartella che non è già il suo repository | `prepareExistingDirectory` in `src/git-directory-helper.ts` di `actions/checkout`, ai tag `v4` e `v7.0.1` |
| con `pwsh`, la shell di base dei runner Windows, GitHub mette in testa allo step `$ErrorActionPreference = 'stop'` e in coda `exit $LASTEXITCODE`: lo step esce col codice d'uscita dell'ultimo comando; su Linux la shell di base è `bash -e` | https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax, *«Exit codes and error action preference»* |
| GitHub ha tolto Node 20 dai suoi runner il 2026-09-23 | https://github.blog/changelog/2025-09-19-deprecation-of-node-20-on-github-actions-runners/ |
| in `devfrx/daemon-landing` le Actions sono accese, il `GITHUB_TOKEN` è di sola lettura, il ramo predefinito è `main` | `gh api repos/devfrx/daemon-landing/actions/permissions --jq .enabled`; `gh api repos/devfrx/daemon-landing/actions/permissions/workflow --jq .default_workflow_permissions`; `gh api repos/devfrx/daemon-landing --jq .default_branch` |
| `gh` 2.101.0 ha `run list --commit` ed `--event`, `run watch --exit-status`, `run view --log` | `gh run list --help`; `gh run watch --help`; `gh run view --help` |
| il cancello della GUI: `npm ci --no-audit --no-fund`, `dist/` tolta prima della build, i due progetti di Vitest uno per volta, il Chrome installato, `npm audit` alla fine | `git show "origin/main:scripts/gate-gui.sh"` |
| Chrome 154.0.8037.98 su questa macchina | `ls "/c/Program Files/Google/Chrome/Application/"` |
| Chrome chiede `/favicon.ico` da solo, e un 404 lì è un errore in console | il passo 2 del compito 10 |
| i tag WCAG di axe-core 4.13.0 sono `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa` e `wcag22aa`; l'unica regola di `wcag22aa` è `target-size` | `gh api "repos/dequelabs/axe-core/contents/doc/API.md?ref=v4.13.0" --jq .content \| base64 -d \| grep -n 'wcag2'`; `node -e "console.log(require('axe-core').getRules(['wcag22aa']).map((rule) => rule.ruleId))"`, dalla landing |
| Vitest 4.1.11 lancia i file di un progetto insieme, fino a un processore meno uno; `fileParallelism: false` in un progetto li mette in fila, dopo gli altri progetti; `--fileParallelism` da riga di comando lo scavalca | `resolveMaxWorkers` e `groupSpecs` in `node_modules/vitest/dist/chunks/cli-api.*.js`; il passo 2 del compito 11 |
| `Network.emulateNetworkConditions` è deprecato, a favore di `Network.emulateNetworkConditionsByRule` e `Network.overrideNetworkState`, sperimentali; Lighthouse e Puppeteer usano il primo, e Playwright 1.63.0 per `setOffline`; DevTools il secondo | `gh api "repos/ChromeDevTools/devtools-protocol/contents/pdl/domains/Network.pdl" --jq .content \| base64 -d \| grep -n -B2 'command emulateNetworkConditions'`; `grep -n 'Network\.'` su `core/lib/emulation.js` di `GoogleChrome/lighthouse` e su `packages/puppeteer-core/src/cdp/NetworkManager.ts` di `puppeteer/puppeteer`; `gh api "repos/microsoft/playwright/contents/packages/playwright-core/src/server/chromium/crNetworkManager.ts?ref=v1.63.0" --jq .content \| base64 -d \| grep -n 'emulateNetworkConditions'`; `gh api "search/code?q=emulateNetworkConditionsByRule+repo:ChromeDevTools/devtools-frontend" --jq '.items[].path'` |
| per la CLS, Chrome tratta un cambio della finestra come un input, per 500 ms | `gh api "repos/chromium/chromium/contents/third_party/blink/renderer/core/layout/layout_shift_tracker.cc" --jq .content \| base64 -d \| grep -n -A2 'kTimerDelay =\|NotifyViewportSizeChanged()'` |
| `web-vitals` 6.2.3: `web-vitals.iife.js` non è fra gli `exports` del pacchetto, e sta accanto a ciò che dà `require.resolve('web-vitals')` | `grep -n -A12 '"exports"' node_modules/web-vitals/package.json`, dalla landing col pacchetto |
| Astro 7.3.6 svuota `dist/` anche senza pagine; Vitest 4.1.11, di base, scrive di un test saltato solo `1 skipped`, e in un giro solo un progetto senza file è verde; Git Bash riscrive una `LANDING_BASE` che riceve dal processo padre | i passi 8 e 11 del compito 13, e la §17 del verbale |
