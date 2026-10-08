# La consegna dell'ottava sessione, del 2026-10-08 — il piano del traguardo 1 della landing

> 🗄️ **Che cos'è questo file.** La consegna che stava nella §6 del
> [piano del traguardo 1](../superpowers/plans/2026-10-07-landing-traguardo-1.md), qui parola per parola. È com'era nel
> commit `ad502cb`: scritta alla chiusura dell'ottava sessione, nel commit `5251352`; nella sessione dopo, i passi 4 e 5
> spuntati e la tabella in fondo rilanciata.

> 🔶 Oggi questa sezione è la consegna dell'ottava sessione, del 2026-10-08: il piano è scritto per intero, e il compito
> 13 aspetta il sì del proprietario. Dopo il sì, qui ci sarà come si esegue, e questa consegna andrà in archivio. Le
> consegne di prima sono in archivio, parola per parola:
> [del mattino](../../archivio/2026-10-07-consegna-piano-landing-mattina.md),
> [del pomeriggio](../../archivio/2026-10-07-consegna-piano-landing-pomeriggio.md),
> [della terza sessione](../../archivio/2026-10-07-consegna-piano-landing-terza-sessione.md),
> [della quarta](../../archivio/2026-10-07-consegna-piano-landing-quarta-sessione.md),
> [della quinta](../../archivio/2026-10-07-consegna-piano-landing-quinta-sessione.md),
> [della sesta](../../archivio/2026-10-08-consegna-piano-landing-sesta-sessione.md) e
> [della settima](../../archivio/2026-10-08-consegna-piano-landing-settima-sessione.md).

**Dove siamo:**

| Parte | Stato |
|---|---|
| §1–§4 | approvate, coi richiami del 2026-10-07 |
| §5, compiti 1–12 | ✅ approvati; rifatti dal testo nell'ottava sessione, con daemon a `ca2a0d4`: tutto come scritto |
| §5, compito 13 | ✅ approvato il 2026-10-08, com'è: in CI la shell del runner, e `actions/checkout@v7` (risposte: A e A) |

La storia delle prove è nel [verbale](../../archivio/2026-10-07-prove-piano-landing.md), §17. Il programma del banco,
[`2026-10-08-banco-prove-piano-landing.mjs`](../../archivio/2026-10-08-banco-prove-piano-landing.mjs), porta ora anche il
compito 13.

**Il prossimo passo**, in una sessione nuova:

1. dentro `landing/`: `git fetch --all --prune`, `git status -sb`, e il fast-forward se serve;
2. leggi `CLAUDE.md`, questo piano e il disegno, per intero;
3. le skill: `superpowers:writing-plans`, `anthropic-skills:decision-principles`, `anthropic-skills:dev-communication`;
4. ✅ rilancia ciò che invecchia, coi comandi della tabella in fondo — fatto nella sessione dopo, con daemon a
   `8e88ae1`: tutto come nella tabella; e in più, che con `pwsh` lo step esce col codice del cancello, e che anche la
   v7.0.1 di `actions/checkout` svuota una cartella che non è il suo repository;
5. ✅ presenta il compito 13 al proprietario: che cosa fa, e che cosa le prove hanno cambiato rispetto all'abbozzo — la
   tabella qui sotto —; poi la prima domanda, e solo dopo la sua risposta la seconda. Le risposte vanno nelle due righe ⏳
   del compito. Se una risposta è B, il compito cambia: si rifà dal testo sul banco, dopo i compiti 1–12 che ne sono la
   base. Commit e push — fatto nella sessione dopo (risposte: A e A);
6. la §6 definitiva, cioè come si esegue; lo stato in testa; questa consegna in archivio; commit e push.

**Che cosa le prove hanno cambiato**, rispetto all'abbozzo della settima sessione:

| L'abbozzo | Le prove | Nel compito |
|---|---|---|
| con `src/pages/` tolta, senza `dist/` tolta i controlli leggerebbero la build vecchia | falso per Astro 7.3.6, che svuota da solo la cartella in cui scrive. La riga del cancello resta per una build che scrive altrove: senza, il cancello è verde su una build così | il secondo difetto del passo 8 è `outDir: 'elsewhere'` |
| in CI Vitest scrive il test del kit come saltato | di base Vitest 4.1.11 scrive soltanto `1 skipped`, e non dice quale | il passo `checks` con `--reporter=verbose`: il test saltato ha il suo nome, con `↓` |
| la shell della CI: Git Bash riscriverebbe `LANDING_BASE`, dedotto | visto su questa macchina, anche quando la variabile arriva dal processo padre, come la dà il runner; con `MSYS_NO_PATHCONV=1` no | la prima domanda |
| `actions/checkout@v4`, come daemon | la v4 gira su Node 20, che GitHub ha tolto dai suoi runner il 2026-09-23: ora la forza su Node 24, con un avviso a ogni giro di daemon | la seconda domanda |
| `git` in una subshell senza `MSYS_NO_PATHCONV`, dedotto | col flag, `git init` della cartella di `mktemp -d` la crea in `C:\tmp\` | il passo 11 |

**Le due domande**, una per volta:

1. **La shell del passo che lancia il cancello, in CI.**
   - **A** — quella del runner: `pwsh` su Windows, `bash` su Linux. Il cancello è Node, e la shell non conta; nessuna riga
     in più. Costo: la CI della landing scrive una cosa diversa da quella di daemon.
   - **B** — `shell: bash`, come daemon, con `MSYS_NO_PATHCONV: 1` in `env:`, perché Git Bash riscriverebbe
     `LANDING_BASE`. Costo: due righe, per un problema che c'è solo con bash.
   - Il consiglio: A. La landing ha un cancello in Node proprio per non dipendere da `bash` (§4, la prima scelta).
2. **La versione di `actions/checkout`.**
   - **A** — la v7, l'ultima: gira su Node 24, senza avvisi, e per la landing fa ciò che fa la v4 — lo stesso `origin`,
     lo stesso `origin/main`. Costo: una versione diversa da daemon.
   - **B** — la v4, come daemon: va oggi, ma a ogni giro GitHub avvisa che la forza su Node 24, e chiede di aggiornare.
     Costo: un avviso a ogni giro, su una versione che GitHub tiene in vita a forza.
   - Il consiglio: A. La CI di daemon ha lo stesso avviso: aggiornarla è lavoro di una sessione di daemon.

**Da sapere subito:**

- ⚠️ daemon si muove mentre si lavora: in questa sessione `origin/main` è passato da `a27ea6a` a `ca2a0d4`, due commit di
  documenti dell'audit che non toccano né le cinque fonti né la GUI. Un commit di daemon non si scrive mai come vero: si
  rilancia `git -C .. rev-parse --short origin/main`;
- ⚠️ **questa macchina è corta di memoria**: 16 GB, e in questa sessione 1,6 GB liberi. La memoria del momento:
  `powershell -NoProfile -Command "Get-CimInstance Win32_OperatingSystem | Select-Object FreePhysicalMemory,
  TotalVisibleMemorySize, FreeVirtualMemory, TotalVirtualMemorySize"`;
- ⚠️ dopo il giorno del piano sono uscite `astro` 7.3.7 e `playwright` 1.64.0: il piano resta alla 7.3.6 e alla 1.63.0,
  per la regola della §2.1 — Playwright segue la GUI di daemon, e una versione nuova si prende con un atto apposta;
- ⚠️ GitHub sposta `ubuntu-latest` su Ubuntu 26 dal 2026-10-19, dice un avviso nel giro di daemon: la CI della landing
  gira per la prima volta all'esecuzione del compito 13, forse già lì;
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
