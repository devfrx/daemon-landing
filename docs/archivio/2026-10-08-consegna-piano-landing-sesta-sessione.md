# La consegna della sesta sessione, del 2026-10-07 e del 2026-10-08 — il piano del traguardo 1 della landing

> 🗄️ **Che cos'è questo file.** La consegna che stava nella §6 del
> [piano del traguardo 1](../superpowers/plans/2026-10-07-landing-traguardo-1.md), qui parola per parola. È com'era nel
> commit `c920e62`: scritta alla chiusura della sesta sessione, nel commit `3cad36e`, coi passi 4 e 5 spuntati nella
> sessione dopo.

> 🔶 Oggi questa sezione è la consegna della sesta sessione, del 2026-10-07 e del 2026-10-08: il piano è a metà. A piano
> finito, qui ci sarà come si esegue, e questa consegna andrà in archivio. Le consegne di prima sono in archivio, parola
> per parola: [del mattino](../../archivio/2026-10-07-consegna-piano-landing-mattina.md),
> [del pomeriggio](../../archivio/2026-10-07-consegna-piano-landing-pomeriggio.md),
> [della terza sessione](../../archivio/2026-10-07-consegna-piano-landing-terza-sessione.md),
> [della quarta](../../archivio/2026-10-07-consegna-piano-landing-quarta-sessione.md) e
> [della quinta](../../archivio/2026-10-07-consegna-piano-landing-quinta-sessione.md).

**Dove siamo:**

| Parte | Stato |
|---|---|
| §1–§4 | approvate, coi richiami del 2026-10-07 |
| §5, compiti 1–11 | ✅ approvati; rifatti dal testo nella sesta sessione, con daemon a `82d121d`: tutto come scritto |
| §5, compito 12 | ✅ approvato il 2026-10-08, com'è: col comando deprecato della rete, `Network.emulateNetworkConditions` (risposta: A) |
| §5, compito 13 | da scrivere |

Il codice dei compiti si prova prima di scriverlo (risposta del proprietario: A). La storia delle prove è nel
[verbale](../../archivio/2026-10-07-prove-piano-landing.md), §15; lo scratchpad delle prove è stato cancellato.

**Il prossimo passo**, in una sessione nuova:

1. dentro `landing/`: `git fetch --all --prune`, `git status -sb`, e il fast-forward se serve;
2. leggi `CLAUDE.md`, questo piano e il disegno, per intero;
3. le skill: `superpowers:writing-plans`, `anthropic-skills:decision-principles`, `anthropic-skills:dev-communication`,
   `anthropic-skills:frontend-craft`;
4. ✅ rilancia ciò che invecchia, coi comandi della tabella in fondo — fatto nella sessione dopo, con daemon a
   `a27ea6a`: tutto come nella tabella, e in più Playwright, che usa anche lui il comando deprecato della rete;
5. ✅ presenta al proprietario il compito 12, con le scelte della tabella qui sotto, e chiedi il sì: A, com'è adesso, col
   comando deprecato della rete; B, col comando nuovo, `Network.emulateNetworkConditionsByRule` — e allora il compito si
   corregge e si rifà dal testo. Commit e push — fatto nella sessione dopo (risposta: A);
6. scrivi il compito 13, provato prima nello scratchpad dal testo del piano — col banco della §15 del verbale, e i compiti
   1–12 che ne sono la base; a mano i passi del checkout della CI —, e presentalo;
7. la §6 definitiva, cioè come si esegue; lo stato in testa; questa consegna in archivio; commit e push.

**Le scelte del compito 12**, da dire al proprietario quando lo presenti:

