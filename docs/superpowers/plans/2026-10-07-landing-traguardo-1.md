# Landing page di daemon — il piano del traguardo 1

> 🎯 **Che cos'è questo file.** Il piano del primo traguardo della landing: lo scheletro e il cancello. Realizza il
> disegno, [`docs/superpowers/specs/2026-10-06-landing-design.md`](../specs/2026-10-06-landing-design.md), e chi esegue
> legge tutti e due.
>
> **Per gli agenti:** si esegue con `superpowers:subagent-driven-development`, una fase per sessione: il pre-controllo,
> poi un compito per sessione (§7.1 del disegno). I passi hanno le caselle (`- [ ]`) per tenere il conto.
>
> 📌 **Dove siamo:** il piano si scrive una sezione per volta, ciascuna dopo il sì del proprietario. Da dove si riprende
> lo dice la §6.

| § | Sezione | Stato |
|---|---|---|
| 1 | Il perimetro | ✅ approvata il 2026-10-07 |
| 2 | Gli strumenti e i vincoli | ✅ approvata il 2026-10-07 |
| 3 | I testi | ✅ approvata il 2026-10-07 |
| 4 | La mappa dei file | ✅ approvata il 2026-10-07 |
| 5 | I compiti | 🔶 i compiti 1–3 approvati il 2026-10-07; i compiti 4–13 da scrivere |
| 6 | Come si riprende | 🔶 oggi è la consegna della sessione del 2026-10-07 |

---

## 1. Il perimetro

**L'obiettivo:** lo scheletro della pagina, nelle due lingue, e il cancello `npm run gate` coi controlli che hanno già
un caso vero da controllare; la CI lo lancia su Linux e su Windows.

**La regola del confine:** ogni pezzo arriva insieme alla prima cosa vera che lo usa. Così ogni controllo si prova nei
due sensi su un caso vero: rosso su un difetto messo apposta, verde sulla pagina giusta (§6.1 del disegno).

| Entra | Nel disegno |
|---|---|
| il `.gitattributes`, poi la copia in `brand/` con la nota delle impronte | §7.3, §7.2 |
| lo scheletro: Astro, `/` in inglese e `/it/` in italiano, i due temi coi token di daemon, l'indice fisso, i caratteri ospitati dalla pagina, l'indirizzo base come impostazione | §2.2, §2.4, §5.1, §5.4, §7.5 |
| i testi: il formato dei file, lo schema, le frasi dello scheletro | §3.1 |
| i controlli: le fonti — le citazioni, i numeri, le due lingue, il commit — e poi le parole, l'accessibilità, la rete, la velocità, la console, la pagina senza JavaScript, le impronte di `brand/` | §3.2, §6.1, §7.2 |
| la CI | §6.3 |

| Non entra | Quando arriva |
|---|---|
| l'orologio, la geometria, le scene e le loro foto | col traguardo 2, insieme alla prima scena |
| il controllo del marchio | con la Fig. 0: prima non c'è un marchio disegnato da controllare |
| i controlli dei nomi del codice e delle etichette | con la prima frase che li porta, cioè con le figure; le etichette, dopo l'arrivo dell'audit su `main` (§8.4 del disegno) |
| le figure e la legenda | dopo: il perimetro di ogni traguardo lo fissa il suo piano (§9 del disegno) |

**Le voci aperte del disegno** (§9), e che cosa ne fa questo piano:

| Voce | Qui |
|---|---|
| il formato dei file dei testi | **la chiude questo piano**, nella §3 |
| le interazioni con cui si misura l'INP | **la chiude questo piano**, nella §2 |
| dove si fanno le foto originali delle scene, e quanta differenza si tollera | il piano del traguardo 2 |
| l'etichetta di ogni figura, e i livelli della Fig. 1 | i piani delle figure |
| l'audit arriva su `main` col segno «(col N)» | ✅ arrivato, il 2026-10-07 |
| la riga `landing/` nel `.gitignore` di daemon | una sessione di daemon, dopo l'audit, su `main` |
| dove si pubblica | il proprietario, quando la pagina è pronta |

⚠️ **Richiamo del 2026-10-07:** l'audit è su `main`, col segno «(col N)»: le etichette aspettano ormai solo le figure —
il comando nel richiamo della §8.4 del disegno.

**Costo dichiarato:** il cancello è completo solo dopo il traguardo 2, che per questo è più pesante.

---

## 2. Gli strumenti e i vincoli

### 2.1 Gli strumenti

La GUI di daemon ha già un modo di fare queste cose — `gui/package.json`, `gui/.npmrc` e `scripts/gate-gui.sh` su
`origin/main` — e la landing lo segue.

