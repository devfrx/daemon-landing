# La consegna della quinta sessione del 2026-10-07 — il piano del traguardo 1 della landing

> 🗄️ **Che cos'è questo file.** La consegna che stava nella §6 del
> [piano del traguardo 1](../superpowers/plans/2026-10-07-landing-traguardo-1.md), qui parola per parola. È com'era nel
> commit `8a26757`: scritta alla chiusura della quinta sessione del 2026-10-07, nel commit `0a4f51c`, coi passi 4 e 5
> spuntati nella sessione dopo.

> 🔶 Oggi questa sezione è la consegna della quinta sessione del 2026-10-07: il piano è a metà. A piano finito, qui ci
> sarà come si esegue, e questa consegna andrà in archivio. Le consegne di prima sono in archivio, parola per parola:
> [del mattino](../../archivio/2026-10-07-consegna-piano-landing-mattina.md),
> [del pomeriggio](../../archivio/2026-10-07-consegna-piano-landing-pomeriggio.md),
> [della terza sessione](../../archivio/2026-10-07-consegna-piano-landing-terza-sessione.md) e
> [della quarta](../../archivio/2026-10-07-consegna-piano-landing-quarta-sessione.md).

**Dove siamo:**

| Parte | Stato |
|---|---|
| §1–§4 | approvate, coi richiami del 2026-10-07 |
| §5, compiti 1–10 | ✅ approvati; rifatti dal testo nella quinta sessione, tutto come scritto |
| §5, compito 11 | ✅ approvato il 2026-10-07, com'è: i controlli nel browser uno per volta, con la guardia, e una prova per ciascuna sonda della tastiera (risposta: A) |
| §5, compiti 12–13 | da scrivere |

Il codice dei compiti si prova prima di scriverlo (risposta del proprietario: A). La storia delle prove è nel
[verbale](../../archivio/2026-10-07-prove-piano-landing.md), §14; lo scratchpad delle prove è stato cancellato.

**Il prossimo passo**, in una sessione nuova:

1. dentro `landing/`: `git fetch --all --prune`, `git status -sb`, e il fast-forward se serve;
2. leggi `CLAUDE.md`, questo piano e il disegno, per intero;
3. le skill: `superpowers:writing-plans`, `anthropic-skills:decision-principles`, `anthropic-skills:dev-communication`,
   `anthropic-skills:frontend-craft`;
4. ✅ rilancia ciò che invecchia, coi comandi della tabella in fondo — fatto nella sessione dopo: tutto come nella tabella;
5. ✅ presenta al proprietario il compito 11, con le scelte della tabella qui sotto, e chiedi il sì: A, com'è adesso; B,
   com'era nella quarta sessione, senza le due correzioni — è nel commit `1f44b2a`. Col sì, nella tabella della §4 la riga
   del compito 11 prende anche «i controlli nel browser uno per volta», col richiamo datato; commit e push — fatto nella
   sessione dopo (risposta: A);
6. scrivi i compiti 12–13, ciascuno provato prima nello scratchpad dal testo del piano, e presentali. Il banco e il
   programma che prende i blocchi dal piano sono nella §14 del verbale: per il 12 e il 13 si rifanno anche i compiti 1–11,
   che ne sono la base;
7. la §6 definitiva, cioè come si esegue; lo stato in testa; questa consegna in archivio; commit e push.

**Le scelte del compito 11**, da dire al proprietario quando lo presenti. Le due righe 🆕 sono le correzioni di questa
sessione; le altre erano già nella consegna della quarta.

| Scelta | Il perché, o il costo |
|---|---|
| axe coi tag `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa` e `wcag22aa` | sono le regole WCAG 2.2 AA di axe, secondo la sua documentazione; le sue *best practice* restano fuori, perché non sono WCAG |
| axe in ogni stato: due temi, computer e telefono, fonti chiuse e aperte, nelle due lingue | un difetto che c'è solo a fonti aperte, come il `target-size` di oggi, lo vede solo chi le apre. Costo: 16 passate di axe, il controllo più lungo |
| «tutto si usa da tastiera» è: il Tab raggiunge ogni controllo, nell'ordine della pagina; ciascuno ha il suo anello; il link al contenuto porta dentro il contenuto; l'indice porta la sua sezione sotto di sé | è la parte della §6.1 del disegno che un programma prova |
| 🆕 una prova per ciascuna delle quattro, e un difetto per ciascuna nel passo 7 | prima erano due prove con due sonde l'una, e il passo dell'altro senso ne faceva diventare rosse due: l'anello e il link al contenuto non erano mai visti rossi, e una sonda mai vista rossa può essere vuota. Costo: quattro prove invece di due, due difetti in più |
| 🆕 i controlli nel browser uno per volta, con la guardia in `openLanding()` | rifacendo il compito 11, l'ultimo giro è stato rosso, 2 test su 58: attese scadute, coi file insieme, su una macchina corta di memoria; poi 9 giri rossi su 19 coi file insieme, nessuno su 4 coi file uno per volta. Serve anche al compito 12: una misura del tempo vuole la macchina per sé. Costo: i controlli nel browser durano circa il doppio |
| l'indice si prova sul telefono girato, 823 × 412 | è l'unico schermo dove la pagina del traguardo 1 scorre: altrove la sonda passerebbe a vuoto |
| il segno della fonte: `padding-block` sul `<summary>`, `inline-block` sul link | così ciascuno è alto almeno 24 px. Costo: la riga del segno è un po' più alta |
| il movimento ridotto non entra | arriva col primo movimento, nel traguardo 2 |

