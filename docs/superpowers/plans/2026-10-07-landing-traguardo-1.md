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
| 5 | I compiti | 🔶 i compiti 1–3 approvati il 2026-10-07; i compiti 4–7 scritti, da approvare; i compiti 8–13 da scrivere |
| 6 | Come si riprende | 🔶 oggi è la consegna della sessione del pomeriggio del 2026-10-07 |

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
| `@types/node` | 24.13.5 | MIT | i tipi di Node: `astro check` controlla anche i file `.ts`, e il codice che legge daemon usa `node:child_process` |
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

⚠️ **Richiamo del 2026-10-07:** per i refusi serve `cspell-lib`, non il programma `cspell`; servono i tipi di Node,
`@types/node`; e lo script di `esbuild` è spento — la storia nel
[verbale delle prove](../../archivio/2026-10-07-prove-piano-landing.md), §3, §7 e §9.

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
| un numero e la parola dopo | separati da uno spazio che non va a capo: «16 GB» | lo stesso |
| gli spazi | mai due di fila, mai prima di `, . ; : ! ?` | lo stesso |

**Costo dichiarato:** il controllo della tipografia è codice nostro.

⚠️ **Richiamo del 2026-10-07:** lo spazio che non va a capo vale dopo ogni numero, non solo prima dell'unità: un
programma non sa che cos'è un'unità, e quello spazio non è mai sbagliato — la storia nella §9 del
[verbale delle prove](../../archivio/2026-10-07-prove-piano-landing.md).

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

### Compito 4 — leggere daemon a `origin/main`

**File:** crea `vitest.config.ts`, `src/lib/daemon.ts`, `src/lib/daemon.test.ts`; modifica `package.json` e
`package-lock.json`.

**Usa:** il progetto del compito 3. **Lascia:**

- `npm test`, cioè `vitest run`, e il progetto di Vitest `checks`: i test di `src/**/*.test.ts` e di `checks/**/*.test.ts`;
- in `src/lib/daemon.ts`, `openDaemon(root?: string): Daemon`, con `Daemon` = `{ readonly commit: string; read(path:
  string): string }`. Senza `root`, daemon è la cartella che contiene la landing. `commit` è l'hash intero di
  `origin/main`, letto una volta sola, e `read` legge un file a quel commit: così ogni lettura viene dallo stesso commit,
  anche se nel frattempo qualcuno fa `git fetch`. Si ferma con `no origin/main in …` e con `… is not in daemon at …`;
- `vitest` 4.1.11 e `@types/node` 24.13.5: `astro check` controlla anche i file `.ts`, e senza i tipi di Node si ferma su
  `node:child_process` e su `process`.

- [ ] **Passo 1 — i pacchetti**, fuori dal cancello (vincolo 9):

```bash
npm install --no-audit --no-fund --save-exact --save-dev vitest@4.1.11 @types/node@24.13.5 && npm approve-scripts --allow-scripts-pending
```

Atteso: `No packages with unreviewed install scripts.`. Poi, in `package.json`, lo script dei test accanto a quello della
build:

```json
  "scripts": {
    "build": "astro check && astro build",
    "test": "vitest run"
  },
```

- [ ] **Passo 2 — la configurazione di Vitest**, `vitest.config.ts`. È già fatta a progetti: il secondo, `page`, arriva
col compito 10.

```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: [{ test: { name: 'checks', include: ['src/**/*.test.ts', 'checks/**/*.test.ts'] } }],
  },
});
```

- [ ] **Passo 3 — il test, rosso.** `src/lib/daemon.test.ts`. Ogni test si costruisce un repository suo: `origin/main`
dice una cosa, un commit locale dopo di lui e la cartella di lavoro ne dicono altre due.

```ts
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, test } from 'vitest';
import { openDaemon } from './daemon';

const roots: string[] = [];
afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true });
});

// A repository built the same way on every machine: no global identity, no line-ending conversion.
function git(root: string, ...args: string[]): string {
  const settings = ['-c', 'user.name=test', '-c', 'user.email=test@example.invalid', '-c', 'core.autocrlf=false', '-c', 'init.defaultBranch=main'];
  return execFileSync('git', ['-C', root, ...settings, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
}

// origin/main says "on main"; a local commit after it and the working tree say something else.
function repository(): { root: string; main: string } {
  const root = mkdtempSync(join(tmpdir(), 'landing-daemon-'));
  roots.push(root);
  git(root, 'init', '--quiet');
  writeFileSync(join(root, 'notes.md'), 'on main\n');
  git(root, 'add', 'notes.md');
  git(root, 'commit', '--quiet', '-m', 'main');
  const main = git(root, 'rev-parse', 'HEAD');
  git(root, 'update-ref', 'refs/remotes/origin/main', main);
  writeFileSync(join(root, 'notes.md'), 'on a local commit\n');
  git(root, 'commit', '--quiet', '-am', 'local');
  writeFileSync(join(root, 'notes.md'), 'in the working tree\n');
  return { root, main };
}

describe('openDaemon', () => {
  test('takes the commit of origin/main', () => {
    const { root, main } = repository();
    expect(openDaemon(root).commit).toBe(main);
  });

  test('reads a file at origin/main, not at HEAD and not in the working tree', () => {
    const { root } = repository();
    expect(openDaemon(root).read('notes.md')).toBe('on main\n');
  });

  test('refuses a repository without origin/main', () => {
    const { root } = repository();
    git(root, 'update-ref', '-d', 'refs/remotes/origin/main');
    expect(() => openDaemon(root)).toThrow(/no origin\/main/);
  });

  test('refuses a file that is not at origin/main', () => {
    const { root } = repository();
    expect(() => openDaemon(root).read('missing.md')).toThrow(/missing\.md is not in daemon/);
  });
});
```

