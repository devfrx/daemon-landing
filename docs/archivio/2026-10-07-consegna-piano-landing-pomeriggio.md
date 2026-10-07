# La consegna della sessione del pomeriggio del 2026-10-07 — il piano del traguardo 1 della landing

> 🗄️ **Che cos'è questo file.** La consegna che stava nella §6 del
> [piano del traguardo 1](../superpowers/plans/2026-10-07-landing-traguardo-1.md), qui parola per parola. È com'era alla
> chiusura della terza sessione del 2026-10-07, che vi aveva segnato i compiti 4–7 approvati e il passo 5 fatto; la
> versione scritta nel pomeriggio è nel commit `eaa6867`.

> 🔶 Oggi questa sezione è la consegna della sessione del pomeriggio del 2026-10-07: il piano è a metà. A piano finito,
> qui ci sarà come si esegue, e questa consegna andrà in archivio. Quella del mattino è in archivio, parola per parola:
> [`2026-10-07-consegna-piano-landing-mattina.md`](2026-10-07-consegna-piano-landing-mattina.md).

**Dove siamo:**

| Parte | Stato |
|---|---|
| §1–§4 | approvate, coi richiami del 2026-10-07 |
| §5, compiti 1–3 | approvati |
| §5, compiti 4–7 | ✅ approvati il 2026-10-07; il 7 con le parole vietate in ogni loro forma (risposta: A) |
| §5, compiti 8–13 | da scrivere |

Il codice dei compiti si prova prima di scriverlo (risposta del proprietario: A). La storia delle prove è nel
[verbale](2026-10-07-prove-piano-landing.md); lo scratchpad delle prove è stato cancellato.

**Il prossimo passo**, in una sessione nuova:

1. dentro `landing/`: `git fetch --all --prune`, `git status -sb`, e il fast-forward se serve;
2. leggi `CLAUDE.md`, questo piano e il disegno, per intero;
3. le skill: `superpowers:writing-plans`, `anthropic-skills:decision-principles`, `anthropic-skills:dev-communication`;
4. rilancia ciò che invecchia, coi comandi della tabella in fondo;
5. ✅ presenta al proprietario i compiti 4–7, con le scelte della tabella qui sotto, e chiedi il sì; commit e push — fatto
   nella sessione dopo, che li ha rifatti nello scratchpad dal testo del piano (§10 del verbale);
6. scrivi i compiti 8–13, ciascuno provato prima nello scratchpad come i primi sette, e presentali in due gruppi: 8–10,
   poi 11–13;
7. la §6 definitiva, cioè come si esegue; lo stato in testa; questa consegna in archivio; commit e push.

**Le scelte dei compiti 4–7**, da dire al proprietario quando li presenti:

| Scelta | Il perché, o il costo |
|---|---|
| il commit si controlla senza chiedere niente a GitHub: daemon si legge a `origin/main`, e `origin` dev'essere `devfrx/daemon` su GitHub (compito 6) | costo: in locale vale l'ultimo `git fetch`; in CI il clone è nuovo, e il controllo è esatto |
| lo spazio che non va a capo vale dopo ogni numero, non solo prima dell'unità (§3.3, col richiamo) | un programma non sa che cos'è un'unità, e quello spazio non è mai sbagliato |
| `@types/node` 24.13.5, la versione della GUI (§2.1, col richiamo) | senza, `astro check` si ferma sui file `.ts` |
| l'inglese lo rilegge un subagente nuovo lanciato dal coordinatore, non dal subagente del compito (compito 5) | i subagenti li lancia chi coordina, dopo averne detto il costo (`CLAUDE.md` di daemon) |
| le parole che i dizionari non conoscono: `daemon` e `devfrx`; in italiano `kernel` e `English`; in inglese `Italiano` (compito 7) | sono le sole che le frasi e l'interfaccia della §3.4 usano apposta |

**Già visto, per i compiti 8–13:**

| Compito | Che cosa si sa già | Nel verbale |
|---|---|---|
| 8 | `hreflang` vuole indirizzi completi, e ogni versione elenca se stessa e l'altra: serve l'indirizzo del sito, `site`, da un'impostazione come la base. Senza `site`, `getAbsoluteLocaleUrl` dà `/it/`: la build deve fermarsi se manca. In Git Bash un valore che comincia con `/`, come `LANDING_BASE=/daemon/`, va dato con `MSYS_NO_PATHCONV=1` | §1, §6 |
| 10 | Playwright apre il Chrome installato con `channel: 'chrome'`; un server di `dist/` scritto con `node:http`, senza pacchetti, basta — e deve servire la pagina sotto la base | §4 |
| 12 | il profilo si accende con una sessione CDP: `Network.enable`, `Network.emulateNetworkConditions`, `Emulation.setCPUThrottlingRate`; che sia acceso lo prova `responseEnd` della navigazione, non `responseStart`; si interagisce solo dopo che l'LCP è arrivato; la fine della misura si simula come nei test di `web-vitals`; il rosso, su una pagina con 300 ms di lavoro nel clic | §4, §5 |
| 13 | in CI, `actions/checkout` con `ref: main` lascia `origin/main` nel clone di daemon; daemon usa la v4, e l'ultima è la v7.0.1: si segue daemon e si segnala la differenza | §6 |
| 13 | la verifica delle impronte di `brand/` è già scritta, come prova a mano, nel passo 2 del compito 2: `src/lib/brand.ts` ne è la versione che resta | — |

