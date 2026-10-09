# Le prove per scrivere i compiti del piano del traguardo 1 — il verbale

> 🗄️ **Che cos'è questo file.** Il verbale delle prove fatte il 2026-10-07 per scrivere la §5 del
> [piano del traguardo 1](../superpowers/plans/2026-10-07-landing-traguardo-1.md) — le §1–§9 nel pomeriggio, la §10 e la
> §11 nella sessione dopo, la §12 e la §13 in quella dopo ancora, la §14 nella quinta, la §15 nella sesta, la §16 nella
> settima, la §17 nell'ottava e la §18 nella decima e nell'undicesima, il pre-controllo, il 2026-10-08; la §19 nella
> quindicesima, il ri-controllo del compito 4, il 2026-10-09: il proprietario ha scelto di provare il codice prima di
> scriverlo nel piano (risposta: A). Le prove sono girate nello scratchpad di
> ciascuna sessione, poi cancellato; dalla §16 il programma del banco sta accanto a questo file. Qui c'è la storia; il
> piano porta ciò che ne è venuto.

**La macchina:** Windows 11, Git Bash, Node 24.19.0, npm 11.17.0, Chrome 154.0.8037.98. I pacchetti, alle versioni
esatte della §2.1 del piano.

## 1. Astro 7 e le due lingue

| Provato | Visto |
|---|---|
| `i18n: { locales: ['en', 'it'], defaultLocale: 'en' }`, con `src/pages/index.astro` e `src/pages/it/index.astro` | la build scrive `dist/index.html` e `dist/it/index.html`; `Astro.currentLocale` vale `en` sulla prima e `it` sulla seconda |
| il caricatore `file()` su un JSON fatto a oggetto, con l'identificatore come chiave | ogni chiave diventa l'`id` della voce |
| lo schema con `z.strictObject` di `astro/zod`, su una voce senza `quote` e con un campo in più | la build si ferma: `quote: Required` e `Unrecognized key: "extra"`, e l'uscita non è 0 |
| la build senza `src/pages/` | esce con 0, e scrive soltanto l'avviso `Missing pages directory: src/pages`: il «rosso» del compito 3 deve guardare i file prodotti, non l'uscita |
| `getAbsoluteLocaleUrl('it')` con `site` e senza | con `site`, `http://127.0.0.1:4321/it/`; senza, `/it/` — un indirizzo relativo, che Google non accetta (§6) |
| `LANDING_BASE=/daemon/` passato da Git Bash | MSYS lo riscrive in `C:/Program Files/Git/daemon/` prima che arrivi a Node: in Git Bash va dato con `MSYS_NO_PATHCONV=1`. Un programma Node che lancia la build passa l'ambiente così com'è |
| `astro check` | 0 errori, 0 avvisi |

## 2. Vitest 4 e i due progetti

`test.projects` con due progetti, `checks` e `page`; nel primo `exclude: [...configDefaults.exclude, '**/*.page.test.ts']`.
`vitest run --project checks` lancia solo i test del primo, `--project page` solo quelli del secondo.

## 3. cspell da un programma

Il pacchetto `cspell` espone `lint` e `checkText`, che lavorano sui file. Il controllo di una frase sta in `cspell-lib`:
`spellCheckDocument({ uri, text, languageId: 'plaintext', locale }, { generateSuggestions: false, noConfigSearch: true },
settings)`, l'esempio del suo README. Il dizionario italiano si importa col percorso assoluto di
`@cspell/dict-it-it/cspell-ext.json`. `cspell-lib` è alla 10.3.6, MIT, la stessa versione che `cspell` 10.3.6 si porta
dietro.

| Testo | Lingua | Parole sconosciute |
|---|---|---|
| le frasi e l'interfaccia della §3.4, in italiano | `it` | `kernel`, `devfrx`, `English` |
| le frasi e l'interfaccia della §3.4, in inglese | `en` | `devfrx`, `Italiano` |
| `Un asistente desktop locale` | `it` | `asistente` |
| `A local destkop assistant` | `en` | `destkop` |
| `Un assistente locale` | `en` | `assistente` |
| `The mechanisms` | `it` | `mechanisms` |

`Cos’è`, con l'apostrofo tipografico, passa.

## 4. Chrome che rallenta, e la velocità

| Provato | Visto |
|---|---|
| `chromium.launch({ channel: 'chrome' })` di `playwright` 1.63.0 | apre il Chrome installato, 154, senza finestra |
| una sessione CDP della pagina: `Network.enable`, `Network.emulateNetworkConditions`, `Emulation.setCPUThrottlingRate` | il rallentamento c'è: il caricamento passa da circa 30 ms a circa 900 ms |
| dove si vede l'attesa della rete | non in `responseStart` della navigazione, che resta di pochi millisecondi, ma in `responseEnd`, che arriva dopo l'attesa: 603 e 581 ms con 562,5 ms di attesa |
| i numeri del profilo | il codice di Lighthouse ne ha **due serie**: 150 ms, 1,6 Mbps e 750 Kbps per la sua simulazione; e, per quando a rallentare è Chrome, che lo fa richiesta per richiesta e non pacchetto per pacchetto, 150 × 3,75 = 562,5 ms, 1,6 × 1024 × 0,9 = 1474,56 Kbps e 750 × 0,9 = 675 Kbps. E il profilo «telefono» ha anche lo schermo: 412 × 823, densità 1,75 |

Le fonti, lette il 2026-10-07: `front_end/models/trace/lantern/simulation/Constants.ts` di
`ChromeDevTools/devtools-frontend`, dove le costanti di Lighthouse vivono oggi; `core/config/constants.js` di
`GoogleChrome/lighthouse`, per lo schermo; `docs/throttling.md` di Lighthouse, che chiama il rallentamento di Chrome
*«Request-level throttling»* e dice che i moltiplicatori di Lighthouse *«attempt to correct for the differences»*.

## 5. web-vitals e l'INP

| Provato | Visto |
|---|---|
| il percorso di `web-vitals.iife.js` | la cartella di `require.resolve('web-vitals')`, che per la condizione `require` dà `dist/web-vitals.umd.cjs` |
| il file iniettato con `page.addInitScript({ content })`, con `onLCP`, `onCLS` e `onINP` e `reportAllChanges: true` | i valori arrivano in `window.__vitals` |
| il primo clic subito dopo `load`, senza rallentamento | l'LCP non arriva mai — il primo input lo chiude prima del suo primo resoconto — e l'INP vale 600 ms. Aspettando l'LCP prima di interagire: LCP 64 ms, INP 8 ms |
| la fine della misura | `web-vitals` 6 consegna l'INP quando la pagina si nasconde. Si simula come fanno i test di `web-vitals`, in `test/views/layout.njk`: `Object.defineProperty(document, 'visibilityState', { value: 'hidden', configurable: true })`, `document.documentElement.hidden = true`, poi `visibilitychange` |
| con il profilo, sulla pagina di prova | LCP circa 870–900 ms, CLS 0, INP 24 ms |
| con il profilo, sulla stessa pagina con 300 ms di lavoro nel clic | INP 328–344 ms: rosso sulla soglia di 200 |

## 6. Le altre domande della consegna