Lancia `npx vitest run src/lib/daemon.test.ts`. Atteso: `Cannot find module './daemon'`.

- [ ] **Passo 4 — il codice.** `src/lib/daemon.ts`:

```ts
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';

/** daemon as the landing reads it: one commit of `origin/main`, never the working tree (§6.2 of the design). */
export interface Daemon {
  /** The full hash of the commit every read comes from. */
  readonly commit: string;
  /** The content of `path`, relative to daemon's root, at that commit. */
  read(path: string): string;
}

function git(root: string, args: string[]): string {
  // `maxBuffer: Infinity`: daemon has documents larger than the 1 MiB that execFileSync allows by default.
  return execFileSync('git', ['-C', root, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: Infinity });
}

/** Opens daemon at `root` — by default the folder that holds the landing — on the commit of its `origin/main`. */
export function openDaemon(root: string = resolve(process.cwd(), '..')): Daemon {
  let commit: string;
  try {
    commit = git(root, ['rev-parse', '--verify', '--quiet', 'refs/remotes/origin/main^{commit}']).trim();
  } catch {
    throw new Error(`no origin/main in ${root}: the landing reads daemon at origin/main, so fetch it first`);
  }
  return {
    commit,
    read(path) {
      try {
        return git(root, ['show', `${commit}:${path}`]);
      } catch {
        throw new Error(`${path} is not in daemon at ${commit}`);
      }
    },
  };
}
```

Il file più grande di daemon supera il limite di `execFileSync`; il comando che lo mostra, dalla radice di daemon:
`git ls-tree -r -l origin/main | sort -k4 -n | tail -1`.

- [ ] **Passo 5 — il test, verde.** `npx vitest run src/lib/daemon.test.ts`. Atteso: `4 passed`.

- [ ] **Passo 6 — i tipi.** `npm run build`. Atteso: `0 errors` e `2 page(s) built`.

- [ ] **Passo 7 — il commit.**

```bash
git add package.json package-lock.json vitest.config.ts src/lib && git commit -m "t1(compito 4): leggere daemon a origin/main -- un commit solo, letto una volta, e i file a quel commit, mai dalla cartella di lavoro (§6.2 del disegno); Vitest e i tipi di Node alle versioni della GUI"
```

- [ ] **Passo 8 —** `git push`.

### Compito 5 — i testi e i loro schemi

**File:** crea `src/lib/texts.ts`, `src/lib/texts.test.ts`, `src/content.config.ts`, `src/texts/it.json`,
`src/texts/en.json`, `src/ui/it.json`, `src/ui/en.json`.

**Usa:** Zod da `astro/zod`, che è dentro Astro: nessun pacchetto nuovo. **Lascia:**

- in `src/lib/texts.ts` gli schemi `italianSentence` (`text`, `source`, `quote`), `englishSentence` (`text`) e
  `interfaceWord` (`text`), tutti senza campi in più; e `readTexts(path, schema): Record<string, …>`, che legge un file
  di testi fuori da Astro, per i controlli, con lo stesso schema che Astro gli applica;
- in `src/content.config.ts` le quattro raccolte di Astro: `textsIt`, `textsEn`, `uiIt`, `uiEn`;
- le parole della §3.4, nei quattro file.

- [ ] **Passo 1 — il test, rosso.** `src/lib/texts.test.ts`:

```ts
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, test } from 'vitest';
import { englishSentence, interfaceWord, italianSentence, readTexts } from './texts';

const folders: string[] = [];
afterEach(() => {
  for (const folder of folders.splice(0)) rmSync(folder, { recursive: true, force: true });
});

function file(content: string): string {
  const folder = mkdtempSync(join(tmpdir(), 'landing-texts-'));
  folders.push(folder);
  writeFileSync(join(folder, 'texts.json'), content);
  return join(folder, 'texts.json');
}

describe('the schemas of the texts', () => {
  test('an Italian sentence has a text, a source and a quote, and nothing else', () => {
    expect(italianSentence.safeParse({ text: 't', source: 's', quote: 'q' }).success).toBe(true);
    expect(italianSentence.safeParse({ text: 't', source: 's' }).success).toBe(false);
    expect(italianSentence.safeParse({ text: 't', source: 's', quote: 'q', label: 'l' }).success).toBe(false);
    expect(italianSentence.safeParse({ text: '', source: 's', quote: 'q' }).success).toBe(false);
  });

  test("an English sentence has only its text: its source is the Italian one's", () => {
    expect(englishSentence.safeParse({ text: 't' }).success).toBe(true);
    expect(englishSentence.safeParse({ text: 't', source: 's' }).success).toBe(false);
  });

  test('a word of the interface has only its text', () => {
    expect(interfaceWord.safeParse({ text: 't' }).success).toBe(true);
    expect(interfaceWord.safeParse({ text: 't', source: 's' }).success).toBe(false);
  });
});

describe('readTexts', () => {
  test('reads a file of texts, one entry per identifier', () => {
    const path = file('{ "a": { "text": "one" }, "b": { "text": "two" } }');
    expect(readTexts(path, englishSentence)).toEqual({ a: { text: 'one' }, b: { text: 'two' } });
  });

  test('refuses a file with an entry the schema does not accept', () => {
    const path = file('{ "a": { "text": "one", "source": "s" } }');
    expect(() => readTexts(path, englishSentence)).toThrow();
  });
});
```