**Ancora da provare**, scrivendo i compiti 8–13: se Chrome chiede `/favicon.ico`, e se la sua mancanza è un errore nella
console — in quel caso l'icona di `brand/` entra prima; come si mette `axe-core` 4.13.0 nella pagina, e i nomi delle sue
regole per WCAG 2.2 AA; quali token di `themes.css` usa la pagina; come Astro importa i caratteri di `@fontsource`;
`scripts/gate.mjs`, con l'ambiente della build: `LANDING_SITE` e `LANDING_BASE`.

**Da sapere subito:**

- ⚠️ daemon si muove mentre si lavora: in questa sessione `origin/main` è passato da `c42c947` a `973153f`, per
  un'altra sessione su daemon. Un commit di daemon non si scrive mai come vero: si rilancia
  `git -C .. rev-parse --short origin/main`;
- `daemon_kit/` non è nascosta a daemon, `/landing/` sì: `git -C .. check-ignore -v daemon_kit landing/CLAUDE.md`. Il
  `.gitignore` di daemon non ha ancora la riga `landing/`: ora che l'audit è su `main` si può fare, ed è lavoro di daemon;
- su questa macchina `du` su una `node_modules` nella cartella temporanea non finisce in due minuti: non serve;
- su Windows `chrome.exe --version` apre il browser invece di scrivere la versione: la versione si legge dal nome della
  cartella, `ls "/c/Program Files/Google/Chrome/Application/"`.

**Verificato il 2026-10-07, nel pomeriggio.** Si rilancia, non si crede. I comandi `git` dalla radice di daemon, in Git
Bash, dopo `export MSYS_NO_PATHCONV=1`.

| Fatto | Comando o fonte |
|---|---|
| le versioni della §2.1; Node 24.19.0 e npm 11.17.0 su questa macchina | `npm view <pacchetto> version license`; `git show "origin/main:gui/package.json"`; `node --version`; `npm --version` |
| `origin/main` di daemon era `973153f` alla chiusura; l'audit c'è, col segno «(col N)» | `git rev-parse --short origin/main`; `git merge-base --is-ancestor origin/repo-audit/20260930-1510 origin/main`; `git show "origin/main:docs/README.md" \| grep -c 'col N'` |
| le cinque citazioni della §3.4 si trovano, a `973153f` | per ciascuna: `git show "origin/main:<fonte>" \| tr '\n' ' ' \| tr -s ' ' \| grep -cF -- '<citazione>'` |
| fra `c42c947` e `973153f` la GUI non è cambiata: manifesto, token, cancello, CI | `git diff --stat c42c947 origin/main -- gui/package.json gui/src/tokens scripts/gate-gui.sh .github` |
| `themes.css` di daemon: `:root` con le `--ref-*`; `[data-theme="dark"]` e `[data-theme="light"]` coi ruoli `--color-*` e `color-scheme` | `git show "origin/main:gui/src/tokens/themes.css"` |
| la GUI: il testo in Geist Variable, le etichette e i numeri in Barlow 300–600, importati da `gui/src/tokens/index.ts` | `git show "origin/main:gui/src/tokens/index.ts"`; `git grep -n -- '--font-family' origin/main -- gui/src/tokens/base.css` |
| la CI di daemon: `actions/checkout@v4`; `actions/setup-node@v7` con `node-version-file` e `package-manager-cache: false`; la matrice con `fail-fast: false`; `shell: bash`; nessuna azione di terzi; verde | `git show "origin/main:.github/workflows/quality-gate.yml"`; `gh run list -R devfrx/daemon -L 4` |
| il cancello della GUI: `npm ci --no-audit --no-fund`, `dist/` tolta prima della build, i due progetti di Vitest uno per volta, il Chrome installato, `npm audit` alla fine | `git show "origin/main:scripts/gate-gui.sh"` |
| Chrome 154.0.8037.98 su questa macchina | `ls "/c/Program Files/Google/Chrome/Application/"` |
