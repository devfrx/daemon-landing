# La consegna della decima sessione, del 2026-10-08 — il piano del traguardo 1 della landing

> 🗄️ **Che cos'è questo file.** La consegna che stava nella §6 del
> [piano del traguardo 1](../superpowers/plans/2026-10-07-landing-traguardo-1.md), qui parola per parola. È com'era nel
> commit `1e1abea`, dove è stata scritta alla chiusura della decima sessione. L'undicesima, scrivendo i difetti 4–8, ne
> ha aggiornato la riga del pre-controllo e il passo del compito 10 nella tabella dei fatti verificati; il resto è rimasto
> com'era fino alla sua chiusura.

> 🔶 Oggi questa sezione è la consegna della decima sessione, del 2026-10-08: il pre-controllo è a metà. Le consegne di
> prima sono in archivio, parola per parola:
> [del mattino](../../archivio/2026-10-07-consegna-piano-landing-mattina.md),
> [del pomeriggio](../../archivio/2026-10-07-consegna-piano-landing-pomeriggio.md),
> [della terza sessione](../../archivio/2026-10-07-consegna-piano-landing-terza-sessione.md),
> [della quarta](../../archivio/2026-10-07-consegna-piano-landing-quarta-sessione.md),
> [della quinta](../../archivio/2026-10-07-consegna-piano-landing-quinta-sessione.md),
> [della sesta](../../archivio/2026-10-08-consegna-piano-landing-sesta-sessione.md),
> [della settima](../../archivio/2026-10-08-consegna-piano-landing-settima-sessione.md),
> [dell'ottava](../../archivio/2026-10-08-consegna-piano-landing-ottava-sessione.md) e
> [della nona](../../archivio/2026-10-08-consegna-piano-landing-nona-sessione.md).

**Dove siamo:**

| Parte | Stato |
|---|---|
| §1–§4 | approvate, coi richiami del 2026-10-07 e del 2026-10-08 |
| §5, compiti 1–13 | ✅ approvati: l'1–11 il 2026-10-07, il 12 e il 13 il 2026-10-08 |
| il pre-controllo | 🔶 a metà: otto difetti, tutti decisi dal proprietario, tutti A. Scritti nel piano l'1, il 2 e il 3; da scrivere il 4–8, come dice la tabella qui sotto; poi il banco |
| l'esecuzione | ⏳ da cominciare: nessun compito è eseguito, e la landing ha soltanto i documenti |

Gli otto difetti, con le prove e le risposte, sono nella §18 del
[verbale delle prove](../../archivio/2026-10-07-prove-piano-landing.md). Il programma del banco,
[`2026-10-08-banco-prove-piano-landing.mjs`](../../archivio/2026-10-08-banco-prove-piano-landing.mjs), rifà dal testo i
compiti 1–13.

**Come si esegue**, finito il pre-controllo: una fase per sessione (§7.1 del disegno), un compito per sessione,
nell'ordine 1–13. Il coordinatore rilegge il compito contro la landing di adesso — la regola 5 di *«Prima di eseguire un
compito di un piano»*, nel `CLAUDE.md` di daemon —, poi lo esegue con `superpowers:subagent-driven-development`: i
subagenti e il loro costo seguono la riga di quella skill nel `CLAUDE.md` di daemon. Il codice nasce dai test,
`superpowers:test-driven-development`. Il compito si chiude col suo commit, `t1(compito N): …`, e col push.

**Il prossimo passo**, in una sessione nuova — il resto del pre-controllo:

1. dentro `landing/`: `git fetch --all --prune`, `git status -sb`, e il fast-forward se serve;
2. leggi `CLAUDE.md`, questo piano e il disegno, per intero, e la §18 del verbale delle prove;
3. le skill: `anthropic-skills:decision-principles`, `anthropic-skills:dev-discipline`, `anthropic-skills:dev-communication`
   e `superpowers:writing-plans`;
4. scrivi nel piano i difetti 4–8, come dice la tabella qui sotto, ciascuno col suo richiamo datato, che rimanda alla
   §18 del verbale; commit e push a ogni difetto;
5. rifai sul banco i compiti 1–13 dal testo: cambiano il 7, l'8, il 9, il 10 e l'11, e i conti fino al 13. Ciò che si
   vede va nella §18 del verbale; ciò che diverge dal piano va al proprietario, in A/B;
6. alla chiusura, la consegna qui, con questa in archivio; commit e push. La sessione dopo esegue il compito 1.

**I difetti da scrivere**, già decisi:

| # | Dove | Che cosa si scrive |
|---|---|---|
| 4 | il compito 7; la regola 3 della §1 e la tabella della §3.2 del disegno; il vincolo 2 della §2.3; la riga «parole vietate» del `CLAUDE.md` | «download» vietato anche in italiano: `/\bdownload\w*/i` in `FORBIDDEN_WORDS.it`, col perché nel commento — il dizionario italiano conosce la parola, e dice ciò che dice «scarica»; nel test `refuses them in every form`, `expect(forbiddenWords('il download di daemon', 'it')).toEqual(['download'])`. I conti non cambiano |
| 5 | i compiti 9–13 | in `checks/themes.page.test.ts` due test per lingua. `follows a change of the system, while the visitor has not chosen`: `page.emulateMedia({ colorScheme: 'dark' })`, poi `page.waitForFunction` sul `data-theme` — il browser lo dice alla pagina al frame dopo —, e l'interruttore acceso. `keeps the switch working where the browser refuses the storage`: nel `before`, `page.addInitScript` che ridefinisce `localStorage` con un getter che lancia una `DOMException` `SecurityError`, e `page.on('pageerror')`; un clic porta al tema scuro, senza errori. Il `before` di `open()` passa al compito 9, il primo che lo usa — la regola del confine, §1: il passo 4 del compito 9 scrive anche `checks/support/landing.ts`; il compito 10 perde il passo 1, gli altri scalano, e nel banco il suo `INLINE` diventa `{ 5: […], 7: ['git push'] }`; il compito 11 sostituisce il `landing.ts` del compito 9; l'«Usa» dei compiti 10–12 dice «compiti 8 e 9». I rossi, nel passo 7 del compito 9: l'ascolto del sistema su un evento che non esiste, e `chosen()` che rilancia l'errore. I conti nel browser salgono di 4: nel compito 9, `14 failed`, `38 passed`, `6 failed \| 8 passed`; nel 10, e nel passo 3 dell'11, `44`; alla fine dell'11, `68`; nel 12 e nel 13, `76` |
| 6 | il compito 11 | in `tabThrough` ogni controllo raggiunto dice anche `onScreen`, il suo riquadro tutto dentro la finestra. Il test dell'anello diventa `every control Tab reaches is inside the screen, and shows its ring`; quello dell'indice `the index stays on top, and brings its section below itself`, con `expect(index.y).toBe(0)`; il testo del passo 7 li chiama coi nomi nuovi. Nel passo 7, dopo il primo giro, un secondo: `page.css` senza `position: sticky` e senza la regola `.skip-link:focus`; atteso `4 failed \| 20 passed`. I conti non cambiano |
| 7 | il compito 9, e i conti fino al 13 | in `checks/tokens.test.ts` il test `the page redefines no token of daemon: the colours are daemon’s, and the page keeps no copy`: `[...own].filter((name) => declaredTokens(themes).has(name))` vuoto. Il rosso, nel passo 7, nello stesso giro degli altri: `--color-bg: #000;` in `page.css`. I conti senza browser salgono di 1: nel compito 9, `1 failed \| 4 passed`, `5 passed`, `4 failed \| 1 passed`; `71 passed` dal 9 al 12; nel 13, `81 passed`, «i 71 di prima», e `80 passed \| 1 skipped (81)` |
| 8 | la §5.4 del disegno | «se sparisce un token che la pagina usa, il cancello è rosso, col controllo dei token», col richiamo datato |

**Da sapere subito:**

- ⚠️ i difetti 1–3 sono scritti nel piano, ma il banco non li ha ancora rifatti. Del 3 è provata soltanto la funzione,
  nello scratchpad: ogni attesa del suo test torna (§18 del verbale);
- ⚠️ daemon si muove mentre si lavora: in questa sessione `origin/main` è rimasto a `8e88ae1`. Un commit di daemon non
  si scrive mai come vero: si rilancia `git -C .. rev-parse --short origin/main`;
- ⚠️ **questa macchina è corta di memoria**: 16 GB. La memoria del momento:
  `powershell -NoProfile -Command "Get-CimInstance Win32_OperatingSystem | Select-Object FreePhysicalMemory,
  TotalVisibleMemorySize, FreeVirtualMemory, TotalVirtualMemorySize"`;
- ⚠️ dopo il giorno del piano sono uscite `astro` 7.3.7 e `playwright` 1.64.0: il piano resta alla 7.3.6 e alla 1.63.0,
  per la regola della §2.1 — Playwright segue la GUI di daemon, e una versione nuova si prende con un atto apposta;
- ⚠️ GitHub sposta `ubuntu-latest` su Ubuntu 26 dal 2026-10-19, dice un avviso nel giro di daemon: la CI della landing
  gira per la prima volta al compito 13, forse già lì;
- il banco: i comandi in testa al suo programma, poi `node bench.mjs <il piano> <la landing del banco> <la cartella dei
  log> 1 2 … 13`. Il programma legge il piano con qualunque a-capo, e innesta un frammento nel blocco che segue le sue
  parole; il compito 13 lancia il cancello cinque volte. Col difetto 5 cambia il suo `INLINE` del compito 10;
- `landing.browser`, nell'interfaccia `Landing` del compito 8, non lo usa nessun compito: segnalato qui, non toccato;
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

**Verificato fra il 2026-10-07 e il 2026-10-08, dalla sesta alla decima sessione.** Si rilancia, non si crede. I comandi
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
| l'insieme dei pacchetti della §2.1, alle versioni esatte, non ha vulnerabilità note; `astro` 7.3.7 corregge soltanto errori, e contro la 7.3.6 non c'è nessun avviso | `npm install --package-lock-only --ignore-scripts` e `npm audit`, in una cartella fuori dal repository; `gh api "/advisories?ecosystem=npm&affects=astro@7.3.6"` |
| cspell, di base, salta le parole sotto le quattro lettere; con `minWordLength: 2` le guarda, e una lettera sola la accetta sempre; il dizionario italiano conosce «download» | il programma della §18 del verbale delle prove |
| la GUI di daemon vieta il testo scritto nei componenti col linter, `@intlify/vue-i18n/no-raw-text`; `eslint-plugin-astro` 3.2.1 una regola così non ce l'ha | `git show "origin/main:gui/eslint.config.js"`; `gh api "repos/ota-meshi/eslint-plugin-astro/contents/docs/rules" --jq '.[].name'` |