Lancia `npx vitest run src/lib/texts.test.ts`. Atteso: `Cannot find module './texts'`.

- [ ] **Passo 2 — gli schemi.** `src/lib/texts.ts`:

```ts
import { readFileSync } from 'node:fs';
import { z } from 'astro/zod';

/** A sentence about daemon, in Italian, the original: the file of daemon it comes from, and a literal piece of it (§3.1 of the design). */
export const italianSentence = z.strictObject({
  text: z.string().min(1),
  source: z.string().min(1),
  quote: z.string().min(1),
});

/** The same sentence in English: the text alone, because its source is the Italian sentence's. */
export const englishSentence = z.strictObject({ text: z.string().min(1) });

/** A word of the interface: it says nothing about daemon, so it has no source (§3.1 of the plan). */
export const interfaceWord = z.strictObject({ text: z.string().min(1) });

/** Reads a file of texts outside Astro — for the checks — with the schema Astro applies to it. */
export function readTexts<Schema extends z.ZodType>(path: string, schema: Schema): Record<string, z.infer<Schema>> {
  return z.record(z.string(), schema).parse(JSON.parse(readFileSync(path, 'utf8')));
}
```

- [ ] **Passo 3 — il test, verde.** `npx vitest run src/lib/texts.test.ts`. Atteso: `5 passed`.

- [ ] **Passo 4 — le raccolte e le parole.** `src/content.config.ts`:

```ts
import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { englishSentence, interfaceWord, italianSentence } from './lib/texts';

export const collections = {
  textsIt: defineCollection({ loader: file('src/texts/it.json'), schema: italianSentence }),
  textsEn: defineCollection({ loader: file('src/texts/en.json'), schema: englishSentence }),
  uiIt: defineCollection({ loader: file('src/ui/it.json'), schema: interfaceWord }),
  uiEn: defineCollection({ loader: file('src/ui/en.json'), schema: interfaceWord }),
};
```

`src/texts/it.json`:

```json
{
  "what-app": {
    "text": "Un assistente desktop locale, per un utente solo.",
    "source": "CLAUDE.md",
    "quote": "Assistente desktop locale, utente singolo"
  },
  "what-pillars": {
    "text": "Quattro pilastri paritari, su un kernel comune.",
    "source": "docs/superpowers/specs/2026-08-06-kernel-design.md",
    "quote": "Piattaforma a quattro pilastri paritari su kernel comune"
  },
  "what-pillar-names": {
    "text": "Conversazione e conoscenza, agenti e coding, voce e gesti, generazione di asset 3D.",
    "source": "CLAUDE.md",
    "quote": "conversazione e conoscenza, agenti e coding, voce e gesti, generazione asset 3D"
  },
  "what-kernel": {
    "text": "Il kernel non implementa nessuna funzionalità utente: fornisce i meccanismi.",
    "source": "docs/tracciabilita.md",
    "quote": "**Il kernel non implementa nessuna funzionalità utente.** Fornisce i meccanismi"
  },
  "what-limit": {
    "text": "I quattro pilastri si contendono una sola GPU da 16\u00a0GB.",
    "source": "docs/adr/0005-arbitrato-gpu-su-due-dimensioni.md",
    "quote": "Quattro pilastri paritari si contendono una sola GPU da 16 GB."
  }
}
```

`src/texts/en.json`:

```json
{
  "what-app": { "text": "A local desktop assistant, for a single user." },
  "what-pillars": { "text": "Four equal pillars, on a shared kernel." },
  "what-pillar-names": { "text": "Conversation and knowledge, agents and coding, voice and gestures, 3D asset generation." },
  "what-kernel": { "text": "The kernel implements no user features: it provides the mechanisms." },
  "what-limit": { "text": "The four pillars compete for a single 16\u00a0GB GPU." }
}
```

`src/ui/it.json`:

```json
{
  "site-title": { "text": "daemon" },
  "skip-to-content": { "text": "Vai al contenuto" },
  "contents": { "text": "Indice" },
  "section-what": { "text": "Cos’è" },
  "dark-theme": { "text": "Tema scuro" },
  "other-language": { "text": "English" },
  "other-language-short": { "text": "EN" },
  "source": { "text": "Fonte" },
  "code-on-github": { "text": "devfrx/daemon su GitHub" },
  "provenance": { "text": "Le frasi e i numeri di questa pagina vengono da devfrx/daemon, al commit {commit}." }
}
```

`src/ui/en.json`:

```json
{
  "site-title": { "text": "daemon" },
  "skip-to-content": { "text": "Skip to content" },
  "contents": { "text": "Contents" },
  "section-what": { "text": "What it is" },
  "dark-theme": { "text": "Dark theme" },
  "other-language": { "text": "Italiano" },
  "other-language-short": { "text": "IT" },
  "source": { "text": "Source" },
  "code-on-github": { "text": "devfrx/daemon on GitHub" },
  "provenance": { "text": "The sentences and numbers on this page come from devfrx/daemon, at commit {commit}." }
}
```

- [ ] **Passo 5 — la build, verde.** `npm run build`. Atteso: `0 errors` e `2 page(s) built`. Astro controlla le
raccolte anche se nessuna pagina le usa ancora.

- [ ] **Passo 6 — l'altro senso.** Una frase inglese con una fonte ferma la build; poi il file torna com'era:

```bash
d=$(mktemp -d) && cp src/texts/en.json "$d/en.json" && node -e "const fs=require('node:fs');const t=JSON.parse(fs.readFileSync('src/texts/en.json','utf8'));t['what-app'].source='CLAUDE.md';fs.writeFileSync('src/texts/en.json',JSON.stringify(t,null,2))" && npm run build; cp "$d/en.json" src/texts/en.json && npm run build
```

Atteso: prima `[InvalidContentEntryDataError] textsEn → what-app data does not match collection schema.` e
`Unrecognized key: "source"`, con l'uscita a 1; poi di nuovo il verde del passo 5.

- [ ] **Passo 7 — l'inglese, riletto** (§3.2 del disegno). Lo fa il **coordinatore**, non il subagente del compito: un
subagente nuovo, `model: "opus"`, che non ha scritto la traduzione, con questo compito:

> Sei il secondo revisore dell'inglese della landing di daemon, in `landing/`. Per ogni identificatore di
> `src/texts/it.json` e di `src/ui/it.json`, confronta l'italiano con l'inglese dello stesso identificatore in
> `src/texts/en.json` e in `src/ui/en.json`. Per ciascuno rispondi a tre domande: dice la stessa cosa, né di più né di
> meno? È inglese americano naturale? Segue la tipografia inglese della §3.3 di
> `docs/superpowers/plans/2026-10-07-landing-traguardo-1.md`? Le citazioni (`quote`) non si traducono e non si giudicano.
> Non modificare nessun file. Rispondi con una tabella — identificatore, italiano, inglese, esito («va bene» o «da
> cambiare») — e, per ogni «da cambiare», la frase che proponi e il perché.

Ogni «da cambiare» va al proprietario, in A/B, prima di toccare una frase: le parole della §3.4 sono approvate.

- [ ] **Passo 8 — il commit.**

```bash
git add src && git commit -m "t1(compito 5): i testi e i loro schemi -- le frasi di «Cos’è» con fonte e citazione, l'interfaccia senza fonte, in quattro file JSON controllati da Astro con gli schemi di src/lib/texts.ts (§3 del piano); l'inglese riletto da un subagente nuovo"
```

- [ ] **Passo 9 —** `git push`.

### Compito 6 — il controllo delle fonti

**File:** crea `src/lib/sources.ts`, `src/lib/sources.test.ts`, `checks/sources.test.ts`; modifica `src/lib/daemon.ts` e
`src/lib/daemon.test.ts`.

**Usa:** `openDaemon` (compito 4), `readTexts` e gli schemi (compito 5). **Lascia:**

- in `src/lib/sources.ts`: `quoteIsIn(file, quote): boolean`, `numbersNotInQuote(text, quote): string[]`,
  `unmatchedIds(italian, english): string[]`, `originIsGitHub(url): boolean`;
- `Daemon.origin`, l'indirizzo del remoto `origin`; `openDaemon` si ferma con `no remote origin in …`;
- `checks/sources.test.ts`, il controllo del cancello: i testi veri contro daemon a `origin/main`.

**Il controllo del commit non chiede niente a GitHub.** daemon si legge a `origin/main` (compito 4), che arriva da
GitHub con `git fetch`: il commit è su GitHub se `origin` è `devfrx/daemon` su GitHub. **Costo dichiarato:** in locale
vale l'ultimo `git fetch`, e un force-push fatto su GitHub dopo non si vede; in CI il clone è nuovo, e il controllo è
esatto.

**I numeri.** Ogni gruppo di cifre di una frase, italiana o inglese, deve stare nella citazione della frase italiana
(§3.2 del disegno). Nessun numero, nel traguardo 1, lo produce un comando durante la build.

- [ ] **Passo 1 — il test, rosso.** `src/lib/sources.test.ts`:

```ts
import { describe, expect, test } from 'vitest';
import { numbersNotInQuote, originIsGitHub, quoteIsIn, unmatchedIds } from './sources';

describe('quoteIsIn', () => {
  test('finds a quote that daemon wraps on two lines, or writes with two spaces', () => {
    expect(quoteIsIn('one sentence that\ngoes on, and  then ends', 'that goes on, and then ends')).toBe(true);
    expect(quoteIsIn('one sentence that\r\ngoes on', 'that goes on')).toBe(true);
  });

  test('does not find a quote whose words have changed', () => {
    expect(quoteIsIn('one sentence that goes on', 'that went on')).toBe(false);
  });
});

describe('numbersNotInQuote', () => {
  test('accepts the numbers that the quote holds', () => {
    expect(numbersNotInQuote('una sola GPU da 16\u00a0GB', 'una sola GPU da 16 GB.')).toEqual([]);
  });

  test('returns a number that the quote does not hold', () => {
    expect(numbersNotInQuote('una sola GPU da 24\u00a0GB', 'una sola GPU da 16 GB.')).toEqual(['24']);
  });
});

describe('unmatchedIds', () => {
  test('accepts two languages with the same identifiers', () => {
    expect(unmatchedIds({ a: 1, b: 2 }, { b: 3, a: 4 })).toEqual([]);
  });

  test('names an identifier that only one language has', () => {
    expect(unmatchedIds({ a: 1, b: 2 }, { a: 3, c: 4 })).toEqual(['b: only in Italian', 'c: only in English']);
  });
});

describe('originIsGitHub', () => {
  test('accepts devfrx/daemon on GitHub, over HTTPS or SSH', () => {
    expect(originIsGitHub('https://github.com/devfrx/daemon.git')).toBe(true);
    expect(originIsGitHub('https://github.com/devfrx/daemon')).toBe(true);
    expect(originIsGitHub('git@github.com:devfrx/daemon.git')).toBe(true);
  });

  test('refuses a fork, another host or a folder', () => {
    expect(originIsGitHub('https://github.com/someone/daemon.git')).toBe(false);
    expect(originIsGitHub('https://gitlab.com/devfrx/daemon.git')).toBe(false);
    expect(originIsGitHub('C:/EVERYTHING/DEV/MY_REPOS/daemon')).toBe(false);
  });
});
```