| Domanda | Risposta | Fonte, letta il 2026-10-07 |
|---|---|---|
| `hreflang` vuole indirizzi completi? | sì: *«Alternate URLs must be fully-qualified, including the transport method (http/https)»*; e ogni versione elenca se stessa e le altre | https://developers.google.com/search/docs/specialty/international/localized-versions, aggiornata il 2026-09-21 |
| in CI, `actions/checkout` lascia `origin/main` nel clone di daemon? | sì, con `ref: main`: la specifica di fetch è `+refs/heads/main*:refs/remotes/origin/main*`, anche nella v4 | `src/ref-helper.ts` di `actions/checkout`, al tag `v4` |
| l'ultima `actions/checkout` | la v7.0.1, del 2026-07-20; daemon usa la v4, e la sua CI è verde | `gh api repos/actions/checkout/releases/latest`; `gh run list -R devfrx/daemon` |

## 7. npm e gli script d'installazione

npm 11.17.0 avvisa a ogni installazione: *«1 package has install scripts not yet covered by allowScripts: esbuild@0.28.2
(postinstall: node install.js)»*. La sua documentazione, `docs/content/commands/npm-approve-scripts.md` nella cartella di
npm, dice che oggi il campo `allowScripts` è solo un consiglio — gli script girano — e che *«A future release will block
unreviewed install scripts»*. Con `npm ci --ignore-scripts`, `astro check`, la build, Vitest e la misura della velocità
girano uguali. `npm deny-scripts esbuild` scrive `"allowScripts": { "esbuild": false }`, e da lì `npm ci` non avvisa
più. La GUI di daemon non ha `allowScripts`, e ha due pacchetti con uno script: `vue-demi` e `fsevents`. Il proprietario
ha scelto di spegnere lo script di esbuild per scritto (risposta: A).

## 8. I compiti 1–3, provati

| Compito | Rosso | Verde |
|---|---|---|
| 1 | in una copia nuova del repository, 11 file su 11 hanno gli a-capo di Windows (`git ls-files --eol`, `w/crlf`) | col `.gitattributes`, 0; `git add --renormalize .` non cambia nessun file |
| 2 | senza la nota, la verifica si ferma | 18 file, identici al kit e alla nota; un byte in più in una copia la rende rossa |
| 3 | senza pagine la build esce con 0, e la verifica dice `dist/index.html: no <html lang="en">` | le due pagine, coi loro `lang`; `npm audit` trova 0 vulnerabilità |

## 9. I compiti 4–7, provati

Le prove dei compiti 4–7 sono girate dentro una copia di daemon clonata nello scratchpad, senza cartella di lavoro e col
suo `origin` rimesso su `https://github.com/devfrx/daemon.git`: la landing di prova stava dentro, come la vera sta in
daemon. Durante le prove `origin/main` di daemon è passato da `c42c947` a `973153f`, per un'altra sessione che lavorava
su daemon; le cinque citazioni si trovano anche lì.

| Compito | Rosso | Verde |
|---|---|---|
| 4 | `Cannot find module './daemon'`; senza `@types/node`, `astro check` trova 7 errori, su `node:child_process`, `node:fs`, `node:os`, `node:path` e `process` | 4 test; il file più grande di daemon, 2,3 MB, letto per intero, oltre il limite di 1 MiB di `execFileSync` |
| 5 | `Cannot find module './texts'`; una frase inglese con `source` ferma la build, `Unrecognized key: "source"`, con l'uscita a 1 | 5 test; la build controlla le quattro raccolte anche se nessuna pagina le usa |
| 6 | `Cannot find module './sources'`; sui testi veri, una citazione e un numero cambiati, una frase solo in inglese, un `origin` su un altro utente di GitHub | 8 test delle funzioni, 6 di `daemon.ts`, 13 del controllo del cancello |
| 7 | `Cannot find module './words'`; nell'interfaccia vera un refuso, un apostrofo dritto, «open source» e una cifra: 4 rossi | 11 test delle funzioni, in circa 15 s la prima volta, per caricare i dizionari; 8 del controllo del cancello |
| tutti | — | `npm run build`: 16 file, 0 errori; `npm test`: 51 test; `npm audit`: 0 vulnerabilità |

**La tipografia.** La §3.3 del piano diceva «un numero e la sua unità». Un programma non sa che cos'è un'unità, se non
con un elenco, che resterebbe sempre indietro di una parola; e lo spazio che non va a capo, dopo un numero, non è mai
sbagliato. Il controllo lo vuole dopo ogni numero, e la §3.3 porta il richiamo.

**I comandi dei passi «l'altro senso»** sono stati rilanciati così come stanno nel piano, coi file di riserva in una
cartella di `mktemp -d`: i rossi e i verdi di sopra, e alla fine i file uguali a prima.

## 10. I compiti 3–7, rifatti dal testo del piano

Nella sessione dopo, prima di presentare i compiti 4–7 al proprietario. Il codice l'ha preso dal piano un programma, riga
per riga, senza ricopiarlo a mano; daemon, clonato nello scratchpad come nella §9, era a `84a476a`, e le cinque citazioni
si trovano anche lì.

| Compito | Visto |
|---|---|
| 3–7 | i rossi e i verdi della §8 e della §9, coi passi «l'altro senso»; alla fine `npm test`: 51 test |
| 4 | `npm test` dà `4 passed`: il passo 5 adesso usa lui, così lo script e la configurazione di Vitest hanno la loro prova |
| 7 | «open-sourced», «opensource», «Downloads», «downloadable», «scaricare» e «scaricabile» passavano tutti i controlli: solo «opensource» lo fermava, e per caso, il controllo dei refusi. Con le parole vietate in ogni loro forma (risposta: A): il test nuovo rosso sul codice di prima; poi 12 test delle funzioni e 8 del controllo del cancello; e «niente da scaricare» è rosso, il costo dichiarato |

## 11. I compiti 8–10, provati

Nella stessa sessione della §10, dopo la risposta A sul browser col compito 8. La landing di prova stava dentro la copia
di daemon della §10, a `84a476a`; `brand/` l'hanno scritta i passi 4 e 5 del compito 2, da una copia dei SVG e delle due
pagine del kit messa accanto.

| Compito | Rosso | Verde |
|---|---|---|
| 8 | `Cannot find module` per l'indirizzo, i link e il server; 22 rossi sulle pagine vuote; una frase tolta e il link all'altra lingua senza la base, 4 rossi; senza `LANDING_SITE` la build si ferma | 8 test dell'indirizzo e dei link, 2 del server, 22 della pagina; `npm test -- --project checks`: 62 |
| 9 | `Cannot find module './tokens'`; il controllo dei token rosso sulla sola guardia `sees what it judges`; 10 rossi sui temi; un token che daemon non definisce, una scala `--ref-*` e la pagina senza `data-theme="dark"`: 3 rossi e 2 | 4 test dei token, 4 del loro controllo, 32 nel browser; 70 senza browser |
| 10 | la console, prima dell'icona: `Failed to load resource`, un 404 su `/favicon.ico`, in una lingua sola; un foglio di stile su `third-party.invalid` e uno script che aggiunge testo e poi sbaglia: 6 rossi | 38 nel browser; l'icona servita è byte per byte quella di `brand/` |
| tutti | — | `npm audit`: 0 vulnerabilità |

**Che cosa hanno insegnato:**

- Chrome chiede `/favicon.ico` da solo, alla radice del sito e quindi fuori dalla base, e se manca scrive il 404 nella
  console: la domanda della consegna del pomeriggio ha la sua risposta, e l'icona del kit entra col compito 10. La chiede
  una volta per browser, per questo il rosso arriva in una lingua sola;