| Strumento | Versione | Licenza | A che cosa serve |
|---|---|---|---|
| Node | `^22.22.2 \|\| ^24.15.0 \|\| >=26.0.0`, con `engine-strict=true` in `.npmrc` | — | lo stesso intervallo della GUI; sta dentro ciò che chiedono Astro (`>=22.12.0`) e cspell (`>=22.18.0`) |
| Astro | 7.3.6 | MIT | le pagine, le due lingue, lo schema dei testi (§5.1 del disegno) |
| TypeScript, `@astrojs/check` | 5.9.3, 0.9.10 | Apache-2.0, MIT | i tipi, controllati dentro la build: come `vue-tsc` nella GUI |
| Vitest | 4.1.11 | MIT | i test |
| `playwright` | 1.63.0 | Apache-2.0 | i controlli nel browser, col Chrome installato: non si scarica nessun browser, come nella GUI |
| `axe-core` | 4.13.0 | MPL-2.0 | l'accessibilità |
| `web-vitals` | 6.2.3 | Apache-2.0 | la velocità (§2.2) |
| `cspell-lib`, `@cspell/dict-it-it` | 10.3.6, 3.1.7 | MIT, GPL-3.0-or-later | i refusi: `cspell-lib` è la libreria di `cspell`, e il controllo chiama la sua funzione `spellCheckDocument`. Il dizionario inglese è già dentro; quello italiano è GPL, ed è uno strumento di sviluppo che non entra nella pagina |
| `@fontsource-variable/geist`, `@fontsource/barlow` | 5.3.0, 5.3.0 | OFL-1.1 | i caratteri, ospitati dalla pagina |

**Come nella GUI:** versioni esatte, senza `^`; il cancello installa con `npm ci --no-audit --no-fund`; alla fine lancia
`npm audit`, senza `--audit-level`.

**Non come nella GUI:** il `package.json` spegne lo script d'installazione di `esbuild`, che arriva con Astro, con
`"allowScripts": { "esbuild": false }` (risposta del proprietario: A, il 2026-10-07). Oggi npm esegue quegli script e
avvisa; una sua versione futura li bloccherà, e così la scelta è scritta invece di cambiare da sola. Tutto gira anche
senza.

⚠️ **Richiamo del 2026-10-07:** per i refusi serve `cspell-lib`, non il programma `cspell`; e lo script di `esbuild` è
spento — la storia nel [verbale delle prove](../../archivio/2026-10-07-prove-piano-landing.md), §3 e §7.

**La regola delle versioni:** se la GUI di daemon usa già un pacchetto, la landing prende la stessa versione; se no,
l'ultima stabile del giorno del piano. Si rilancia con `git show "origin/main:gui/package.json"` dalla radice di daemon e
con `npm view <pacchetto> version license`, il 2026-10-07.

**Costo dichiarato:** Vitest resta indietro di una versione grande — la 5.0.0 è del 2026-09-03 — e `axe-core` di una
piccola — la 4.14.0 è del 2026-10-05. Si aggiornano con un atto apposta, come ogni dipendenza.

⚠️ **Richiamo del 2026-10-07:** resta indietro anche TypeScript, di due versioni grandi — la 7.0.2 è del 2026-07-08 — e
`@astrojs/check` 0.9.10 accetta solo la 5 e la 6: `npm view typescript time`, `npm view @astrojs/check@0.9.10
peerDependencies`.

### 2.2 La velocità

| | |
|---|---|
| **lo strumento** | `web-vitals`, la libreria di Google che misura LCP, CLS e INP come li misura Chrome. Playwright la mette nella pagina costruita, nella sua versione `web-vitals.iife.js`, e fa le interazioni |
| **il profilo** | sempre lo stesso, quello «telefono» di Lighthouse, coi numeri che Lighthouse usa quando a rallentare è Chrome: lo schermo di 412 × 823 punti, densità 1,75; 562,5 ms di attesa per richiesta, 1474,56 Kbps in discesa e 675 Kbps in salita — cioè 150 ms, 1,6 Mbps e 750 Kbps coi fattori di correzione di Lighthouse, 3,75 e 0,9, perché Chrome rallenta richiesta per richiesta e non pacchetto per pacchetto; il processore 4 volte più lento. Lo impone Chrome stesso durante la misura, quindi i numeri sono osservati, non stimati |
| **le interazioni dell'INP** | il cambio di tema e un salto dall'indice, col mouse e con la tastiera. Ogni traguardo dopo aggiunge le sue: per esempio «Salta» e la prova da toccare della Fig. 5 |
| **le soglie** | LCP entro 2,5 s, INP entro 200 ms, CLS entro 0,1 (§6.1 del disegno) |