**Già visto, per i compiti 12–13:**

| Compito | Che cosa si sa già | Nel verbale |
|---|---|---|
| 12 | il profilo si accende con una sessione CDP: `Network.enable`, `Network.emulateNetworkConditions`, `Emulation.setCPUThrottlingRate`; che sia acceso lo prova `responseEnd` della navigazione, non `responseStart`; si interagisce solo dopo che l'LCP è arrivato; la fine della misura si simula come nei test di `web-vitals`; il rosso, su una pagina con 300 ms di lavoro nel clic | §4, §5 |
| 12 | il telefono di Lighthouse è anche «mobile», col tocco: in Playwright `isMobile: true` e `hasTouch: true`; la rete va in byte al secondo, `Math.floor(kbps * 1024 / 8)`, come la converte Lighthouse | §14 |
| 12 | coi controlli nel browser uno per volta, dal compito 11, la velocità si misura da sola dentro il progetto `page`: niente progetto suo. `open()` aspetta 2 s, troppo per una pagina rallentata apposta: il controllo alza l'attesa nel suo `before`, con `page.setDefaultTimeout` | §14 |
| 12 | in `web-vitals` la voce `first-input` si osserva sempre: dopo la prima interazione l'INP ha un valore | §14 |
| 12 | i rossi pensati, da provare: l'LCP con uno script che ferma la pagina 3 s nel `<head>`; il CLS con un blocco che spinge giù il contenuto dopo la prima pittura; l'INP con 300 ms di lavoro a ogni clic; la guardia del profilo senza `Network.emulateNetworkConditions` | — |
| 13 | in CI, `actions/checkout` con `ref: main` lascia `origin/main` nel clone di daemon, e `origin` è `https://github.com/devfrx/daemon`, senza `.git`: `originIsGitHub` lo accetta. Prima daemon, poi la landing dentro, con `path: daemon/landing`: nell'ordine opposto il primo checkout pulirebbe via il secondo. daemon usa la v4, e l'ultima è la v7.0.1: si segue daemon e si segnala la differenza | §6, §14 |
| 13 | l'evento `schedule` gira sull'ultimo commit del ramo predefinito, può tardare all'inizio dell'ora, e in un repository pubblico si spegne dopo 60 giorni senza attività: un costo da dichiarare | §14 |
| 13 | la verifica delle impronte di `brand/` è già scritta, come prova a mano, nel passo 2 del compito 2: `src/lib/brand.ts` ne è la versione che resta; dove il kit non c'è, il suo test si salta, ed è così che il cancello «lo scrive» | — |
| 13 | il cancello, nell'ordine di `scripts/gate-gui.sh`: `npm ci`, `dist/` tolta, la build con `LANDING_SITE` e `LANDING_BASE`, i progetti `checks` e `page` uno per volta, `npm audit` alla fine; si ferma al primo rosso | — |

**Ancora da provare**, scrivendo i compiti 12–13: il controllo della velocità e i suoi rossi; `scripts/gate.mjs`; la CI,
con la landing dentro la copia di daemon — a mano coi passi del checkout, e su GitHub solo quando il compito 13 si esegue.

**Da sapere subito:**

- ⚠️ daemon si muove mentre si lavora: in questa sessione `origin/main` è passato da `fc43188` a `82d121d`, per un'altra
  sessione su daemon, quella del lean-docs della R5: documenti, non le cinque fonti della §3.4 né la GUI. Un commit di
  daemon non si scrive mai come vero: si rilancia `git -C .. rev-parse --short origin/main`;
- ⚠️ **questa macchina è corta di memoria**: 16 GB, e più di 50 impegnati, con altre sessioni di Claude aperte. Coi file
  insieme i controlli nel browser hanno superato le loro attese; e una misura del tempo presa qui non dice com'è altrove.
  La memoria del momento: `powershell -NoProfile -Command "Get-CimInstance Win32_OperatingSystem | Select-Object
  FreePhysicalMemory, TotalVisibleMemorySize, FreeVirtualMemory, TotalVirtualMemorySize"`;
- su questa macchina daemon sta su `main`, con nella cartella il lavoro di un'altra sessione: da qui non si tocca;
- `daemon_kit/` non è nascosta a daemon, `/landing/` sì: `git -C .. check-ignore -v daemon_kit landing/CLAUDE.md`. Il
  `.gitignore` di daemon non ha ancora la riga `landing/`, ed è lavoro di daemon;
