# La consegna della settima sessione, del 2026-10-08 — il piano del traguardo 1 della landing

> 🗄️ **Che cos'è questo file.** La consegna che stava nella §6 del
> [piano del traguardo 1](../superpowers/plans/2026-10-07-landing-traguardo-1.md), qui parola per parola. È com'era nel
> commit `716084a`, in cui è stata scritta alla chiusura della settima sessione.

> 🔶 Oggi questa sezione è la consegna della settima sessione, del 2026-10-08: il piano è a metà. A piano finito, qui ci
> sarà come si esegue, e questa consegna andrà in archivio. Le consegne di prima sono in archivio, parola per parola:
> [del mattino](../../archivio/2026-10-07-consegna-piano-landing-mattina.md),
> [del pomeriggio](../../archivio/2026-10-07-consegna-piano-landing-pomeriggio.md),
> [della terza sessione](../../archivio/2026-10-07-consegna-piano-landing-terza-sessione.md),
> [della quarta](../../archivio/2026-10-07-consegna-piano-landing-quarta-sessione.md),
> [della quinta](../../archivio/2026-10-07-consegna-piano-landing-quinta-sessione.md) e
> [della sesta](../../archivio/2026-10-08-consegna-piano-landing-sesta-sessione.md).

**Dove siamo:**

| Parte | Stato |
|---|---|
| §1–§4 | approvate, coi richiami del 2026-10-07 |
| §5, compiti 1–12 | ✅ approvati: l'1–11 il 2026-10-07; il 12 il 2026-10-08, com'è, col comando deprecato della rete (risposta: A) |
| §5, compito 13 | da scrivere: c'è un abbozzo, qui sotto, mai girato |

Il codice dei compiti si prova prima di scriverlo (risposta del proprietario: A). La storia delle prove è nel
[verbale](../../archivio/2026-10-07-prove-piano-landing.md), §16. Il programma del banco ora sta accanto al verbale,
[`2026-10-08-banco-prove-piano-landing.mjs`](../../archivio/2026-10-08-banco-prove-piano-landing.mjs), coi comandi che
preparano il banco in testa (risposta del proprietario: A): non si riscrive più, si copia nello scratchpad e si lancia.

**Il prossimo passo**, in una sessione nuova:

1. dentro `landing/`: `git fetch --all --prune`, `git status -sb`, e il fast-forward se serve;
2. leggi `CLAUDE.md`, questo piano e il disegno, per intero;
3. le skill: `superpowers:writing-plans`, `anthropic-skills:decision-principles`, `anthropic-skills:dev-communication`,
   `anthropic-skills:frontend-craft`;
4. rilancia ciò che invecchia, coi comandi della tabella in fondo;
5. prepara il banco coi comandi in testa al programma, e rifai i compiti 1–12 dal testo del piano: sono la base del 13;
6. scrivi il compito 13 partendo dall'abbozzo qui sotto: provato prima sul banco — e a mano i passi del checkout della
   CI —, poi rifatto dal testo; presentalo, con la domanda qui sotto. Commit e push;
7. la §6 definitiva, cioè come si esegue; lo stato in testa; questa consegna in archivio; commit e push.

**L'abbozzo del compito 13.** Idee, mai girate: si provano sul banco prima di scriverle.

| Pezzo | L'idea |
|---|---|
| `src/lib/brand.ts`, col test accanto | `brandNote`, lo schema della nota con `astro/zod`, come i testi; `fingerprint(path)`, `readNote(folder)`, `copyProblems(folder)` e `kitProblems(folder, root)`, coi messaggi di `verify-brand.mjs` del compito 2. I rossi del kit, sul kit di prova del test |
| `checks/brand.test.ts` | le copie contro la nota, sempre, con la guardia che la nota non sia vuota; il kit contro la nota con `test.skipIf`, quando `../daemon_kit` non c'è: in CI Vitest scrive il test come saltato |
| `scripts/gate.mjs`, e `"gate"` in `package.json` | i passi del cancello, ciascuno annunciato da una riga `-------- <passo>` come in `gate-gui.sh`; al primo rosso esce con l'uscita di quel passo |
| il rosso del cancello | `src/pages/` tolta: la build esce con 0 e nessuna pagina (compito 3, passo 3), e senza `dist/` tolta i controlli della pagina leggerebbero la build vecchia. Il cancello si ferma a `page`, e `npm audit` non gira |
| `.github/workflows/quality-gate.yml` | `push` su ogni ramo, e uno `schedule` settimanale a un minuto che non sia l'inizio dell'ora; Linux e Windows, `fail-fast: false`; daemon a `main` in `daemon/`, poi la landing in `daemon/landing`; `actions/setup-node@v7` con `node-version-file: daemon/landing/package.json` e `package-manager-cache: false`, come daemon; `npm run gate` dentro `daemon/landing`, con l'indirizzo di prova in `env:` |
| la CI a mano | in una cartella di prova, come fa `actions/checkout`: `git init`, `git fetch --depth=1` di `main` in `origin/main`, `git checkout -B main`; la landing clonata dentro; `npm run gate`, verde, col test del kit saltato. La CI vera, su GitHub, all'esecuzione del compito |