Lancia `npx vitest run src/lib/sources.test.ts`. Atteso: `Cannot find module './sources'`.

- [ ] **Passo 2 — il codice.** `src/lib/sources.ts`:

```ts
/** The text as the check compares it: line breaks become spaces, and runs of spaces one (§3.2 of the design). */
function normalize(text: string): string {
  return text.replace(/\r?\n/g, ' ').replace(/ {2,}/g, ' ');
}

/** Whether `quote` is in `file`, whatever the line breaks and the double spaces: daemon's documents wrap inside sentences. */
export function quoteIsIn(file: string, quote: string): boolean {
  return normalize(file).includes(normalize(quote));
}

/** The numbers of `text` that `quote` does not hold: a number on the page comes from a checked quote (§3.2 of the design). */
export function numbersNotInQuote(text: string, quote: string): string[] {
  const inQuote = new Set(quote.match(/\d+/g) ?? []);
  return (text.match(/\d+/g) ?? []).filter((number) => !inQuote.has(number));
}

/** The identifiers that one language has and the other has not. */
export function unmatchedIds(italian: object, english: object): string[] {
  const it = Object.keys(italian);
  const en = Object.keys(english);
  return [
    ...it.filter((id) => !en.includes(id)).map((id) => `${id}: only in Italian`),
    ...en.filter((id) => !it.includes(id)).map((id) => `${id}: only in English`),
  ];
}

/** Whether daemon's `origin` is devfrx/daemon on GitHub: then a commit of its origin/main is on GitHub (§6.2 of the design). */
export function originIsGitHub(url: string): boolean {
  return /^(https:\/\/github\.com\/|git@github\.com:)devfrx\/daemon(\.git)?$/.test(url);
}
```

- [ ] **Passo 3 — il test, verde.** `npx vitest run src/lib/sources.test.ts`. Atteso: `8 passed`.

- [ ] **Passo 4 — `origin`, il test rosso.** In `src/lib/daemon.test.ts`, il repository di prova prende il remoto
`origin` subito dopo `git init`:

```ts
  git(root, 'init', '--quiet');
  git(root, 'remote', 'add', 'origin', 'https://github.com/devfrx/daemon.git');
```

e due test nuovi, prima di `refuses a repository without origin/main`:

```ts
  test('tells where origin points', () => {
    const { root } = repository();
    expect(openDaemon(root).origin).toBe('https://github.com/devfrx/daemon.git');
  });

  test('refuses a repository without the remote origin', () => {
    const { root } = repository();
    git(root, 'remote', 'remove', 'origin');
    expect(() => openDaemon(root)).toThrow(/no remote origin/);
  });
```

Lancia `npx vitest run src/lib/daemon.test.ts`. Atteso: `2 failed | 4 passed`.

- [ ] **Passo 5 — `origin`, il codice.** In `src/lib/daemon.ts`, il campo nell'interfaccia, dopo `commit`:

```ts
  /** Where the remote `origin` points: GitHub's devfrx/daemon, so that the commit is on GitHub (§6.2 of the design). */
  readonly origin: string;
```

in `openDaemon`, prima di `let commit: string;`:

```ts
  let origin: string;
  try {
    origin = git(root, ['remote', 'get-url', 'origin']).trim();
  } catch {
    throw new Error(`no remote origin in ${root}`);
  }
```

e nell'oggetto restituito:

```ts
  return {
    commit,
    origin,
```

- [ ] **Passo 6 — `origin`, il test verde.** `npx vitest run src/lib/daemon.test.ts`. Atteso: `6 passed`.

- [ ] **Passo 7 — il controllo del cancello.** `checks/sources.test.ts`:

```ts
import { describe, expect, test } from 'vitest';
import { openDaemon } from '../src/lib/daemon';
import { numbersNotInQuote, originIsGitHub, quoteIsIn, unmatchedIds } from '../src/lib/sources';
import { englishSentence, interfaceWord, italianSentence, readTexts } from '../src/lib/texts';

// The gate's check of the sources (§3.2 of the design): the real texts, against daemon at origin/main.
const daemon = openDaemon();
const italian = readTexts('src/texts/it.json', italianSentence);
const english = readTexts('src/texts/en.json', englishSentence);

describe('the sources of the sentences', () => {
  test.each(Object.entries(italian))('%s: the quote is in its source, at origin/main', (_, sentence) => {
    expect(quoteIsIn(daemon.read(sentence.source), sentence.quote)).toBe(true);
  });

  test.each(Object.entries(italian))('%s: every number of both languages is in the quote', (id, sentence) => {
    expect(numbersNotInQuote(sentence.text, sentence.quote)).toEqual([]);
    expect(numbersNotInQuote(english[id]?.text ?? '', sentence.quote)).toEqual([]);
  });

  test('the two languages have the same sentences', () => {
    expect(unmatchedIds(italian, english)).toEqual([]);
  });

  test('the two languages have the same words of the interface', () => {
    expect(unmatchedIds(readTexts('src/ui/it.json', interfaceWord), readTexts('src/ui/en.json', interfaceWord))).toEqual([]);
  });

  test('the commit comes from devfrx/daemon on GitHub', () => {
    expect(originIsGitHub(daemon.origin)).toBe(true);
  });
});
```

