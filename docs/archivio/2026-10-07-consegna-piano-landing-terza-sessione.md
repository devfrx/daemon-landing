# La consegna della terza sessione del 2026-10-07 — il piano del traguardo 1 della landing

> 🗄️ **Che cos'è questo file.** La consegna che stava nella §6 del
> [piano del traguardo 1](../superpowers/plans/2026-10-07-landing-traguardo-1.md), qui parola per parola. È com'era alla
> chiusura della quarta sessione del 2026-10-07, che vi aveva segnato i compiti 8–10 approvati, i passi 5 e 6 fatti e la
> riga del compito 11 sul segno della fonte; la versione scritta nella terza sessione è nel commit `4a0e582`.

> 🔶 Oggi questa sezione è la consegna della terza sessione del 2026-10-07: il piano è a metà. A piano finito, qui ci sarà
> come si esegue, e questa consegna andrà in archivio. Le consegne di prima sono in archivio, parola per parola:
> [del mattino](2026-10-07-consegna-piano-landing-mattina.md) e
> [del pomeriggio](2026-10-07-consegna-piano-landing-pomeriggio.md).

**Dove siamo:**

| Parte | Stato |
|---|---|
| §1–§4 | approvate, coi richiami del 2026-10-07 |
| §5, compiti 1–7 | ✅ approvati; il 7 con le parole vietate in ogni loro forma (risposta: A) |
| §5, compiti 8–10 | ✅ approvati il 2026-10-07; nel 9 l'interruttore acceso in `--color-mark`; il segno della fonte aperto, troppo piccolo, è il rosso vero del compito 11 (risposta: A) |
| §5, compiti 11–13 | da scrivere |

Il codice dei compiti si prova prima di scriverlo (risposta del proprietario: A). La storia delle prove è nel
[verbale](2026-10-07-prove-piano-landing.md), §10 e §11; lo scratchpad delle prove è stato cancellato.

**Il prossimo passo**, in una sessione nuova:

1. dentro `landing/`: `git fetch --all --prune`, `git status -sb`, e il fast-forward se serve;
2. leggi `CLAUDE.md`, questo piano e il disegno, per intero;
3. le skill: `superpowers:writing-plans`, `anthropic-skills:decision-principles`, `anthropic-skills:dev-communication`,
   `anthropic-skills:frontend-craft`;
4. rilancia ciò che invecchia, coi comandi della tabella in fondo;
5. ✅ rifai i compiti 3–10 nello scratchpad dal testo del piano, come nella §10 del verbale: un programma prende il codice
   dal piano, riga per riga, e i comandi si lanciano come stanno. I comandi del passo 11 del compito 8 non hanno ancora
   girato così (§11 del verbale). Se qualcosa diverge, si registra e si corregge prima di presentare — fatto nella
   sessione dopo, coi compiti 1–10 (§12 del verbale);
6. ✅ presenta al proprietario i compiti 8–10, con le scelte della tabella qui sotto, e chiedi il sì; commit e push —
   fatto nella sessione dopo;
7. scrivi i compiti 11–13, ciascuno provato prima nello scratchpad, e presentali;
8. la §6 definitiva, cioè come si esegue; lo stato in testa; questa consegna in archivio; commit e push.

**Le scelte dei compiti 8–10**, da dire al proprietario quando li presenti:

| Scelta | Il perché, o il costo |
|---|---|
| il browser arriva col compito 8, con un controllo della pagina (risposta: A) | costo: il compito 8 è il più grande; la §4 porta il richiamo |
| `LANDING_SITE` obbligatorio e `LANDING_BASE` con una barra a ogni capo; in prova `https://landing.invalid` e `/daemon-landing/` | `hreflang` vuole indirizzi completi; una base non vuota fa diventare un 404 l'indirizzo che la dimentica. Costo: anche in prova la build vuole le due impostazioni |
| il segno della fonte è un `<details>` | si tocca e mostra il file col link, senza JavaScript e da tastiera. Costo: «Fonte» si ripete accanto a ogni frase |
| `daemon` è il titolo `<h1>` della pagina | una pagina ha un titolo; con l'apertura del traguardo 2 si rivede |
| l'interruttore segue il sistema, e ricorda la scelta solo se è diversa dal sistema | tornare al tema del sistema vuol dire seguirlo di nuovo. Costo: lo script del tema non lo controlla `astro check` |
| Barlow solo al peso 600, in maiuscolo, per le etichette — l'indice, l'interruttore, l'altra lingua, «Fonte» —; Geist per il testo | come le etichette della GUI di daemon |
| il controllo dei token vieta anche le scale `--ref-*` | è la regola di `themes.css` di daemon: *«No component reads a `--ref-*`»* |
| l'icona della scheda è `daemon-icon-dark.svg`, dal compito 10 | senza un'icona Chrome scrive un errore in console; ha un fondo suo, e si vede su ogni barra delle schede |
| senza JavaScript la pagina si confronta, riga per riga, con sé stessa col JavaScript | manca soltanto l'interruttore |

**Già visto, per i compiti 11–13:**