Le fonti, guardate il 2026-10-07: il profilo e il fatto che Lighthouse di base stima i numeri con un modello,
https://github.com/GoogleChrome/lighthouse/blob/main/docs/throttling.md; i numeri per Chrome, `mobileSlow4G` in
https://github.com/ChromeDevTools/devtools-frontend/blob/main/front_end/models/trace/lantern/simulation/Constants.ts; lo
schermo, `MOTOGPOWER_EMULATION_METRICS` in https://github.com/GoogleChrome/lighthouse/blob/main/core/config/constants.js;
i percorsi utente solo con Puppeteer,
https://github.com/GoogleChrome/lighthouse/blob/main/docs/user-flows.md; la versione da iniettare e l'INP che c'è solo se
qualcuno interagisce, https://github.com/GoogleChrome/web-vitals/blob/main/README.md.

**Costo dichiarato:** il codice che misura lo scriviamo noi, coi suoi test, e non c'è il rapporto dettagliato di
Lighthouse.

⚠️ **Richiamo del 2026-10-07:** il profilo porta i numeri che Lighthouse dà a Chrome, e lo schermo del telefono — la
storia nella §4 del [verbale delle prove](../../archivio/2026-10-07-prove-piano-landing.md), con le fonti.

**Scartata:** Lighthouse. Per l'INP servono i suoi percorsi utente, che funzionano solo con Puppeteer: sarebbe un secondo
modo di guidare il browser accanto a Playwright, con due dipendenze pesanti; e di base i suoi numeri sono stimati da un
modello, non osservati.

### 2.3 I vincoli globali

Valgono per ogni compito, anche quando il compito non li ripete.

| # | Il vincolo | Da dove viene |
|---|---|---|
| 1 | il codice in inglese — file, funzioni, messaggi d'uscita, commenti — e i documenti in italiano | `CLAUDE.md` di daemon, §1.0 della sua spec |
| 2 | mai «open source» né «scarica» in italiano; mai «open source» né «download» in inglese | §1 regola 3 e §3.2 del disegno |
| 3 | nessuna richiesta a siti di terzi | §1 regola 4 e §5.1 del disegno |
| 4 | ogni file di testo va a capo alla Linux (LF) | §7.3 del disegno |
| 5 | daemon si legge a `origin/main`, mai dalla sua cartella di lavoro | §6.2 del disegno |
| 6 | *«Un numero misurato non si scrive: si scrive il COMANDO che lo produce»* | `CLAUDE.md` di daemon; §3.2 del disegno |
| 7 | ogni controllo si prova nei due sensi: rosso su un difetto messo apposta, verde sulla pagina giusta | `CLAUDE.md` di daemon; §6.1 del disegno |
| 8 | l'indirizzo base è un'impostazione, mai scritto nel codice | §7.5 del disegno |
| 9 | una dipendenza si aggiunge in due passi: il cancello usa `npm ci`; il lockfile si rinfresca fuori dal cancello, con `npm install`, e si committa insieme al manifesto | `CLAUDE.md` di daemon, finding G-5 |
| 10 | due temi, chiaro e scuro; senza JavaScript, il tema è quello scuro | §2.2 e §5.3 del disegno |
| 11 | ogni riga di codice di prodotto nasce da un test che prima era rosso | `CLAUDE.md` di daemon, `superpowers:test-driven-development` |
| 12 | alla chiusura di ogni compito, commit e push, senza co-autore | `CLAUDE.md` di daemon |

---

## 3. I testi

### 3.1 Due tipi di testo

Il disegno vuole una fonte per ogni frase (§3.1 del disegno). Ma la pagina ha anche parole che non dicono niente su
daemon, e servono solo a usarla: queste una fonte non ce l'hanno, e il disegno non diceva dove stanno. Stanno in un file a
parte (risposta del proprietario: A, il 2026-10-07).

| Tipo | Che cos'è | Dove | Che cosa porta | I controlli |
|---|---|---|---|---|
| **le frasi** | ciò che la pagina dice di daemon | `src/texts/it.json`, `src/texts/en.json` | in italiano il testo, la fonte, la citazione e, per un meccanismo, l'etichetta; in inglese il testo, con la fonte della frase italiana | tutti: le fonti (§3.2 del disegno) e le parole |
| **l'interfaccia** | le parole per usare la pagina: «Salta», l'indice, il tema, la lingua, i nomi delle sezioni | `src/ui/it.json`, `src/ui/en.json` | il testo | le parole — refusi, tipografia, parole vietate — e le due lingue; e **nessuna cifra**, perché un numero è sempre un fatto, e un fatto ha una fonte |

