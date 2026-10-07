# La consegna della sessione del mattino del 2026-10-07 — il piano del traguardo 1 della landing

> 🗄️ **Che cos'è questo file.** La consegna che stava nella §6 del
> [piano del traguardo 1](../superpowers/plans/2026-10-07-landing-traguardo-1.md), qui parola per parola. È com'era alla
> chiusura della sessione del pomeriggio del 2026-10-07, che vi aveva già segnato la risposta alla domanda aperta, l'audit
> su `main` e il commit `c42c947`; la versione scritta al mattino è nel commit `437bb9c`.

> 🔶 Oggi questa sezione è la consegna della sessione del 2026-10-07: il piano è a metà. A piano finito, qui ci sarà come
> si esegue, e questa consegna andrà in archivio.

**Dove siamo:** le §1–§4 sono approvate dal proprietario e scritte. La §5, i compiti col loro codice, non è cominciata.

**La domanda** che il proprietario aveva lasciato aperta ha la risposta, nella sessione del pomeriggio del 2026-10-07:

> Prima di scrivere il codice dei compiti, lo provo?

| | La scelta | Il costo |
|---|---|---|
| **A** ✅ scelta | piccole prove dei punti incerti in una cartella temporanea, lo scratchpad; nel piano solo codice visto girare; alla fine si cancella tutto | più tempo nella sessione; i pacchetti della §2 scaricati da npm, alcune centinaia di MB — una stima, non una misura; Chrome si apre nascosto |
| **B** | il codice scritto dalla documentazione ufficiale, senza provarlo | più difetti, trovati più tardi: dal pre-controllo e dai test di ogni compito |

I punti incerti: come Astro 7 costruisce le due lingue; come Vitest 4 tiene separati i due progetti; come si chiama
cspell da un programma; come Playwright rallenta Chrome per misurare la velocità; come `web-vitals` legge l'INP.

**Il prossimo passo**, in una sessione nuova:

1. dentro `landing/`: `git fetch --all --prune`, `git status -sb`, e il fast-forward se serve;
2. leggi `CLAUDE.md`, questo piano e il disegno, per intero;
3. le skill: `superpowers:writing-plans`, `anthropic-skills:decision-principles`, `anthropic-skills:dev-communication`;
4. rilancia ciò che invecchia, coi comandi della tabella qui sotto: le versioni della §2.1, `origin/main` di daemon, le
   cinque citazioni della §3.4;
5. fai al proprietario la domanda aperta;
6. scrivi la §5, un compito per volta, e presentala al proprietario a gruppi di compiti; poi la §6 definitiva, cioè come
   si esegue;
7. a piano finito: lo stato in testa, questa consegna in archivio, commit e push.

**Da sapere subito:**

- ⚠️ alle 09:55 del 2026-10-07 una sessione di daemon ha portato `50cc61f` su `main` e ha cambiato il
  `.git/info/exclude` di daemon: `daemon_kit/` **non è più nascosta** — `git status` di daemon la mostra come
  `?? daemon_kit/` — mentre `/landing/` lo è ancora. La riga della §8.1 del disegno su `daemon_kit/` era vera quando fu
  verificata, e oggi non lo è più. Per il traguardo 1 non cambia niente: il compito 2 legge il kit dalla cartella. Il
  perché non lo sappiamo, è di daemon. Il comando: `git -C .. check-ignore -v daemon_kit landing/CLAUDE.md`;
- l'audit è su `main`, col segno «(col N)», e daemon sta su `main` (richiamo della §8.4 del disegno);
- su Windows `chrome.exe --version` apre il browser invece di scrivere la versione: la versione si legge dal nome della
  cartella, `ls "/c/Program Files/Google/Chrome/Application/"`.

**Verificato il 2026-10-07, per scrivere la §5.** Si rilancia, non si crede. I comandi `git` vanno dati dalla radice di
daemon, in Git Bash, dopo `export MSYS_NO_PATHCONV=1`.