Lancia `npx vitest run checks/sources.test.ts`. Atteso: `13 passed` — cinque citazioni, cinque frasi coi loro numeri,
le due lingue due volte, il commit.

- [ ] **Passo 8 — l'altro senso, sui testi veri.** Una citazione e un numero cambiati, poi una frase solo in inglese;
ogni volta il file torna com'era:

```bash
d=$(mktemp -d) && cp src/texts/it.json "$d/it.json" && node -e "const fs=require('node:fs');const t=JSON.parse(fs.readFileSync('src/texts/it.json','utf8'));t['what-limit'].quote='Quattro pilastri paritari si contendono una sola GPU da 24 GB.';t['what-limit'].text='I quattro pilastri si contendono una sola GPU da 32\u00a0GB.';fs.writeFileSync('src/texts/it.json',JSON.stringify(t,null,2))" && npx vitest run checks/sources.test.ts; cp "$d/it.json" src/texts/it.json
d=$(mktemp -d) && cp src/texts/en.json "$d/en.json" && node -e "const fs=require('node:fs');const t=JSON.parse(fs.readFileSync('src/texts/en.json','utf8'));t['what-extra']={text:'x'};fs.writeFileSync('src/texts/en.json',JSON.stringify(t,null,2))" && npx vitest run checks/sources.test.ts; cp "$d/en.json" src/texts/en.json && npx vitest run checks/sources.test.ts
```

Atteso: prima rossi `what-limit: the quote is in its source, at origin/main` e `what-limit: every number of both
languages is in the quote`; poi rosso `the two languages have the same sentences`; alla fine di nuovo `13 passed`.
L'`origin` di daemon non si tocca: il rosso di un `origin` sbagliato lo prova il test di `originIsGitHub`.

- [ ] **Passo 9 — i tipi.** `npm run build`. Atteso: `0 errors`.

- [ ] **Passo 10 — il commit.**

```bash
git add src/lib checks && git commit -m "t1(compito 6): il controllo delle fonti -- la citazione nel suo file a origin/main, ogni numero dentro la citazione, gli stessi identificatori nelle due lingue, il commit di devfrx/daemon su GitHub (§3.2 del disegno), coi rossi provati sui testi veri"
```

- [ ] **Passo 11 —** `git push`.

### Compito 7 — il controllo delle parole

**File:** crea `src/lib/words.ts`, `src/lib/words.test.ts`, `checks/words.test.ts`; modifica `package.json` e
`package-lock.json`.

**Usa:** `readTexts` e gli schemi (compito 5). **Lascia:**

- in `src/lib/words.ts`: `type Language = 'it' | 'en'`; `unknownWords(text, language): Promise<string[]>`;
  `typographyProblems(text, language): string[]`; `forbiddenWords(text, language): string[]`; `digits(text): string[]`;
- `checks/words.test.ts`, il controllo del cancello: ciò che la pagina dice — le frasi e l'interfaccia, mai le
  citazioni, che sono di daemon lettera per lettera — in ciascuna lingua;
- `cspell-lib` 10.3.6 e `@cspell/dict-it-it` 3.1.7.

**Le parole che i dizionari non conoscono** e che la pagina usa apposta stanno in `words.ts`, con il loro perché:
`daemon` e `devfrx` nelle due lingue; in italiano `kernel`, la parola inglese che i documenti di daemon usano, e
`English`; in inglese `Italiano`. **Le parole vietate** sono quelle della §1 del disegno, parola per parola, con «open
source» scritto anche col trattino.

- [ ] **Passo 1 — i pacchetti**, fuori dal cancello (vincolo 9):

```bash
npm install --no-audit --no-fund --save-exact --save-dev cspell-lib@10.3.6 @cspell/dict-it-it@3.1.7 && npm approve-scripts --allow-scripts-pending
```

Atteso: `No packages with unreviewed install scripts.`.

- [ ] **Passo 2 — il test, rosso.** `src/lib/words.test.ts`:

```ts
import { describe, expect, test } from 'vitest';
import { digits, forbiddenWords, typographyProblems, unknownWords } from './words';

describe('unknownWords', () => {
  test('knows Italian in Italian, and English in English', async () => {
    expect(await unknownWords('Un assistente desktop locale, per un utente solo. Cos’è', 'it')).toEqual([]);
    expect(await unknownWords('A local desktop assistant, for a single user.', 'en')).toEqual([]);
  });

  test('returns a typo', async () => {
    expect(await unknownWords('Un asistente desktop locale.', 'it')).toEqual(['asistente']);
    expect(await unknownWords('A local destkop assistant.', 'en')).toEqual(['destkop']);
  });

  test('does not take one language for the other', async () => {
    expect(await unknownWords('Un assistente locale.', 'en')).toEqual(['assistente']);
    expect(await unknownWords('The mechanisms.', 'it')).toEqual(['mechanisms']);
  });

  test('knows the names the page uses on purpose', async () => {
    expect(await unknownWords('daemon, devfrx, kernel, English', 'it')).toEqual([]);
    expect(await unknownWords('daemon, devfrx, Italiano', 'en')).toEqual([]);
  });
});

describe('typographyProblems', () => {
  test('accepts the typography of each language', () => {
    expect(typographyProblems('Cos’è, «daemon» — una GPU da 16\u00a0GB…', 'it')).toEqual([]);
    expect(typographyProblems('What it is, “daemon”—a 16\u00a0GB GPU…', 'en')).toEqual([]);
  });

  test('refuses straight apostrophes and quotation marks, and three dots', () => {
    expect(typographyProblems("Cos'è", 'it')).toEqual(['a straight apostrophe: use ’']);
    expect(typographyProblems('"daemon"', 'it')).toEqual(['a straight quotation mark: use « » (inside, “ ”)']);
    expect(typographyProblems('"daemon"', 'en')).toEqual(['a straight quotation mark: use “ ” (inside, ‘ ’)']);
    expect(typographyProblems('and then...', 'en')).toEqual(['three dots: use …']);
  });

  test('refuses two spaces, a space before punctuation, and a breaking space after a number', () => {
    expect(typographyProblems('two  spaces', 'en')).toEqual(['two spaces in a row']);
    expect(typographyProblems('a space , before', 'en')).toEqual(['a space before a punctuation mark']);
    expect(typographyProblems('a 16 GB GPU', 'en')).toEqual(['a breaking space after a number: use a no-break space, U+00A0']);
  });

  test('wants the dash with spaces in Italian, and without in English', () => {
    expect(typographyProblems('daemon—una pagina', 'it')).toEqual(['a dash without a space on each side']);
    expect(typographyProblems('daemon — a page', 'en')).toEqual(['a dash with a space beside it']);
  });
});

describe('forbiddenWords', () => {
  test('refuses the forbidden words of each language', () => {
    expect(forbiddenWords('un progetto open source', 'it')).toEqual(['open source']);
    expect(forbiddenWords('scarica daemon', 'it')).toEqual(['scarica']);
    expect(forbiddenWords('an Open-Source project', 'en')).toEqual(['Open-Source']);
    expect(forbiddenWords('Download daemon', 'en')).toEqual(['Download']);
  });

  test('accepts a text without them', () => {
    expect(forbiddenWords('Un assistente desktop locale.', 'it')).toEqual([]);
    expect(forbiddenWords('A local desktop assistant.', 'en')).toEqual([]);
  });
});

describe('digits', () => {
  test('returns the digits of a text, and none of a text without', () => {
    expect(digits('Fig. 0 and 16')).toEqual(['0', '1', '6']);
    expect(digits('Skip to content, at commit {commit}.')).toEqual([]);
  });
});
```

Lancia `npx vitest run src/lib/words.test.ts`. Atteso: `Cannot find module './words'`.

- [ ] **Passo 3 — il codice.** `src/lib/words.ts`:

```ts
import { createRequire } from 'node:module';
import { spellCheckDocument } from 'cspell-lib';

export type Language = 'it' | 'en';

// The words that the dictionaries do not know and that the page uses on purpose: daemon's name and its owner's on
// GitHub; in Italian, "kernel", the English word daemon's documents use, and "English", the name of the other language
// written in that language — as "Italiano" is in English.
const KNOWN_WORDS: Record<Language, string[]> = {
  it: ['daemon', 'devfrx', 'kernel', 'English'],
  en: ['daemon', 'devfrx', 'Italiano'],
};

const ITALIAN_DICTIONARY = createRequire(import.meta.url).resolve('@cspell/dict-it-it/cspell-ext.json');

/** The words of `text` that the dictionary of `language` does not know (§3.2 of the design). */
export async function unknownWords(text: string, language: Language): Promise<string[]> {
  const settings = language === 'it' ? { import: [ITALIAN_DICTIONARY], words: KNOWN_WORDS.it } : { words: KNOWN_WORDS.en };
  const result = await spellCheckDocument(
    { uri: `text.${language}.txt`, text, languageId: 'plaintext', locale: language },
    { generateSuggestions: false, noConfigSearch: true },
    settings,
  );
  // A text that was not checked, or a dictionary that did not load, would look like a text without typos.
  if (!result.checked || (result.errors?.length ?? 0) > 0) {
    throw new Error(`the spell checker did not check the text: ${result.errors?.map(String).join('; ')}`);
  }
  return result.issues.map((issue) => issue.text);
}

/** What breaks the typography of `language` in `text` (§3.3 of the plan). */
export function typographyProblems(text: string, language: Language): string[] {
  const problems: string[] = [];
  if (text.includes("'")) problems.push('a straight apostrophe: use ’');
  if (text.includes('"')) {
    problems.push(`a straight quotation mark: use ${language === 'it' ? '« » (inside, “ ”)' : '“ ” (inside, ‘ ’)'}`);
  }
  if (text.includes('...')) problems.push('three dots: use …');
  if (text.includes('  ')) problems.push('two spaces in a row');
  if (/ [,.;:!?]/.test(text)) problems.push('a space before a punctuation mark');
  if (/\d /.test(text)) problems.push('a breaking space after a number: use a no-break space, U+00A0');
  if (language === 'it' && /[^ ]—|—[^ ]/.test(text)) problems.push('a dash without a space on each side');
  if (language === 'en' && /\s—|—\s/.test(text)) problems.push('a dash with a space beside it');
  return problems;
}

// The forbidden words, word for word as §1 of the design says them: there is no license, and nothing to download.
const FORBIDDEN_WORDS: Record<Language, RegExp[]> = {
  it: [/\bopen[\s-]source\b/i, /\bscarica\b/i],
  en: [/\bopen[\s-]source\b/i, /\bdownload\b/i],
};

/** The forbidden words of `language` that `text` holds. */
export function forbiddenWords(text: string, language: Language): string[] {
  return FORBIDDEN_WORDS[language].flatMap((word) => text.match(word)?.[0] ?? []);
}

/** The digits of `text`: the interface has none, because a number is a fact, and a fact has a source (§3.1 of the plan). */
export function digits(text: string): string[] {
  return text.match(/\d/g) ?? [];
}
```