**Costo dichiarato:** i file di testo sono quattro invece di due. E una frase su daemon messa per sbaglio fra le parole
d'interfaccia sfugge al controllo delle fonti: la vede chi rilegge — il secondo revisore e il proprietario.

**Scartata:** l'interfaccia nello stesso file delle frasi, con un segno al posto della fonte. La regola «ogni frase ha la
sua fonte» avrebbe un'eccezione dentro il suo stesso file, e lo schema dovrebbe prevederla.

### 3.2 Il formato

**JSON**, come le parole della GUI di daemon in `gui/src/locales/it.json`: un oggetto per file, con l'identificatore come
chiave — la forma che il caricatore `file()` di Astro accetta (https://docs.astro.build/en/guides/content-collections/,
guardata il 2026-10-07). Lo schema lo controlla Astro, con Zod importato da `astro/zod`.

**Costo dichiarato:** niente commenti, ogni frase su una riga sola, e le virgolette dritte `"` dentro una citazione vanno
scritte come `\"`.

### 3.3 La lingua e la tipografia

L'inglese è quello americano (`en-US`), il predefinito di cspell. Le regole valgono per ciò che appare sulla pagina — il
testo delle frasi e l'interfaccia — e mai per le citazioni, che sono copiate da daemon lettera per lettera.

| | Italiano | Inglese |
|---|---|---|
| l'apostrofo | ’, mai `'` | ’, mai `'` |
| le virgolette | « » (dentro, “ ”), mai `"` | “ ” (dentro, ‘ ’), mai `"` |
| il trattino lungo | — con uno spazio per lato, come nei documenti di daemon | — senza spazi |
| i puntini | …, mai `...` | …, mai `...` |
| un numero e la sua unità | separati da uno spazio che non va a capo: «16 GB» | lo stesso |
| gli spazi | mai due di fila, mai prima di `, . ; : ! ?` | lo stesso |

**Costo dichiarato:** il controllo della tipografia è codice nostro.

### 3.4 Le parole del traguardo 1

**Le frasi**, nella sezione «Cos’è» (risposta del proprietario: A, tutte e cinque, il 2026-10-07). Il disegno, per
«Cos’è», nomina i pilastri, il kernel comune e la GPU; la 1 e la 4 dicono che cos'è daemon e che cosa fa il kernel. Le
citazioni sono state trovate su `origin/main` di daemon, al commit `50cc61f`, con a-capo e spazi doppi ignorati — come
fa il controllo (§3.2 del disegno).

| Identificatore | Italiano | Inglese | Fonte, in daemon | Citazione |
|---|---|---|---|---|
| `what-app` | Un assistente desktop locale, per un utente solo. | A local desktop assistant, for a single user. | `CLAUDE.md` | `Assistente desktop locale, utente singolo` |
| `what-pillars` | Quattro pilastri paritari, su un kernel comune. | Four equal pillars, on a shared kernel. | `docs/superpowers/specs/2026-08-06-kernel-design.md` | `Piattaforma a quattro pilastri paritari su kernel comune` |
| `what-pillar-names` | Conversazione e conoscenza, agenti e coding, voce e gesti, generazione di asset 3D. | Conversation and knowledge, agents and coding, voice and gestures, 3D asset generation. | `CLAUDE.md` | `conversazione e conoscenza, agenti e coding, voce e gesti, generazione asset 3D` |
| `what-kernel` | Il kernel non implementa nessuna funzionalità utente: fornisce i meccanismi. | The kernel implements no user features: it provides the mechanisms. | `docs/tracciabilita.md` | `**Il kernel non implementa nessuna funzionalità utente.** Fornisce i meccanismi` |
| `what-limit` | I quattro pilastri si contendono una sola GPU da 16 GB. | The four pillars compete for a single 16 GB GPU. | `docs/adr/0005-arbitrato-gpu-su-due-dimensioni.md` | `Quattro pilastri paritari si contendono una sola GPU da 16 GB.` |

In «16 GB», fra il numero e l'unità, c'è lo spazio che non va a capo (§3.3): nei file JSON si scrive `16\u00a0GB`. Le
citazioni sono letterali, asterischi compresi. La descrizione per i motori di ricerca è la frase `what-app`.

**L'interfaccia:**