**La domanda**, da portare al proprietario col compito 13, una volta provata: la shell del passo che lancia il cancello
in CI. A — quella predefinita del runner: il cancello è Node, e la shell non conta; B — `shell: bash`, come daemon, con
`MSYS_NO_PATHCONV: 1` in `env:`, perché Git Bash riscriverebbe `LANDING_BASE` (§1 del verbale). È dedotto, non visto su
GitHub.

**Già visto, per il compito 13:**

| Che cosa si sa già | Nel verbale |
|---|---|
| in CI, `actions/checkout` con `ref: main` lascia `origin/main` nel clone di daemon, e `origin` è `https://github.com/devfrx/daemon`, senza `.git`: `originIsGitHub` lo accetta. Prima daemon, poi la landing dentro, con `path: daemon/landing`: nell'ordine opposto il primo checkout pulirebbe via il secondo. daemon usa la v4, e l'ultima è la v7.0.1: si segue daemon e si segnala la differenza | §6, §14 |
| l'evento `schedule` gira sull'ultimo commit del ramo predefinito, può tardare all'inizio dell'ora, e in un repository pubblico si spegne dopo 60 giorni senza attività: un costo da dichiarare | §14 |
| la verifica delle impronte di `brand/` è già scritta, come prova a mano, nel passo 2 del compito 2: `src/lib/brand.ts` ne è la versione che resta. Nel kit vero non si mette mai un difetto, perché `daemon_kit/` resta com'è (§7.2 del disegno) | — |
| il cancello, nell'ordine di `scripts/gate-gui.sh`: `npm ci`, `dist/` tolta, la build con `LANDING_SITE` e `LANDING_BASE`, i progetti `checks` e `page` uno per volta — dentro un giro solo, un progetto che non trova file è verde —, `npm audit` alla fine; si ferma al primo rosso. Da Node, `npm` si lancia con `shell: true` e il comando in una stringa sola: con una lista di argomenti Node 24 avvisa, `DEP0190` | §15, §16 |
| i permessi del `GITHUB_TOKEN` sono già di sola lettura, nei due repository: un blocco `permissions` non serve, e daemon non lo scrive | §15 |
| la CI di daemon: `push` e `pull_request`, nessuno `schedule`; `shell: bash` scritto apposta, perché l'immagine Windows ha tre `bash`; `actions/setup-node@v7`, oggi la v7.1.0, che legge `node-version-file` a partire da `GITHUB_WORKSPACE` | §16 |
| con `MSYS_NO_PATHCONV=1`, una cartella di `mktemp -d` passata a `git` non arriva: nella CI a mano, `git` gira in una subshell con `unset MSYS_NO_PATHCONV` | §16, dedotto |
| la velocità sulle macchine di GitHub non è misurata: il profilo rallenta di 4 volte un processore già più lento del nostro, e qui l'LCP è 1,0–1,4 s su una soglia di 2,5. Lo dirà il primo giro della CI: un rischio da dichiarare | §15 |

**Da sapere subito:**

- ⚠️ daemon si muove mentre si lavora: in questa sessione `origin/main` è rimasto a `a27ea6a`. Un commit di daemon non si
  scrive mai come vero: si rilancia `git -C .. rev-parse --short origin/main`;
- ⚠️ **questa macchina è corta di memoria**: 16 GB, e in questa sessione 1,3 GB liberi, con altre sessioni di Claude al
  lavoro su daemon. Coi file insieme i controlli nel browser superavano le loro attese, e una misura del tempo presa qui
  non dice com'è altrove. La memoria del momento: `powershell -NoProfile -Command "Get-CimInstance
  Win32_OperatingSystem | Select-Object FreePhysicalMemory, TotalVisibleMemorySize, FreeVirtualMemory,
  TotalVirtualMemorySize"`;
- ⚠️ dopo il giorno del piano sono uscite `astro` 7.3.7 e `playwright` 1.64.0: il piano resta alla 7.3.6 e alla 1.63.0,
  per la regola della §2.1 — Playwright segue la GUI di daemon, e una versione nuova si prende con un atto apposta;