| Fatto | Comando o fonte |
|---|---|
| le versioni della §2.1; Node 24.19.0 su questa macchina | `npm view <pacchetto> version license`; `git show "origin/main:gui/package.json"`; `node --version` |
| `origin/main` di daemon è `c42c947`; l'audit c'è, e il segno «(col N)» con lui | `git rev-parse --short origin/main`; `git merge-base --is-ancestor origin/repo-audit/20260930-1510 origin/main`; `git show "origin/main:docs/README.md" \| grep -c 'col N'` |
| le cinque citazioni della §3.4 si trovano, a `c42c947` | per ciascuna: `git show "origin/main:<fonte>" \| tr '\n' ' ' \| tr -s ' ' \| grep -cF -- '<citazione>'` |
| Astro 7.3.6 porta Vite `^8.3.1`, Zod `^4.6.5` e smol-toml | `npm view astro@7.3.6 dependencies` |
| il caricatore `file()` di Astro legge JSON, YAML e TOML, e accetta l'oggetto con l'identificatore come chiave; Zod da `astro/zod`; la configurazione in `src/content.config.ts` | https://docs.astro.build/en/guides/content-collections/ |
| Vitest 4.1.11 accetta Vite 8; `@astrojs/check` 0.9.10 vuole TypeScript `^5` o `^6` | `npm view vitest@4.1.11 peerDependencies`; `npm view @astrojs/check@0.9.10 peerDependencies` |
| `playwright` 1.63.0 non ha script d'installazione, quindi non scarica browser | `npm view playwright@1.63.0 scripts` |
| `web-vitals` 6.2.3 contiene `dist/web-vitals.iife.js`, ma la sua mappa `exports` non lo espone | https://data.jsdelivr.com/v1/packages/npm/web-vitals@6.2.3?structure=flat; `npm view web-vitals@6.2.3 exports` |
| `cspell` 10.3.6 porta `cspell-lib` 10.3.6 e i dizionari di base, inglese compreso; espone `.` e `./application`; `@cspell/dict-it-it` espone `cspell-ext.json` | `npm view cspell@10.3.6 exports dependencies`; `npm view cspell-lib@10.3.6 dependencies`; `npm view @cspell/dict-it-it@3.1.7 exports` |
| `themes.css` di daemon: `:root` con le `--ref-*`; `[data-theme="dark"]` e `[data-theme="light"]` coi ruoli `--color-*` e `color-scheme` | `git show "origin/main:gui/src/tokens/themes.css"` |
| la GUI: il testo in Geist Variable, le etichette e i numeri in Barlow 300–600, importati da `gui/src/tokens/index.ts` | `git show "origin/main:gui/src/tokens/index.ts"`; `git grep -n -- '--font-family' origin/main -- gui/src/tokens/base.css` |
| la CI di daemon: `actions/checkout@v4`; `actions/setup-node@v7` con `node-version-file` e `package-manager-cache: false`; la matrice con `fail-fast: false`; `shell: bash`; nessuna azione di terzi | `git show "origin/main:.github/workflows/quality-gate.yml"` |
| il cancello della GUI: `npm ci --no-audit --no-fund`, `dist/` tolta prima della build, i due progetti di Vitest uno per volta, il Chrome installato, `npm audit` alla fine | `git show "origin/main:scripts/gate-gui.sh"` |
| Chrome 154 è installato su questa macchina | `ls "/c/Program Files/Google/Chrome/Application/"` |

**Già visto, da risolvere scrivendo i compiti.** Non sono decisioni prese:

- `hreflang`: da verificare alla fonte se vuole indirizzi completi. Se sì, la build ha bisogno dell'indirizzo del sito,
  da un'impostazione come l'indirizzo base (§7.5 del disegno), e il cancello le dà quello del server locale;
- il controllo del commit (§3.2 del disegno) si può fare senza rete — l'`origin` di daemon è `github.com/devfrx/daemon`, e
  la pagina cita il suo `origin/main` — oppure in rete, con l'API di GitHub. Se la scelta cambia ciò che il disegno
  chiede, va al proprietario;
- in CI, `actions/checkout` deve lasciare `origin/main` nel clone di daemon: da verificare;
- «English» e «Italiano» stanno nel file dell'altra lingua (§3.4): vanno nella lista delle parole di cspell;
- la §2.1 nomina `cspell`: se il controllo usa l'API di `cspell-lib`, quella riga cambia, col suo richiamo datato;
- `web-vitals.iife.js` non sta nella mappa `exports`: il percorso si ricava dalla cartella di `require.resolve("web-vitals")`.