| Identificatore | Italiano | Inglese | Dove |
|---|---|---|---|
| `site-title` | daemon | daemon | il titolo della pagina |
| `skip-to-content` | Vai al contenuto | Skip to content | il primo link, per chi usa la tastiera |
| `contents` | Indice | Contents | il nome dell'indice fisso |
| `section-what` | Cos’è | What it is | il titolo della sezione, e la sua voce nell'indice |
| `dark-theme` | Tema scuro | Dark theme | l'interruttore del tema |
| `other-language` | English | Italiano | il nome del link all'altra lingua, scritto nella lingua di arrivo |
| `other-language-short` | EN | IT | ciò che quel link mostra |
| `source` | Fonte | Source | il segno accanto a ogni frase |
| `code-on-github` | devfrx/daemon su GitHub | devfrx/daemon on GitHub | il link al codice, in fondo |
| `provenance` | Le frasi e i numeri di questa pagina vengono da devfrx/daemon, al commit {commit}. | The sentences and numbers on this page come from devfrx/daemon, at commit {commit}. | la riga in fondo: `{commit}` lo scrive la build |

L'inglese lo rilegge un subagente nuovo, frase per frase, contro l'italiano, nel compito dei testi (§3.2 del disegno).

---

## 4. La mappa dei file

Ogni pezzo fa una cosa sola, e si prova da solo (§5.2 del disegno).

```
landing/
├─ .gitattributes                         compito 1: gli a-capo alla Linux
├─ brand/                                 compito 2: i file del kit, copiati, e la nota delle impronte
├─ .gitignore  .npmrc  package.json  package-lock.json
│  tsconfig.json  astro.config.mjs  vitest.config.ts       compito 3: il progetto Node
├─ src/
│  ├─ lib/                                il codice che non è pagina, ogni file col suo test accanto (*.test.ts)
│  │  ├─ daemon.ts                        compito 4: un file e il commit di daemon, a origin/main
│  │  ├─ texts.ts                         compito 5: gli schemi dei testi
│  │  ├─ sources.ts                       compito 6: citazioni, numeri, due lingue, commit
│  │  ├─ words.ts                         compito 7: refusi, tipografia, parole vietate, cifre
│  │  ├─ tokens.ts                        compito 9: i token che la pagina usa e quelli che daemon definisce
│  │  └─ brand.ts                         compito 13: le impronte
│  ├─ texts/it.json  texts/en.json        compito 5: le frasi
│  ├─ ui/it.json  ui/en.json              compito 5: l'interfaccia
│  ├─ content.config.ts                   compito 5: le quattro raccolte di Astro
│  ├─ pages/index.astro  pages/it/index.astro       compito 3, poi 8
│  └─ layouts/  components/  sections/  styles/     compiti 8 e 9: la pagina
├─ checks/                                i controlli del cancello, un file per riga della §6.1 del disegno
│  ├─ sources.test.ts                     compito 6
│  ├─ words.test.ts                       compito 7
│  ├─ tokens.test.ts                      compito 9
│  ├─ support/                            compito 10: il server di dist/ e il browser
│  ├─ network.page.test.ts  console.page.test.ts  no-javascript.page.test.ts       compito 10
│  ├─ accessibility.page.test.ts          compito 11
│  ├─ speed.page.test.ts                  compito 12
│  └─ brand.test.ts                       compito 13
├─ scripts/gate.mjs                       compito 13: npm run gate
└─ .github/workflows/quality-gate.yml     compito 13: la CI
```

I controlli che non hanno bisogno del browser finiscono in `*.test.ts`; quelli che guardano la pagina costruita, in
`*.page.test.ts`. Sono due progetti di Vitest, e il cancello li lancia uno per volta, come fa `scripts/gate-gui.sh` in
daemon.

**Due scelte**, approvate con la mappa (risposta del proprietario: A, il 2026-10-07):

1. **`npm run gate` è un programma Node**, `scripts/gate.mjs`, e non uno script bash come in daemon: su Windows il comando
   `bash` può aprire quello di WSL invece di Git Bash — la CI di daemon lo scrive accanto a `shell: bash` — mentre Node
   gira uguale dappertutto.
2. **Ogni dipendenza arriva col compito che la usa**, non tutte nel compito 3: è la regola del confine (§1) applicata ai
   pacchetti. Ognuna entra in due passi (vincolo 9).

⚠️ **Richiamo del 2026-10-07:** `vitest.config.ts` arriva col compito 4, insieme a Vitest, per la regola 2 qui sopra.

**I compiti**, uno per sessione, dopo quella del pre-controllo:

| # | Compito | Che cosa consegna |
|---|---|---|
| 1 | il `.gitattributes` | ogni file di testo va a capo alla Linux, su ogni macchina |
| 2 | la copia in `brand/` | i file del kit che la pagina usa, e la nota con provenienza, data e impronta |
| 3 | il progetto Node e le due pagine vuote | `npm run build` produce `/` in inglese e `/it/` in italiano |
| 4 | leggere daemon a `origin/main` | un file e il commit, mai dalla cartella di lavoro |
| 5 | i testi e i loro schemi | le parole della §3.4, controllate da Astro; l'inglese riletto da un subagente nuovo |
| 6 | il controllo delle fonti | rosso se una citazione, un numero, una lingua o il commit non torna |
| 7 | il controllo delle parole | rosso su un refuso, una regola della tipografia, una parola vietata, una cifra nell'interfaccia |
| 8 | la pagina | l'indice, «Cos’è», il segno della fonte, la chiusura, il link all'altra lingua |
| 9 | i due temi | i colori di daemon, l'interruttore, il tema scuro senza JavaScript; rosso se manca un token |
| 10 | i controlli nel browser | rosso su una richiesta a terzi, un errore in console, del testo che manca senza JavaScript |
| 11 | l'accessibilità | zero errori di axe sulle regole WCAG 2.2 AA; tutto si usa da tastiera |
| 12 | la velocità | LCP, CLS e INP sotto le soglie, col profilo e le interazioni della §2.2 |
| 13 | le impronte, il cancello e la CI | `npm run gate`, e la CI su Linux e Windows, a ogni push e una volta a settimana |

---

## 5. I compiti

Ogni compito si esegue in una sessione sua, da un subagente nuovo, dopo il pre-controllo (§7.1 del disegno, e le quattro
domande del `CLAUDE.md` di daemon). Il codice dei compiti è stato visto girare il 2026-10-07 nello scratchpad (risposta
A, §6): la storia delle prove è nel [verbale](../../archivio/2026-10-07-prove-piano-landing.md).

| Come si leggono | |
|---|---|
| **i comandi** | si danno da `landing/`, in Git Bash; quelli che leggono daemon, con `MSYS_NO_PATHCONV=1` davanti |
| **le prove a mano** | i programmi che servono solo a provare stanno fuori dal repository: nello scratchpad della sessione, o in una cartella di `mktemp -d` |
| **«Atteso»** | ciò che il comando deve scrivere. Se scrive altro ci si ferma e lo si dice: la divergenza si registra, il piano non si corregge in silenzio |
| **il commit** | alla fine del compito, in italiano, senza co-autore, nella forma `t1(compito N): …` — `t1` è questo traguardo; poi `git push` |

### Compito 1 — il `.gitattributes`

**File:** crea `.gitattributes`.

**Usa:** niente. **Lascia:** ogni file di testo va a capo alla Linux, su ogni macchina; i file binari restano come sono
(§7.3 del disegno).

- [ ] **Passo 1 — la prova, rossa.** Una copia nuova del repository ha gli a-capo di Windows:

```bash
d=$(mktemp -d) && git clone -q . "$d/landing" && git -C "$d/landing" ls-files --eol | grep -c 'w/crlf'; rm -rf "$d"
```

Atteso, su Windows con `core.autocrlf=true`: un numero più grande di 0. Su una macchina senza `core.autocrlf` è 0, e la
prova rossa è `git check-attr eol -- CLAUDE.md`, che risponde `CLAUDE.md: eol: unspecified`.

- [ ] **Passo 2 — il file.** `.gitattributes`, una riga sola:

```gitattributes
* text=auto eol=lf
```

- [ ] **Passo 3 — nessun file cambia.**

```bash
git add .gitattributes && git add --renormalize . && git status --short
```

Atteso: `A  .gitattributes`, e nient'altro.

- [ ] **Passo 4 — gli attributi.**

```bash
git check-attr text eol -- CLAUDE.md
```

Atteso:

```
CLAUDE.md: text: auto
CLAUDE.md: eol: lf
```

- [ ] **Passo 5 — il commit.**

```bash
git commit -m "t1(compito 1): il .gitattributes -- ogni file di testo va a capo alla Linux, su ogni macchina (§7.3 del disegno)"
```

- [ ] **Passo 6 — la prova, verde.** Lo stesso comando del passo 1, che adesso clona il commit nuovo:

```bash
d=$(mktemp -d) && git clone -q . "$d/landing" && git -C "$d/landing" ls-files --eol | grep -c 'w/crlf'; rm -rf "$d"
```

Atteso: `0`.

- [ ] **Passo 7 —** `git push`.

### Compito 2 — la copia in `brand/`

**File:** crea `brand/`: le copie dei file del kit, e la nota `brand/provenance.json`.