- [ ] **Passo 4 — il test, verde.** `npx vitest run src/lib/words.test.ts`. Atteso: `11 passed`. La prima chiamata
carica i dizionari: qualche secondo.

- [ ] **Passo 5 — il controllo del cancello.** `checks/words.test.ts`:

```ts
import { describe, expect, test } from 'vitest';
import { englishSentence, interfaceWord, italianSentence, readTexts } from '../src/lib/texts';
import { type Language, digits, forbiddenWords, typographyProblems, unknownWords } from '../src/lib/words';

// The gate's check of the words (§3.2 of the design): what the page says — the sentences and the interface, never the
// quotes, which are daemon's letter for letter — in each language.
const sentences: Record<Language, string[]> = {
  it: Object.values(readTexts('src/texts/it.json', italianSentence)).map((sentence) => sentence.text),
  en: Object.values(readTexts('src/texts/en.json', englishSentence)).map((sentence) => sentence.text),
};
const interfaceWords: Record<Language, string[]> = {
  it: Object.values(readTexts('src/ui/it.json', interfaceWord)).map((word) => word.text),
  en: Object.values(readTexts('src/ui/en.json', interfaceWord)).map((word) => word.text),
};

describe.each(['it', 'en'] as const)('the words of the page, in %s', (language) => {
  const all = [...sentences[language], ...interfaceWords[language]];

  test('no word the dictionary does not know', async () => {
    expect(await unknownWords(all.join('\n'), language)).toEqual([]);
  });

  test('the typography of the language', () => {
    expect(all.flatMap((text) => typographyProblems(text, language).map((problem) => `${text}: ${problem}`))).toEqual([]);
  });

  test('no forbidden word', () => {
    expect(all.flatMap((text) => forbiddenWords(text, language))).toEqual([]);
  });

  test('no digit in the interface', () => {
    expect(interfaceWords[language].filter((text) => digits(text).length > 0)).toEqual([]);
  });
});
```

Lancia `npx vitest run checks/words.test.ts`. Atteso: `8 passed`.

- [ ] **Passo 6 — l'altro senso, sui testi veri.** Nell'interfaccia italiana un refuso, un apostrofo dritto, una parola
vietata e una cifra; poi il file torna com'era:

```bash
d=$(mktemp -d) && cp src/ui/it.json "$d/ui-it.json" && node -e "const fs=require('node:fs');const t=JSON.parse(fs.readFileSync('src/ui/it.json','utf8'));t['contents'].text='Indce';t['section-what'].text=\"Cos'è\";t['source'].text='Fonte open source';t['dark-theme'].text='Tema 2';fs.writeFileSync('src/ui/it.json',JSON.stringify(t,null,2))" && npx vitest run checks/words.test.ts; cp "$d/ui-it.json" src/ui/it.json && npx vitest run checks/words.test.ts
```

Atteso: prima `4 failed | 4 passed`, coi rossi su `Indce`, su `Cos'è: a straight apostrophe: use ’`, su `open source` e
su `Tema 2`; poi di nuovo `8 passed`.

- [ ] **Passo 7 — i tipi, e le vulnerabilità.** `npm run build`, poi `npm audit`. Atteso: `0 errors`, e `found 0
vulnerabilities`.

- [ ] **Passo 8 — il commit.**

```bash
git add package.json package-lock.json src/lib checks && git commit -m "t1(compito 7): il controllo delle parole -- i refusi con cspell-lib e il dizionario italiano, la tipografia di ciascuna lingua, le parole vietate, nessuna cifra nell'interfaccia (§3.2 del disegno, §3.3 del piano), coi rossi provati sui testi veri"
```

- [ ] **Passo 9 —** `git push`.

---

## 6. Come si riprende

> 🔶 Oggi questa sezione è la consegna della sessione del pomeriggio del 2026-10-07: il piano è a metà. A piano finito,
> qui ci sarà come si esegue, e questa consegna andrà in archivio. Quella del mattino è in archivio, parola per parola:
> [`2026-10-07-consegna-piano-landing-mattina.md`](../../archivio/2026-10-07-consegna-piano-landing-mattina.md).

**Dove siamo:**

| Parte | Stato |
|---|---|
| §1–§4 | approvate, coi richiami del 2026-10-07 |
| §5, compiti 1–3 | approvati |
| §5, compiti 4–7 | scritti e provati, **da approvare** |
| §5, compiti 8–13 | da scrivere |

Il codice dei compiti si prova prima di scriverlo (risposta del proprietario: A). La storia delle prove è nel
[verbale](../../archivio/2026-10-07-prove-piano-landing.md); lo scratchpad delle prove è stato cancellato.

**Il prossimo passo**, in una sessione nuova:

1. dentro `landing/`: `git fetch --all --prune`, `git status -sb`, e il fast-forward se serve;
2. leggi `CLAUDE.md`, questo piano e il disegno, per intero;
3. le skill: `superpowers:writing-plans`, `anthropic-skills:decision-principles`, `anthropic-skills:dev-communication`;
4. rilancia ciò che invecchia, coi comandi della tabella in fondo;
5. presenta al proprietario i compiti 4–7, con le scelte della tabella qui sotto, e chiedi il sì; commit e push;
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