- la prova nello scratchpad: `git clone -q --no-checkout` della cartella di daemon, `origin` rimesso su
  `https://github.com/devfrx/daemon.git`, `origin/main` scritto con `git update-ref`; dentro, una copia della landing col
  remoto su un repository nudo nello scratchpad, perché `git push` giri senza arrivare al repository vero; accanto, una
  copia dei SVG e delle due pagine di `daemon_kit/`, per il compito 2;
- in Git Bash, con `MSYS_NO_PATHCONV=1`, un percorso `/c/…` passato a Node o a `git -C` non viene tradotto, e non si
  trova: si passa `cygpath -w`;
- Git Bash a volte non riesce a creare un processo, *«fork: retry: Resource temporarily unavailable»*: è l'ambiente, e si
  rilancia il passo;
- su Windows `chrome.exe --version` apre il browser invece di scrivere la versione: la versione si legge dal nome della
  cartella, `ls "/c/Program Files/Google/Chrome/Application/"`.

**Verificato il 2026-10-07, nella quinta sessione.** Si rilancia, non si crede. I comandi `git` dalla radice di daemon, in
Git Bash, dopo `export MSYS_NO_PATHCONV=1`.

| Fatto | Comando o fonte |
|---|---|
| le versioni della §2.1; Node 24.19.0 e npm 11.17.0 su questa macchina | `npm view <pacchetto> version license`; `git show "origin/main:gui/package.json"`; `node --version`; `npm --version` |
| `origin/main` di daemon era `82d121d` alla chiusura; l'audit c'è, col segno «(col N)» | `git rev-parse --short origin/main`; `git merge-base --is-ancestor origin/repo-audit/20260930-1510 origin/main`; `git show "origin/main:docs/README.md" \| grep -c 'col N'` |
| le cinque citazioni della §3.4 si trovano, e fra `fc43188` e `82d121d` nessuna delle cinque fonti è cambiata | per ciascuna: `git show "origin/main:<fonte>" \| tr -d '\r' \| tr '\n' ' ' \| tr -s ' ' \| grep -cF -- '<citazione>'`; `git diff --stat fc43188 origin/main -- <le cinque fonti>` |
| fra `973153f` e `82d121d` la GUI non è cambiata: manifesto, token, cancello, CI | `git diff --stat 973153f origin/main -- gui/package.json gui/src/tokens scripts/gate-gui.sh .github` |
| `themes.css` di daemon: `:root` con le `--ref-*`; `[data-theme="dark"]` e `[data-theme="light"]` coi ruoli `--color-*` e `color-scheme` | `git show "origin/main:gui/src/tokens/themes.css"` |
| in daemon i ruoli non di testo da 3:1 sono `border-strong`, `focus`, `mark` e `border-accent`; il radio acceso della GUI usa `--color-mark` | `git show "origin/main:gui/src/tokens/contrast.test.ts" \| grep -n 'non-text'`; `git grep -n 'color-mark' origin/main -- gui/src/components` |
| la GUI: il testo in Geist Variable, le etichette e i numeri in Barlow 300–600, importati da `gui/src/tokens/index.ts` | `git show "origin/main:gui/src/tokens/index.ts"` |
| la CI di daemon: `actions/checkout@v4`; `actions/setup-node@v7` con `node-version-file` e `package-manager-cache: false`; la matrice con `fail-fast: false`; `shell: bash`; nessuna azione di terzi; verde | `git show "origin/main:.github/workflows/quality-gate.yml"`; `gh run list -R devfrx/daemon -L 4` |
| il cancello della GUI: `npm ci --no-audit --no-fund`, `dist/` tolta prima della build, i due progetti di Vitest uno per volta, il Chrome installato, `npm audit` alla fine | `git show "origin/main:scripts/gate-gui.sh"` |
| Chrome 154.0.8037.98 su questa macchina | `ls "/c/Program Files/Google/Chrome/Application/"` |
| Chrome chiede `/favicon.ico` da solo, e un 404 lì è un errore in console | il passo 2 del compito 10 |
| i tag WCAG di axe-core 4.13.0 sono `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa` e `wcag22aa`; l'unica regola di `wcag22aa` è `target-size` | `gh api "repos/dequelabs/axe-core/contents/doc/API.md?ref=v4.13.0" --jq .content \| base64 -d \| grep -n 'wcag2'`; `node -e "console.log(require('axe-core').getRules(['wcag22aa']).map((rule) => rule.ruleId))"`, dalla landing |
| Vitest 4.1.11 lancia i file di un progetto insieme, fino a un processore meno uno; `fileParallelism: false` in un progetto li mette in fila, dopo gli altri progetti; `--fileParallelism` da riga di comando lo scavalca | `resolveMaxWorkers` e `groupSpecs` in `node_modules/vitest/dist/chunks/cli-api.*.js`; il passo 2 del compito 11 |
