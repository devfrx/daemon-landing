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
| 5 | I compiti | 🔶 i compiti 1–11 approvati il 2026-10-07; i compiti 12–13 da scrivere |
| 6 | Come si riprende | 🔶 oggi è la consegna della quinta sessione del 2026-10-07 |

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
│  │  ├─ address.ts  links.ts             compito 8: il sito e la base; i link a daemon, sempre a un commit
│  │  ├─ content.ts                       compito 8: frasi, parole e commit per le pagine; lo prova il controllo della pagina
│  │  ├─ tokens.ts                        compito 9: i token che la pagina usa e quelli che daemon definisce
│  │  └─ brand.ts                         compito 13: le impronte
│  ├─ texts/it.json  texts/en.json        compito 5: le frasi
│  ├─ ui/it.json  ui/en.json              compito 5: l'interfaccia
│  ├─ content.config.ts                   compito 5: le quattro raccolte di Astro
│  ├─ pages/index.astro  pages/it/index.astro       compito 3, poi 8
│  └─ layouts/  components/  sections/  styles/     compiti 8, 9 e 10: la pagina
├─ checks/                                i controlli del cancello, un file per riga della §6.1 del disegno
│  ├─ sources.test.ts                     compito 6
│  ├─ words.test.ts                       compito 7
│  ├─ support/                            compito 8: il server di dist/ e il browser
│  ├─ page.page.test.ts                   compito 8
│  ├─ tokens.test.ts  themes.page.test.ts compito 9
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
| 8 | la pagina, e il browser per guardarla | l'indice, «Cos’è», il segno della fonte, la chiusura, il link all'altra lingua, il sito e la base dalle impostazioni; il server di `dist/` e Chrome; rosso se una frase manca, o non porta il link alla sua fonte al commit |
| 9 | i due temi e i caratteri | i colori di daemon, l'interruttore, il tema scuro senza JavaScript, Geist e Barlow ospitati dalla pagina; rosso se manca un token |
| 10 | i controlli nel browser | rosso su una richiesta a terzi, un errore in console, del testo che manca senza JavaScript; l'icona del kit, che la console chiede |
| 11 | l'accessibilità | i controlli nel browser uno per volta; zero errori di axe sulle regole WCAG 2.2 AA; tutto si usa da tastiera |
| 12 | la velocità | LCP, CLS e INP sotto le soglie, col profilo e le interazioni della §2.2 |
| 13 | le impronte, il cancello e la CI | `npm run gate`, e la CI su Linux e Windows, a ogni push e una volta a settimana |

⚠️ **Richiamo del 2026-10-07:** il browser — il server di `dist/` e Chrome — arriva col compito 8, con un controllo della
pagina (risposta del proprietario: A); i caratteri col 9; l'icona del kit col 10, perché senza Chrome scrive un errore
in console — la storia nella §11 del [verbale delle prove](../../archivio/2026-10-07-prove-piano-landing.md).

⚠️ **Richiamo del 2026-10-07:** dal compito 11 i controlli nel browser girano uno per volta, con la guardia in
`openLanding()` (risposta del proprietario: A) — la storia nella §14 del
[verbale delle prove](../../archivio/2026-10-07-prove-piano-landing.md).

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
| **l'indirizzo** | dal compito 8 la build e i controlli nel browser leggono `LANDING_SITE` e `LANDING_BASE`. In prova si danno una volta, all'inizio della sessione: `export LANDING_SITE=https://landing.invalid LANDING_BASE=/daemon-landing/ MSYS_NO_PATHCONV=1`. Dove si pubblica lo decide il proprietario (§7.5 del disegno) |

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
col compito 8.

⚠️ **Richiamo del 2026-10-07:** il progetto `page` arriva col compito 8, insieme al browser — la storia nella §12 del
[verbale delle prove](../../archivio/2026-10-07-prove-piano-landing.md).

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

