# La consegna della quarta sessione del 2026-10-07 — il piano del traguardo 1 della landing

> 🗄️ **Che cos'è questo file.** La consegna che stava nella §6 del
> [piano del traguardo 1](../superpowers/plans/2026-10-07-landing-traguardo-1.md), qui parola per parola. È com'era alla
> chiusura della quarta sessione del 2026-10-07, nel commit `1f44b2a`.

> 🔶 Oggi questa sezione è la consegna della quarta sessione del 2026-10-07: il piano è a metà. A piano finito, qui ci
> sarà come si esegue, e questa consegna andrà in archivio. Le consegne di prima sono in archivio, parola per parola:
> [del mattino](../../archivio/2026-10-07-consegna-piano-landing-mattina.md),
> [del pomeriggio](../../archivio/2026-10-07-consegna-piano-landing-pomeriggio.md) e
> [della terza sessione](../../archivio/2026-10-07-consegna-piano-landing-terza-sessione.md).

**Dove siamo:**

| Parte | Stato |
|---|---|
| §1–§4 | approvate, coi richiami del 2026-10-07 |
| §5, compiti 1–10 | ✅ approvati; nel 9 l'interruttore acceso in `--color-mark` |
| §5, compito 11 | scritto, col codice che ha girato; **da rifare dal testo del piano, poi da approvare** |
| §5, compiti 12–13 | da scrivere |

Il codice dei compiti si prova prima di scriverlo (risposta del proprietario: A). La storia delle prove è nel
[verbale](../../archivio/2026-10-07-prove-piano-landing.md), §12 e §13; lo scratchpad delle prove è stato cancellato.

**Il prossimo passo**, in una sessione nuova:

1. dentro `landing/`: `git fetch --all --prune`, `git status -sb`, e il fast-forward se serve;
2. leggi `CLAUDE.md`, questo piano e il disegno, per intero;
3. le skill: `superpowers:writing-plans`, `anthropic-skills:decision-principles`, `anthropic-skills:dev-communication`,
   `anthropic-skills:frontend-craft`;
4. rilancia ciò che invecchia, coi comandi della tabella in fondo;
5. rifai i compiti 1–11 nello scratchpad dal testo del piano, come nella §12 del verbale: un programma prende il codice
   dal piano, blocco per blocco, e i comandi si lanciano come stanno. Il compito 11 non è ancora girato così (§13 del
   verbale). Se qualcosa diverge, si registra e si corregge prima di presentare;
6. presenta al proprietario il compito 11, con le scelte della tabella qui sotto, e chiedi il sì; commit e push;
7. scrivi i compiti 12–13, ciascuno provato prima nello scratchpad, e presentali;
8. la §6 definitiva, cioè come si esegue; lo stato in testa; questa consegna in archivio; commit e push.

**Le scelte del compito 11**, da dire al proprietario quando lo presenti:

| Scelta | Il perché, o il costo |
|---|---|
| axe coi tag `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa` e `wcag22aa` | sono le regole WCAG 2.2 AA di axe, secondo la sua documentazione; le sue *best practice* restano fuori, perché non sono WCAG |
| axe in ogni stato: due temi, computer e telefono, fonti chiuse e aperte, nelle due lingue | un difetto che c'è solo a fonti aperte, come il `target-size` di oggi, lo vede solo chi le apre. Costo: 16 passate di axe, il controllo più lungo |
| «tutto si usa da tastiera» è: il Tab raggiunge ogni controllo, nell'ordine della pagina, col suo anello; il link al contenuto porta dentro il contenuto; l'indice porta la sua sezione sotto di sé | è la parte della §6.1 del disegno che un programma prova |
| l'indice si prova sul telefono girato, 823 × 412 | è l'unico schermo dove la pagina del traguardo 1 scorre: altrove la sonda passerebbe a vuoto |
| il segno della fonte: `padding-block` sul `<summary>`, `inline-block` sul link | così ciascuno è alto almeno 24 px. Costo: la riga del segno è un po' più alta |
| il movimento ridotto non entra | arriva col primo movimento, nel traguardo 2 |

**Già visto, per i compiti 12–13:**

| Compito | Che cosa si sa già | Nel verbale |
|---|---|---|
| 12 | il profilo si accende con una sessione CDP: `Network.enable`, `Network.emulateNetworkConditions`, `Emulation.setCPUThrottlingRate`; che sia acceso lo prova `responseEnd` della navigazione, non `responseStart`; si interagisce solo dopo che l'LCP è arrivato; la fine della misura si simula come nei test di `web-vitals`; il rosso, su una pagina con 300 ms di lavoro nel clic | §4, §5 |
| 12 | Vitest lancia in parallelo i file di un progetto: la velocità si misura da sola, in un progetto suo o con `fileParallelism: false` | — |
| 13 | in CI, `actions/checkout` con `ref: main` lascia `origin/main` nel clone di daemon; daemon usa la v4, e l'ultima è la v7.0.1: si segue daemon e si segnala la differenza | §6 |
| 13 | la verifica delle impronte di `brand/` è già scritta, come prova a mano, nel passo 2 del compito 2: `src/lib/brand.ts` ne è la versione che resta | — |
| 13 | il cancello, nell'ordine di `scripts/gate-gui.sh`: `npm ci`, `dist/` tolta, la build con `LANDING_SITE` e `LANDING_BASE`, i progetti `checks` e `page` uno per volta, `npm audit` alla fine | — |