| Scelta | Il perché, o il costo |
|---|---|
| la rete con `Network.emulateNetworkConditions`, deprecato, e non col sostituto, `Network.emulateNetworkConditionsByRule`, sperimentale | è il comando di Lighthouse e di Puppeteer, e il profilo viene da Lighthouse; DevTools usa il nuovo. Su Chrome 154 danno le stesse misure. Costo: il giorno che Chrome lo toglie, il controllo è rosso con un errore del protocollo, e si riscrive; col nuovo, il rischio è un comando sperimentale che cambia senza avviso |
| `web-vitals` con `page.addInitScript` | entra prima della pagina, e non passa dalla rete |
| la guardia del profilo: `responseEnd` oltre i 562,5 ms dell'attesa | col profilo 650–670 ms, senza qualche decina di millisecondi (§15 del verbale). Costo: il processore non ha guardia |
| prima di toccare la pagina, `networkidle` | uno spostamento nei 500 ms dopo un input non conta: cliccando appena arrivava l'LCP, il controllo a volte cliccava 100 ms dopo il primo disegno, e avrebbe nascosto gli spostamenti del caricamento. Playwright sconsiglia `networkidle` nei test; qui è una misura, su una pagina che non interroga la rete. Costo: circa 1 s per lingua |
| la CLS col telefono | Chrome non conta gli spostamenti nei 500 ms dopo che la pagina applica il suo `<meta name="viewport">`, e sulla pagina del traguardo 1 coprono il primo disegno: il difetto del passo 3 sposta la pagina al `load`. Costo: il controllo non vede uno spostamento in quella finestra |
| una misura per lingua, quattro sonde — la guardia, l'LCP, la CLS, l'INP —, ciascuna col suo rosso nel passo 3 | i tre difetti della pagina in un giro solo, come i quattro del compito 11; la guardia in un giro suo |

**Già visto, per il compito 13:**

| Che cosa si sa già | Nel verbale |
|---|---|
| in CI, `actions/checkout` con `ref: main` lascia `origin/main` nel clone di daemon, e `origin` è `https://github.com/devfrx/daemon`, senza `.git`: `originIsGitHub` lo accetta. Prima daemon, poi la landing dentro, con `path: daemon/landing`: nell'ordine opposto il primo checkout pulirebbe via il secondo. daemon usa la v4, e l'ultima è la v7.0.1: si segue daemon e si segnala la differenza | §6, §14 |
| l'evento `schedule` gira sull'ultimo commit del ramo predefinito, può tardare all'inizio dell'ora, e in un repository pubblico si spegne dopo 60 giorni senza attività: un costo da dichiarare | §14 |
| la verifica delle impronte di `brand/` è già scritta, come prova a mano, nel passo 2 del compito 2: `src/lib/brand.ts` ne è la versione che resta — la nota contro le copie sempre, e contro il kit dove c'è; dove il kit non c'è, il suo test si salta, ed è così che il cancello «lo scrive». Nel kit vero non si mette mai un difetto, perché `daemon_kit/` resta com'è (§7.2 del disegno): il rosso del kit lo prova il test di `brand.ts`, su un kit di prova | — |
| il cancello, nell'ordine di `scripts/gate-gui.sh`: `npm ci`, `dist/` tolta, la build con `LANDING_SITE` e `LANDING_BASE`, i progetti `checks` e `page` uno per volta, `npm audit` alla fine; si ferma al primo rosso. Da Node, `npm` si lancia con `shell: true` e il comando in una stringa sola: con una lista di argomenti Node 24 avvisa, `DEP0190` | §15 |
| i permessi del `GITHUB_TOKEN` sono già di sola lettura, nei due repository: un blocco `permissions` non serve, e daemon non lo scrive | §15 |

**Ancora da provare**, scrivendo il compito 13: `src/lib/brand.ts` e il suo controllo; `scripts/gate.mjs`; la CI, con la
landing dentro la copia di daemon — a mano coi passi del checkout, e su GitHub solo quando il compito 13 si esegue —; e
l'indirizzo con cui la CI costruisce la pagina, che finché il proprietario non decide dove si pubblica è quello di prova
(§7.5 del disegno).

**Da sapere subito:**

- ⚠️ daemon si muove mentre si lavora: in questa sessione `origin/main` è passato da `82d121d` a `a27ea6a`, per la
  sessione del lean-docs della R5: documenti, non le cinque fonti della §3.4 né la GUI. Un commit di daemon non si scrive
  mai come vero: si rilancia `git -C .. rev-parse --short origin/main`;