- [ ] **Passo 5 — il test, verde.** `npm test`, che prova anche lo script del passo 1 e la configurazione del passo 2.
Atteso: `4 passed`.

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
`English`; in inglese `Italiano`. **Le parole vietate** sono quelle della §1 del disegno, in ogni loro forma —
«open-sourced», «opensource», «downloads», «scaricare» —, perché la regola parla di ciò che dicono (risposta del
proprietario: A, il 2026-10-07). **Costo dichiarato:** anche una frase vera come «niente da scaricare» è rossa, e va
scritta in un altro modo.

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

  test('refuses them in every form', () => {
    expect(forbiddenWords('daemon is open-sourced', 'en')).toEqual(['open-sourced']);
    expect(forbiddenWords('an opensource project', 'en')).toEqual(['opensource']);
    expect(forbiddenWords('Downloads', 'en')).toEqual(['Downloads']);
    expect(forbiddenWords('puoi scaricare daemon', 'it')).toEqual(['scaricare']);
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

// The forbidden words of §1 of the design, in every form — "open-sourced", "opensource", "downloads", "scaricare" —
// because the rule is about what they say: there is no license, and nothing to download.
const FORBIDDEN_WORDS: Record<Language, RegExp[]> = {
  it: [/\bopen\W?source\w*/i, /\bscaric\w*/i],
  en: [/\bopen\W?source\w*/i, /\bdownload\w*/i],
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

- [ ] **Passo 4 — il test, verde.** `npx vitest run src/lib/words.test.ts`. Atteso: `12 passed`. La prima chiamata
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

### Compito 8 — la pagina, e il browser per guardarla

**File:** crea `src/lib/address.ts`, `src/lib/address.test.ts`, `src/lib/links.ts`, `src/lib/links.test.ts`,
`src/lib/content.ts`, `src/layouts/Page.astro`, `src/sections/What.astro`, `src/components/Sentence.astro`,
`src/styles/page.css`, `checks/support/server.ts`, `checks/support/server.test.ts`, `checks/support/landing.ts`,
`checks/page.page.test.ts`; modifica `astro.config.mjs`, `vitest.config.ts`, `src/pages/index.astro`,
`src/pages/it/index.astro`, `package.json` e `package-lock.json`.

**Usa:** `openDaemon` (compito 4), le raccolte e `readTexts` (compito 5), `type Language` (compito 7). **Lascia:**

- in `src/lib/address.ts` `readAddress(env): Address`, con `Address` = `{ readonly site: string; readonly base: string }`:
  il sito da `LANDING_SITE`, un'origine, obbligatorio, perché `hreflang` vuole indirizzi completi; la base da
  `LANDING_BASE`, `/` se manca, con una barra a ogni capo. La leggono la build e i controlli;
- in `src/lib/links.ts` `repositoryUrl`, `sourceUrl(commit, path)` e `treeUrl(commit)`: i link a daemon su GitHub,
  sempre a un commit;
- in `src/lib/content.ts` `daemon`, aperto una volta per tutta la build, così le due pagine citano lo stesso commit;
  `languageOf(locale)`, `interfaceText(language, id)` e `sentence(language, id)`. Legge le raccolte di Astro, che
  esistono solo dentro la build: per questo non ha un test accanto, e lo prova il controllo della pagina;
- la pagina, nella tabella qui sotto;
- in `checks/support/` il server di `dist/` sotto la base, col suo test, e `openLanding()`: la pagina servita e il
  Chrome installato, da cui parte ogni controllo nel browser;
- il progetto di Vitest `page`, per i `*.page.test.ts`, e il controllo della pagina, `checks/page.page.test.ts`;
- `playwright` 1.63.0.

| La pagina | Che cos'è |
|---|---|
| `<html lang>`, il titolo, la descrizione | la lingua della pagina, `site-title` e la frase `what-app` |
| `hreflang` | le due lingue, con l'indirizzo completo: sito, base e lingua |
| «Vai al contenuto» | il primo link, verso `<main id="content">` |
| l'indice | in alto e fisso: «Cos’è» porta a `#what` |
| l'altra lingua | mostra «EN» o «IT»; il nome intero, «English» o «Italiano», è per chi non vede |
| «Cos’è» | il titolo `daemon`, poi la sezione con le cinque frasi della §3.4, nel loro ordine |
| il segno della fonte | un `<details>`: si tocca, e mostra il file di daemon col link al commit. Funziona senza JavaScript e da tastiera |
| la chiusura | la riga col commit, che porta ai file di daemon a quel commit, e il link a `devfrx/daemon` |

**L'indirizzo, in prova.** Dal passo 8 la build e i controlli nel browser vogliono `LANDING_SITE` e `LANDING_BASE`
(§5, *«Come si leggono»*). I valori di prova sono `https://landing.invalid`, che per costruzione non esiste, e
`/daemon-landing/`: una base non vuota, perché un indirizzo che dimentica la base diventi un 404. **Costo dichiarato:**
anche in prova la build si ferma senza `LANDING_SITE`.

- [ ] **Passo 1 — i pacchetti**, fuori dal cancello (vincolo 9):

```bash
npm install --no-audit --no-fund --save-exact --save-dev playwright@1.63.0 && npm approve-scripts --allow-scripts-pending
```

Atteso: `No packages with unreviewed install scripts.`. Nessun browser si scarica: i controlli usano il Chrome
installato.

- [ ] **Passo 2 — l'indirizzo e i link, i test rossi.** `src/lib/address.test.ts`:

```ts
import { describe, expect, test } from 'vitest';
import { readAddress } from './address';

describe('readAddress', () => {
  test('reads the site and the base', () => {
    expect(readAddress({ LANDING_SITE: 'https://example.org', LANDING_BASE: '/daemon-landing/' })).toEqual({
      site: 'https://example.org',
      base: '/daemon-landing/',
    });
  });

  test('puts the page at the root when there is no base', () => {
    expect(readAddress({ LANDING_SITE: 'https://example.org/' })).toEqual({ site: 'https://example.org', base: '/' });
  });

  test('refuses to go without the site: hreflang wants full addresses', () => {
    expect(() => readAddress({})).toThrow(/LANDING_SITE is missing/);
  });

  test('refuses a site that is not an origin', () => {
    expect(() => readAddress({ LANDING_SITE: 'example.org' })).toThrow(/LANDING_SITE/);
    expect(() => readAddress({ LANDING_SITE: 'https://example.org/daemon-landing/' })).toThrow(/LANDING_BASE/);
  });

  test('refuses a base without a slash at each end, as Git Bash rewrites it', () => {
    expect(() => readAddress({ LANDING_SITE: 'https://example.org', LANDING_BASE: 'C:/Program Files/Git/daemon-landing/' })).toThrow(/LANDING_BASE/);
    expect(() => readAddress({ LANDING_SITE: 'https://example.org', LANDING_BASE: '/daemon-landing' })).toThrow(/LANDING_BASE/);
  });
});
```

`src/lib/links.test.ts`:

```ts
import { describe, expect, test } from 'vitest';
import { repositoryUrl, sourceUrl, treeUrl } from './links';

describe('the links to daemon on GitHub', () => {
  test('point at a file as it was at a commit, never at a branch', () => {
    expect(sourceUrl('50cc61f', 'docs/adr/0005-arbitrato-gpu-su-due-dimensioni.md')).toBe(
      'https://github.com/devfrx/daemon/blob/50cc61f/docs/adr/0005-arbitrato-gpu-su-due-dimensioni.md',
    );
  });

  test('encode every part of the path, and keep its slashes', () => {
    expect(sourceUrl('50cc61f', 'docs/a file.md')).toBe('https://github.com/devfrx/daemon/blob/50cc61f/docs/a%20file.md');
  });

  test('point at the files of a commit, and at the repository', () => {
    expect(treeUrl('50cc61f')).toBe('https://github.com/devfrx/daemon/tree/50cc61f');
    expect(repositoryUrl).toBe('https://github.com/devfrx/daemon');
  });
});
```

Lancia `npx vitest run src/lib/address.test.ts src/lib/links.test.ts`. Atteso: `Cannot find module './address'` e
`Cannot find module './links'`.

- [ ] **Passo 3 — il codice.** `src/lib/address.ts`:

```ts
/** Where the page is published: settings, never code (§7.5 of the design). */
export interface Address {
  /** The origin the page is served from, for the full addresses that hreflang wants: `https://example.org`. */
  readonly site: string;
  /** The path of the page under the site, with a slash at each end: `/`, or `/daemon-landing/`. */
  readonly base: string;
}

/** Reads the address from `LANDING_SITE` and `LANDING_BASE`; the build and the checks read the same two. */
export function readAddress(env: Record<string, string | undefined>): Address {
  const site = env.LANDING_SITE;
  if (!site) {
    throw new Error('LANDING_SITE is missing: hreflang wants full addresses, so the build needs the site, as in LANDING_SITE=https://example.org');
  }
  let url: URL;
  try {
    url = new URL(site);
  } catch {
    throw new Error(`LANDING_SITE is not a full address: ${site}`);
  }
  if (url.pathname !== '/') {
    throw new Error(`LANDING_SITE is an origin, and the path goes in LANDING_BASE: ${site}`);
  }
  const base = env.LANDING_BASE ?? '/';
  // Git Bash rewrites a value that starts with a slash into a Windows path, unless MSYS_NO_PATHCONV=1 is set.
  if (!base.startsWith('/') || !base.endsWith('/')) {
    throw new Error(`LANDING_BASE wants a slash at each end, as in /daemon-landing/: ${base}; in Git Bash, set MSYS_NO_PATHCONV=1`);
  }
  return { site: url.origin, base };
}
```

`src/lib/links.ts`:

```ts
/** daemon on GitHub. The links of the page point at one commit, never at a branch (§3.3 of the design). */
export const repositoryUrl = 'https://github.com/devfrx/daemon';

/** The file at `path`, relative to daemon's root, as it was at `commit`. */
export function sourceUrl(commit: string, path: string): string {
  return `${repositoryUrl}/blob/${commit}/${path.split('/').map(encodeURIComponent).join('/')}`;
}

/** daemon's files as they were at `commit`. */
export function treeUrl(commit: string): string {
  return `${repositoryUrl}/tree/${commit}`;
}
```

- [ ] **Passo 4 — i test, verdi.** Lo stesso comando del passo 2. Atteso: `8 passed`.

- [ ] **Passo 5 — il server, il test rosso.** Se servisse anche fuori dalla base, i controlli dopo non vedrebbero un
indirizzo che la dimentica. `checks/support/server.test.ts`:

```ts
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, test } from 'vitest';
import { serveDist } from './server';

const folders: string[] = [];
afterEach(() => {
  for (const folder of folders.splice(0)) rmSync(folder, { recursive: true, force: true });
});

// A build in miniature: the two pages and one asset.
function dist(): string {
  const folder = mkdtempSync(join(tmpdir(), 'landing-dist-'));
  folders.push(folder);
  mkdirSync(join(folder, 'it'));
  mkdirSync(join(folder, '_astro'));
  writeFileSync(join(folder, 'index.html'), '<p>en</p>');
  writeFileSync(join(folder, 'it', 'index.html'), '<p>it</p>');
  writeFileSync(join(folder, '_astro', 'page.css'), 'p {}');
  return folder;
}

async function get(url: string): Promise<{ status: number; type: string | null; body: string }> {
  const response = await fetch(url);
  return { status: response.status, type: response.headers.get('content-type'), body: await response.text() };
}

describe('serveDist', () => {
  test('serves the pages and their assets under the base', async () => {
    const served = await serveDist('/daemon-landing/', dist());
    try {
      expect(await get(`${served.origin}/daemon-landing/`)).toEqual({ status: 200, type: 'text/html; charset=utf-8', body: '<p>en</p>' });
      expect((await get(`${served.origin}/daemon-landing/it/`)).body).toBe('<p>it</p>');
      expect((await get(`${served.origin}/daemon-landing/_astro/page.css`)).type).toBe('text/css; charset=utf-8');
    } finally {
      await served.close();
    }
  });

  test('serves nothing outside the base, so an address that forgets the base is a 404', async () => {
    const served = await serveDist('/daemon-landing/', dist());
    try {
      expect((await get(`${served.origin}/`)).status).toBe(404);
      expect((await get(`${served.origin}/_astro/page.css`)).status).toBe(404);
      expect((await get(`${served.origin}/daemon-landing/missing.css`)).status).toBe(404);
    } finally {
      await served.close();
    }
  });
});
```

Lancia `npx vitest run checks/support/server.test.ts`. Atteso: `Cannot find module './server'`.

- [ ] **Passo 6 — il server.** `checks/support/server.ts`:

```ts
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import type { AddressInfo } from 'node:net';
import { extname, resolve } from 'node:path';

// The types of the files the build writes; anything else goes out as bytes.
const TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
};

export interface Served {
  /** `http://127.0.0.1:<port>`: the page is at this origin, under its base. */
  readonly origin: string;
  close(): Promise<void>;
}

/**
 * Serves `root` under `base`, on 127.0.0.1 and a free port: the page as a visitor gets it. Nothing outside the base is
 * served, so an address that forgets the base fails here as it would once published (§7.5 of the design).
 */
export async function serveDist(base: string, root = 'dist'): Promise<Served> {
  const folder = resolve(root);
  const server = createServer(async (request, response) => {
    const path = decodeURIComponent(new URL(request.url ?? '/', 'http://127.0.0.1').pathname);
    const file = resolve(folder, path.slice(base.length), path.endsWith('/') ? 'index.html' : '');
    try {
      if (!path.startsWith(base)) throw new Error('outside the base');
      const body = await readFile(file);
      response.writeHead(200, { 'content-type': TYPES[extname(file)] ?? 'application/octet-stream' }).end(body);
    } catch {
      response.writeHead(404).end();
    }
  });
  await new Promise<void>((listening) => server.listen(0, '127.0.0.1', listening));
  const { port } = server.address() as AddressInfo;
  return {
    origin: `http://127.0.0.1:${port}`,
    close: () =>
      new Promise((closed) => {
        server.closeAllConnections();
        server.close(() => closed());
      }),
  };
}
```

Lo stesso comando del passo 5. Atteso: `2 passed`.

- [ ] **Passo 7 — i due progetti di Vitest, e la pagina nel browser.** `vitest.config.ts`, al posto di quello del
compito 4:

```ts
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: [
      { test: { name: 'checks', include: ['src/**/*.test.ts', 'checks/**/*.test.ts'], exclude: [...configDefaults.exclude, '**/*.page.test.ts'] } },
      { test: { name: 'page', include: ['checks/**/*.page.test.ts'] } },
    ],
  },
});
```

`checks/support/landing.ts`:

```ts
import { type Browser, type BrowserContextOptions, chromium, type Page } from 'playwright';
import { readAddress } from '../../src/lib/address';
import type { Language } from '../../src/lib/words';
import { serveDist } from './server';

/** The built page, served under its base, and the installed Chrome: where every check in the browser starts. */
export interface Landing {
  readonly browser: Browser;
  /** The path of the page in `language`, under the base: `/` is English, `/it/` Italian (§2.4 of the design). */
  path(language: Language): string;
  /** The full address the page in `language` will have once published: what hreflang declares. */
  address(language: Language): string;
  /** Where the page in `language` is served now. */
  url(language: Language): string;
  /** The page in `language`, loaded in a context of its own; close it with `page.context().close()`. */
  open(language: Language, options?: BrowserContextOptions): Promise<Page>;
  close(): Promise<void>;
}

export async function openLanding(): Promise<Landing> {
  const { site, base } = readAddress(process.env);
  const served = await serveDist(base);
  const path = (language: Language): string => (language === 'en' ? base : `${base}it/`);
  const url = (language: Language): string => served.origin + path(language);
  // The installed Chrome, as the GUI of daemon uses it: no browser is downloaded (§2.1 of the plan).
  const browser = await chromium.launch({ channel: 'chrome' });
  return {
    browser,
    path,
    address: (language) => new URL(path(language), site).href,
    url,
    async open(language, options = {}) {
      const page = await (await browser.newContext(options)).newPage();
      // The page is built and loaded: what is not there at once is missing, and a red should not wait.
      page.setDefaultTimeout(2_000);
      await page.goto(url(language));
      return page;
    },
    async close() {
      await browser.close();
      await served.close();
    },
  };
}
```

- [ ] **Passo 8 — il controllo della pagina, rosso.** `checks/page.page.test.ts`:

```ts
import type { Page } from 'playwright';
import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { openDaemon } from '../src/lib/daemon';
import { repositoryUrl, sourceUrl, treeUrl } from '../src/lib/links';
import { englishSentence, interfaceWord, italianSentence, readTexts } from '../src/lib/texts';
import { type Landing, openLanding } from './support/landing';

