# La consegna della quindicesima sessione, del 2026-10-09 — il piano del traguardo 1 della landing

> 🗄️ **Che cos'è questo file.** La consegna che stava nella §6 del
> [piano del traguardo 1](../superpowers/plans/2026-10-07-landing-traguardo-1.md), qui parola per parola. È com'era nel
> commit `0b92f72`, dove è stata scritta alla chiusura della quindicesima sessione, e nessuno l'ha cambiata dopo.

> 🔶 Oggi questa sezione è la consegna della quindicesima sessione, del 2026-10-09: il compito 4 è eseguito, e il
> prossimo è il compito 5. Le consegne di prima sono in archivio, parola per parola:
> [del mattino](../../archivio/2026-10-07-consegna-piano-landing-mattina.md),
> [del pomeriggio](../../archivio/2026-10-07-consegna-piano-landing-pomeriggio.md),
> [della terza sessione](../../archivio/2026-10-07-consegna-piano-landing-terza-sessione.md),
> [della quarta](../../archivio/2026-10-07-consegna-piano-landing-quarta-sessione.md),
> [della quinta](../../archivio/2026-10-07-consegna-piano-landing-quinta-sessione.md),
> [della sesta](../../archivio/2026-10-08-consegna-piano-landing-sesta-sessione.md),
> [della settima](../../archivio/2026-10-08-consegna-piano-landing-settima-sessione.md),
> [dell'ottava](../../archivio/2026-10-08-consegna-piano-landing-ottava-sessione.md),
> [della nona](../../archivio/2026-10-08-consegna-piano-landing-nona-sessione.md),
> [della decima](../../archivio/2026-10-08-consegna-piano-landing-decima-sessione.md),
> [dell'undicesima](../../archivio/2026-10-08-consegna-piano-landing-undicesima-sessione.md),
> [della dodicesima](../../archivio/2026-10-08-consegna-piano-landing-dodicesima-sessione.md),
> [della tredicesima](../../archivio/2026-10-08-consegna-piano-landing-tredicesima-sessione.md) e
> [della quattordicesima](../../archivio/2026-10-09-consegna-piano-landing-quattordicesima-sessione.md).

**Dove siamo:**

| Parte | Stato |
|---|---|
| §1–§4 | approvate, coi richiami del 2026-10-07 e del 2026-10-08 |
| §5, compiti 1–13 | ✅ approvati: l'1–11 il 2026-10-07, il 12 e il 13 il 2026-10-08; corretti dal pre-controllo, coi richiami del 2026-10-08, e il 4 dal suo ri-controllo e dalla sua revisione, coi richiami del 2026-10-09 |
| il pre-controllo | ✅ finito: otto difetti, tutti decisi dal proprietario, tutti A, e scritti nel piano; il banco ha rifatto dal testo i compiti 1–13, e tutto torna come scritto |
| l'esecuzione | 🔶 i compiti 1–4 ✅: `t1(compito 1)` e `t1(compito 2)` il 2026-10-08, `t1(compito 3)` e `t1(compito 4)` il 2026-10-09, spinti su GitHub; i compiti 5–13 da eseguire |

Gli otto difetti, con le prove, le risposte e ciò che il banco ha visto, sono nella §18 del
[verbale delle prove](../../archivio/2026-10-07-prove-piano-landing.md); il difetto del ri-controllo del compito 4 e il
rilievo della sua revisione, nella §19. Il programma del banco,
[`2026-10-08-banco-prove-piano-landing.mjs`](../../archivio/2026-10-08-banco-prove-piano-landing.mjs), rifà dal testo i
compiti 1–13: serve di nuovo solo se un compito cambia prima di essere eseguito. Dopo le due correzioni del compito 4 non
è stato rilanciato: le prove della §19 coprono i passi dei compiti 4 e 6, e i conti dei compiti 8–13 crescono di uno per
costruzione.

**Il compito 4**, eseguito il 2026-10-09:

| | |
|---|---|
| il ri-controllo | contro la landing a `51cff86`, con le quattro domande e le regole 5–8: un difetto. I quattro test li passavano anche un `read` che rilegge `origin/main` a ogni lettura e uno che ripiega sulla cartella di lavoro: la sonda mancava. Risposta del proprietario: A, i test 2 e 4 più forti, scritti nel piano in `c4fea9d`; la storia nella §19 del verbale. Rilanciato ciò che invecchia — Node e npm della macchina, le versioni contro `gui/package.json` di daemon, gli avvisi, il file più grande di daemon —: tutto come nel piano |
| l'esecuzione | due subagenti `sonnet`, chi esegue e chi rivede (risposta del proprietario: A). Dal rapporto di chi esegue: `No packages with unreviewed install scripts.`; il rosso del passo 3, `Cannot find module './daemon'`; il verde del passo 5, `4 passed`, e `5 passed` col quinto test; il passo 6, `0 errors`, `0 warnings` e `2 page(s) built`. In più, senza tracce nel repository: i due `read` sbagliati presi ciascuno dal suo test, e `openDaemon()` senza argomenti che legge per intero il file più grande di daemon |
| la revisione | conforme e approvata: i tre file nuovi identici al piano, byte per byte, e il lockfile come richiesto. Due rilievi Important «imposti dal piano», due righe di `daemon.ts` senza un test: la cartella di daemon di base resta com'è, come nel ri-controllo; per `maxBuffer: Infinity` un quinto test, un file appena oltre 1 MiB (risposta del proprietario: A), scritto nel piano in `c850eae` e nel codice in `b2aef1a`, nel giro di correzione 1, e la sua revisione corta lo dà risolto, senza niente di nuovo rotto. Ciò che il diff non mostrava l'ha verificato il coordinatore prima del push: la build intera, `0 errors` e `0 warnings`; `npm test`; la riga di `npm ci --dry-run`, che esce uguale col lockfile del compito 3. Le note minori, nessuna da fare adesso, sono nella §19 del verbale; e una della revisione corta: il quinto test prova «oltre il limite di base», non «senza limite», e un `maxBuffer` fra 1 e 2 MiB resterebbe verde |
| il costo | chi esegue, circa 125 mila token e 9 minuti; chi rivede, circa 161 mila token e 10 minuti; nel giro di correzione, chi esegue, ripreso col suo contesto, altri 3 minuti e mezzo, circa 149 mila token contando il contesto, e la revisione corta circa 125 mila token e 5 minuti e mezzo: l'uscita dello strumento `Agent` |
| il push | il coordinatore, dopo ciascuna revisione: `253a9a2` e `b2aef1a`, gli stessi su GitHub |

**Come si esegue**: una fase per sessione (§7.1 del disegno), un compito per sessione, nell'ordine 1–13. Il coordinatore
rilegge il compito contro la landing di adesso — la regola 5 di *«Prima di eseguire un compito di un piano»*, nel
`CLAUDE.md` di daemon —, poi lo esegue con `superpowers:subagent-driven-development`: i subagenti e il loro costo
seguono la riga di quella skill nel `CLAUDE.md` di daemon. Il codice nasce dai test,
`superpowers:test-driven-development`. Il compito si chiude col suo commit, `t1(compito N): …`, e col push.

Come l'hanno fatto le sessioni dalla dodicesima alla quindicesima, e come conviene rifarlo:

- prima di eseguire un compito, il coordinatore ne prova i test in una cartella dello scratchpad — `package.json`,
  `package-lock.json` e `.npmrc` della landing, i pacchetti del compito risolti e installati, i blocchi del piano estratti
  per righe —: verdi sul codice del piano, e rossi su un codice sbagliato apposta, uno per ogni promessa del compito. Così
  il ri-controllo della quindicesima sessione ha trovato i due test del compito 4 che non vedevano niente (§19 del
  verbale);
- prima di mandare i subagenti, il costo al proprietario e il suo sì: più di un subagente lo chiede il `CLAUDE.md` di
  daemon, e il sì vale per il compito per cui è dato;
- il lavoro dei subagenti — il fascicolo del compito, il rapporto, il pacchetto della revisione, il registro — sta nello
  scratchpad della sessione, non nella landing: `sdd-workspace` della skill scriverebbe `.superpowers/sdd/` dentro il
  repository, e `review-package` lo stesso, se non riceve come quarto argomento il file da scrivere;
- il fascicolo si estrae per righe, perché `task-brief` della skill cerca un titolo «Task N» e qui i titoli dicono
  «Compito N». Dentro: il compito, la §2.3, la tabella *«Come si leggono»* della §5, la sezione del disegno che il
  compito realizza e, in fondo, le note del coordinatore: ciò che il piano lascia al momento, come la cartella delle
  prove a mano o il valore di un «Atteso» che si conosce solo quel giorno;
- il pacchetto della revisione porta il diff intero dei file che il compito scrive; dei file che copia — le copie del
  kit, nel compito 2 — soltanto il `--stat`, perché di loro conta l'identità, e chi rivede la prova con `cmp`; di
  `package-lock.json`, che lo scrive npm, il `--stat` e un riassunto — la radice, le versioni dei pacchetti del compito,
  quelli con uno script d'installazione —, letto da `git show <commit>:package-lock.json`: per intero riempirebbe il
  contesto di chi rivede;
- ciò che chi rivede segna come «non verificabile dal diff» lo chiude il coordinatore prima del push, con un comando
  suo: nel compito 3, la build intera e il lockfile;
- chi esegue fa i passi fino al commit; il push lo fa il coordinatore, dopo una revisione pulita: un commit va su GitHub
  solo dopo essere stato rivisto;
- il dispaccio dice in chiaro «senza co-autore»: un subagente può aggiungere da sé una riga `Co-Authored-By`.

**Il prossimo passo**, in una sessione nuova — il compito 5, i testi e i loro schemi:

1. dentro `landing/`: `git fetch --all --prune`, `git status -sb`, e il fast-forward se serve;
2. leggi `CLAUDE.md`, questo piano e il disegno, per intero;
3. le skill: `anthropic-skills:decision-principles`, `anthropic-skills:dev-discipline`,
   `anthropic-skills:dev-communication`, `superpowers:subagent-driven-development` e
   `superpowers:test-driven-development`;
4. rileggi il compito 5 contro la landing di adesso, con le quattro domande e le regole 5–8 di *«Prima di eseguire un
   compito di un piano»*, e provane i test nello scratchpad, anche contro un codice sbagliato apposta; prima rilancia ciò
   che invecchia, coi comandi della tabella qui sotto. Il compito 5 non installa pacchetti: Zod arriva da `astro/zod`. Il
   suo passo 7 lo fa il coordinatore, e sta prima del commit: l'inglese riletto da un subagente nuovo, `model: "opus"`, e
   ogni «da cambiare» va al proprietario, in A/B, prima di toccare una frase;
5. di' al proprietario il costo dei subagenti — chi esegue, chi rivede e chi rilegge l'inglese —, e aspetta il sì; poi
   eseguilo come dice *«Come si esegue»*: il suo commit, `t1(compito 5): …`, e il push dopo la revisione;
6. alla chiusura, la consegna qui, con questa in archivio; commit e push. La sessione dopo esegue il compito 6.

**Da sapere subito:**

- ⚠️ daemon si muove mentre si lavora: un commit di daemon non si scrive mai come vero, si rilancia
  `git -C .. rev-parse --short origin/main`. Alla chiusura della quindicesima sessione era ancora `34cf745`, come alla
  quattordicesima. Fra `b95c5cc` e `34cf745` sono cambiati la CI di daemon, `scripts/gate-gui.sh` e alcuni file di
  `gui/src/tokens/`, non le cinque fonti, `gui/package.json` né `themes.css`:
  `git diff --stat b95c5cc origin/main -- gui/package.json gui/src/tokens scripts/gate-gui.sh .github`.
  `scripts/gate-gui.sh` lo rilegge il ri-controllo del compito 13, che ne copia i passi;
- ⚠️ **questa macchina è corta di memoria**: 16 GB, e alla chiusura di questa sessione ne era libero circa 0,7. La memoria
  del momento: `powershell -NoProfile -Command "Get-CimInstance Win32_OperatingSystem | Select-Object FreePhysicalMemory,
  TotalVisibleMemorySize, FreeVirtualMemory, TotalVirtualMemorySize"`;
- ⚠️ dopo il giorno del piano sono uscite `astro` 7.3.7 e 7.3.8, e `playwright` 1.64.0: il piano resta alla 7.3.6 e alla
  1.63.0, per la regola della §2.1 — Playwright segue la GUI di daemon, e una versione nuova si prende con un atto
  apposta. Le note della 7.3.8 dicono che Astro non dipende più direttamente da `esbuild`: il giorno che la landing la
  prende, `allowScripts` va riguardato, perché lo script da spegnere potrebbe non arrivare più;
- ⚠️ GitHub sposta `ubuntu-latest` su Ubuntu 26 dal 2026-10-19, dice un avviso nel giro di daemon: la CI della landing
  gira per la prima volta al compito 13, forse già lì;
- dal compito 3 la landing ha `node_modules/`, `dist/` e `.astro/`, che il `.gitignore` tiene fuori da Git:
  `git status --short --ignored` li mostra con `!!`;
- col `.gitattributes`, una copia nuova della landing ha ogni file di testo LF. La metà dei binari non ha ancora un
  caso vero: nessun file della landing è binario, e i file di `brand/` e del compito 3 sono testo, `i/lf w/lf`. Quando
  arriva il primo binario — le foto delle scene, col traguardo 2 — `git ls-files --eol` deve dirlo `i/-text`;
- ⚠️ **Git scrive fra virgolette, in ottale, i nomi non ASCII**: la splash esce come
  `"brand/daemon \342\200\224 splash.html"`, e un conto per percorso sull'uscita di Git, come `grep '^brand/'`, la mette
  fuori da `brand/`. È successo nella verifica prima del push del compito 2. Per contare per percorso:
  `git -c core.quotepath=false …`, oppure `-z`;
- il banco: i comandi in testa al suo programma, poi `node bench.mjs <il piano> <la landing del banco> <la cartella dei
  log> 1 2 … 13`. Il programma legge il piano con qualunque a-capo, e innesta un frammento nel blocco che segue le sue
  parole; il compito 13 lancia il cancello cinque volte. `report.txt` mostra le prime 60 righe utili di ogni comando, e
  i conti del cancello si leggono nel log del comando;
- `npm ci --dry-run` scrive `change esbuild 0.28.2 => 0.28.2` e `changed 1 package` anche col lockfile del compito 3: è
  il modo di npm 11.17.0 con lo script di `esbuild` spento, e `npm ci` installa senza errori. Conta per il cancello del
  compito 13, che usa `npm ci`;
- `openDaemon()` senza argomenti apre la cartella sopra quella da cui si lancia: nessun test del compito 4 lo prova, e il
  primo è il controllo delle fonti del compito 6 (§19 del verbale);
- i test di `daemon.ts` costruiscono repository con `git` e non tolgono le variabili `GIT_*`: lanciati da un hook di Git
  agirebbero sul repository che li lancia. Oggi nessun hook li lancia (§19 del verbale);
- `landing.browser`, nell'interfaccia `Landing` dei compiti 8, 9 e 11, non lo usa nessun compito: segnalato qui, non
  toccato;
- su questa macchina daemon sta su `main`. `daemon_kit/` non è nascosta a daemon, `/landing/` sì:
  `git -C .. check-ignore -v daemon_kit landing/CLAUDE.md`. Il `.gitignore` di daemon non ha ancora la riga `landing/`,
  ed è lavoro di daemon. La §7.2 del disegno dice ancora che su questa macchina daemon ignora il kit con
  `.git/info/exclude`: oggi non è vero, e la copia non ne dipende, perché il kit resta fuori da ogni repository. La frase
  si corregge col suo richiamo datato quando lo decide il proprietario: è una voce aperta;
- Vitest 4 non mostra la console dei test verdi: per vedere i valori di una misura, `--reporter=verbose --silent=false`;
- in Git Bash, con `MSYS_NO_PATHCONV=1`, un percorso `/c/…` o `/tmp/…` passato a Node o a `git` non viene tradotto: si
  passa `cygpath -w`, o si toglie il flag in una subshell. `git init` lo legge come `C:\tmp\…`;
- Git Bash a volte non riesce a creare un processo, *«fork: retry: Resource temporarily unavailable»*: è l'ambiente, e si
  rilancia il passo;
- su Windows `chrome.exe --version` apre il browser invece di scrivere la versione: la versione si legge dal nome della
  cartella, `ls "/c/Program Files/Google/Chrome/Application/"`.

**Verificato fra il 2026-10-07 e il 2026-10-09, dalla sesta alla quindicesima sessione.** Si rilancia, non si crede. I
comandi `git` dalla radice di daemon, in Git Bash, dopo `export MSYS_NO_PATHCONV=1`, dove non è detto altro.

| Fatto | Comando o fonte |
|---|---|
| le versioni della §2.1, e `web-vitals` 6.2.3; dopo il giorno del piano `astro` 7.3.7, del 2026-10-07 alle 21:37 UTC, e 7.3.8, del 2026-10-08 alle 15:41 UTC, e `playwright` 1.64.0, ancora le ultime alla chiusura della quindicesima sessione; le ultime `vitest` e `@types/node` sono la 5.0.3 e la 26.6.4, e la GUI resta alla 4.1.11 e alla 24.13.5; Node 24.19.0 e npm 11.17.0 su questa macchina | `npm view <pacchetto> version license`; `npm view <pacchetto> time`; `git show "origin/main:gui/package.json"`; `node --version`; `npm --version` |
| `origin/main` di daemon era `34cf745` alla chiusura della quindicesima sessione, uguale a GitHub; l'audit c'è, col segno «(col N)» | `git rev-parse --short origin/main`; `git ls-remote origin refs/heads/main`; `git merge-base --is-ancestor origin/repo-audit/20260930-1510 origin/main`; `git show "origin/main:docs/README.md" \| grep -c 'col N'` |
| le cinque citazioni della §3.4 si trovano, e fra `fc43188` e `34cf745` nessuna delle cinque fonti è cambiata | per ciascuna: `git show "origin/main:<fonte>" \| tr -d '\r' \| tr '\n' ' ' \| tr -s ' ' \| grep -cF -- '<citazione>'`; `git diff --stat fc43188 origin/main -- <le cinque fonti>` |
| fra `973153f` e `34cf745` non cambiano né il manifesto della GUI né `themes.css`; fra `b95c5cc` e `34cf745` cambiano altri file dei token, il cancello della GUI e la CI (*«Da sapere subito»*) | `git diff --stat 973153f origin/main -- gui/package.json gui/src/tokens/themes.css`; `git diff --stat b95c5cc origin/main -- gui/src/tokens scripts/gate-gui.sh .github` |
| `themes.css` di daemon: `:root` con le `--ref-*`; `[data-theme="dark"]` e `[data-theme="light"]` coi ruoli `--color-*` e `color-scheme` | `git show "origin/main:gui/src/tokens/themes.css"` |
| in daemon i ruoli non di testo da 3:1 sono `border-strong`, `focus`, `mark` e `border-accent`; il radio acceso della GUI usa `--color-mark` | `git show "origin/main:gui/src/tokens/contrast.test.ts" \| grep -n 'non-text'`; `git grep -n 'color-mark' origin/main -- gui/src/components` |
| la GUI: il testo in Geist Variable, le etichette e i numeri in Barlow 300–600, importati da `gui/src/tokens/index.ts` | `git show "origin/main:gui/src/tokens/index.ts"` |
| la CI di daemon: `actions/checkout@v4`; `actions/setup-node@v7` con `node-version-file` e `package-manager-cache: false`; la matrice con `fail-fast: false`; `shell: bash`; nessuna azione di terzi; verde, con l'avviso che `actions/checkout@v4` gira su Node 24 per forza; a `34cf745` le stesse righe | `git show "origin/main:.github/workflows/quality-gate.yml"`; `gh run list -R devfrx/daemon -L 4`; `gh api repos/devfrx/daemon/check-runs/<id del giro>/annotations --jq '.[].message'` |
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
| Chrome chiede `/favicon.ico` da solo, e un 404 lì è un errore in console | il passo 1 del compito 10 |
| i tag WCAG di axe-core 4.13.0 sono `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa` e `wcag22aa`; l'unica regola di `wcag22aa` è `target-size` | `gh api "repos/dequelabs/axe-core/contents/doc/API.md?ref=v4.13.0" --jq .content \| base64 -d \| grep -n 'wcag2'`; `node -e "console.log(require('axe-core').getRules(['wcag22aa']).map((rule) => rule.ruleId))"`, dalla landing |
| Vitest 4.1.11 lancia i file di un progetto insieme, fino a un processore meno uno; `fileParallelism: false` in un progetto li mette in fila, dopo gli altri progetti; `--fileParallelism` da riga di comando lo scavalca | `resolveMaxWorkers` e `groupSpecs` in `node_modules/vitest/dist/chunks/cli-api.*.js`; il passo 2 del compito 11 |
| `Network.emulateNetworkConditions` è deprecato, a favore di `Network.emulateNetworkConditionsByRule` e `Network.overrideNetworkState`, sperimentali; Lighthouse e Puppeteer usano il primo, e Playwright 1.63.0 per `setOffline`; DevTools il secondo | `gh api "repos/ChromeDevTools/devtools-protocol/contents/pdl/domains/Network.pdl" --jq .content \| base64 -d \| grep -n -B2 'command emulateNetworkConditions'`; `grep -n 'Network\.'` su `core/lib/emulation.js` di `GoogleChrome/lighthouse` e su `packages/puppeteer-core/src/cdp/NetworkManager.ts` di `puppeteer/puppeteer`; `gh api "repos/microsoft/playwright/contents/packages/playwright-core/src/server/chromium/crNetworkManager.ts?ref=v1.63.0" --jq .content \| base64 -d \| grep -n 'emulateNetworkConditions'`; `gh api "search/code?q=emulateNetworkConditionsByRule+repo:ChromeDevTools/devtools-frontend" --jq '.items[].path'` |
| per la CLS, Chrome tratta un cambio della finestra come un input, per 500 ms | `gh api "repos/chromium/chromium/contents/third_party/blink/renderer/core/layout/layout_shift_tracker.cc" --jq .content \| base64 -d \| grep -n -A2 'kTimerDelay =\|NotifyViewportSizeChanged()'` |
| `web-vitals` 6.2.3: `web-vitals.iife.js` non è fra gli `exports` del pacchetto, e sta accanto a ciò che dà `require.resolve('web-vitals')` | `grep -n -A12 '"exports"' node_modules/web-vitals/package.json`, dalla landing col pacchetto |
| Astro 7.3.6 svuota `dist/` anche senza pagine; Vitest 4.1.11, di base, scrive di un test saltato solo `1 skipped`, e in un giro solo un progetto senza file è verde; Git Bash riscrive una `LANDING_BASE` che riceve dal processo padre | i passi 8 e 11 del compito 13, e la §17 del verbale |
| l'insieme dei pacchetti della §2.1, alle versioni esatte e risolto il 2026-10-09, non ha vulnerabilità note; `astro` 7.3.7 e 7.3.8 correggono soltanto errori, e contro la 7.3.6 non c'è nessun avviso | `npm install --package-lock-only --ignore-scripts` e `npm audit`, in una cartella fuori dal repository; `gh api "/advisories?ecosystem=npm&affects=astro@7.3.6"`; le note delle due versioni, `gh api "repos/withastro/astro/releases?per_page=40"` |
| con `engine-strict=true` in `.npmrc`, npm rifiuta un progetto il cui `engines.node` esclude il Node della macchina: `EBADENGINE`, e l'uscita è 1; senza, soltanto un avviso, e l'uscita è 0 | in una cartella di prova fuori dal repository: un `package.json` con `engines.node` a `>=99.0.0`, poi `npm install --package-lock-only --ignore-scripts`, con e senza `.npmrc` |
| il lockfile del compito 4: ogni voce viene dal registro di npm, con la sua `integrity`; uno script d'installazione soltanto in `esbuild` 0.28.2, spento, e in `fsevents` 2.3.3, opzionale e solo per macOS; rispetto al compito 3 ci sono voci in più, e nessuna cambiata | dalla landing: `node -e` su `package-lock.json`, coi campi `resolved`, `integrity` e `hasInstallScript` delle voci; per il confronto, `git show <commit>:package-lock.json` a `8eabe5e` e a `253a9a2` |
| il file più grande di daemon supera 1 MiB, il limite di `execFileSync` che il commento di `daemon.ts` nomina | `git ls-tree -r -l origin/main \| sort -k4 -n \| tail -1` |
| `npm ci --dry-run` scrive `change esbuild 0.28.2 => 0.28.2` anche col lockfile del compito 3 | in una cartella dello scratchpad, coi tre file di `8eabe5e` — `package.json`, `package-lock.json` e `.npmrc` —: `npm ci`, poi `npm ci --dry-run` |
| cspell, di base, salta le parole sotto le quattro lettere; con `minWordLength: 2` le guarda, e una lettera sola la accetta sempre; il dizionario italiano conosce «download» | il programma della §18 del verbale delle prove |
| la GUI di daemon vieta il testo scritto nei componenti col linter, `@intlify/vue-i18n/no-raw-text`; `eslint-plugin-astro` 3.2.1 una regola così non ce l'ha | `git show "origin/main:gui/eslint.config.js"`; `gh api "repos/ota-meshi/eslint-plugin-astro/contents/docs/rules" --jq '.[].name'` |
| con `* text=auto eol=lf`, e `core.autocrlf=true` dalla configurazione di sistema di Git, un file con un byte NUL resta com'è in un clone, `i/-text`; con `* text eol=lf` cambia | in una cartella di prova fuori dal repository, senza `MSYS_NO_PATHCONV`: `git init`, il `.gitattributes`, `printf 'a\r\nb\0c\r\n' > probe.bin`, `git add -A`, il commit, `git clone`, poi `git ls-files --eol` nel clone e `cmp` fra le due copie; `git config --show-origin --get-all core.autocrlf` |
| il kit: 16 SVG, 2 HTML, 8 PNG e un MP4, nessuna sottocartella; gli SVG e gli HTML vanno a capo alla Linux, e `GEOMETRY-START` sta una volta, nella splash | dalla landing: `ls ../daemon_kit/`; `find ../daemon_kit -mindepth 1 -type d`; il passo 1 del compito 2 |
| le 18 copie di `brand/` sono identiche al kit, una per una | dalla landing, senza `MSYS_NO_PATHCONV`: `for f in brand/*.svg brand/*.html; do cmp "$f" "../daemon_kit/${f#brand/}"; done`, che non scrive niente; poi il controllo del compito 13 |
| Git scrive fra virgolette, in ottale, i nomi non ASCII; con `core.quotepath=false` li scrive come sono | dalla landing: `git ls-files brand \| grep splash`; `git -c core.quotepath=false ls-files brand \| grep splash` |
| `superpowers:subagent-driven-development` 6.3.0: `task-brief` cerca un titolo «Task N»; `sdd-workspace` scrive `.superpowers/sdd/` nella cartella di lavoro del repository, e `review-package` lo stesso, se non riceve il file come quarto argomento | `scripts/task-brief`, `scripts/sdd-workspace` e `scripts/review-package`, nella cartella della skill |