- ⚠️ **questa macchina è corta di memoria**: 16 GB, e in questa sessione 1,3–3,4 GB liberi, con altre sessioni di Claude
  al lavoro su daemon. Coi file insieme i controlli nel browser superavano le loro attese, e una misura del tempo presa
  qui non dice com'è altrove. La memoria del momento: `powershell -NoProfile -Command "Get-CimInstance
  Win32_OperatingSystem | Select-Object FreePhysicalMemory, TotalVisibleMemorySize, FreeVirtualMemory,
  TotalVirtualMemorySize"`;
- ⚠️ dopo il giorno del piano sono uscite `astro` 7.3.7 e `playwright` 1.64.0: il piano resta alla 7.3.6 e alla 1.63.0,
  per la regola della §2.1 — Playwright segue la GUI di daemon, e una versione nuova si prende con un atto apposta;
- ⚠️ il `README.md` della landing chiama «documento in corso» il disegno, e oggi è il piano. Lo stesso puntatore vive in
  `CLAUDE.md`: per la regola dei puntatori che vivono in più documenti, nel README si toglie, non si ricorregge. Da
  fare, col sì del proprietario;
- su questa macchina daemon sta su `main`, con nella cartella il lavoro di un'altra sessione: da qui non si tocca;
- `daemon_kit/` non è nascosta a daemon, `/landing/` sì: `git -C .. check-ignore -v daemon_kit landing/CLAUDE.md`. Il
  `.gitignore` di daemon non ha ancora la riga `landing/`, ed è lavoro di daemon;
- il banco è nella §15 del verbale. Il programma che prende il codice dal piano si è perso con lo scratchpad, la seconda
  volta: le sue regole sono lì, e si riscrive;
- Vitest 4 non mostra la console dei test verdi: per vedere i valori di una misura, `--reporter=verbose --silent=false`;
- in Git Bash, con `MSYS_NO_PATHCONV=1`, un percorso `/c/…` passato a Node o a `git -C` non viene tradotto, e non si
  trova: si passa `cygpath -w`;
- Git Bash a volte non riesce a creare un processo, *«fork: retry: Resource temporarily unavailable»*: è l'ambiente, e si
  rilancia il passo;
- su Windows `chrome.exe --version` apre il browser invece di scrivere la versione: la versione si legge dal nome della
  cartella, `ls "/c/Program Files/Google/Chrome/Application/"`.

**Verificato il 2026-10-07 e il 2026-10-08, nella sesta sessione.** Si rilancia, non si crede. I comandi `git` dalla
radice di daemon, in Git Bash, dopo `export MSYS_NO_PATHCONV=1`.