// The gate's check of the page (§2.4 and §3.3 of the design): every sentence with the link to its source at the commit,
// the two languages declared and linked, an index that leads somewhere, and the commit at the bottom.
const commit = openDaemon().commit;
const italian = readTexts('src/texts/it.json', italianSentence);
const sentences = { it: italian, en: readTexts('src/texts/en.json', englishSentence) };
const words = { it: readTexts('src/ui/it.json', interfaceWord), en: readTexts('src/ui/en.json', interfaceWord) };

let landing: Landing;
beforeAll(async () => {
  landing = await openLanding();
});
afterAll(async () => {
  await landing?.close();
});

describe.each(['en', 'it'] as const)('the page in %s', (language) => {
  const other = language === 'en' ? 'it' : 'en';
  let page: Page;
  beforeAll(async () => {
    page = await landing.open(language);
  });
  afterAll(async () => {
    await page?.context().close();
  });

  test('says its language, its title and what daemon is', async () => {
    expect(await page.getAttribute('html', 'lang')).toBe(language);
    expect(await page.title()).toBe(words[language]['site-title'].text);
    expect(await page.getAttribute('meta[name="description"]', 'content')).toBe(sentences[language]['what-app'].text);
  });

  test('declares both languages to search engines, with full addresses', async () => {
    for (const each of ['en', 'it'] as const) {
      expect(await page.getAttribute(`link[rel="alternate"][hreflang="${each}"]`, 'href')).toBe(landing.address(each));
    }
  });

  test('starts with a link that skips to the content', async () => {
    await page.keyboard.press('Tab');
    const focused = page.locator(':focus');
    expect(await focused.innerText()).toBe(words[language]['skip-to-content'].text);
    expect(await focused.getAttribute('href')).toBe('#content');
    expect(await page.locator('main#content').count()).toBe(1);
  });

  test('links to the other language', async () => {
    const link = page.locator(`header a[hreflang="${other}"]`);
    expect(await link.getAttribute('href')).toBe(landing.path(other));
    expect(await link.getAttribute('aria-label')).toBe(words[language]['other-language'].text);
    expect(await link.innerText()).toBe(words[language]['other-language-short'].text);
  });

  test('has an index whose entries lead to the page', async () => {
    const targets = await page.locator('nav a').evaluateAll((links) => links.map((link) => link.getAttribute('href') ?? ''));
    expect(targets.length).toBeGreaterThan(0);
    for (const target of targets) {
      expect(target).toMatch(/^#./);
      expect(await page.locator(`[id="${target.slice(1)}"]`).count()).toBe(1);
    }
  });

  test.each(Object.keys(italian))('shows %s, with the link to its source at the commit', async (id) => {
    const sentence = page.locator(`[id="${id}"]`);
    expect(await sentence.innerText()).toContain(sentences[language][id]?.text);
    expect(await sentence.locator(`a[href="${sourceUrl(commit, italian[id].source)}"]`).count()).toBe(1);
  });

  test('closes with the commit the sentences come from, and the code', async () => {
    const footer = page.locator('footer');
    expect(await footer.innerText()).toContain(words[language].provenance.text.replace('{commit}', commit.slice(0, 7)));
    expect(await footer.locator(`a[href="${treeUrl(commit)}"]`).count()).toBe(1);
    expect(await footer.locator(`a[href="${repositoryUrl}"]`).innerText()).toBe(words[language]['code-on-github'].text);
  });
});
```

Da qui l'indirizzo di prova sta nell'ambiente; poi la build delle pagine vuote del compito 3, e il controllo:

```bash
export LANDING_SITE=https://landing.invalid LANDING_BASE=/daemon-landing/ MSYS_NO_PATHCONV=1
rm -rf dist && npm run build && npx vitest run --project page
```

Atteso: `0 errors`, poi `22 failed`.

- [ ] **Passo 9 — la pagina.** `astro.config.mjs`, al posto di quello del compito 3:

```js
import { defineConfig } from 'astro/config';
import { readAddress } from './src/lib/address.ts';

// The site and the base are settings, never code (§7.5 of the design): LANDING_SITE and LANDING_BASE.
const { site, base } = readAddress(process.env);

export default defineConfig({
  site,
  base,
  i18n: { locales: ['en', 'it'], defaultLocale: 'en' },
});
```

`src/lib/content.ts`:

```ts
import { getEntry } from 'astro:content';
import { openDaemon } from './daemon';
import type { Language } from './words';

/** daemon at origin/main, opened once for the whole build: both pages cite the same commit (§6.2 of the design). */
export const daemon = openDaemon();

/** The language of the page being built, from Astro's locale: `/` is English, `/it/` Italian (§2.4 of the design). */
export function languageOf(locale: string | undefined): Language {
  if (locale === 'en' || locale === 'it') return locale;
  throw new Error(`the page has no language: Astro gives the locale ${locale}`);
}

/** A word of the interface, in `language` (§3.1 of the plan). */
export async function interfaceText(language: Language, id: string): Promise<string> {
  const entry = await getEntry(language === 'it' ? 'uiIt' : 'uiEn', id);
  if (!entry) throw new Error(`the word ${id} of the interface is missing in ${language}`);
  return entry.data.text;
}

/** A sentence about daemon, in `language`, and the file of daemon it comes from: the Italian sentence's (§3.1 of the design). */
export async function sentence(language: Language, id: string): Promise<{ text: string; source: string }> {
  const italian = await getEntry('textsIt', id);
  const shown = language === 'it' ? italian : await getEntry('textsEn', id);
  if (!italian || !shown) throw new Error(`the sentence ${id} is missing in ${language}`);
  return { text: shown.data.text, source: italian.data.source };
}
```

`src/layouts/Page.astro`:

```astro
---
import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from 'astro:i18n';
import { daemon, interfaceText, languageOf, sentence } from '../lib/content';
import { repositoryUrl, treeUrl } from '../lib/links';
import What from '../sections/What.astro';
import '../styles/page.css';

const language = languageOf(Astro.currentLocale);
const other = language === 'en' ? 'it' : 'en';
const word = (id: string) => interfaceText(language, id);
const title = await word('site-title');
// The line at the bottom: the build writes the commit where the word says {commit} (§3.4 of the plan).
const provenance = (await word('provenance')).split('{commit}');
if (provenance.length !== 2) throw new Error(`the word provenance wants {commit} once, in ${language}`);
---

<!doctype html>
<html lang={language}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name="description" content={(await sentence(language, 'what-app')).text} />
    <link rel="alternate" hreflang="en" href={getAbsoluteLocaleUrl('en')} />
    <link rel="alternate" hreflang="it" href={getAbsoluteLocaleUrl('it')} />
  </head>
  <body>
    <a class="skip-link" href="#content">{await word('skip-to-content')}</a>
    <header class="masthead">
      <nav aria-label={await word('contents')}>
        <a href="#what">{await word('section-what')}</a>
      </nav>
      <a href={getRelativeLocaleUrl(other)} hreflang={other} lang={other} aria-label={await word('other-language')}>
        {await word('other-language-short')}
      </a>
    </header>
    <main id="content">
      <h1 translate="no">{title}</h1>
      <What language={language} />
    </main>
    <footer>
      <p>
        {provenance[0]}<a href={treeUrl(daemon.commit)}><code translate="no">{daemon.commit.slice(0, 7)}</code></a>{provenance[1]}
      </p>
      <p><a href={repositoryUrl}>{await word('code-on-github')}</a></p>
    </footer>
  </body>
</html>
```

`src/sections/What.astro`:

```astro
---
import Sentence from '../components/Sentence.astro';
import { interfaceText } from '../lib/content';
import type { Language } from '../lib/words';

interface Props {
  language: Language;
}

const { language } = Astro.props;
// The sentences of «Cos’è», in their order (§3.4 of the plan).
const ids = ['what-app', 'what-pillars', 'what-pillar-names', 'what-kernel', 'what-limit'];
---

<section id="what" aria-labelledby="what-title">
  <h2 id="what-title">{await interfaceText(language, 'section-what')}</h2>
  {ids.map((id) => <Sentence id={id} language={language} />)}
</section>
```

`src/components/Sentence.astro`:

```astro
---
import { daemon, interfaceText, sentence } from '../lib/content';
import { sourceUrl } from '../lib/links';
import type { Language } from '../lib/words';

interface Props {
  id: string;
  language: Language;
}

// A sentence and the sign of its source: touched, the sign shows the file of daemon, linked at the commit (§3.3 of the
// design).
const { id, language } = Astro.props;
const { text, source } = await sentence(language, id);
---

<div class="sentence" id={id}>
  <p>{text}</p>
  <details class="source">
    <summary>{await interfaceText(language, 'source')}</summary>
    <a href={sourceUrl(daemon.commit, source)} translate="no">{source}</a>
  </details>
</div>
```

`src/styles/page.css`, la struttura soltanto: i colori e i caratteri arrivano col compito 9.

```css
/* The page's own layout (§5.4 of the design); the colours and the fonts arrive with the themes. */
html {
  /* The index stays on top: a jump from it, or from the skip link, must not hide its target underneath. */
  scroll-padding-top: 4rem;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  line-height: 1.5;
}

.skip-link {
  position: absolute;
  z-index: 1;
  inset-inline-start: 1rem;
  inset-block-start: -10rem;
  padding: 0.25rem 0.5rem;
  background: Canvas;
}

.skip-link:focus {
  inset-block-start: 0.5rem;
}

.masthead {
  position: sticky;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  background: Canvas;
}

.masthead nav {
  display: flex;
  flex: 1;
  gap: 1rem;
}

.masthead a {
  padding: 0.25rem 0.5rem;
}

main,
footer {
  max-inline-size: 40rem;
  margin-inline: auto;
  padding-inline: 1rem;
}

.sentence {
  margin-block: 1.5rem;
}

.sentence p {
  margin: 0;
}
```

`src/pages/index.astro`:

```astro
---
import Page from '../layouts/Page.astro';
---

<Page />
```

`src/pages/it/index.astro`:

```astro
---
import Page from '../../layouts/Page.astro';
---

<Page />
```

- [ ] **Passo 10 — il controllo, verde.** Lo stesso comando del passo 8. Atteso: `0 errors`, `2 page(s) built` e
`22 passed`.

- [ ] **Passo 11 — l'altro senso.** Una frase tolta dalla sezione, e il link all'altra lingua scritto senza la base;
poi i file tornano com'erano, e la build si prova senza `LANDING_SITE`:

```bash
d=$(mktemp -d) && cp src/sections/What.astro src/layouts/Page.astro "$d/" && node --input-type=module - <<'EOF'
import { readFileSync, writeFileSync } from 'node:fs';

const replace = (file, from, to) => writeFileSync(file, readFileSync(file, 'utf8').replace(from, to));
replace('src/sections/What.astro', ", 'what-limit']", ']');
replace('src/layouts/Page.astro', 'href={getRelativeLocaleUrl(other)}', "href={other === 'it' ? '/it/' : '/'}");
EOF
rm -rf dist && npm run build && npx vitest run --project page; cp "$d/What.astro" src/sections/ && cp "$d/Page.astro" src/layouts/
env -u LANDING_SITE npm run build; rm -rf dist && npm run build && npx vitest run --project page
```

Atteso: prima `4 failed | 18 passed`, coi rossi `links to the other language` e `shows what-limit, with the link to its
source at the commit` in tutte e due le lingue; poi la build senza il sito si ferma, `LANDING_SITE is missing: hreflang
wants full addresses`, con l'uscita a 1; alla fine di nuovo `22 passed`.

- [ ] **Passo 12 — il resto, e le vulnerabilità.** `npm test -- --project checks`, poi `npm audit`. Atteso: `62 passed`,
e `found 0 vulnerabilities`.

- [ ] **Passo 13 — il commit.**

```bash
git add astro.config.mjs vitest.config.ts package.json package-lock.json src checks && git commit -m "t1(compito 8): la pagina, e il browser per guardarla -- l'indice, «Cos’è» con le cinque frasi e il segno della fonte, la chiusura col commit, l'altra lingua e hreflang; il sito e la base dalle impostazioni; il server di dist/ sotto la base e il Chrome installato; il controllo della pagina, coi rossi provati"
```

- [ ] **Passo 14 —** `git push`.

### Compito 9 — i due temi e i caratteri

**File:** crea `src/lib/tokens.ts`, `src/lib/tokens.test.ts`, `src/components/Theme.astro`, `checks/tokens.test.ts`,
`checks/themes.page.test.ts`; modifica `src/layouts/Page.astro`, `src/styles/page.css`, `package.json` e
`package-lock.json`.

**Usa:** `openDaemon` (compito 4), `daemon` e la pagina (compito 8), `openLanding` (compito 8). **Lascia:**

- in `src/lib/tokens.ts` `declaredTokens(css)`, `readTokens(css)` e `block(css, selector)`;
- in `src/components/Theme.astro` i colori dei due temi, cioè `gui/src/tokens/themes.css` di daemon a `origin/main`
  così com'è (§5.4 del disegno), e lo script del tema, che gira prima che la pagina si disegni;
- nella pagina `<html data-theme="dark">`, il tema senza JavaScript; l'interruttore, nascosto finché lo script non lo
  mostra; Geist per il testo e Barlow 600 per le etichette, ospitati dalla pagina; lo stile che legge solo i ruoli dei
  token, `--color-*`;
- `checks/tokens.test.ts`: rosso se la pagina legge un token che daemon non definisce in uno dei due temi, o una scala
  `--ref-*`, che la regola di `themes.css` vieta a chi la usa;
- `checks/themes.page.test.ts`: il tema del sistema; l'interruttore, col mouse e con la tastiera; la scelta che resta; il
  tema scuro senza JavaScript; i due caratteri;
- `@fontsource-variable/geist` 5.3.0 e `@fontsource/barlow` 5.3.0, i pacchetti della GUI.

**L'interruttore** segue il sistema finché il visitatore non sceglie; la scelta resta nel `localStorage`, ma solo se è
diversa dal tema del sistema: tornare al tema del sistema vuol dire seguirlo di nuovo. **Costo dichiarato:** lo script
del tema sta nella pagina così com'è (`is:inline`), perché deve girare prima che la pagina si disegni; quindi
`astro check` non lo controlla, e lo provano soltanto i controlli nel browser.

- [ ] **Passo 1 — i pacchetti**, fuori dal cancello (vincolo 9):

```bash
npm install --no-audit --no-fund --save-exact --save-dev @fontsource-variable/geist@5.3.0 @fontsource/barlow@5.3.0 && npm approve-scripts --allow-scripts-pending
```

Atteso: `No packages with unreviewed install scripts.`.

- [ ] **Passo 2 — i token, il test rosso.** `src/lib/tokens.test.ts`:

```ts
import { describe, expect, test } from 'vitest';
import { block, declaredTokens, readTokens } from './tokens';

// A themes.css in miniature: a scale on :root, and the roles of two themes.
const THEMES = `:root { --ref-neutral-5: #151112; }
[data-theme="dark"] {
  color-scheme: dark;
  --color-bg: var(--ref-neutral-5);
  --color-text: #ece6da;
}
[data-theme="light"] {
  color-scheme: light;
  --color-bg: #f3eee6;
}`;

describe('declaredTokens', () => {
  test('finds the custom properties a sheet declares', () => {
    expect([...declaredTokens(THEMES)].sort()).toEqual(['--color-bg', '--color-text', '--ref-neutral-5']);
  });
});

describe('readTokens', () => {
  test('finds the custom properties a sheet reads, and not those it only declares', () => {
    const css = 'a { color: var(--color-text); border: 1px solid var( --color-border ); --gap: 1rem; }';
    expect([...readTokens(css)].sort()).toEqual(['--color-border', '--color-text']);
  });
});

describe('block', () => {
  test('gives the declarations of one theme', () => {
    expect([...declaredTokens(block(THEMES, '[data-theme="light"]'))]).toEqual(['--color-bg']);
  });

  test('refuses a theme that is not there', () => {
    expect(() => block(THEMES, '[data-theme="sepia"]')).toThrow(/sepia/);
  });
});
```

Lancia `npx vitest run src/lib/tokens.test.ts`. Atteso: `Cannot find module './tokens'`.

- [ ] **Passo 3 — il codice.** `src/lib/tokens.ts`:

```ts
/** The custom properties that `css` declares: `--name: value`. */
export function declaredTokens(css: string): Set<string> {
  return new Set([...css.matchAll(/(--[\w-]+)\s*:/g)].map((match) => match[1]));
}

/** The custom properties that `css` reads: `var(--name)`. */
export function readTokens(css: string): Set<string> {
  return new Set([...css.matchAll(/var\(\s*(--[\w-]+)/g)].map((match) => match[1]));
}

/** The declarations of the rule for `selector` in `css`: one theme of daemon's themes.css (§5.4 of the design). */
export function block(css: string, selector: string): string {
  const start = css.indexOf(`${selector} {`);
  if (start === -1) throw new Error(`no rule for ${selector}`);
  const open = css.indexOf('{', start);
  return css.slice(open + 1, css.indexOf('}', open));
}
```

Lo stesso comando del passo 2. Atteso: `4 passed`.

- [ ] **Passo 4 — i due controlli, rossi.** `checks/tokens.test.ts`:

```ts
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, test } from 'vitest';
import { openDaemon } from '../src/lib/daemon';
import { block, declaredTokens, readTokens } from '../src/lib/tokens';

// The gate's check of the tokens (§5.4 of the design): the colours are the roles of daemon's themes.css at origin/main,
// and a token the page reads that daemon no longer defines is a red.
const themes = openDaemon().read('gui/src/tokens/themes.css');

// Every stylesheet and component of the page: wherever a token can be read.
const sources = readdirSync('src', { recursive: true, encoding: 'utf8' })
  .filter((file) => file.endsWith('.css') || file.endsWith('.astro'))
  .map((file) => readFileSync(join('src', file), 'utf8'))
  .join('\n');
const read = readTokens(sources);
const own = declaredTokens(sources);

describe('the tokens of the page', () => {
  test('sees what it judges', () => {
    // A walk that found nothing would pass the two probes below.
    expect(read.has('--color-bg')).toBe(true);
  });

  test.each(['dark', 'light'])('every token the page reads is defined, in the %s theme', (theme) => {
    const defined = declaredTokens(block(themes, `[data-theme="${theme}"]`));
    expect([...read].filter((name) => !own.has(name) && !defined.has(name))).toEqual([]);
  });

  test('the page reads roles, never a scale, so that no theme can be bypassed', () => {
    // The rule of daemon's themes.css: "No component reads a `--ref-*`".
    expect([...read].filter((name) => name.startsWith('--ref-'))).toEqual([]);
  });
});
```

`checks/themes.page.test.ts`:

```ts
import type { BrowserContextOptions, Page } from 'playwright';
import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { interfaceWord, readTexts } from '../src/lib/texts';
import { type Landing, openLanding } from './support/landing';

// The gate's check of the themes (§2.2 and §5.3 of the design): the system's theme, a switch that changes it by mouse
// and by keyboard and keeps the choice, the dark theme without JavaScript, and the page's own fonts.
const words = { it: readTexts('src/ui/it.json', interfaceWord), en: readTexts('src/ui/en.json', interfaceWord) };

let landing: Landing;
beforeAll(async () => {
  landing = await openLanding();
});
afterAll(async () => {
  await landing?.close();
});

const theme = (page: Page) => page.getAttribute('html', 'data-theme');
const background = (page: Page) => page.evaluate(() => getComputedStyle(document.body).backgroundColor);

describe.each(['en', 'it'] as const)('the themes of the page in %s', (language) => {
  const pages: Page[] = [];
  const open = async (options: BrowserContextOptions): Promise<Page> => {
    const page = await landing.open(language, options);
    pages.push(page);
    return page;
  };
  const toggle = (page: Page) => page.getByRole('switch', { name: words[language]['dark-theme'].text });
  afterAll(async () => {
    for (const page of pages) await page.context().close();
  });

  test.each(['dark', 'light'] as const)('follows the system when it is %s', async (scheme) => {
    const page = await open({ colorScheme: scheme });
    expect(await theme(page)).toBe(scheme);
    expect(await toggle(page).isChecked()).toBe(scheme === 'dark');
  });

  test('is dark without JavaScript, and has no switch, which needs it', async () => {
    const dark = await open({ colorScheme: 'dark' });
    const still = await open({ colorScheme: 'light', javaScriptEnabled: false });
    expect(await theme(still)).toBe('dark');
    expect(await background(still)).toBe(await background(dark));
    expect(await still.getByRole('switch').count()).toBe(0);
  });

  test('changes with the switch, by mouse and by keyboard, and keeps the choice', async () => {
    const page = await open({ colorScheme: 'light' });
    const light = await background(page);
    await toggle(page).click();
    expect(await theme(page)).toBe('dark');
    expect(await background(page)).not.toBe(light);
    await page.reload();
    expect(await theme(page)).toBe('dark');
    await toggle(page).focus();
    await page.keyboard.press('Space');
    expect(await theme(page)).toBe('light');
    // Back on the system's theme there is no choice left to keep: the page follows the system again.
    await page.reload();
    expect(await theme(page)).toBe('light');
    expect(await page.evaluate(() => localStorage.length)).toBe(0);
  });

  test('writes with its own fonts, Geist and Barlow', async () => {
    const page = await open({});
    const loaded = await page.evaluate(async () => {
      await document.fonts.ready;
      return [...document.fonts].filter((font) => font.status === 'loaded').map((font) => font.family);
    });
    expect(loaded).toContain('Geist Variable');
    expect(loaded).toContain('Barlow');
  });
});
```

```bash
npx vitest run checks/tokens.test.ts; rm -rf dist && npm run build && npx vitest run --project page checks/themes.page.test.ts
```

Atteso: `1 failed | 3 passed`, il rosso su `sees what it judges` — la pagina non legge ancora nessun token, e senza
quella guardia gli altri tre passerebbero a vuoto —; poi `10 failed`.

- [ ] **Passo 5 — i temi e i caratteri.** `src/components/Theme.astro`:

```astro
---
import { daemon } from '../lib/content';

// The colours of the two themes: daemon's themes.css as it is at origin/main. The CSS variables are the truth, and the
// page keeps no copy (§5.4 of the design).
const themes = daemon.read('gui/src/tokens/themes.css');
---

<style is:inline set:html={themes}></style>
<script is:inline>
  // The theme before the first paint (§2.2 of the design): the visitor's choice if there is one, else the system's.
  // Without JavaScript the page keeps <html data-theme="dark"> and the switch stays hidden (§5.3 of the design).
  (() => {
    const root = document.documentElement;
    const system = matchMedia('(prefers-color-scheme: dark)');
    const systemTheme = () => (system.matches ? 'dark' : 'light');
    // A browser that refuses the storage still gets the switch: the choice then lasts as long as the page.
    const chosen = () => {
      try {
        const theme = localStorage.getItem('theme');
        return theme === 'dark' || theme === 'light' ? theme : null;
      } catch {
        return null;
      }
    };
    root.dataset.theme = chosen() ?? systemTheme();
    addEventListener('DOMContentLoaded', () => {
      const box = document.querySelector('.theme-switch input');
      const show = () => {
        box.checked = root.dataset.theme === 'dark';
      };
      show();
      box.closest('.theme-switch').hidden = false;
      box.addEventListener('change', () => {
        root.dataset.theme = box.checked ? 'dark' : 'light';
        // A choice equal to the system's theme is no choice: the page goes back to following the system.
        try {
          if (root.dataset.theme === systemTheme()) localStorage.removeItem('theme');
          else localStorage.setItem('theme', root.dataset.theme);
        } catch {}
      });
      system.addEventListener('change', () => {
        if (chosen() === null) {
          root.dataset.theme = systemTheme();
          show();
        }
      });
    });
  })();
</script>
```

`src/layouts/Page.astro`, al posto di quello del compito 8: i caratteri, `Theme`, `data-theme="dark"` e l'interruttore.

```astro
---
import '@fontsource-variable/geist';
import '@fontsource/barlow/600.css';
import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from 'astro:i18n';
import Theme from '../components/Theme.astro';
import { daemon, interfaceText, languageOf, sentence } from '../lib/content';
import { repositoryUrl, treeUrl } from '../lib/links';
import What from '../sections/What.astro';
import '../styles/page.css';

const language = languageOf(Astro.currentLocale);
const other = language === 'en' ? 'it' : 'en';
const word = (id: string) => interfaceText(language, id);
const title = await word('site-title');
// The line at the bottom: the build writes the commit where the word says {commit} (§3.4 of the plan).
const provenance = (await word('provenance')).split('{commit}');
if (provenance.length !== 2) throw new Error(`the word provenance wants {commit} once, in ${language}`);
---

<!doctype html>
<html lang={language} data-theme="dark">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name="description" content={(await sentence(language, 'what-app')).text} />
    <link rel="alternate" hreflang="en" href={getAbsoluteLocaleUrl('en')} />
    <link rel="alternate" hreflang="it" href={getAbsoluteLocaleUrl('it')} />
    <Theme />
  </head>
  <body>
    <a class="skip-link" href="#content">{await word('skip-to-content')}</a>
    <header class="masthead">
      <nav aria-label={await word('contents')}>
        <a href="#what">{await word('section-what')}</a>
      </nav>
      <label class="theme-switch" hidden><input type="checkbox" role="switch" /> {await word('dark-theme')}</label>
      <a href={getRelativeLocaleUrl(other)} hreflang={other} lang={other} aria-label={await word('other-language')}>
        {await word('other-language-short')}
      </a>
    </header>
    <main id="content">
      <h1 translate="no">{title}</h1>
      <What language={language} />
    </main>
    <footer>
      <p>
        {provenance[0]}<a href={treeUrl(daemon.commit)}><code translate="no">{daemon.commit.slice(0, 7)}</code></a>{provenance[1]}
      </p>
      <p><a href={repositoryUrl}>{await word('code-on-github')}</a></p>
    </footer>
  </body>
</html>
```

`src/styles/page.css`, al posto di quello del compito 8:

```css
/* The page's own layout and type (§5.4 of the design); the colours are the roles of daemon's themes.css. */
html {
  /* The index stays on top: a jump from it, or from the skip link, must not hide its target underneath. */
  scroll-padding-top: 4rem;
}

body {
  margin: 0;
  font-family: 'Geist Variable', system-ui, sans-serif;
  line-height: 1.5;
  background: var(--color-bg);
  color: var(--color-text);
}

a {
  color: var(--color-text-accent);
}

:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

::selection {
  background: var(--color-bg-selection);
}

.skip-link {
  position: absolute;
  z-index: 1;
  inset-inline-start: 1rem;
  inset-block-start: -10rem;
  padding: 0.25rem 0.5rem;
  background: var(--color-bg-raised);
}

.skip-link:focus {
  inset-block-start: 0.5rem;
}

.masthead {
  position: sticky;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  border-block-end: 1px solid var(--color-border);
  background: var(--color-bg);
}

.masthead nav {
  display: flex;
  flex: 1;
  gap: 1rem;
}

.masthead a {
  padding: 0.25rem 0.5rem;
}

/* The labels — the index, the switch, the other language, the sign of the source — in Barlow, as in daemon's GUI. */
.masthead a,
.theme-switch,
.source summary {
  font-family: 'Barlow', system-ui, sans-serif;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

/* Checked, the switch fills with a mark, as the checked radio of daemon's GUI does: a mark reads 3:1 on the page, and
   the accent background does not, in the dark theme. */
.theme-switch input {
  inline-size: 1.5rem;
  block-size: 1.5rem;
  margin: 0;
  vertical-align: middle;
  accent-color: var(--color-mark);
}

main,
footer {
  max-inline-size: 40rem;
  margin-inline: auto;
  padding-inline: 1rem;
}

.sentence {
  margin-block: 1.5rem;
}

.sentence p {
  margin: 0;
}

.source summary {
  color: var(--color-text-muted);
  cursor: pointer;
}
```

- [ ] **Passo 6 — i controlli, verdi.**

```bash
rm -rf dist && npm run build && npx vitest run checks/tokens.test.ts && npx vitest run --project page
```

Atteso: `0 errors`; `4 passed`; `32 passed`, i 22 della pagina e i 10 dei temi. I caratteri sono in `dist/_astro/`.

- [ ] **Passo 7 — l'altro senso.** Un token che daemon non definisce, una scala `--ref-*` e la pagina senza
`data-theme="dark"`; poi i file tornano com'erano:

```bash
d=$(mktemp -d) && cp src/styles/page.css src/layouts/Page.astro "$d/" && node --input-type=module - <<'EOF'
import { readFileSync, writeFileSync } from 'node:fs';

const replace = (file, from, to) => writeFileSync(file, readFileSync(file, 'utf8').replace(from, to));
replace('src/styles/page.css', 'color: var(--color-text-muted);', 'color: var(--color-text-faint);\n  border-color: var(--ref-neutral-48);');
replace('src/layouts/Page.astro', ' data-theme="dark"', '');
EOF
npx vitest run checks/tokens.test.ts; rm -rf dist && npm run build && npx vitest run --project page checks/themes.page.test.ts
cp "$d/page.css" src/styles/ && cp "$d/Page.astro" src/layouts/ && rm -rf dist && npm run build && npx vitest run checks/tokens.test.ts && npx vitest run --project page
```

Atteso: prima `3 failed | 1 passed`, con `--color-text-faint` e `--ref-neutral-48` nei rossi; poi `2 failed | 8
passed`, i rossi su `is dark without JavaScript, and has no switch, which needs it`; alla fine `4 passed` e `32 passed`.

- [ ] **Passo 8 — il resto, e le vulnerabilità.** `npm test -- --project checks`, poi `npm audit`. Atteso: `70 passed`,
e `found 0 vulnerabilities`.

- [ ] **Passo 9 — il commit.**

```bash
git add package.json package-lock.json src checks && git commit -m "t1(compito 9): i due temi e i caratteri -- i colori di themes.css di daemon a origin/main così com'è, il tema del sistema, l'interruttore che ricorda la scelta, il tema scuro senza JavaScript; Geist e Barlow ospitati dalla pagina; il controllo dei token e quello dei temi, coi rossi provati"
```

- [ ] **Passo 10 —** `git push`.

### Compito 10 — i controlli nel browser

**File:** crea `checks/network.page.test.ts`, `checks/console.page.test.ts`, `checks/no-javascript.page.test.ts`;
modifica `checks/support/landing.ts` e `src/layouts/Page.astro`.

**Usa:** `openLanding` (compito 8), la pagina coi temi (compito 9), `brand/` (compito 2). **Lascia:**

- `open(language, options, before)`: `before` gira sulla pagina prima che si carichi, ed è lì che un controllo comincia
  ad ascoltare;
- `checks/network.page.test.ts`: ogni richiesta va al sito della pagina. Una richiesta altrove si registra e si ferma
  prima che esca dalla macchina;
- `checks/console.page.test.ts`: nessun errore in console, mentre la pagina si carica e mentre si usa — l'interruttore,
  l'indice, il segno di una fonte. Un file che non si trova è un errore anche qui, perché Chrome lo scrive in console;
- `checks/no-javascript.page.test.ts`: senza JavaScript la pagina si legge uguale; manca solo l'interruttore, che senza
  non potrebbe funzionare;
- l'icona della scheda: `brand/daemon-icon-dark.svg`, la copia del kit, che la build serve byte per byte.

**L'icona** entra qui perché il controllo della console la chiede: senza, Chrome chiede `/favicon.ico` e scrive il 404 in
console. Era una delle domande aperte della consegna; il rosso del passo 2 è quello vero, non uno messo apposta.

- [ ] **Passo 1 — dove un controllo comincia ad ascoltare.** `checks/support/landing.ts`, al posto di quello del
compito 8:

```ts
import { type Browser, type BrowserContextOptions, chromium, type Page } from 'playwright';
import { readAddress } from '../../src/lib/address';
import type { Language } from '../../src/lib/words';
import { serveDist } from './server';

/** The built page, served under its base, and the installed Chrome: where every check in the browser starts. */
export interface Landing {
  readonly browser: Browser;
  /** The path of the page in `language`, under the base: `/` is English, `/it/` Italian (§2.4 of the design). */
  path(language: Language): string;
  /** The full address the page in `language` will have once published: what hreflang declares. */
  address(language: Language): string;
  /** Where the page in `language` is served now. */
  url(language: Language): string;
  /**
   * The page in `language`, loaded in a context of its own; close it with `page.context().close()`. `before` runs on the
   * page before it loads: where a check starts to listen.
   */
  open(language: Language, options?: BrowserContextOptions, before?: (page: Page) => Promise<void> | void): Promise<Page>;
  close(): Promise<void>;
}

export async function openLanding(): Promise<Landing> {
  const { site, base } = readAddress(process.env);
  const served = await serveDist(base);
  const path = (language: Language): string => (language === 'en' ? base : `${base}it/`);
  const url = (language: Language): string => served.origin + path(language);
  // The installed Chrome, as the GUI of daemon uses it: no browser is downloaded (§2.1 of the plan).
  const browser = await chromium.launch({ channel: 'chrome' });
  return {
    browser,
    path,
    address: (language) => new URL(path(language), site).href,
    url,
    async open(language, options = {}, before = () => {}) {
      const page = await (await browser.newContext(options)).newPage();
      // The page is built and loaded: what is not there at once is missing, and a red should not wait.
      page.setDefaultTimeout(2_000);
      await before(page);
      await page.goto(url(language));
      return page;
    },
    async close() {
      await browser.close();
      await served.close();
    },
  };
}
```

- [ ] **Passo 2 — i tre controlli; il rosso è l'icona che manca.** `checks/network.page.test.ts`:

```ts
import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { type Landing, openLanding } from './support/landing';

// The gate's check of the network (§1, rule 4, and §5.1 of the design): the page asks nothing of a third-party site —
// no fonts, no statistics, nothing. Every request is recorded, and one bound elsewhere is stopped before it leaves.
let landing: Landing;
beforeAll(async () => {
  landing = await openLanding();
});
afterAll(async () => {
  await landing?.close();
});

describe.each(['en', 'it'] as const)('the requests of the page in %s', (language) => {
  test('all go to the page’s own site', async () => {
    const own = new URL(landing.url(language)).origin;
    const requests: string[] = [];
    const page = await landing.open(language, {}, async (page) => {
      await page.route('**/*', (route) => {
        requests.push(route.request().url());
        return new URL(route.request().url()).origin === own ? route.continue() : route.abort();
      });
    });
    await page.evaluate(() => document.fonts.ready);
    await page.context().close();
    // The page and its fonts at least: a page that asked for nothing would pass the probe below.
    expect(requests.filter((url) => url.endsWith('.woff2')).length).toBeGreaterThan(0);
    expect(requests.filter((url) => new URL(url).origin !== own)).toEqual([]);
  });
});
```

`checks/console.page.test.ts`:

```ts
import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { interfaceWord, readTexts } from '../src/lib/texts';
import { type Landing, openLanding } from './support/landing';

// The gate's check of the console (§6.1 of the design): no error while the page loads, and none while it is used. A file
// the page cannot find is an error here too: Chrome writes it in the console.
const words = { it: readTexts('src/ui/it.json', interfaceWord), en: readTexts('src/ui/en.json', interfaceWord) };

let landing: Landing;
beforeAll(async () => {
  landing = await openLanding();
});
afterAll(async () => {
  await landing?.close();
});

describe.each(['en', 'it'] as const)('the console of the page in %s', (language) => {
  test('has no error, while the page loads and while it is used', async () => {
    const errors: string[] = [];
    const page = await landing.open(language, {}, (page) => {
      page.on('console', (message) => {
        if (message.type() === 'error') errors.push(message.text());
      });
      page.on('pageerror', (error) => errors.push(error.message));
    });
    await page.getByRole('switch', { name: words[language]['dark-theme'].text }).click();
    await page.locator('nav a').first().click();
    await page.locator('.source summary').first().click();
    await page.evaluate(() => document.fonts.ready);
    await page.context().close();
    expect(errors).toEqual([]);
  });
});
```

`checks/no-javascript.page.test.ts`:

```ts
import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { englishSentence, italianSentence, readTexts } from '../src/lib/texts';
import { type Landing, openLanding } from './support/landing';

// The gate's check of the page without JavaScript (§5.3 of the design): it reads the same, all of it. Only the theme
// switch is missing, because without JavaScript it could not work.
const sentences = { it: readTexts('src/texts/it.json', italianSentence), en: readTexts('src/texts/en.json', englishSentence) };

let landing: Landing;
beforeAll(async () => {
  landing = await openLanding();
});
afterAll(async () => {
  await landing?.close();
});

describe.each(['en', 'it'] as const)('the page in %s, without JavaScript', (language) => {
  test('reads the same as with it, but for the theme switch', async () => {
    const withScript = await landing.open(language);
    const switchLine = (await withScript.locator('.theme-switch').innerText()).trim();
    const lines = async (page: typeof withScript) => {
      const text = await page.locator('body').innerText();
      await page.context().close();
      return text.split('\n').map((line) => line.trim()).filter((line) => line !== '');
    };
    const read = (await lines(withScript)).filter((line) => line !== switchLine);
    const without = await lines(await landing.open(language, { javaScriptEnabled: false }));
    // What the page says, at least: an empty page would read the same both ways.
    expect(without).toContain(sentences[language]['what-app'].text);
    expect(without).toEqual(read);
  });
});
```

```bash
rm -rf dist && npm run build && npx vitest run --project page checks/network.page.test.ts checks/console.page.test.ts checks/no-javascript.page.test.ts
```

Atteso: `0 errors`, poi `1 failed | 5 passed`: il rosso è la console, con `Failed to load resource: the server responded
with a status of 404 (Not Found)` — Chrome chiede `/favicon.ico` una volta per browser, quindi in una lingua sola.

- [ ] **Passo 3 — l'icona.** `src/layouts/Page.astro`, al posto di quello del compito 9:

```astro
---
import '@fontsource-variable/geist';
import '@fontsource/barlow/600.css';
import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from 'astro:i18n';
// The icon of the tab: the kit's, from its copy in brand/ (§7.2 of the design). Without it Chrome asks for
// /favicon.ico, and the missing file is an error in the console.
import icon from '../../brand/daemon-icon-dark.svg?url';
import Theme from '../components/Theme.astro';
import { daemon, interfaceText, languageOf, sentence } from '../lib/content';
import { repositoryUrl, treeUrl } from '../lib/links';
import What from '../sections/What.astro';
import '../styles/page.css';

const language = languageOf(Astro.currentLocale);
const other = language === 'en' ? 'it' : 'en';
const word = (id: string) => interfaceText(language, id);
const title = await word('site-title');
// The line at the bottom: the build writes the commit where the word says {commit} (§3.4 of the plan).
const provenance = (await word('provenance')).split('{commit}');
if (provenance.length !== 2) throw new Error(`the word provenance wants {commit} once, in ${language}`);
---

<!doctype html>
<html lang={language} data-theme="dark">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <link rel="icon" type="image/svg+xml" href={icon} />
    <meta name="description" content={(await sentence(language, 'what-app')).text} />
    <link rel="alternate" hreflang="en" href={getAbsoluteLocaleUrl('en')} />
    <link rel="alternate" hreflang="it" href={getAbsoluteLocaleUrl('it')} />
    <Theme />
  </head>
  <body>
    <a class="skip-link" href="#content">{await word('skip-to-content')}</a>
    <header class="masthead">
      <nav aria-label={await word('contents')}>
        <a href="#what">{await word('section-what')}</a>
      </nav>
      <label class="theme-switch" hidden><input type="checkbox" role="switch" /> {await word('dark-theme')}</label>
      <a href={getRelativeLocaleUrl(other)} hreflang={other} lang={other} aria-label={await word('other-language')}>
        {await word('other-language-short')}
      </a>
    </header>
    <main id="content">
      <h1 translate="no">{title}</h1>
      <What language={language} />
    </main>
    <footer>
      <p>
        {provenance[0]}<a href={treeUrl(daemon.commit)}><code translate="no">{daemon.commit.slice(0, 7)}</code></a>{provenance[1]}
      </p>
      <p><a href={repositoryUrl}>{await word('code-on-github')}</a></p>
    </footer>
  </body>
</html>
```

- [ ] **Passo 4 — verde, e l'icona è quella del kit.**

```bash
rm -rf dist && npm run build && npx vitest run --project page && cmp dist/_astro/daemon-icon-dark.*.svg brand/daemon-icon-dark.svg && echo 'the icon is the kit’s'
```

Atteso: `0 errors`; `38 passed`; `the icon is the kit’s`.

- [ ] **Passo 5 — l'altro senso.** Un foglio di stile chiesto a un sito di terzi, che non esiste per costruzione, e uno
script che aggiunge del testo e poi sbaglia; poi la pagina torna com'era:

```bash
d=$(mktemp -d) && cp src/layouts/Page.astro "$d/" && node --input-type=module - <<'EOF'
import { readFileSync, writeFileSync } from 'node:fs';

const replace = (file, from, to) => writeFileSync(file, readFileSync(file, 'utf8').replace(from, to));
replace('src/layouts/Page.astro', '    <Theme />\n', '    <Theme />\n    <link rel="stylesheet" href="https://third-party.invalid/style.css" />\n');
replace(
  'src/layouts/Page.astro',
  '  </body>',
  '    <script is:inline>document.querySelector("main").append("only with JavaScript"); window.missing();</script>\n  </body>',
);
EOF
rm -rf dist && npm run build && npx vitest run --project page checks/network.page.test.ts checks/console.page.test.ts checks/no-javascript.page.test.ts
cp "$d/Page.astro" src/layouts/ && rm -rf dist && npm run build && npx vitest run --project page
```

Atteso: prima `6 failed`, i tre controlli in tutte e due le lingue; poi di nuovo `38 passed`.

- [ ] **Passo 6 — il resto, e le vulnerabilità.** `npm test -- --project checks`, poi `npm audit`. Atteso: `70 passed`,
e `found 0 vulnerabilities`.

- [ ] **Passo 7 — il commit.**

```bash
git add src checks && git commit -m "t1(compito 10): i controlli nel browser -- nessuna richiesta a terzi, nessun errore in console, la pagina che si legge uguale senza JavaScript; l'icona del kit da brand/, che il controllo della console chiedeva, coi rossi provati"
```

- [ ] **Passo 8 —** `git push`.

### Compito 11 — l'accessibilità

**File:** crea `checks/accessibility.page.test.ts`; modifica `checks/support/landing.ts`, `vitest.config.ts`,
`src/styles/page.css`, `package.json` e `package-lock.json`.

**Usa:** `openLanding` e `open(language, options)` (compiti 8 e 10), la pagina coi temi (compito 9). **Lascia:**

- i controlli nel browser **uno per volta**: in `vitest.config.ts` il progetto `page` con `fileParallelism: false`, e in
  `openLanding()` la guardia che si ferma se due controlli nel browser girano insieme;
- `checks/accessibility.page.test.ts`, il controllo del cancello: nessun errore di axe sulle regole WCAG 2.2 AA, in ogni
  stato in cui un visitatore porta la pagina — i due temi, un computer e un telefono, le fonti chiuse e aperte —; e
  quattro prove della tastiera, ciascuna col suo rosso: il Tab che raggiunge ogni controllo, nell'ordine della pagina;
  l'anello di ciascuno; il link «Vai al contenuto» che porta dentro il contenuto; l'indice che porta la sua sezione sotto
  di sé;
- in `src/styles/page.css`, il segno della fonte e il suo link alti almeno 24 px, come vuole WCAG 2.5.8: è il rosso vero
  del controllo (risposta del proprietario: A, il 2026-10-07);
- `axe-core` 4.13.0.

**Uno per volta.** Vitest lancia insieme i file di un progetto, uno per processore meno uno. Col controllo
dell'accessibilità, il più lungo, i file nel browser diventano sei, ciascuno col suo Chrome: su una macchina corta di
memoria si rallentano l'un l'altro oltre le loro attese, 2 secondi per un'azione e 5 per un test. Nelle prove del
2026-10-07 è successo coi file insieme, e mai coi file uno per volta (§14 del verbale). `fileParallelism: false` li mette
in fila, dopo gli altri progetti; la guardia legge `VITEST_POOL_ID`, il numero che Vitest dà al suo processo, da 1 in su.
**Costo dichiarato:** i controlli nel browser durano circa il doppio; la misura è nella §14 del verbale.

**Le regole di axe** sono quelle dei suoi tag `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa` e `wcag22aa`: la tabella
*«Axe-core Tags»* di `doc/API.md` di axe-core, al tag `v4.13.0`, guardata il 2026-10-07. axe entra nella pagina con
`page.addScriptTag`, che lo scrive dentro senza chiederlo alla rete.

**Il telefono girato.** Su un computer, 1280 × 720, e sul telefono della §2.2, 412 × 823, la pagina del traguardo 1 sta
tutta nello schermo, e un salto dall'indice non la muove: lì una sonda passerebbe con o senza `scroll-padding-top`. Sul
telefono girato, 823 × 412, la pagina scorre.

**Non entra** il movimento ridotto della §6.1 del disegno: arriva col primo movimento, l'orologio del traguardo 2.
**Costo dichiarato:** ciò che axe non prova lo vede chi rilegge, come il contrasto di un controllo (§6.1 del disegno).

- [ ] **Passo 1 — i pacchetti**, fuori dal cancello (vincolo 9):

```bash
npm install --no-audit --no-fund --save-exact --save-dev axe-core@4.13.0 && npm approve-scripts --allow-scripts-pending
```

Atteso: `No packages with unreviewed install scripts.`.

- [ ] **Passo 2 — uno per volta: la guardia, rossa.** `checks/support/landing.ts`, al posto di quello del compito 10:

```ts
import { type Browser, type BrowserContextOptions, chromium, type Page } from 'playwright';
import { readAddress } from '../../src/lib/address';
import type { Language } from '../../src/lib/words';
import { serveDist } from './server';

/** The built page, served under its base, and the installed Chrome: where every check in the browser starts. */
export interface Landing {
  readonly browser: Browser;
  /** The path of the page in `language`, under the base: `/` is English, `/it/` Italian (§2.4 of the design). */
  path(language: Language): string;
  /** The full address the page in `language` will have once published: what hreflang declares. */
  address(language: Language): string;
  /** Where the page in `language` is served now. */
  url(language: Language): string;
  /**
   * The page in `language`, loaded in a context of its own; close it with `page.context().close()`. `before` runs on the
   * page before it loads: where a check starts to listen.
   */
  open(language: Language, options?: BrowserContextOptions, before?: (page: Page) => Promise<void> | void): Promise<Page>;
  close(): Promise<void>;
}

export async function openLanding(): Promise<Landing> {
  // One file at a time (vitest.config.ts): side by side, each with its Chrome, the checks slow one another past their
  // waits. Vitest numbers its workers from 1, so another number means two files at once.
  if (process.env.VITEST_POOL_ID !== '1') {
    throw new Error(`two checks in the browser at once: this one runs in worker ${process.env.VITEST_POOL_ID}`);
  }
  const { site, base } = readAddress(process.env);
  const served = await serveDist(base);
  const path = (language: Language): string => (language === 'en' ? base : `${base}it/`);
  const url = (language: Language): string => served.origin + path(language);
  // The installed Chrome, as the GUI of daemon uses it: no browser is downloaded (§2.1 of the plan).
  const browser = await chromium.launch({ channel: 'chrome' });
  return {
    browser,
    path,
    address: (language) => new URL(path(language), site).href,
    url,
    async open(language, options = {}, before = () => {}) {
      const page = await (await browser.newContext(options)).newPage();
      // The page is built and loaded: what is not there at once is missing, and a red should not wait.
      page.setDefaultTimeout(2_000);
      await before(page);
      await page.goto(url(language));
      return page;
    },
    async close() {
      await browser.close();
      await served.close();
    },
  };
}
```

```bash
rm -rf dist && npm run build && npx vitest run --project page
```

Atteso: `0 errors`, poi `Test Files  4 failed | 1 passed (5)`: ogni file che gira accanto al primo si ferma con `two
checks in the browser at once`, e i suoi test risultano saltati. Quale file passa dipende da quale parte per primo; il
conto vale su una macchina con almeno sei processori.

- [ ] **Passo 3 — uno per volta: la configurazione.** `vitest.config.ts`, al posto di quello del compito 8:

```ts
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: [
      { test: { name: 'checks', include: ['src/**/*.test.ts', 'checks/**/*.test.ts'], exclude: [...configDefaults.exclude, '**/*.page.test.ts'] } },
      // One file at a time, after the other projects: each file opens its own Chrome, and side by side they slow one
      // another past their waits. The guard is in openLanding().
      { test: { name: 'page', include: ['checks/**/*.page.test.ts'], fileParallelism: false } },
    ],
  },
});
```

Lo stesso comando del passo 2. Atteso: `0 errors` e `38 passed`.

- [ ] **Passo 4 — il controllo; il rosso è il segno della fonte.** `checks/accessibility.page.test.ts`:

```ts
import { createRequire } from 'node:module';
import type axe from 'axe-core';
import type { BrowserContextOptions, Page } from 'playwright';
import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { type Landing, openLanding } from './support/landing';