- `astro check`, dentro `npm run build`, controlla anche i file di `checks/`: ha trovato un errore di tipo in un controllo
  che Vitest faceva girare senza dire niente — `page.route` di Playwright 1.63 restituisce un valore che l'aiuto `open`
  non accettava;
- una richiesta a un sito di terzi messa apposta partirebbe davvero, negli altri controlli: il difetto usa un indirizzo
  `.invalid`, che non esce dalla macchina;
- un elemento che manca, Playwright lo aspetta fino al limite del test, 5 secondi per rosso: `open` mette l'attesa a 2
  secondi, perché la pagina è già costruita e caricata.

**Il testo del piano.** Il codice dei compiti 8–10 l'ha messo nel piano un programma, dai file che hanno girato;
`checks/support/landing.ts` del compito 8 ha una riga più in alto di quella provata, con lo stesso effetto. I comandi
del passo 11 del compito 8 sono stati riscritti dopo le prove, con `node` al posto di `sed -i`; quelli dei compiti 9 e
10 sono quelli girati. Prima di presentarli, i compiti 8–10 si rifanno dal testo del piano, come i 3–7 nella §10.

## 12. I compiti 1–10, rifatti dal testo del piano

Nella quarta sessione del 2026-10-07, prima di presentare i compiti 8–10 al proprietario. Il banco di prova come nella
§9: daemon clonato nello scratchpad senza cartella di lavoro, col suo `origin` su `https://github.com/devfrx/daemon.git` e
`origin/main` scritto con `git update-ref`; accanto, una copia dei SVG e delle due pagine del kit; dentro, una copia della
landing senza remoto, perché nessun `git push` arrivasse al repository vero. Il codice l'ha preso dal piano un programma,
blocco per blocco: i file interi così come stanno, i frammenti dei compiti 4 e 6 innestati dove il testo dice. I comandi,
quelli nei blocchi e quelli scritti nel testo, sono girati come stanno; uno del testo girava solo se il programma lo
trovava, lettera per lettera, nel suo passo. daemon era a `c2de19a` quando si è cominciato, e a `fc43188` quando si è
clonato, per un'altra sessione: due commit di documenti che non toccano né le cinque fonti né la GUI. Le prove l'hanno
letto a `fc43188`.

| Compito | Visto |
|---|---|
| 1–7 | i rossi e i verdi della §8, della §9 e della §10; anche l'1 e il 2, perché il 10 usa `brand/` |
| 8 | come nella §11. Il passo 11, che non era mai girato dal testo del piano: `4 failed \| 18 passed`, coi rossi attesi; la build senza `LANDING_SITE` si ferma, con l'uscita a 1; alla fine `22 passed`, e i due file di nuovo uguali al piano |
| 9–10 | come nella §11 |

Un inciampo dell'ambiente, non del piano: al passo 9 del compito 6 Git Bash non è riuscito a creare un processo,
*«fork: retry: Resource temporarily unavailable»*; rilanciato, `0 errors`.

**Che cosa ha trovato la rilettura** dei compiti 8–10, dopo le prove:

| | Che cosa | La misura, o la fonte | Che cosa se ne è fatto |
|---|---|---|---|
| 1 | il passo 2 del compito 4, approvato, diceva che il progetto `page` arriva col compito 10: arriva col compito 8, dalla risposta A sul browser | la §4 del piano, col suo richiamo | corretto, col richiamo |
| 2 | l'interruttore del tema, acceso, si riempiva di `--color-bg-accent`: nel tema scuro sta a 1,84:1 sul fondo della pagina, e un controllo vuole 3:1, WCAG 1.4.11 | `scripts/contrasto.py` della skill `frontend-craft` su `#7A1F2E` e `#151112`; `--color-mark`, `#BF5567`, sta a 4,20:1. In daemon i 3:1 sono di quattro ruoli, *«non-text 3:1   border-strong, focus, mark, border-accent»* in `gui/src/tokens/contrast.test.ts`, e il radio acceso della GUI, `BaseRadioGroup.vue`, usa `--color-mark` | corretto nel compito 9, `--color-mark`; i controlli del 9 e del 10 rilanciati, verdi. Nessun programma lo controlla: axe non misura il contrasto dei controlli |
| 3 | il segno della fonte, aperto, ha due bersagli alti 19,5 e 20,8 px, a 1,6 px l'uno dall'altro: sotto i 24 px di WCAG 2.5.8 | `getBoundingClientRect()` a 375 px di larghezza. axe-core 4.13.0, nel pannello browser dell'app, con `axe.min.js` servito accanto alla pagina e le regole `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa` e `wcag22aa`: coi segni chiusi, 0 violazioni; aperti, `target-size`, *serious*, su due segni. L'unica regola di `wcag22aa` è `target-size`: `axe.getRules(['wcag22aa'])` | lasciato al compito 11, come rosso vero del suo controllo (risposta: A) |

## 13. Il compito 11, provato

Nella stessa sessione della §12, dopo il sì ai compiti 8–10: la landing di prova della §12, con la correzione del compito
9, e `axe-core` 4.13.0 messo col passo 1.

| Provato | Visto |
|---|---|
| dove la pagina scorre | su un computer, 1280 × 720, e sul telefono della §2.2, 412 × 823, sta tutta nello schermo, e un salto dall'indice non la muove; sul telefono girato, 823 × 412, è alta 613 px, e il salto porta `#what` a 64 px dall'alto, i 4rem di `scroll-padding-top`, sotto l'indice alto 44,5 px |
| il controllo, sulla pagina dei compiti 1–10 | `8 failed \| 12 passed`: axe con le fonti aperte, nei due temi, su computer e telefono, nelle due lingue, con `target-size` sui `<summary>` e sui link dei segni; il percorso da tastiera verde |
| la correzione: `padding-block: 0.25rem` sul `<summary>`, `display: inline-block` sul link | `20 passed` |
| l'indice senza `scroll-padding-top`, e il link all'altra lingua con `tabindex="-1"` | `4 failed \| 16 passed`: il Tab salta il quarto controllo e alla fine esce dalla pagina, `[0, 1, 2, 4, …, 10, -1]`; la sezione arriva a 0,375 px dall'alto, sotto l'indice |
| tutto, alla fine | 58 test nel browser, 70 senza; `npm audit`: 0 vulnerabilità |

**Il testo del piano.** Il codice del compito 11 l'ha messo nel piano un programma, dai file che hanno girato. I comandi
sono quelli girati, ma il compito non è ancora girato dal testo del piano: si rifà, come i compiti 8–10 nella §12.

## 14. La quinta sessione: i compiti 1–11 rifatti, e il compito 11 corretto

Nella quinta sessione del 2026-10-07, prima di presentare il compito 11 al proprietario. Il banco come nella §12, con una
differenza: la copia della landing ha per remoto un repository nudo nello scratchpad, così `git push` gira e non arriva a
niente di vero. Il programma che prende il codice dal piano è uno solo per tutti i compiti: dà un blocco così com'è; scrive
un file solo se il suo passo lo nomina, fra apici inversi, prima del blocco; lancia un comando scritto nel testo solo se lo
trova, lettera per lettera, nel suo passo, e così per «Lo stesso comando del passo N»; innesta i frammenti dei compiti 4 e 6
dove il testo dice. daemon era a `427c760` all'inizio e a `8bdbde8` quando si è clonato, e a `82d121d` alla chiusura: commit
di documenti dell'altra sessione, che non toccano né le cinque fonti né la GUI.