| Compito | Che cosa si sa già | Nel verbale |
|---|---|---|
| 11 | `openLanding()` e `open()` danno la pagina servita sotto la base, nel Chrome installato, con `before` per ascoltare prima che si carichi | §11 |
| 11 | il segno della fonte, aperto, è troppo piccolo per WCAG 2.5.8: coi segni aperti axe 4.13.0 dà `target-size`, *serious*. È il rosso vero del controllo, e il compito 11 lo corregge (risposta: A). L'unica regola `wcag22aa` di axe 4.13.0 è `target-size` | §12 |
| 12 | il profilo si accende con una sessione CDP: `Network.enable`, `Network.emulateNetworkConditions`, `Emulation.setCPUThrottlingRate`; che sia acceso lo prova `responseEnd` della navigazione, non `responseStart`; si interagisce solo dopo che l'LCP è arrivato; la fine della misura si simula come nei test di `web-vitals`; il rosso, su una pagina con 300 ms di lavoro nel clic | §4, §5 |
| 12 | Vitest lancia in parallelo i file di un progetto: la velocità si misura da sola, in un progetto suo o con `fileParallelism: false` | — |
| 13 | in CI, `actions/checkout` con `ref: main` lascia `origin/main` nel clone di daemon; daemon usa la v4, e l'ultima è la v7.0.1: si segue daemon e si segnala la differenza | §6 |
| 13 | la verifica delle impronte di `brand/` è già scritta, come prova a mano, nel passo 2 del compito 2: `src/lib/brand.ts` ne è la versione che resta | — |
| 13 | il cancello, nell'ordine di `scripts/gate-gui.sh`: `npm ci`, `dist/` tolta, la build con `LANDING_SITE` e `LANDING_BASE`, i progetti `checks` e `page` uno per volta, `npm audit` alla fine | — |

**Ancora da provare**, scrivendo i compiti 11–13: come si mette `axe-core` 4.13.0 nella pagina, e i nomi delle sue
regole per WCAG 2.2 AA; il percorso da tastiera che il compito 11 prova; `scripts/gate.mjs`; la CI, con la landing
dentro la copia di daemon.

**Da sapere subito:**

- ⚠️ daemon si muove mentre si lavora: in questa sessione `origin/main` è passato da `973153f` a `c2de19a`, per le
  sessioni del lean-docs della R5 su daemon. I suoi lotti toccano `COMPENDIO.md`, `HANDOFF.md`, `roadmap.md`,
  `README.md`, `AVVIO-CHAT.md`, `porta-di-qualita.md`, `riferimenti.md`, due specifiche, ADR-0015 e i commenti nei
  sorgenti: non le cinque fonti della §3.4, ma il `README.md` è la fonte futura della legenda. Un commit di daemon non si
  scrive mai come vero: si rilancia `git -C .. rev-parse --short origin/main`;
- su questa macchina daemon adesso sta su `main`, con nella cartella il lavoro di un'altra sessione: da qui non si tocca;
- `daemon_kit/` non è nascosta a daemon, `/landing/` sì: `git -C .. check-ignore -v daemon_kit landing/CLAUDE.md`. Il
  `.gitignore` di daemon non ha ancora la riga `landing/`, ed è lavoro di daemon;
- la prova nello scratchpad: `git clone -q --no-checkout` della cartella di daemon, `origin` rimesso su
  `https://github.com/devfrx/daemon.git`, `origin/main` scritto con `git update-ref`, e la landing di prova dentro; per
  il compito 2, accanto, una copia dei SVG e delle due pagine di `daemon_kit/`;
- in Git Bash, con `MSYS_NO_PATHCONV=1`, un percorso `/c/…` passato a Node diventa `C:\c\…`: a Node si passa
  `cygpath -w`;
- su Windows `chrome.exe --version` apre il browser invece di scrivere la versione: la versione si legge dal nome della
  cartella, `ls "/c/Program Files/Google/Chrome/Application/"`.

**Verificato il 2026-10-07, nella terza sessione.** Si rilancia, non si crede. I comandi `git` dalla radice di daemon, in
Git Bash, dopo `export MSYS_NO_PATHCONV=1`.

| Fatto | Comando o fonte |
|---|---|
| le versioni della §2.1; Node 24.19.0 e npm 11.17.0 su questa macchina | `npm view <pacchetto> version license`; `git show "origin/main:gui/package.json"`; `node --version`; `npm --version` |
| `origin/main` di daemon era `c2de19a` alla chiusura; l'audit c'è, col segno «(col N)» | `git rev-parse --short origin/main`; `git merge-base --is-ancestor origin/repo-audit/20260930-1510 origin/main`; `git show "origin/main:docs/README.md" \| grep -c 'col N'` |
| le cinque citazioni della §3.4 si trovano, a `c2de19a` | per ciascuna: `git show "origin/main:<fonte>" \| tr -d '\r' \| tr '\n' ' ' \| tr -s ' ' \| grep -cF -- '<citazione>'` |
| fra `973153f` e `c2de19a` la GUI non è cambiata: manifesto, token, cancello, CI | `git diff --stat 973153f origin/main -- gui/package.json gui/src/tokens scripts/gate-gui.sh .github` |
| `themes.css` di daemon: `:root` con le `--ref-*`; `[data-theme="dark"]` e `[data-theme="light"]` coi ruoli `--color-*` e `color-scheme` | `git show "origin/main:gui/src/tokens/themes.css"` |
| la GUI: il testo in Geist Variable, le etichette e i numeri in Barlow 300–600, importati da `gui/src/tokens/index.ts` | `git show "origin/main:gui/src/tokens/index.ts"` |
| la CI di daemon: `actions/checkout@v4`; `actions/setup-node@v7` con `node-version-file` e `package-manager-cache: false`; la matrice con `fail-fast: false`; `shell: bash`; nessuna azione di terzi; verde | `git show "origin/main:.github/workflows/quality-gate.yml"`; `gh run list -R devfrx/daemon -L 4` |
| il cancello della GUI: `npm ci --no-audit --no-fund`, `dist/` tolta prima della build, i due progetti di Vitest uno per volta, il Chrome installato, `npm audit` alla fine | `git show "origin/main:scripts/gate-gui.sh"` |
| Chrome 154.0.8037.98 su questa macchina | `ls "/c/Program Files/Google/Chrome/Application/"` |
| Chrome chiede `/favicon.ico` da solo, e un 404 lì è un errore in console | il passo 2 del compito 10 |