// The gate's check of accessibility (§6.1 of the design): what a program can prove, not the whole conformance. No error
// of axe on the rules of WCAG 2.2 AA, in every state a visitor can bring the page to; every control within reach of the
// keyboard. The reduced motion arrives with the first motion, in milestone 2.
const AXE = createRequire(import.meta.url).resolve('axe-core/axe.min.js');
const WCAG_22_AA = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

// A computer; the phone of the speed profile (§2.2 of the plan); the same phone held sideways, where the page scrolls.
const SCREENS = {
  computer: { width: 1280, height: 720 },
  phone: { width: 412, height: 823 },
  sideways: { width: 823, height: 412 },
};

let landing: Landing;
beforeAll(async () => {
  landing = await openLanding();
});
afterAll(async () => {
  await landing?.close();
});

/** What axe finds broken on `page`, on the rules of WCAG 2.2 AA: `rule: element`. */
async function violations(page: Page): Promise<string[]> {
  await page.addScriptTag({ path: AXE });
  return page.evaluate(async (tags) => {
    const results = await (window as unknown as { axe: typeof axe }).axe.run(document, { runOnly: tags });
    return results.violations.flatMap((rule) => rule.nodes.map((node) => `${rule.id}: ${node.target.join(' ')}`));
  }, WCAG_22_AA);
}