**Usa:** il kit, in `../daemon_kit/`, che sta solo su questa macchina (§7.2 del disegno). **Lascia:**

| In `brand/` | Che cos'è |
|---|---|
| ogni `*.svg` di `../daemon_kit/` | i SVG del marchio |
| `daemon - studio del marchio.html` | lo studio del marchio |
| `daemon — splash.html` | la splash: l'unico file col blocco `GEOMETRY` |
| `provenance.json` | la nota: per ogni file, da dove viene, quando è stato copiato e la sua impronta |

Le copie sono byte per byte, coi nomi del kit. I PNG e il video del kit non servono alla pagina, e non si copiano. La nota
è un oggetto JSON, una voce per file, ordinate per nome; il compito 13 la legge:

```json
{
  "daemon-mark-dark.svg": {
    "from": "daemon_kit/daemon-mark-dark.svg",
    "copied": "<il giorno della copia, AAAA-MM-GG>",
    "sha256": "<l'impronta SHA-256 del file, in 64 cifre esadecimali>"
  }
}
```

Il controllo che resta arriva col compito 13; qui la prova è a mano, e il suo programma sta fuori dal repository.

- [ ] **Passo 1 — il kit c'è, e va a capo alla Linux.**

```bash
ls ../daemon_kit/*.svg ../daemon_kit/*.html && cat ../daemon_kit/*.svg ../daemon_kit/*.html | tr -cd '\r' | wc -c && grep -c 'GEOMETRY-START' "../daemon_kit/daemon — splash.html"
```

Atteso: gli SVG, `daemon - studio del marchio.html` e `daemon — splash.html`; poi `0`; poi `1`. Se il kit non c'è, ci si
ferma: il compito si fa sulla macchina dove sta.

- [ ] **Passo 2 — il programma di prova**, `verify-brand.mjs`, fuori dal repository. Si lancia da `landing/`:

```js
import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync } from 'node:fs';

const sha256 = (path) => createHash('sha256').update(readFileSync(path)).digest('hex');
if (!existsSync('brand/provenance.json')) {
  console.error('brand/provenance.json is missing');
  process.exit(1);
}
const note = JSON.parse(readFileSync('brand/provenance.json', 'utf8'));
const copies = readdirSync('brand').filter((name) => name !== 'provenance.json').sort();
const problems = [];
if (JSON.stringify(copies) !== JSON.stringify(Object.keys(note).sort())) {
  problems.push('brand/ and the note list different files');
}
for (const [name, { from, sha256: recorded }] of Object.entries(note)) {
  if (!existsSync(`brand/${name}`) || sha256(`brand/${name}`) !== recorded) {
    problems.push(`brand/${name}: not the recorded fingerprint`);
  }
  if (!existsSync(`../${from}`) || sha256(`../${from}`) !== recorded) {
    problems.push(`../${from}: not the recorded fingerprint`);
  }
}
if (problems.length > 0) {
  console.error(problems.join('\n'));
  process.exit(1);
}
console.log(`${copies.length} files, identical to the kit and to the note`);
```

- [ ] **Passo 3 — la prova, rossa.** `node <cartella>/verify-brand.mjs`. Atteso: `brand/provenance.json is missing`, e
l'uscita è 1.

- [ ] **Passo 4 — le copie.**

```bash
mkdir brand && cp ../daemon_kit/*.svg "../daemon_kit/daemon - studio del marchio.html" "../daemon_kit/daemon — splash.html" brand/
```

- [ ] **Passo 5 — la nota**, scritta da un programma che legge le copie:

```bash
node --input-type=module - <<'EOF'
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';

const now = new Date();
const copied = [now.getFullYear(), now.getMonth() + 1, now.getDate()].map((n) => String(n).padStart(2, '0')).join('-');
const note = {};
for (const name of readdirSync('brand').sort()) {
  const sha256 = createHash('sha256').update(readFileSync(`brand/${name}`)).digest('hex');
  note[name] = { from: `daemon_kit/${name}`, copied, sha256 };
}
writeFileSync('brand/provenance.json', `${JSON.stringify(note, null, 2)}\n`);
EOF
```

- [ ] **Passo 6 — la prova, verde.** `node <cartella>/verify-brand.mjs`. Atteso: `N files, identical to the kit and to
the note`, con N il numero dei file copiati al passo 4.

- [ ] **Passo 7 — l'altro senso.** Un byte in più in una copia la rende rossa; poi la copia giusta torna al suo posto:

```bash
printf ' ' >> brand/daemon-mark-dark.svg; node <cartella>/verify-brand.mjs; cp ../daemon_kit/daemon-mark-dark.svg brand/ && node <cartella>/verify-brand.mjs
```