**Ancora da provare**, scrivendo i compiti 12–13: `scripts/gate.mjs`; la CI, con la landing dentro la copia di daemon.

**Da sapere subito:**

- ⚠️ daemon si muove mentre si lavora: in questa sessione `origin/main` è passato da `c2de19a` a `fc43188`, per
  un'altra sessione su daemon, quella del lean-docs della R5: documenti, non le cinque fonti della §3.4 né la GUI. Un
  commit di daemon non si scrive mai come vero: si rilancia `git -C .. rev-parse --short origin/main`;
- su questa macchina daemon sta su `main`, con nella cartella il lavoro di un'altra sessione: da qui non si tocca;
- `daemon_kit/` non è nascosta a daemon, `/landing/` sì: `git -C .. check-ignore -v daemon_kit landing/CLAUDE.md`. Il
  `.gitignore` di daemon non ha ancora la riga `landing/`, ed è lavoro di daemon;
- la prova nello scratchpad: `git clone -q --no-checkout` della cartella di daemon, `origin` rimesso su
  `https://github.com/devfrx/daemon.git`, `origin/main` scritto con `git update-ref`; dentro, una copia della landing
  **senza remoto**, perché nessun `git push` arrivi al repository vero; accanto, una copia dei SVG e delle due pagine di
  `daemon_kit/`, per il compito 2;
- in Git Bash, con `MSYS_NO_PATHCONV=1`, un percorso `/c/…` passato a Node o a `git -C` non viene tradotto, e non si
  trova: si passa `cygpath -w`;
- Git Bash a volte non riesce a creare un processo, *«fork: retry: Resource temporarily unavailable»*: è l'ambiente, e si
  rilancia il passo;
- su Windows `chrome.exe --version` apre il browser invece di scrivere la versione: la versione si legge dal nome della
  cartella, `ls "/c/Program Files/Google/Chrome/Application/"`.

**Verificato il 2026-10-07, nella quarta sessione.** Si rilancia, non si crede. I comandi `git` dalla radice di daemon, in
Git Bash, dopo `export MSYS_NO_PATHCONV=1`.

| Fatto | Comando o fonte |
|---|---|
| le versioni della §2.1; Node 24.19.0 e npm 11.17.0 su questa macchina | `npm view <pacchetto> version license`; `git show "origin/main:gui/package.json"`; `node --version`; `npm --version` |
| `origin/main` di daemon era `fc43188` alla chiusura; l'audit c'è, col segno «(col N)» | `git rev-parse --short origin/main`; `git merge-base --is-ancestor origin/repo-audit/20260930-1510 origin/main`; `git show "origin/main:docs/README.md" \| grep -c 'col N'` |
| le cinque citazioni della §3.4 si trovano, a `fc43188` | per ciascuna: `git show "origin/main:<fonte>" \| tr -d '\r' \| tr '\n' ' ' \| tr -s ' ' \| grep -cF -- '<citazione>'` |
| fra `973153f` e `fc43188` la GUI non è cambiata: manifesto, token, cancello, CI | `git diff --stat 973153f origin/main -- gui/package.json gui/src/tokens scripts/gate-gui.sh .github` |
| `themes.css` di daemon: `:root` con le `--ref-*`; `[data-theme="dark"]` e `[data-theme="light"]` coi ruoli `--color-*` e `color-scheme` | `git show "origin/main:gui/src/tokens/themes.css"` |
| in daemon i ruoli non di testo da 3:1 sono `border-strong`, `focus`, `mark` e `border-accent`; il radio acceso della GUI usa `--color-mark` | `git show "origin/main:gui/src/tokens/contrast.test.ts" \| grep -n 'non-text'`; `git grep -n 'color-mark' origin/main -- gui/src/components` |
| la GUI: il testo in Geist Variable, le etichette e i numeri in Barlow 300–600, importati da `gui/src/tokens/index.ts` | `git show "origin/main:gui/src/tokens/index.ts"` |
| la CI di daemon: `actions/checkout@v4`; `actions/setup-node@v7` con `node-version-file` e `package-manager-cache: false`; la matrice con `fail-fast: false`; `shell: bash`; nessuna azione di terzi; verde | `git show "origin/main:.github/workflows/quality-gate.yml"`; `gh run list -R devfrx/daemon -L 4` |
| il cancello della GUI: `npm ci --no-audit --no-fund`, `dist/` tolta prima della build, i due progetti di Vitest uno per volta, il Chrome installato, `npm audit` alla fine | `git show "origin/main:scripts/gate-gui.sh"` |
| Chrome 154.0.8037.98 su questa macchina | `ls "/c/Program Files/Google/Chrome/Application/"` |
| Chrome chiede `/favicon.ico` da solo, e un 404 lì è un errore in console | il passo 2 del compito 10 |
| i tag WCAG di axe-core 4.13.0 sono `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa` e `wcag22aa`; l'unica regola di `wcag22aa` è `target-size` | `gh api "repos/dequelabs/axe-core/contents/doc/API.md?ref=v4.13.0" --jq .content \| base64 -d \| grep -n 'wcag2'`; `node -e "console.log(require('axe-core').getRules(['wcag22aa']).map((rule) => rule.ruleId))"`, dalla landing |