/**
 * Tabs through `page` once per control: the controls a visitor can reach, in the order of the page, and for each Tab
 * where the focus lands among them, -1 if elsewhere, with the style of its ring.
 */
async function tabThrough(page: Page): Promise<{ count: number; reached: { at: number; ring: string }[] }> {
  // A source's link counts only once the source is open: closed, it is not on the page.
  const controls = await page.evaluateHandle(() =>
    [...document.querySelectorAll('a[href], summary, input')].filter((control) => control.checkVisibility()),
  );
  const count = await controls.evaluate((all) => all.length);
  const reached: { at: number; ring: string }[] = [];
  for (let i = 0; i < count; i++) {
    await page.keyboard.press('Tab');
    reached.push(
      await controls.evaluate((all) => {
        const focused = document.activeElement;
        return focused ? { at: all.indexOf(focused), ring: getComputedStyle(focused).outlineStyle } : { at: -1, ring: 'none' };
      }),
    );
  }
  return { count, reached };
}

describe.each(['en', 'it'] as const)('the accessibility of the page in %s', (language) => {
  const pages: Page[] = [];
  const open = async (options: BrowserContextOptions): Promise<Page> => {
    const page = await landing.open(language, options);
    pages.push(page);
    return page;
  };
  afterAll(async () => {
    for (const page of pages) await page.context().close();
  });

  // Each theme, a computer and a phone, the sources closed and open: every state a visitor can bring the page to.
  const states = (['dark', 'light'] as const).flatMap((theme) =>
    (['computer', 'phone'] as const).flatMap((screen) => (['closed', 'open'] as const).map((sources) => ({ theme, screen, sources }))),
  );

  test.each(states)('no error of axe: $theme theme, $screen, sources $sources', async ({ theme, screen, sources }) => {
    const page = await open({ colorScheme: theme, viewport: SCREENS[screen] });
    if (sources === 'open') {
      await page.locator('details').evaluateAll((all) => all.forEach((details) => details.setAttribute('open', '')));
    }
    expect(await violations(page)).toEqual([]);
  });

  test('Tab reaches every control, in the order of the page', async () => {
    const { count, reached } = await tabThrough(await open({}));
    // What the page offers, at least: a page without controls would pass the probe below.
    expect(count).toBeGreaterThan(0);
    expect(reached.map((control) => control.at)).toEqual([...Array(count).keys()]);
  });

  test('every control Tab reaches shows its ring', async () => {
    const { reached } = await tabThrough(await open({}));
    // Only the controls: where the focus leaves the page, the probe above is the one to go red.
    const controls = reached.filter((control) => control.at !== -1);
    expect(controls.length).toBeGreaterThan(0);
    expect(controls.filter((control) => control.ring === 'none')).toEqual([]);
  });

  test('the skip link leads into the content', async () => {
    const page = await open({});
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.keyboard.press('Tab');
    expect(await page.evaluate(() => Boolean(document.activeElement?.closest('main')))).toBe(true);
  });

  test('the index brings its section below itself', async () => {
    const page = await open({ viewport: SCREENS.sideways });
    await page.locator('nav a').first().focus();
    await page.keyboard.press('Enter');
    const index = await page.locator('header').boundingBox();
    const section = await page.locator('#what').boundingBox();
    if (!index || !section) throw new Error('the index or the section is not on the page');
    expect(section.y).toBeGreaterThanOrEqual(index.y + index.height);
  });
});
```

```bash
rm -rf dist && npm run build && npx vitest run --project page checks/accessibility.page.test.ts
```

Atteso: `0 errors`, poi `8 failed | 16 passed`. I rossi sono axe con le fonti aperte, nei due temi, su computer e
telefono, in tutte e due le lingue: `target-size` sul segno della fonte e sul suo link. È il rosso vero, non uno messo
apposta (risposta: A).

- [ ] **Passo 5 — il segno della fonte, alto 24 px.** `src/styles/page.css`, al posto di quello del compito 9:

```css
/* The page's own layout and type (§5.4 of the design); the colours are the roles of daemon's themes.css. */
html {
  /* The index stays on top: a jump from it, or from the skip link, must not hide its target underneath. */
  scroll-padding-top: 4rem;
}