- su questa macchina daemon sta su `main`, con nella cartella il lavoro di un'altra sessione: da qui non si tocca;
- `daemon_kit/` non è nascosta a daemon, `/landing/` sì: `git -C .. check-ignore -v daemon_kit landing/CLAUDE.md`. Il
  `.gitignore` di daemon non ha ancora la riga `landing/`, ed è lavoro di daemon;
- Vitest 4 non mostra la console dei test verdi: per vedere i valori di una misura, `--reporter=verbose --silent=false`;
- in Git Bash, con `MSYS_NO_PATHCONV=1`, un percorso `/c/…` passato a Node o a `git -C` non viene tradotto, e non si
  trova: si passa `cygpath -w`;
- Git Bash a volte non riesce a creare un processo, *«fork: retry: Resource temporarily unavailable»*: è l'ambiente, e si
  rilancia il passo;
- su Windows `chrome.exe --version` apre il browser invece di scrivere la versione: la versione si legge dal nome della
  cartella, `ls "/c/Program Files/Google/Chrome/Application/"`.

**Verificato il 2026-10-07 e il 2026-10-08, nella sesta e nella settima sessione.** Si rilancia, non si crede. I comandi `git` dalla
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
| `actions/setup-node` alla `v7` è la v7.1.0, e legge `node-version-file` a partire da `GITHUB_WORKSPACE`: per la landing, `daemon/landing/package.json` | `gh api repos/actions/setup-node/releases/latest --jq .tag_name`; `gh api "repos/actions/setup-node/contents/src/main.ts?ref=v7" --jq .content \| base64 -d \| grep -n -A3 'const versionFilePath'` |
| il cancello della GUI: `npm ci --no-audit --no-fund`, `dist/` tolta prima della build, i due progetti di Vitest uno per volta, il Chrome installato, `npm audit` alla fine | `git show "origin/main:scripts/gate-gui.sh"` |
| Chrome 154.0.8037.98 su questa macchina | `ls "/c/Program Files/Google/Chrome/Application/"` |
| Chrome chiede `/favicon.ico` da solo, e un 404 lì è un errore in console | il passo 2 del compito 10 |
| i tag WCAG di axe-core 4.13.0 sono `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa` e `wcag22aa`; l'unica regola di `wcag22aa` è `target-size` | `gh api "repos/dequelabs/axe-core/contents/doc/API.md?ref=v4.13.0" --jq .content \| base64 -d \| grep -n 'wcag2'`; `node -e "console.log(require('axe-core').getRules(['wcag22aa']).map((rule) => rule.ruleId))"`, dalla landing |
| Vitest 4.1.11 lancia i file di un progetto insieme, fino a un processore meno uno; `fileParallelism: false` in un progetto li mette in fila, dopo gli altri progetti; `--fileParallelism` da riga di comando lo scavalca | `resolveMaxWorkers` e `groupSpecs` in `node_modules/vitest/dist/chunks/cli-api.*.js`; il passo 2 del compito 11 |
| `Network.emulateNetworkConditions` è deprecato, a favore di `Network.emulateNetworkConditionsByRule` e `Network.overrideNetworkState`, sperimentali; Lighthouse e Puppeteer usano il primo, e Playwright 1.63.0 per `setOffline`; DevTools il secondo | `gh api "repos/ChromeDevTools/devtools-protocol/contents/pdl/domains/Network.pdl" --jq .content \| base64 -d \| grep -n -B2 'command emulateNetworkConditions'`; `grep -n 'Network\.'` su `core/lib/emulation.js` di `GoogleChrome/lighthouse` e su `packages/puppeteer-core/src/cdp/NetworkManager.ts` di `puppeteer/puppeteer`; `gh api "repos/microsoft/playwright/contents/packages/playwright-core/src/server/chromium/crNetworkManager.ts?ref=v1.63.0" --jq .content \| base64 -d \| grep -n 'emulateNetworkConditions'`; `gh api "search/code?q=emulateNetworkConditionsByRule+repo:ChromeDevTools/devtools-frontend" --jq '.items[].path'` |
| per la CLS, Chrome tratta un cambio della finestra come un input, per 500 ms | `gh api "repos/chromium/chromium/contents/third_party/blink/renderer/core/layout/layout_shift_tracker.cc" --jq .content \| base64 -d \| grep -n -A2 'kTimerDelay =\|NotifyViewportSizeChanged()'` |
| `web-vitals` 6.2.3: `web-vitals.iife.js` non è fra gli `exports` del pacchetto, e sta accanto a ciò che dà `require.resolve('web-vitals')` | `grep -n -A12 '"exports"' node_modules/web-vitals/package.json`, dalla landing col pacchetto |