Atteso: prima `brand/daemon-mark-dark.svg: not the recorded fingerprint`, poi di nuovo il verde del passo 6.

- [ ] **Passo 8 — il commit**, e gli a-capo di ciò che è entrato:

```bash
git add brand && git commit -m "t1(compito 2): la copia del kit in brand/ -- i SVG del marchio, lo studio e la splash, byte per byte, e la nota con provenienza, data e impronta (§7.2 del disegno)" && git ls-files --eol brand | grep -vc 'i/lf *w/lf'
```

Atteso: `0`, cioè ogni file va a capo alla Linux, nel repository e sul disco.

- [ ] **Passo 9 —** `git push`.

### Compito 3 — il progetto Node e le due pagine vuote

**File:** crea `.npmrc`, `.gitignore`, `package.json`, `package-lock.json` (lo scrive npm), `tsconfig.json`,
`astro.config.mjs`, `src/pages/index.astro`, `src/pages/it/index.astro`.

**Usa:** niente. **Lascia:**

- `npm run build`, cioè `astro check && astro build`: i tipi controllati dentro la build, come `vue-tsc --noEmit && vite
  build` nella GUI;
- le due lingue in `astro.config.mjs`: `Astro.currentLocale` vale `en` su `/` e `it` su `/it/`;
- `astro` 7.3.6, `@astrojs/check` 0.9.10 e `typescript` 5.9.3, e lo script di `esbuild` spento (§2.1).

- [ ] **Passo 1 — i file del progetto.**

`.npmrc`:

```ini
engine-strict=true
```

`.gitignore`:

```gitignore
node_modules/
dist/
.astro/
```

`package.json`:

```json
{
  "name": "daemon-landing",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "engines": {
    "node": "^22.22.2 || ^24.15.0 || >=26.0.0"
  },
  "scripts": {
    "build": "astro check && astro build"
  },
  "devDependencies": {
    "@astrojs/check": "0.9.10",
    "astro": "7.3.6",
    "typescript": "5.9.3"
  },
  "allowScripts": {
    "esbuild": false
  }
}
```

`tsconfig.json`:

```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}
```

`astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: { locales: ['en', 'it'], defaultLocale: 'en' },
});
```

- [ ] **Passo 2 — i pacchetti**, fuori dal cancello (vincolo 9):

```bash
npm install --no-audit --no-fund && npm approve-scripts --allow-scripts-pending
```

Atteso: nessun avviso `allow-scripts` durante l'installazione, e alla fine `No packages with unreviewed install
scripts.`. Nasce `package-lock.json`.

- [ ] **Passo 3 — la prova, rossa.**

```bash
npm run build; node --input-type=module - <<'EOF'
import { existsSync, readFileSync } from 'node:fs';

for (const [file, lang] of [['dist/index.html', 'en'], ['dist/it/index.html', 'it']]) {
  const html = existsSync(file) ? readFileSync(file, 'utf8') : '';
  if (!html.includes(`<html lang="${lang}"`)) {
    console.error(`${file}: no <html lang="${lang}">`);
    process.exit(1);
  }
}
console.log('both pages, both languages');
EOF
```

Atteso: la build esce con 0 e avvisa soltanto `Missing pages directory: src/pages` — per questo la prova guarda i file
prodotti, non l'uscita; la verifica scrive `dist/index.html: no <html lang="en">` ed esce con 1.

- [ ] **Passo 4 — le due pagine.** `src/pages/index.astro` e `src/pages/it/index.astro`, uguali:

```astro
<html lang={Astro.currentLocale}>
  <head>
    <meta charset="utf-8" />
  </head>
  <body></body>
</html>
```

- [ ] **Passo 5 — la prova, verde.** Gli stessi comandi del passo 3. Atteso: la build scrive `0 errors` e `2 page(s)
built`; la verifica, `both pages, both languages`.

- [ ] **Passo 6 — nessuna vulnerabilità nota.** `npm audit`. Atteso: `found 0 vulnerabilities`.

- [ ] **Passo 7 — il commit.** `git status --short` mostra solo i file del compito: niente `node_modules/`, `dist/` o
`.astro/`.

```bash
git add .npmrc .gitignore package.json package-lock.json tsconfig.json astro.config.mjs src && git commit -m "t1(compito 3): il progetto Node e le due pagine vuote -- npm run build scrive / in inglese e /it/ in italiano; astro, @astrojs/check e typescript alle versioni della §2.1, e lo script di esbuild spento"
```

- [ ] **Passo 8 —** `git push`.

---

## 6. Come si riprende

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