body {
  margin: 0;
  font-family: 'Geist Variable', system-ui, sans-serif;
  line-height: 1.5;
  background: var(--color-bg);
  color: var(--color-text);
}

a {
  color: var(--color-text-accent);
}

:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

::selection {
  background: var(--color-bg-selection);
}

.skip-link {
  position: absolute;
  z-index: 1;
  inset-inline-start: 1rem;
  inset-block-start: -10rem;
  padding: 0.25rem 0.5rem;
  background: var(--color-bg-raised);
}

.skip-link:focus {
  inset-block-start: 0.5rem;
}

.masthead {
  position: sticky;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  border-block-end: 1px solid var(--color-border);
  background: var(--color-bg);
}

.masthead nav {
  display: flex;
  flex: 1;
  gap: 1rem;
}

.masthead a {
  padding: 0.25rem 0.5rem;
}

/* The labels — the index, the switch, the other language, the sign of the source — in Barlow, as in daemon's GUI. */
.masthead a,
.theme-switch,
.source summary {
  font-family: 'Barlow', system-ui, sans-serif;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

/* Checked, the switch fills with a mark, as the checked radio of daemon's GUI does: a mark reads 3:1 on the page, and
   the accent background does not, in the dark theme. */
.theme-switch input {
  inline-size: 1.5rem;
  block-size: 1.5rem;
  margin: 0;
  vertical-align: middle;
  accent-color: var(--color-mark);
}

main,
footer {
  max-inline-size: 40rem;
  margin-inline: auto;
  padding-inline: 1rem;
}

.sentence {
  margin-block: 1.5rem;
}

.sentence p {
  margin: 0;
}

/* A source, open, has two targets one above the other: each is 24 px high at least (WCAG 2.5.8). */
.source summary {
  padding-block: 0.25rem;
  color: var(--color-text-muted);
  cursor: pointer;
}

.source a {
  display: inline-block;
}
```

- [ ] **Passo 6 — verde.** Lo stesso comando del passo 4. Atteso: `0 errors` e `24 passed`.

- [ ] **Passo 7 — l'altro senso.** Un difetto per ciascuna prova della tastiera: l'indice senza `scroll-padding-top`, i
link senza anello, il link all'altra lingua fuori dal giro del Tab, «Vai al contenuto» che porta dove non c'è niente;
poi i file tornano com'erano, e girano tutti i controlli nel browser:

```bash
d=$(mktemp -d) && cp src/styles/page.css src/layouts/Page.astro "$d/" && node --input-type=module - <<'EOF'
import { readFileSync, writeFileSync } from 'node:fs';

const replace = (file, from, to) => writeFileSync(file, readFileSync(file, 'utf8').replace(from, to));
replace('src/styles/page.css', '  scroll-padding-top: 4rem;\n', '');
replace('src/styles/page.css', '::selection {', 'a:focus {\n  outline: none;\n}\n\n::selection {');
replace('src/layouts/Page.astro', "aria-label={await word('other-language')}>", "aria-label={await word('other-language')} tabindex=\"-1\">");
replace('src/layouts/Page.astro', 'href="#content"', 'href="#nowhere"');
EOF
rm -rf dist && npm run build && npx vitest run --project page checks/accessibility.page.test.ts; cp "$d/page.css" src/styles/ && cp "$d/Page.astro" src/layouts/
rm -rf dist && npm run build && npx vitest run --project page
```

Atteso: prima `8 failed | 16 passed`: le quattro prove della tastiera, in tutte e due le lingue, ciascuna per il suo
difetto — `Tab reaches every control, in the order of the page`, perché il Tab salta il link all'altra lingua; `every
control Tab reaches shows its ring`, sui link; `the skip link leads into the content`, perché il Tab va all'indice; `the
index brings its section below itself`, perché la sezione finisce sotto l'indice. axe resta verde: nessuno dei quattro
difetti tocca una sua regola WCAG. Alla fine `62 passed`.

- [ ] **Passo 8 — il resto, e le vulnerabilità.** `npm test -- --project checks`, poi `npm audit`. Atteso: `70 passed`,
e `found 0 vulnerabilities`.

- [ ] **Passo 9 — il commit.**

```bash
git add package.json package-lock.json vitest.config.ts src checks && git commit -m "t1(compito 11): l'accessibilità -- i controlli nel browser uno per volta, con la guardia; nessun errore di axe sulle regole WCAG 2.2 AA, nei due temi, su computer e telefono, con le fonti chiuse e aperte; il Tab, l'anello, il link al contenuto e l'indice, ciascuno col suo rosso; il segno della fonte alto 24 px, il rosso vero del controllo"
```

- [ ] **Passo 10 —** `git push`.

---

## 6. Come si riprende

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