| Compito | Visto |
|---|---|
| 1–10 | ogni rosso e ogni verde del piano, come nella §12 |
| 11 | tutto come scritto, tranne l'ultimo comando del passo 5: `2 failed \| 56 passed` invece di `58 passed` — il controllo della console, nelle due lingue, con `locator.click: Timeout 2000ms exceeded` sull'interruttore del tema |

**Le attese scadute.** Rilanciati i controlli nel browser, sulla pagina del compito 11 e su quella del 10:

| Pagina | File | Giri | Rossi |
|---|---|---|---|
| compito 11 | insieme | 19 | 9, da 2 a 19 test per giro, con le attese di 2 s di Playwright e di 5 s di Vitest |
| compito 11 | uno per volta: `--no-file-parallelism`, poi `fileParallelism: false` | 4 | nessuno |
| compito 10 | insieme | 6 | nessuno |

I giri rossi sono venuti a ondate, e nelle stesse ondate i giri uno per volta erano verdi. Nei giri rossi l'importazione dei
moduli era tre volte più lenta, 16–20 s invece di 6: la macchina rallentava tutta. Col processore occupato apposta — 14
processi che girano a vuoto — i giri sono rimasti verdi: non è il processore. È, con ogni probabilità, la memoria: 16 GB,
e impegnati circa 52 GB con otto altre sessioni di Claude aperte, poi 55 alla chiusura; ogni file nel browser apre il suo
Chrome. Vitest lancia i file di un progetto insieme, fino a un processore meno uno: 27, su questa macchina
(`resolveMaxWorkers`, in `node_modules/vitest/dist/chunks/cli-api.*.js`).

| Provato | Visto |
|---|---|
| `fileParallelism: false` dentro il progetto `page` | vale: Vitest mette quei file in un gruppo a sé, uno per volta, dopo gli altri progetti (`groupSpecs`, nello stesso file). `npm test`, tutti i progetti: 128 test, verdi |
| quanto costa, a macchina quieta | i controlli del compito 11 nel browser in 38 s uno per volta, in 20 s insieme |
| la guardia in `openLanding()`, `VITEST_POOL_ID` diverso da 1 | coi file insieme `Test Files  5 failed \| 1 passed (6)`, e i test dei file fermati risultano saltati; uno per volta, verde; `--fileParallelism` da riga di comando scavalca la configurazione, e la guardia lo vede |

**Le sonde mai viste rosse.** Rileggendo il compito 11: il Tab, l'anello, il link al contenuto e l'indice erano quattro
sonde in due test, e il passo dell'altro senso ne faceva diventare rosse due, l'ordine del Tab e l'indice. L'anello e il
link al contenuto non erano mai visti rossi. Diventano quattro test, e il passo dell'altro senso ha un difetto per
ciascuno. Il test dell'anello guarda solo i controlli: quando il Tab esce dalla pagina, a diventare rosso è il test
dell'ordine. E il link al contenuto si giudica con `Boolean(…)`: con `!== null`, un `activeElement` assente sarebbe
passato.

**Il compito 11 corretto, rifatto dal testo**, dalla pagina del compito 10:

| Passo | Visto |
|---|---|
| 2 | `Test Files  4 failed \| 1 passed (5)`, e `two checks in the browser at once` nei quattro file accanto al primo |
| 3 | `38 passed` |
| 4 | `8 failed \| 16 passed`: `target-size` con le fonti aperte |
| 6 | `24 passed` |
| 7 | `8 failed \| 16 passed`, ciascuno per il suo difetto: l'ordine `[0, 1, 2, 4, …, 10, -1]`; senza anello i link 0, 1, 9 e 10; il link al contenuto `false`; la sezione a 0,375 px dall'alto, sotto un indice alto 44,5. Poi `62 passed` |
| 8 | `70 passed`; `npm audit`: 0 vulnerabilità |

Il `git push` del passo 10 è caduto per il banco — la copia era su un ramo che non si chiamava `main` —, non per il piano.

**Per i compiti 12 e 13**, guardato alla fonte il 2026-10-07:

| Che cosa | Fonte |
|---|---|
| Lighthouse emula il telefono con `Emulation.setDeviceMetricsOverride`, `mobile: true`, e accende il tocco con `Emulation.setTouchEmulationEnabled`; la rete in byte al secondo, `Math.floor(kbps * 1024 / 8)`; il processore con `Emulation.setCPUThrottlingRate` | `core/lib/emulation.js` e `core/config/constants.js` di `GoogleChrome/lighthouse` |
| in `web-vitals` la voce `first-input` si osserva sempre, a qualunque durata, perché l'INP abbia sempre un valore | il README di `GoogleChrome/web-vitals` al tag `v6.2.3` |
| come i test di `web-vitals` nascondono la pagina: `__stubVisibilityChange` | `test/views/layout.njk` di `GoogleChrome/web-vitals` al tag `v6.2.3` |
| `sequence.groupOrder`: i progetti con lo stesso numero girano insieme, e i gruppi dal più basso | https://vitest.dev/config/sequence |
| `actions/checkout` v4 mette `origin` a `https://github.com/devfrx/daemon`, senza `.git`; con `ref: main` scrive `refs/remotes/origin/main` | `src/url-helper.ts` e `src/ref-helper.ts` di `actions/checkout` al tag `v4` |
| l'evento `schedule` gira sull'ultimo commit del ramo predefinito; può tardare, soprattutto all'inizio di ogni ora; in un repository pubblico si spegne dopo 60 giorni senza attività | https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows |

## 15. La sesta sessione: i compiti 1–11 rifatti, e il compito 12 provato

Nella sesta sessione, il 2026-10-07, dopo il sì al compito 11. Il banco come nella §14: daemon clonato nello scratchpad
senza cartella di lavoro, col suo `origin` su `https://github.com/devfrx/daemon.git` e `origin/main` a `82d121d`; accanto,
la copia dei SVG e delle due pagine del kit; dentro, la landing col remoto su un repository nudo. Il programma che prende
il codice dal piano era andato perso con lo scratchpad della quinta sessione, ed è stato riscritto con le stesse regole: un
blocco così com'è; un file solo se il suo passo lo nomina, fra apici inversi, prima del blocco; un comando del testo solo
se si trova, lettera per lettera, nel suo passo, e così «lo stesso comando del passo N»; i frammenti dei compiti 4 e 6
innestati dove il testo dice; il passo 7 del compito 5, la rilettura dell'inglese, saltato, perché non è codice. Lancia
ogni comando con il Git Bash di `C:\Program Files\Git\bin\bash.exe`, scrive l'uscita intera in un file per comando e ne
mostra le righe che contano accanto all'«Atteso» del passo.

| Compito | Visto |
|---|---|
| 1–11 | ogni rosso e ogni verde del piano, come nella §14: tutto come scritto, anche l'ultimo comando del passo 7 del compito 11, `62 passed`, coi controlli nel browser uno per volta. La prima build ha impiegato 83 s, le altre 15–60 s, con 1,3–2,2 GB di memoria libera su 16 |

**Il compito 12, provato** sulla pagina del compito 11, con `web-vitals` 6.2.3 e col profilo della §2.2 del piano:

| Provato | Visto |
|---|---|
| la misura | LCP 1,0–1,4 s, CLS 0,0002–0,0013, INP 32–40 ms; `responseEnd` 650–670 ms: `8 passed`. Vitest 4 non mostra la console dei test verdi: i valori si vedono con `--reporter=verbose --silent=false` |
| i tre difetti insieme, col controllo che clicca appena arriva l'LCP | l'LCP e l'INP rossi nelle due lingue; la CLS rossa in una lingua sola, in un giro su due |
| la CLS, con una sonda che registra i tempi: il primo disegno, gli spostamenti, il `load`, il primo clic | lo spostamento c'è, 0,47, ma col telefono porta `hadRecentInput: true` senza che nessuno abbia toccato la pagina; lo stesso spostamento, senza la modalità telefono, conta. Nel sorgente di Chrome, `NotifyViewportSizeChanged` di `layout_shift_tracker.cc` apre la finestra di 500 ms degli input, `kTimerDelay`: in modalità telefono la pagina cambia larghezza quando applica il suo `<meta name="viewport">`, e quei 500 ms coprono il primo disegno |
| e il clic troppo presto | a volte il controllo cliccava 100 ms dopo il primo disegno, e uno spostamento nei 500 ms dopo un input non conta: il controllo avrebbe nascosto gli spostamenti del caricamento. Con `networkidle` prima delle interazioni il primo clic arriva quasi 3 s dopo l'inizio |
| i tre difetti, con `networkidle` e il blocco al `load` | `6 failed \| 2 passed`, tre giri su tre: LCP 4,1 s, CLS 0,47, INP 336–344 ms; la guardia verde |
| la guardia senza `Network.emulateNetworkConditions` | `responseEnd` 8–17 ms: `2 failed \| 6 passed` |
| `Network.emulateNetworkConditionsByRule`, con una regola sola e `urlPattern` vuoto | le stesse misure del comando deprecato: `responseEnd` 650–670 ms, LCP 1,1–1,4 s, INP 32–40 ms; `8 passed` |

**Il testo del piano.** Il codice del passo 2 del compito 12 l'ha messo nel piano un programma, dal file che ha girato,
con tre ritocchi prima: tolta la stampa dei valori, che serviva alle prove; tolti `import type { Page }` e l'annotazione
che lo usava, superflui; ritoccato il commento di `measure`. Il passo 3 era girato a pezzi. Poi, il 2026-10-08, il
compito 12 rifatto dal testo del piano, sulla landing del compito 11, con daemon a `82d121d`:

| Passo | Visto |
|---|---|
| 1 | `No packages with unreviewed install scripts.` |
| 2 | `0 errors`, `8 passed` |
| 3 | `6 failed \| 2 passed`: LCP 4,8 s, CLS 0,47, INP 384–400 ms, la guardia verde; poi `2 failed \| 6 passed`, con `responseEnd` 5,5 e 30,7 ms; alla fine `70 passed`, e la pagina e il controllo di nuovo uguali al piano |
| 4 | `70 passed`; `npm audit`: 0 vulnerabilità |
| 5–6 | il commit, e il `git push` al repository nudo del banco |

**Per il compito 13**, guardato il 2026-10-07:

| Che cosa | Fonte |
|---|---|
| i permessi del `GITHUB_TOKEN` sono di sola lettura, in `devfrx/daemon-landing` e in `devfrx/daemon`: un blocco `permissions` non serve, e daemon non lo scrive | `gh api repos/devfrx/daemon-landing/actions/permissions/workflow`, e lo stesso per `devfrx/daemon` |
| da Node 24.19.0, `spawnSync('npm', ['--version'], { shell: true })` scrive l'avviso `DEP0190`; col comando in una stringa sola, no | `node -e`, sulle due forme |

## 16. La settima sessione: il banco in archivio

Il 2026-10-08, dopo il sì al compito 12. Il banco come nella §15, con daemon a `a27ea6a`. Il programma che prende il
codice dal piano si era perso con lo scratchpad per la seconda volta: è stato riscritto con le stesse regole, e da qui
sta accanto a questo verbale, [`2026-10-08-banco-prove-piano-landing.mjs`](2026-10-08-banco-prove-piano-landing.mjs),
coi comandi che preparano il banco in testa (risposta del proprietario: A). Un compito nuovo aggiunge i suoi comandi alla
tabella `INLINE` del programma.

| Compito | Visto |
|---|---|
| 1–6 | ogni rosso e ogni verde del piano, dal suo testo: tutto come scritto, compresi gli innesti dei compiti 4 e 6 |
| 7–12 | non rifatti: la sessione si è chiusa prima, e il banco si è fermato all'inizio del compito 7 |

**Un inciampo del banco, non del piano.** Al passo 1 del compito 4 il programma non trovava le parole dell'innesto: nel
piano la frase va a capo a metà, fra «accanto a quello della» e «build». Ora confronta il testo come si legge, con uno
spazio solo fra le parole, per gli innesti e per i comandi scritti nel testo.

**Per il compito 13**, guardato il 2026-10-08:

| Che cosa | Fonte |
|---|---|
| `scripts/gate-gui.sh` lancia i due progetti di Vitest uno per volta perché, dentro un giro solo, un progetto che non trova file è verde: Vitest 4.1.11 scrive «No test files found» solo quando il giro intero è vuoto, misurato là il 2026-09-24 | il commento in `scripts/gate-gui.sh` di daemon a `origin/main` |
| la CI di daemon: `push` su ogni ramo e `pull_request`, nessuno `schedule`; `shell: bash` scritto apposta, perché l'immagine Windows ha tre `bash` — di Git, di MSYS2 e di WSL —; `actions/setup-node@v7` con `node-version-file: gui/package.json` e `package-manager-cache: false`, la decisione 47 di daemon | `.github/workflows/quality-gate.yml` di daemon a `origin/main` |
| `actions/setup-node` alla `v7` è la v7.1.0; `node-version-file` si risolve a partire da `GITHUB_WORKSPACE`; la cache automatica legge il `package.json` alla radice di `GITHUB_WORKSPACE`, dentro un `try`, e senza quel file non parte | `gh api repos/actions/setup-node/releases/latest`; `src/main.ts` di `actions/setup-node` al tag `v7` |
| Playwright 1.63.0 usa `Network.emulateNetworkConditions` per `setOffline` | `packages/playwright-core/src/server/chromium/crNetworkManager.ts` di `microsoft/playwright` al tag `v1.63.0` |

**Dedotto, da provare scrivendo il compito 13:**

| Che cosa | Da che cosa |
|---|---|
| con `shell: bash` su Windows, Git Bash riscriverebbe `LANDING_BASE=/daemon-landing/` dato in `env:`, prima che arrivi a Node: serve `MSYS_NO_PATHCONV: 1`, oppure la shell predefinita del runner, perché il cancello è Node | la §1 |
| con `MSYS_NO_PATHCONV=1`, una cartella di `mktemp -d` passata a `git` non si trova: nella CI a mano, `git` gira in una subshell con `unset MSYS_NO_PATHCONV` | la consegna della sesta sessione, *«Da sapere subito»* |
| senza `src/pages/` la build esce con 0 e nessuna pagina: senza `dist/` tolta, i controlli della pagina leggerebbero la build vecchia. È il rosso con cui provare il cancello | la §1, e il passo 3 del compito 3 |

## 17. L'ottava sessione: i compiti 1–12 rifatti, e il compito 13 provato

Il 2026-10-08, dopo la settima. Il banco come nella §16, coi comandi in testa al programma, con daemon a `ca2a0d4`: due
commit di documenti dell'audit dopo `a27ea6a`, che non toccano né le cinque fonti né la GUI.

**Due inciampi del banco, non del piano**, e il programma corretto:

| | L'inciampo | La correzione |
|---|---|---|
| 1 | la copia del piano dentro il banco, clonata prima del `.gitattributes`, ha gli a-capo di Windows, e il programma non trovava nessun compito: `no task 1 in the plan` | legge il piano con qualunque a-capo |
| 2 | un innesto prendeva il primo blocco del suo passo, anche quando era un file da scrivere: il passo 6 del compito 13 ha un file e un frammento | un frammento va nel blocco che segue le sue parole; uno che non trova il suo blocco è un errore |

| Compito | Visto |
|---|---|
| 1–12 | ogni rosso e ogni verde del piano, dal suo testo: tutto come scritto |

**Il compito 13, provato** sulla landing del compito 12, coi file nello scratchpad:

| Provato | Visto |
|---|---|
| i test delle impronte | `Cannot find module './brand'`, poi `7 passed`. Nove difetti messi nel codice, uno per volta — lo schema senza `strictObject`, la data e l'impronta qualsiasi, la nota mancante senza il suo messaggio, le copie non registrate ignorate, le copie e il kit sempre uguali, un file mancante preso per buono, l'impronta in base64 —: ciascuno fa rosso almeno un test |
| il controllo del cancello | `3 passed` col kit accanto; un byte in più in una copia, `1 failed \| 2 passed`; senza il kit — la sua copia nel banco spostata, mai quella vera —, `2 passed \| 1 skipped (3)` |
| che cosa scrive Vitest 4.1.11 di un test saltato | di base, soltanto `1 skipped`: né il nome del test, né un `console.warn` del file, né la nota di `context.skip`. Con `--reporter=verbose`, il test col suo nome e `↓`, e la nota fra parentesi quadre: 93 righe per tutto il progetto `checks` |
| Astro senza `src/pages/`, dopo una build buona | `0 page(s) built`, l'uscita a 0, e `dist/` vuota: Astro svuota da solo la cartella in cui scrive. L'abbozzo diceva il contrario |
| un giro solo coi due progetti, senza i file della pagina | `80 passed`, l'uscita a 0; il progetto `page` da solo, `No test files found, exiting with code 1` |
| il cancello | `Missing script: "gate"`; poi verde, in 183 s: `80 passed`, `70 passed`, `found 0 vulnerabilities`, nessun avviso `DEP0190` |
| i due difetti del passo 8, e il verde dopo | 391 s per i tre giri. Tutte e due le volte fermo a `page`, l'uscita a 1, nessun `npm audit`; la seconda, `page.goto: net::ERR_HTTP_RESPONSE_CODE_FAILURE`, e `40 failed \| 30 skipped (70)` |
| la build che scrive altrove, col cancello senza la riga che toglie `dist/` | verde: i controlli della pagina leggono la build di prima. Con la riga, rosso |
| `git init` di una cartella di `mktemp -d`, con `MSYS_NO_PATHCONV=1` | la cartella finisce in `C:\tmp\`; senza il flag, al suo posto. Quella creata così è stata tolta, e il resto di `C:\tmp\` non si è toccato |
| `LANDING_BASE=/daemon-landing/` data da PowerShell a Git Bash, come la dà il runner | Node riceve `C:/Program Files/Git/daemon-landing/`; con `MSYS_NO_PATHCONV=1`, `/daemon-landing/`; da PowerShell senza Git Bash, `/daemon-landing/` |
| la CI a mano | daemon da GitHub, a profondità 1, e la landing dentro, senza il kit: verde in 157 s, con `79 passed \| 1 skipped (80)` e il test del kit elencato con `↓` |

**Il testo del piano.** Il codice del compito 13 l'ha messo nel piano un programma, dai file che hanno girato. Poi il
compito è stato rifatto dal testo, sulla landing del compito 12, col banco corretto:

| Passo | Visto |
|---|---|
| 1–4 | `Cannot find module './brand'`; `7 passed`; `3 passed`; `1 failed \| 2 passed`, col rosso sulla copia, poi `3 passed` |
| 5–7 | `Missing script: "gate"`, con l'uscita a 1; il file e l'innesto in `package.json`; il cancello verde, in 154 s |
| 8 | 368 s per i tre giri: fermo a `page` due volte, con l'uscita a 1 e senza `npm audit`; poi verde |
| 10–12 | il commit; la CI a mano verde, in 148 s, col test del kit elencato con `↓`; il `git push` al repository nudo del banco |
| 13 | non girato: il push del banco non arriva a GitHub |

Tutto come scritto. I file scritti dal testo sono uguali, byte per byte, a quelli provati, e alla fine la landing del banco
è pulita.

**Per il compito 13**, guardato il 2026-10-08:

| Che cosa | Fonte |
|---|---|
| il giro di daemon del 2026-10-08 avvisa che `actions/checkout@v4` chiede Node 20, *«but are being forced to run on Node.js 24»*; e un altro avviso dice che `ubuntu-latest` passa a Ubuntu 26 dal 2026-10-19 | `gh api repos/devfrx/daemon/check-runs/113180090886/annotations` |
| GitHub ha tolto Node 20 dai suoi runner il 2026-09-23; il consiglio è aggiornare le azioni a una versione su Node 24 | https://github.blog/changelog/2025-09-19-deprecation-of-node-20-on-github-actions-runners/ |
| `actions/checkout`: la v4 gira su `node20`; la v5.0.0, la v6.0.0, la v7.0.0 e la v7.0.1 su `node24`. Le note: la v5 passa a Node 24, la v6 tiene le credenziali in un file a parte, la v7 blocca il checkout di una PR di un fork per `pull_request_target` e `workflow_run` | `action.yml` ai tag; `gh api "repos/actions/checkout/releases"` |
| alla v4 e alla v7.0.1, `getFetchUrl` dà `https://github.com/devfrx/daemon` e `getRefSpec` di `main`, senza commit, `+refs/heads/main*:refs/remotes/origin/main*` | `src/url-helper.ts` e `src/ref-helper.ts` di `actions/checkout`, ai due tag |
| un checkout svuota una cartella che non ha un `.git` del suo repository: per questo daemon va prima della landing | `prepareExistingDirectory` in `src/git-directory-helper.ts` di `actions/checkout`, al tag `v4` |
| sui runner, `setup-node@v7` con l'intervallo della GUI prende Node 24.21.0 dalla cache, con npm 11.19.0 | il log del giro di daemon del 2026-10-08, sui due sistemi |
| il percorso più lungo di daemon è di 101 caratteri, e quello sotto `node_modules/` della landing di 122: dentro i 260 di Windows anche sotto `D:\a\daemon-landing\daemon-landing\daemon\landing\` | `git ls-tree -r --name-only origin/main`; `find node_modules -type f`, nella landing del banco |

## 18. La decima sessione: il pre-controllo

Il 2026-10-08, dopo la nona. Ogni compito letto come un'ipotesi, con le quattro domande e le regole 5–8 di *«Prima di
eseguire un compito di un piano»*, nel `CLAUDE.md` di daemon (§6 del piano). daemon a `8e88ae1`, come alla chiusura della
nona.

**I fatti che invecchiano**, rilanciati coi comandi della tabella in fondo alla §6 del piano: tutto come scritto. In più:

| Fatto | Comando |
|---|---|
| l'insieme dei pacchetti della §2.1, alle versioni esatte, risolto senza installare: `found 0 vulnerabilities` | `npm install --package-lock-only --ignore-scripts`, poi `npm audit`, in una cartella dello scratchpad |
| `astro` 7.3.7 corregge soltanto errori, e contro la 7.3.6 non c'è nessun avviso di sicurezza | `gh api "repos/withastro/astro/releases/tags/astro@7.3.7" --jq .body`; `gh api "/advisories?ecosystem=npm&affects=astro@7.3.6"`: vuoto |

**Gli otto difetti**, portati al proprietario uno per volta, in A/B. Tutte le risposte: A.

| # | Il difetto | Che cosa lo coglie | Come si è visto | La risposta |
|---|---|---|---|---|
| 1 | la pagina può mostrare un testo che non sta nei file dei testi — scritto dentro un `.astro` — e nessun controllo lo vede: né le fonti, né i refusi, né le parole vietate. Il controllo della pagina guarda in un senso solo, «ogni frase dei file è sulla pagina» | la domanda 2, la sonda manca | letto il codice di ogni controllo. Nella GUI di daemon lo fa il linter, con `@intlify/vue-i18n/no-raw-text` in `gui/eslint.config.js`; `eslint-plugin-astro` 3.2.1 una regola così non ce l'ha: `gh api "repos/ota-meshi/eslint-plugin-astro/contents/docs/rules" --jq '.[].name'` | un test per lingua nel controllo della pagina, compito 8: sulla pagina solo ciò che sta nei file |
| 2 | la GUI di daemon ha un linter nel cancello, la landing no: la domanda aperta della nona sessione | la regola 7 | `gui/eslint.config.js` e `scripts/gate-gui.sh` | niente linter: ciò che fa nella GUI qui lo fanno il controllo del difetto 1, la build e `astro check` |
| 3 | cspell di base salta le parole sotto le quattro lettere, e il piano non lo cambia: un refuso in «per», «che» o «the» passa | la domanda 1, la sonda è sbagliata | il programma qui sotto | ogni parola da due lettere in su, `minWordLength: 2`; «GPU», «GB» ed «EN» fra le parole note dell'italiano |
| 4 | «download» in una frase italiana passa: il dizionario italiano lo conosce, e per l'italiano la lista vieta soltanto «open source» e «scarica» | la domanda 1 | il programma qui sotto | «download» vietato anche in italiano |
| 5 | lo script del tema segue il sistema a pagina aperta, e regge un browser che rifiuta la memoria: nessun test prova né l'uno né l'altro, contro il vincolo 11 del piano | la domanda 2 | letti i test dei compiti 9–12 | un test per ciascuno; `before` di `open()` arriva col compito 9, il primo che lo usa |
| 6 | l'indice fisso in alto, e «Vai al contenuto» che si vede col fuoco: senza `position: sticky` l'indice scorre via, e il test dell'indice resta verde; senza la regola del fuoco il link ha il suo anello, ma resta sopra lo schermo | le domande 1 e 2 | dedotto dal CSS del piano; lo prova il secondo giro del passo 7 del compito 11 | due controlli nei test che ci sono: l'indice resta in cima, e ciò che ha il fuoco sta nello schermo |
| 7 | il controllo dei token lascia fuori i token che la pagina dichiara da sé: una pagina che ridefinisce un colore di daemon passa, e lo nasconde al controllo | la domanda 2 | letto il filtro del controllo | un test: la pagina non ridefinisce nessun token di daemon |
| 8 | la §5.4 del disegno dice che, se sparisce un token che la pagina usa, «la build è rossa»; nel piano è rosso il cancello | la regola 6 | letto il compito 9 | si corregge la frase del disegno |

**Il programma delle prove di cspell**, nello scratchpad, con `cspell-lib` 10.3.6 e `@cspell/dict-it-it` 3.1.7: la
funzione `unknownWords` del compito 7 lettera per lettera, con un'impostazione in più.

| Testo | Lingua | Come nel piano | Con `minWordLength: 2` |
|---|---|---|---|
| `teh cat adn dog` | en | `[]` | `["teh","adn"]` |
| `nle kernel cno la GPU` | it | `[]` | `["nle","cno","GPU"]` |
| le frasi e l'interfaccia della §3.4 del piano | it | `[]` | `["GPU","GB","EN"]` |
| le stesse | en | `[]` | `[]` |
| `l’arbitro dell’audit un’etichetta c’è all’indice nell’app quest’ultimo d’uso l’ADR e è a i o` | it | `["nell’app"]` | `["nell’app","l’ADR"]` |
| lettere sole: `il k testo, deciso col N, e N è il sotto-progetto, la x` e `the s user, built at col N, a x b` | it, en | `[]` | `[]`, e così con `minWordLength: 1`: una lettera sola i dizionari la accettano |
| `il download di daemon` | it | `[]` | — |

**L'undicesima sessione**, il 2026-10-08, dopo la decima: i difetti 4–8 scritti nel piano, un commit per difetto —
`3c033aa`, `f8845d7`, `5d27201`, `5275e79` e `a3280ee` —, poi il banco come nella §17, coi comandi in testa al suo
programma. daemon a `6166236`: un commit di documenti dell'audit dopo `8e88ae1`, arrivato durante la sessione, che non
tocca né le cinque fonti né la GUI — `git diff --stat 8e88ae1 6166236 --` con le cinque fonti, `gui/package.json`,
`gui/src/tokens`, `scripts/gate-gui.sh` e `.github`: vuoto.

**Prima di scriverli**, provati nello scratchpad:

| Che cosa | Visto |
|---|---|
| `/\bdownload\w*/i` fra le parole vietate dell'italiano, il difetto 4 | `il download di daemon` dà `["download"]`, `Un assistente desktop locale.` niente; `scarica`, `scaricare` e `open source` come prima |
| il controllo dei token col test del difetto 7, sul `themes.css` di daemon a `origin/main` e sul `page.css` del compito 9 | sulla pagina giusta tutto verde; col difetto del passo 7, rossi i due temi, la scala e la copia — `--color-bg` —, e la guardia verde; con un `page.css` senza token, rossa la guardia sola |

**Il banco**, dal testo del piano coi difetti 1–8, sulla landing a `a3280ee`:

| Compito | Visto |
|---|---|
| 1–6 | ogni rosso e ogni verde del piano: tutto come scritto |
| 7 | `12 passed`, e `8 passed` sui testi veri, con ogni parola da due lettere in su; poi `4 failed \| 4 passed`, i rossi su `Indce`, sull'apostrofo dritto, su `open source` e su `Tema 2` |
| 8 | `24 failed`, poi `24 passed`; nel passo 11, `6 failed \| 18 passed`, con `Download daemon` nel rosso di `says nothing that is not in the files of the texts`, nelle due lingue; `62 passed` |
| 9 | `1 failed \| 4 passed` e `14 failed`; `5 passed` e `38 passed`; nel passo 7, `4 failed \| 1 passed`, con `--color-text-faint`, `--ref-neutral-48` e `--color-bg`, e `6 failed \| 8 passed`, i rossi sui tre test che il passo nomina — `page.waitForFunction` e `locator.click` fuori tempo —; `71 passed`. Sulla pagina giusta `page.emulateMedia` arriva al `data-theme`, e un `localStorage` che lancia `SecurityError` non dà errori |
| 10 | coi passi scalati: `1 failed \| 5 passed`, la console; `44 passed` e l'icona del kit; `6 failed`, poi `44 passed`; `71 passed` |
| 11 | `Test Files  4 failed \| 1 passed (5)`; `44 passed`; `8 failed \| 16 passed`, axe sul segno della fonte; `24 passed`; nel passo 7, `8 failed \| 16 passed`, poi `4 failed \| 20 passed` — «Vai al contenuto» col fuoco fuori dallo schermo, e l'indice a `y` = −71 —, alla fine `68 passed`; `71 passed` |
| 12 | `8 passed`; `6 failed \| 2 passed` e `2 failed \| 6 passed`; `76 passed`; `71 passed` |
| 13 | `7 passed` e `3 passed`; `1 failed \| 2 passed`; `Missing script: "gate"`; il cancello verde in 190 s, `81 passed` e `76 passed`; il passo 8 in 449 s, fermo a `page` due volte e senza `npm audit`, la seconda con `Test Files  7 failed (7)`; la CI a mano verde in 181 s, `80 passed \| 1 skipped (81)` col test del kit elencato con `↓`. Il passo 13 non gira: il push del banco non arriva a GitHub |

Tutto come scritto. Alla fine la landing del banco è pulita, coi tredici commit dei compiti.

**Un limite del banco, non del piano.** `report.txt` mostra le prime 60 righe utili di ogni comando: i conti del passo 7
del compito 11, e quelli del cancello, dove `--reporter=verbose` elenca ogni test, si leggono nel log del comando.

## 19. La quindicesima sessione: il ri-controllo del compito 4

Il 2026-10-09, prima di eseguirlo. Il compito letto contro la landing a `51cff86`, con le quattro domande e le regole 5–8
di *«Prima di eseguire un compito di un piano»* (§6 del piano). daemon a `34cf745`, come alla chiusura della
quattordicesima.

**I fatti che invecchiano**, rilanciati coi comandi della tabella in fondo alla §6 del piano: tutto come scritto. In più:

| Fatto | Comando |
|---|---|
| i pacchetti del compito 4 aggiunti a quelli del compito 3, risolti senza installare: uno script d'installazione soltanto in `esbuild` 0.28.2, spento, e in `fsevents` 2.3.3, opzionale; una `vite` sola, la 8.3.4; ogni voce dal registro di npm, con la sua `integrity`; `found 0 vulnerabilities` | in una cartella dello scratchpad, con `package.json`, `package-lock.json` e `.npmrc` della landing: `npm install --package-lock-only --ignore-scripts --no-audit --no-fund --save-exact --save-dev vitest@4.1.11 @types/node@24.13.5`, poi `node -e` sul lockfile, coi campi `hasInstallScript`, `resolved` e `integrity`, e `npm audit` |
| il file più grande di daemon supera ancora 1 MiB, il limite di `execFileSync` che il commento di `daemon.ts` nomina | `git -C .. ls-tree -r -l origin/main \| sort -k4 -n \| tail -1` |
| nessuna impostazione di Git della macchina tocca i repository dei test: né la firma dei commit né `core.hooksPath`; `core.autocrlf` e `init.defaultBranch` li scavalca il test | `git config --show-origin --get-regexp '^(commit\.gpgsign\|tag\.gpgsign\|gpg\.\|core\.hookspath\|init\.templatedir\|init\.defaultbranch\|core\.autocrlf\|user\.)'` |

**Il difetto**, portato al proprietario in A/B. La risposta: A.

| Il difetto | Che cosa lo coglie | Come si è visto | La risposta |
|---|---|---|---|
| il compito promette che ogni lettura viene dal commit preso all'apertura, anche dopo un `git fetch`, e i suoi quattro test non lo provano: passano anche un `read` che rilegge `origin/main` a ogni lettura, e uno che prende dalla cartella di lavoro un file che al commit non c'è | le domande 1 e 2: la sonda manca, e il test 4 chiede un file che non c'è da nessuna parte | i due `read` sbagliati, scritti nello scratchpad accanto a quello del piano: coi quattro test del piano, `4 passed` tutti e due | due controlli nei test che ci sono: il test 2 sposta `origin/main` dopo l'apertura, e la lettura resta sul commit di prima; il test 4 chiede un file che sta nel commit locale e nella cartella di lavoro, e non a `origin/main`. Restano quattro test, e nessun altro conto del piano cambia |

**I test nuovi, provati** nello scratchpad, dal testo del piano corretto:

| Prova | Visto |
|---|---|
| senza `daemon.ts` | `Cannot find module './daemon'` |
| col `daemon.ts` del piano | `4 passed`; poi `npm test`, `4 passed`, e `npm run build`, `0 errors`, `0 warnings` e `2 page(s) built` |
| col `read` che rilegge `origin/main` | rosso il test 2 |
| col `read` che ripiega sulla cartella di lavoro | rosso il test 4 |
| col `read` che legge `HEAD` | rossi i test 2 e 4 |
| i passi 4 e 6 del compito 6, sui test nuovi | `2 failed \| 4 passed`, poi `6 passed`, come scritti |

**Non è un difetto: la cartella di daemon di base.** `openDaemon()` senza argomenti apre la cartella sopra quella da cui
si lancia; nel compito 4 nessun test la prova, perché ogni test si costruisce un repository suo. La prova il controllo
delle fonti del compito 6, il primo che la usa: aperta sulla landing invece che su daemon, non troverebbe i file delle
citazioni.

**Il banco non si rilancia.** La correzione tocca soltanto due test di `daemon.test.ts`, e le prove qui sopra coprono
ogni passo che lo legge: i passi 3–6 del compito 4, e i passi 4 e 6 del compito 6, l'unico altro che lo cambia.

**La revisione del compito**, dopo il suo commit, `253a9a2`: aderente e approvata, con due rilievi Important «imposti dal
piano», due righe di `daemon.ts` che nessun test prova.

| Il rilievo | Come si è visto | La decisione |
|---|---|---|
| la cartella di daemon di base, `resolve(process.cwd(), '..')`: con un'altra, i test del compito restano verdi | letto il test | resta com'è: era già nel ri-controllo, qui sopra, e la revisione non porta una prova nuova |
| `maxBuffer: Infinity`: senza, i test restano verdi; e nessun controllo del piano lo prova, perché nessun file che la pagina legge supera 1 MiB. Una lettura oltre il limite direbbe che il file non c'è | `git cat-file -s "origin/main:<file>"`, per le cinque fonti e per `gui/src/tokens/themes.css`; `git ls-tree -r -l origin/main \| awk '$4 > 1048576'`, i file di daemon oltre 1 MiB | un quinto test: un file appena oltre 1 MiB si legge per intero (risposta del proprietario: A). I conti dei compiti 6 e 8–13 crescono di uno |

**Il quinto test, provato** nello scratchpad, dal testo del piano corretto:

| Prova | Visto |
|---|---|
| col `daemon.ts` del piano | `5 passed` |
| col `daemon.ts` senza `maxBuffer` | rosso il test nuovo: `Error: large.md is not in daemon at …` |
| i passi 4 e 6 del compito 6, sui cinque test | `2 failed \| 5 passed`, poi `7 passed` |
| `npm run build` | `0 errors`, `0 warnings` e `2 page(s) built` |

**Le note minori della revisione**, nessuna da fare adesso: i due `catch` di `daemon.ts` buttano la causa dell'errore, che
`new Error(…, { cause })` terrebbe; `git show <commit>:<cartella>` esce con 0 e dà l'elenco della cartella invece di
fallire, mentre `git cat-file blob` fallirebbe; l'aiuto `git()` dei test non fissa `commit.gpgsign` né `core.hooksPath`, e
non toglie le variabili `GIT_*` che un hook di Git gli passerebbe.