| Fatto | Comando o fonte |
|---|---|
| le versioni della §2.1, e `web-vitals` 6.2.3; dopo il giorno del piano `astro` 7.3.7, del 2026-10-07 alle 21:37 UTC, e `playwright` 1.64.0; Node 24.19.0 e npm 11.17.0 su questa macchina | `npm view <pacchetto> version license`; `npm view <pacchetto> time`; `git show "origin/main:gui/package.json"`; `node --version`; `npm --version` |
| `origin/main` di daemon era `a27ea6a` alla chiusura; l'audit c'è, col segno «(col N)» | `git rev-parse --short origin/main`; `git merge-base --is-ancestor origin/repo-audit/20260930-1510 origin/main`; `git show "origin/main:docs/README.md" \| grep -c 'col N'` |
| le cinque citazioni della §3.4 si trovano, e fra `fc43188` e `a27ea6a` nessuna delle cinque fonti è cambiata | per ciascuna: `git show "origin/main:<fonte>" \| tr -d '\r' \| tr '\n' ' ' \| tr -s ' ' \| grep -cF -- '<citazione>'`; `git diff --stat fc43188 origin/main -- <le cinque fonti>` |
| fra `973153f` e `a27ea6a` la GUI non è cambiata: manifesto, token, cancello, CI | `git diff --stat 973153f origin/main -- gui/package.json gui/src/tokens scripts/gate-gui.sh .github` |
| `themes.css` di daemon: `:root` con le `--ref-*`; `[data-theme="dark"]` e `[data-theme="light"]` coi ruoli `--color-*` e `color-scheme` | `git show "origin/main:gui/src/tokens/themes.css"` |
| in daemon i ruoli non di testo da 3:1 sono `border-strong`, `focus`, `mark` e `border-accent`; il radio acceso della GUI usa `--color-mark` | `git show "origin/main:gui/src/tokens/contrast.test.ts" \| grep -n 'non-text'`; `git grep -n 'color-mark' origin/main -- gui/src/components` |
| la GUI: il testo in Geist Variable, le etichette e i numeri in Barlow 300–600, importati da `gui/src/tokens/index.ts` | `git show "origin/main:gui/src/tokens/index.ts"` |
| la CI di daemon: `actions/checkout@v4`; `actions/setup-node@v7` con `node-version-file` e `package-manager-cache: false`; la matrice con `fail-fast: false`; `shell: bash`; nessuna azione di terzi; verde | `git show "origin/main:.github/workflows/quality-gate.yml"`; `gh run list -R devfrx/daemon -L 4` |
| il cancello della GUI: `npm ci --no-audit --no-fund`, `dist/` tolta prima della build, i due progetti di Vitest uno per volta, il Chrome installato, `npm audit` alla fine | `git show "origin/main:scripts/gate-gui.sh"` |
| Chrome 154.0.8037.98 su questa macchina | `ls "/c/Program Files/Google/Chrome/Application/"` |
| Chrome chiede `/favicon.ico` da solo, e un 404 lì è un errore in console | il passo 2 del compito 10 |
| i tag WCAG di axe-core 4.13.0 sono `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa` e `wcag22aa`; l'unica regola di `wcag22aa` è `target-size` | `gh api "repos/dequelabs/axe-core/contents/doc/API.md?ref=v4.13.0" --jq .content \| base64 -d \| grep -n 'wcag2'`; `node -e "console.log(require('axe-core').getRules(['wcag22aa']).map((rule) => rule.ruleId))"`, dalla landing |
| Vitest 4.1.11 lancia i file di un progetto insieme, fino a un processore meno uno; `fileParallelism: false` in un progetto li mette in fila, dopo gli altri progetti; `--fileParallelism` da riga di comando lo scavalca | `resolveMaxWorkers` e `groupSpecs` in `node_modules/vitest/dist/chunks/cli-api.*.js`; il passo 2 del compito 11 |
| `Network.emulateNetworkConditions` è deprecato, a favore di `Network.emulateNetworkConditionsByRule` e `Network.overrideNetworkState`, sperimentali; Lighthouse e Puppeteer usano il primo, e Playwright 1.63.0 per `setOffline`; DevTools il secondo | `gh api "repos/ChromeDevTools/devtools-protocol/contents/pdl/domains/Network.pdl" --jq .content \| base64 -d \| grep -n -B2 'command emulateNetworkConditions'`; `grep -n 'Network\.'` su `core/lib/emulation.js` di `GoogleChrome/lighthouse` e su `packages/puppeteer-core/src/cdp/NetworkManager.ts` di `puppeteer/puppeteer`; `gh api "repos/microsoft/playwright/contents/packages/playwright-core/src/server/chromium/crNetworkManager.ts?ref=v1.63.0" --jq .content \| base64 -d \| grep -n 'emulateNetworkConditions'`; `gh api "search/code?q=emulateNetworkConditionsByRule+repo:ChromeDevTools/devtools-frontend" --jq '.items[].path'` |
| per la CLS, Chrome tratta un cambio della finestra come un input, per 500 ms | `gh api "repos/chromium/chromium/contents/third_party/blink/renderer/core/layout/layout_shift_tracker.cc" --jq .content \| base64 -d \| grep -n -A2 'kTimerDelay =\|NotifyViewportSizeChanged()'` |
| `web-vitals` 6.2.3: `web-vitals.iife.js` non è fra gli `exports` del pacchetto, e sta accanto a ciò che dà `require.resolve('web-vitals')` | `grep -n -A12 '"exports"' node_modules/web-vitals/package.json`, dalla landing col pacchetto |
