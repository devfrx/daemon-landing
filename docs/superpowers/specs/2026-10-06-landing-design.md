# Landing page di daemon — il disegno

> 🎯 **Che cos'è questo file.** Il disegno della landing page: che cosa si costruisce e come, quanto basta a scriverne il
> piano. Nasce dal brainstorming del 2026-10-06: la richiesta del proprietario, le sue risposte e le bozze stanno nel
> diario, in [`docs/archivio/consegna-brainstorming-landing.md`](../../archivio/consegna-brainstorming-landing.md),
> parola per parola.
>
> 📌 **Dove siamo:** il disegno è finito, il 2026-10-07: scritto una sezione per volta, ciascuna dopo il sì del
> proprietario, poi riletto dall'agente e dal proprietario. Il prossimo passo è il piano: lo dice la §9.

| § | Sezione | Stato |
|---|---|---|
| 1 | Che cosa si costruisce | ✅ approvata il 2026-10-07 |
| 2 | La pagina | ✅ approvata il 2026-10-07 |
| 3 | Le parole e le fonti | ✅ approvata il 2026-10-07 |
| 4 | Le figure | ✅ approvata il 2026-10-07 |
| 5 | Com'è fatta dentro | ✅ approvata il 2026-10-07 |
| 6 | La porta di qualità | ✅ approvata il 2026-10-07 |
| 7 | Dove vive | ✅ approvata il 2026-10-07 |
| 8 | Verificato, dedotto, assunto | ✅ approvata il 2026-10-07 |
| 9 | Come si riprende | ✅ approvata il 2026-10-07 |

---

## 1. Che cosa si costruisce

| | |
|---|---|
| **Cos'è** | una pagina lunga che si scorre, in italiano e in inglese. È fatta di file pronti, senza server: le animazioni girano nel browser di chi guarda |
| **Che cosa dice** | che cos'è daemon, com'è fatto dentro — l'architettura, con le spiegazioni tecniche — e a che punto è |
| **Per chi** | sviluppatori, anche i più esperti: deve impressionarli anche per il design |
| **Quando è finita** | quando `npm run gate` è verde (§6) e il proprietario l'ha riletta |

**Le regole fisse**, per tutta la pagina:

1. non inventa nulla: ogni frase ha una fonte nei documenti di daemon, e un programma la controlla (§3);
2. zero refusi, in italiano e in inglese (§3);
3. mai «open source», perché il repository di daemon non ha una licenza, e mai «scarica», perché non c'è niente da
   scaricare;
4. nessuna richiesta a siti di terzi (§5);
5. lo scroll resta quello del browser: le animazioni seguono lo scroll, non lo comandano (§2);
6. con *riduci il movimento* la pagina sta ferma, ma è completa (§2);
7. due temi, chiaro e scuro (§2).

**Che cosa non c'è:** niente da scaricare, niente statistiche, niente audio. Dove pubblicarla si decide in §7.

---

## 2. La pagina

**Prima il racconto, poi la tavola.** La pagina si apre come un racconto: i semi all'angolo aureo diventano un vortice,
poi una luna, poi l'occhio, che diventa la o di «daemon». Poi l'occhio si ferma e gli compaiono i cerchi di costruzione e
la griglia: è la **Fig. 0**, e da lì la pagina è una **tavola tecnica**, con le figure numerate. Nell'architettura stanno
tutti e due i modi: la pila dei livelli che si apre (tavola) e il puntino che viaggia sui canali (racconto).

| # | Sezione | Modo | Che cosa c'è |
|---|---|---|---|
| 1 | Apertura | racconto | i semi diventano l'occhio, poi la o di «daemon» — §2.1 |
| 2 | Fig. 0 · Il marchio | il passaggio | l'occhio si ferma, arrivano i cerchi e la griglia |
| 3 | Cos'è | tavola | quattro pilastri su un kernel comune; il limite vero: una sola GPU da 16 GB |
| 4 | Architettura | tavola | Fig. 1–2: i livelli che si aprono; il puntino che viaggia sui canali |
| 5 | Meccanismi | tavola | Fig. 3–8: le sei invarianti, l'arbitro GPU, il giornale e la ripresa (la prova da toccare), i dati non fidati, il gateway, i test deterministici |
| 6 | Metodo | tavola | Fig. 9, lo stack; prima la spec, poi il codice; gli ADR; la porta di qualità |
| 7 | Stato | tavola | che cosa è costruito, che cosa è deciso, che cosa viene dopo |
| 8 | Chiusura | — | il codice su GitHub; da quale commit di daemon vengono i dati |

⚠️ **Richiamo del 2026-10-07:** le figure stanno nell'ordine dei loro numeri, e così il gateway e lo stack hanno un posto
— la storia nella §2.2 della [rilettura](../../archivio/2026-10-07-rilettura-disegno-landing.md).

### 2.1 L'apertura

| | |
|---|---|
| **Quanto dura** | 3 schermate di scroll |
| **I passaggi** | semi all'angolo aureo → vortice → luna → l'occhio si apre → l'occhio diventa la o di «daemon», con la riga del marchio sotto |
| **La prima schermata** | i semi e una frase breve che dice che cos'è daemon **senza dirne il nome**: il nome arriva alla fine, come colpo di scena. La frase viene dai documenti di daemon, come ogni altra (§3), e sparisce quando il racconto parte |
| **«Salta»** | sempre visibile durante l'apertura; porta alla Fig. 0 |
| **Il pentagramma col ghigno** della splash | **non entra**: un'apertura dice una cosa sola, il marchio che diventa il nome. Il pentagramma resta il momento della splash, dentro l'app |

La bozza mostrata per il pentagramma, con le due varianti:
[`2026-10-07-landing-bozze/d.html`](2026-10-07-landing-bozze/d.html). Le bozze del brainstorming — l'occhio (`a`), la
tavola (`b`), il passaggio approvato (`c`) — stanno in archivio, in
[`docs/archivio/2026-10-06-landing-bozze/`](../../archivio/2026-10-06-landing-bozze/).

**Costo dichiarato:** chi non usa «salta» scorre 3 schermate prima della Fig. 0, e ci sono più fotogrammi da provare.

### 2.2 Le regole della pagina

1. **due temi**, chiaro e scuro: segue il sistema, e c'è un interruttore;
2. **lo scroll resta quello del browser**, niente scroll «rubato»: le animazioni seguono lo scroll, non lo comandano;
3. con **riduci il movimento** la pagina è ferma, ma completa;
4. un **indice fisso** in alto: la pagina è lunga, circa 15–20 schermate.

### 2.3 Il telefono

Le **scene fisse** — la figura resta ferma sullo schermo e si anima mentre si scorre, poi se ne va — restano anche sul
telefono, **più corte**: la figura sopra, il testo sotto. Figure e contenuti sono gli stessi del computer.

**Costo dichiarato:** ogni figura ha una sua versione per il telefono, da disegnare e da provare (§6).

### 2.4 Le due lingue

| Indirizzo | Lingua |
|---|---|
| `/` | inglese |
| `/it/` | italiano |

L'italiano è l'originale: le fonti sono in italiano e l'inglese è la traduzione, riletta frase per frase (§3). In alto
c'è un interruttore della lingua, e ogni versione dichiara l'altra ai motori di ricerca (`hreflang`). **Nessun cambio di
lingua automatico:** chiederebbe un server, o uno script che fa lampeggiare la pagina.

**Costo dichiarato:** l'indirizzo principale porta la traduzione, e chi è italiano clicca «IT». Fino alla pubblicazione
la scelta si cambia senza danni; dopo, romperebbe i link già condivisi.

---

## 3. Le parole e le fonti

**Ogni frase vera, nessun refuso.** La pagina non inventa nulla: ogni frase ha la sua fonte, e un programma la controlla.

### 3.1 Dove sta il testo

Ogni frase sta in un file per lingua, con un identificatore. Nel file italiano, accanto a ogni frase:

| Campo | Che cosa contiene |
|---|---|
| la fonte | il file del repository di daemon da cui viene la frase; per le frasi del marchio — per esempio «AGENTIC OS» — un file di `brand/`, la copia del kit (§7) |
| la citazione | un pezzo letterale di quel file: in italiano per i documenti di daemon, nella sua lingua per il marchio |
| l'etichetta | per un meccanismo: «costruito» oppure «deciso · col N», la convenzione dei diagrammi di daemon (§4) |

Il file inglese ha gli stessi identificatori, né uno in più né uno in meno, e ogni sua frase ha la fonte della frase
italiana. Il formato dei file si sceglie nel piano.

⚠️ **Richiamo del 2026-10-07:** le citazioni del marchio, come «AGENTIC OS», restano nella loro lingua — la storia nella
§2.4 della [rilettura](../../archivio/2026-10-07-rilettura-disegno-landing.md).

### 3.2 I controlli

| Controllo | Rosso se |
|---|---|
| la citazione | non si trova più nel suo file. Il confronto ignora gli a-capo e gli spazi doppi, perché i documenti di daemon vanno a capo dentro le frasi |
| i nomi del codice | un nome scritto fra apici inversi — per esempio `Untrusted::promote` — non esiste più in `crates/` |
| le etichette | «costruito» senza un nome del codice che esiste in `crates/`; «deciso · col N» senza una citazione che dice «col N» |
| i numeri | un numero non sta dentro una citazione controllata e non lo produce un comando durante la build. Mai a mano: è la regola di `CLAUDE.md` di daemon, *«Un numero misurato non si scrive: si scrive il COMANDO che lo produce»* |
| le due lingue | un identificatore c'è in una lingua e manca nell'altra |
| le parole vietate | «open source» e «scarica» in italiano; «open source» e «download» in inglese |
| i refusi | il controllo ortografico, in italiano e in inglese, trova una parola che non conosce |
| la tipografia | apostrofi, virgolette, spazi e trattini non seguono le regole della loro lingua |
| il commit | il commit di daemon da cui viene la pagina non è su GitHub |

L'inglese, poi, lo rilegge un secondo revisore, frase per frase, contro l'italiano: un subagente nuovo, che non ha scritto
la traduzione. È l'unico controllo che non fa un programma, e la rilettura del proprietario resta (§1).

⚠️ **Richiamo del 2026-10-07:** il secondo revisore è un subagente nuovo — la storia nella §2.7 della
[rilettura](../../archivio/2026-10-07-rilettura-disegno-landing.md).

### 3.3 Le fonti, sulla pagina

- ogni frase tecnica porta un segno: lo si tocca e si vede il file da cui viene, con il link su GitHub;
- il link punta al **commit esatto**, non a un ramo: mostra il testo che il controllo ha letto, anche dopo che il
  documento è cambiato;
- in fondo alla pagina c'è il commit di `devfrx/daemon` da cui vengono le frasi e i numeri;
- ogni meccanismo porta la sua etichetta, «costruito» o «deciso · col N».

**Costo dichiarato:** quando una frase cambia nei documenti di daemon, il controllo chiede di aggiornare la pagina.

---

## 4. Le figure

Dieci figure numerate. Ognuna ha un disegno e due o tre frasi semplici; dalla Fig. 1 alla 9, anche i nomi veri del codice
— per esempio `Untrusted::promote` — e il link all'ADR su GitHub. La Fig. 0 è il marchio: non ha nomi del codice né un
ADR.

⚠️ **Richiamo del 2026-10-07:** la Fig. 0 non ha codice né ADR — la storia nella §2.3 della
[rilettura](../../archivio/2026-10-07-rilettura-disegno-landing.md).

| Fig. | Che cosa mostra | Come si muove |
|---|---|---|
| 0 · Il marchio | i tre cerchi in rapporto aureo | il passaggio racconto → tavola |
| 1 · I quattro livelli | fondamenta, arbitri, capacità, integrazione | si apre con lo scroll |
| 2 · I processi | core, GUI, worker, MCP, OpenRouter e i canali | il puntino viaggia, un passo per volta |
| 3 · Le sei invarianti | le sei regole che il kernel non può rompere | si accendono una per volta |
| 4 · L'arbitro GPU | 16 GB; le quote tolte prima; chi entra e chi aspetta | la formula si compone |
| 5 · Il giornale e la ripresa | intento scritto prima, esito dopo; le tre classi | **prova da toccare:** uccidi il worker |
| 6 · I dati non fidati | un tipo a parte: possono informare, mai autorizzare | il testo sospetto resta nella sua scatola |
| 7 · Il gateway | ogni richiesta ha il suo record; sui dati si fallisce chiuso | la catena di riserva scorre |
| 8 · I test deterministici | tempo, caso, I/O e ordine iniettabili; crash simulati | due corse con lo stesso seme, identiche |
| 9 · Lo stack | Rust `no_std`, le crate del workspace, Vue 3, Electron, Python, redb | — |

| Regola | |
|---|---|
| **la legenda** | una volta sola sulla pagina: «costruito» vuol dire che esiste nel codice; «deciso · col N» vuol dire deciso e non ancora costruito, e N è il sotto-progetto della roadmap che lo costruirà. È la regola 2 di `docs/README.md` di daemon, che è anche la fonte della frase (§3) |
| **il fotogramma di riposo** | ogni figura ne ha uno che mostra tutto, di solito l'ultimo: è quello che si vede con *riduci il movimento* (§2.2) |
| **la prova da toccare** | la Fig. 5 si usa anche da tastiera |
| **sul telefono** | le stesse figure, con le scene più corte (§2.3) |

⚠️ **Dedotto, non verificato per figura:** quale etichetta vada su ogni figura. È dedotto dalla lista dei `pub mod` di
`crates/kernel/src/lib.rs` e dai «(col N)» di `docs/design/01-topologia-dei-processi.md`; si verifica riga per riga
contro il codice, nel piano. Lo stesso vale per i contenuti della Fig. 1: i livelli disegnati nella bozza `b` sono
un'approssimazione, da verificare sulla spec del kernel.

⚠️ **Richiamo del 2026-10-07:** il segno «(col N)» della regola 2 del README di daemon, e i «(col N)» di `design/01`,
oggi stanno sul ramo dell'audit e non su `main`, che è quello che la pagina legge (§6.2) — §8.

**Costo dichiarato:** la pagina è lunga, circa 15–20 schermate; per questo c'è l'indice fisso in alto (§2.2).

---

## 5. Com'è fatta dentro

### 5.1 Gli strumenti

| | La scelta | Perché |
|---|---|---|
| lo strumento | **Astro**, che costruisce i file pronti | gestisce le due lingue, controlla i testi con uno schema, usa Vite come la GUI |
| le animazioni | **nessuna libreria**: un orologio nostro — lo scroll diventa un numero da 0 a 1, ogni scena è una funzione pura di quel numero | uguale su tutti i browser, Firefox compreso; ogni fotogramma si prova in un test; la stessa logica della splash |
| il 3D | **niente motore 3D**: la profondità con un canvas 2D a prospettiva calcolata, come la splash, e il 3D del CSS per la pila dei livelli | il marchio è piatto; un motore costerebbe peso per nulla — la misura in §8 |
| i caratteri | Geist e Barlow, ospitati dalla pagina, gli stessi pacchetti della GUI | nessuna richiesta a terzi |
| la rete | **nessuna richiesta a siti terzi**: niente Google Fonts, niente statistiche | un controllo lo verifica (§6) |
| il suono | nessuno | una pagina non parte con l'audio |

**Costo dichiarato:** qualche centinaio di righe di codice nostro al posto di una libreria.

**Scartata:** GSAP. È gratuito ma ha una licenza propria, non open source; sarebbe una dipendenza in più, e due modi di
animare nella stessa pagina.

### 5.2 I pezzi

Ogni pezzo fa una cosa sola, e si prova da solo.

| Pezzo | Che cosa fa | Da che cosa dipende | Come si prova |
|---|---|---|---|
| **i testi** | le frasi, un file per lingua, con fonte, citazione ed etichetta (§3.1) | — | lo schema dei testi |
| **il controllo delle fonti** | confronta i testi con i documenti di daemon e con `brand/`: rosso se una citazione, un nome del codice, un'etichetta o un numero non torna (§3.2) | i testi, daemon accanto | nei due sensi: rosso su un difetto messo apposta, verde sui testi veri |
| **le misure** | durante la build, i comandi che producono i numeri e il commit di daemon | daemon accanto | ogni misura su un caso di prova dal risultato noto |
| **la geometria** | le misure del marchio: il blocco `GEOMETRY` della splash, letto durante la build fra i suoi segni `/*GEOMETRY-START*/` e `/*GEOMETRY-END*/` — come fa il kit, che da quel blocco scrive il SVG e lo studio | `brand/` | il marchio disegnato è identico a quello del kit (§6) |
| **i token** | i colori dei due temi, letti da daemon (§5.4) | daemon accanto | rosso se manca un token che la pagina usa |
| **l'orologio** | trasforma la posizione dello scroll in un numero da 0 a 1 per ogni scena; con *riduci il movimento* lo tiene fermo sul fotogramma di riposo | il browser | test: posizione dello scroll → numero |
| **le scene** | una funzione pura per scena: dal numero allo stato del disegno. Stesso numero, stesso disegno, sempre | la geometria, i token | test: lo stesso numero dà lo stesso stato; le foto in punti fissi (§6) |
| **le figure** | i blocchi della pagina: il disegno, le frasi, i nomi del codice, il link all'ADR, l'etichetta | i testi, le scene | le foto e l'accessibilità (§6) |

### 5.3 Il percorso

```
daemon (origin/main) ──────┐
brand/ ────────────────────┼─→ controllo delle fonti ─→ rosso o verde
testi (en, it) ────────────┘
          └─→ build di Astro ─→ file pronti:  /  (inglese)   /it/  (italiano)

nel browser:   scroll → orologio → numero 0…1 → scena → disegno
```

⚠️ **Richiamo del 2026-10-07:** daemon si legge a `origin/main`, non dalla cartella `../` (§6.2) — la storia nella §2.1
della [rilettura](../../archivio/2026-10-07-rilettura-disegno-landing.md).

Due conseguenze, che non costano lavoro in più:

1. **Il fotogramma di riposo si disegna durante la build.** Le scene sono funzioni pure, quindi la build calcola il
   fotogramma di riposo di ogni figura e lo scrive nella pagina. Con *riduci il movimento*, e anche senza JavaScript, la
   pagina è completa e ferma; senza JavaScript il tema è quello scuro, come nella splash.
2. **Una geometria sola:** la pagina non ricopia le misure del marchio, le legge dal blocco della splash.

### 5.4 I token

I colori dei due temi si leggono, durante la build, da `gui/src/tokens/themes.css` di daemon, **così com'è**: lì ci sono
già i colori del marchio. È la regola del design system di daemon, scritta in `gui/src/tokens/readToken.ts`: *«The CSS
variables are the truth (answer 14): this reads them, it keeps no copy.»* Se la GUI cambia un colore, la pagina lo segue
alla build dopo; se sparisce un token che la pagina usa, la build è rossa.

Da `gui/src/tokens/base.css` la pagina **non prende niente**: ha regole per l'app — il corpo del testo a 14 px, il focus
— e la pagina ha le sue. Anche la scala dei caratteri è della pagina: una landing ha titoli più grandi di un'app.

**Costo dichiarato:** la pagina non si costruisce senza daemon accanto — vale già per le fonti — e il suo aspetto cambia
quando cambia la GUI, senza una decisione apposta per la pagina.

---

## 6. La porta di qualità

### 6.1 Il cancello

Un comando solo, `npm run gate`, come `scripts/gate.sh` in daemon. Diventa rosso se:

| Controllo | Che cosa guarda |
|---|---|
| fonti | le citazioni, i nomi del codice, le etichette, i numeri, le due lingue, il commit (§3.2) |
| parole | refusi in italiano e in inglese; apostrofi, virgolette, spazi e trattini; nessuna parola vietata (§3.2) |
| scene | ogni scena fotografata in punti fissi dello scroll: chiaro e scuro, computer e telefono; col movimento ridotto, il fotogramma di riposo |
| accessibilità | zero errori del controllo automatico sulle regole WCAG 2.2 AA; tutto si usa da tastiera; il movimento ridotto funziona. È ciò che un programma sa provare, non la conformità intera: il resto lo vede chi rilegge |
| rete | nessuna richiesta a siti terzi |
| velocità | le soglie «buone» dei Core Web Vitals: LCP entro 2,5 s, INP entro 200 ms, CLS entro 0,1 (§8). Per web.dev valgono sul 75° percentile delle visite vere; qui si misurano in laboratorio, sulla pagina costruita e sempre con lo stesso profilo: una misura ripetibile, non quella dei visitatori. L'INP c'è solo se qualcuno interagisce con la pagina: le interazioni si fanno apposta, e quali lo fissa il piano (§8) |
| console | un errore nella console del browser |
| senza JavaScript | manca del testo: la pagina deve leggersi tutta anche così (§5.3) |
| marchio | il marchio disegnato non è identico a quello del kit |

⚠️ **Richiamo del 2026-10-07:** l'accessibilità dice che cosa prova il programma, e l'INP vuole interazioni fatte apposta
— la storia nelle §2.5 e §2.6 della [rilettura](../../archivio/2026-10-07-rilettura-disegno-landing.md).

Ogni controllo gira su tutte e due le lingue, `/` e `/it/`, e si prova **nei due sensi**: rosso su un difetto messo
apposta, verde sulla pagina giusta — la regola di `CLAUDE.md` di daemon.

**Costo dichiarato:** le foto delle scene si rifanno apposta ogni volta che cambia il design.

### 6.2 Quale daemon legge la pagina

Il `main` di daemon su GitHub, come lo conosce il repository di daemon accanto (`origin/main`), e **non la sua cartella
di lavoro**. Così il ramo su cui sta daemon in quel momento — il 2026-10-07, quello dell'audit — non entra nella pagina,
e ogni commit che la pagina cita è su GitHub per costruzione.

**Costo dichiarato:** una modifica ai documenti di daemon arriva nella pagina solo quando è su `main` ed è stata
scaricata con `git fetch`.

### 6.3 La CI

Come quella di daemon, in `.github/workflows/quality-gate.yml`:

| | |
|---|---|
| quando | a ogni push, e una volta a settimana: per accorgersi se daemon ha cambiato una frase citata |
| dove | Linux e Windows, lo stesso cancello: la decisione 44 di daemon, *«a matrix, the SAME gate on both»* |
| daemon | scaricato da GitHub accanto alla landing, al suo `main`: è pubblico, non servono chiavi |

**Costo dichiarato:** Playwright tiene una foto originale per ogni sistema — *«Screenshots differ between browsers and
platforms due to different rendering, fonts and more»* (§8) — quindi le foto si rifanno su tutti e due i sistemi, e il
piano fissa dove si fanno gli originali e quanta differenza si tollera. E la CI può diventare rossa anche quando la
landing non è cambiata, se daemon ha cambiato una frase citata: è lo scopo.

---

## 7. Dove vive

### 7.1 Il repository

| | |
|---|---|
| **dove** | la cartella `landing/` nella radice di daemon, con il suo repository git; su GitHub, `devfrx/daemon-landing`, pubblico |
| **in daemon** | cambia una riga sola: `landing/` entra nel `.gitignore`, con un commento che dice che cos'è (§7.4) |
| **il compendio di daemon** | non si tocca: la landing non è una decisione del kernel e non cambia il prossimo passo di daemon; e il compendio sta vicino al tetto che gli impone `scripts/check-docs.sh` — il conto è `wc -c docs/COMPENDIO.md` contro la riga `ceiling=` dello script |
| **la lettura d'apertura** | il `CLAUDE.md` di questo repository: qui si leggono i documenti della landing, non il compendio di daemon, e le fonti di daemon si aprono solo quando una frase le cita. Le altre regole di daemon valgono anche qui |
| **le sessioni** | una fase per volta: il disegno, il piano, il pre-controllo, poi un compito per sessione |

### 7.2 I file del marchio, in `brand/`

I file del kit che la pagina usa si **copiano** in `brand/`, byte per byte: `daemon_kit/` non sta in nessun repository —
su questa macchina daemon la ignora con `.git/info/exclude` — e la CI non la vede. Si copiano:

- i SVG del marchio;
- lo studio del marchio;
- **la splash**, perché il blocco `GEOMETRY` sta solo lì: il suo commento dice che la build del kit lo usa per scrivere
  il marchio statico, il SVG e lo studio, *«so there is one geometry»*.

Una nota in `brand/` dice, per ogni file, da dove viene, quando è stato copiato e la sua impronta (sha256). Dove il kit
c'è accanto, il cancello confronta le impronte; dove non c'è, lo scrive. `daemon_kit/` resta com'è.

### 7.3 I fine-riga

Ogni file di testo va a capo **alla Linux (LF), su ogni macchina**: un `.gitattributes` con `* text=auto eol=lf`, e i
file binari restano come sono. Lo aggiunge il **primo compito del piano**, prima di qualunque codice.

Il perché, verificato il 2026-10-07: su questa macchina Git converte gli a-capo da solo (`core.autocrlf=true`,
l'impostazione di Git per Windows), quindi una copia nuova del repository avrebbe gli a-capo di Windows — è così che
daemon ha i fine-riga misti per file. E le copie in `brand/` devono restare identiche al kit, che va a capo alla Linux:
con gli a-capo di Windows le loro impronte cambierebbero.

**Costo dichiarato:** un file che un giorno debba andare a capo alla Windows, per esempio un `.bat`, chiede una riga
d'eccezione.

### 7.4 La riga in daemon

Entra **dopo l'audit, su `main`**: un commit solo, fatto da una sessione di daemon. Serve davvero: `scripts/check-docs.sh`
legge ogni `.md` sotto la radice che git non ignora — `find . -name '*.md'` e poi `git check-ignore --stdin` — quindi
leggerebbe anche quelli della landing, e con loro quelli delle librerie (§8).

⏳ **Fino ad allora:** su questa macchina la riga sta in `.git/info/exclude` di daemon, verificato il 2026-10-07. Su ogni
altra macchina, prima di lanciare i cancelli di daemon con `landing/` presente, va aggiunta la stessa riga.

**Costo dichiarato:** un passo a mano su ogni macchina, fino al commit; chi lo dimentica fa leggere al cancello dei
documenti di daemon anche i file della landing.

### 7.5 Dove si pubblica

Si decide **quando la pagina è pronta**: è un'azione verso l'esterno, del proprietario. Intanto la build funziona a
qualunque indirizzo — l'indirizzo base è un'impostazione, mai scritto nel codice — così aspettare non fa perdere niente.

---

## 8. Verificato, dedotto, assunto

Ogni fatto su cui poggia il disegno, diviso per quanto è sicuro. Un fatto **verificato** porta il comando che lo mostra e
la data: è vero a quella data, e chi dubita rilancia il comando. È la regola di `CLAUDE.md` di daemon sui numeri —
*«Un numero misurato non si scrive: si scrive il COMANDO che lo produce»* — estesa a ogni fatto.

### 8.1 Verificato il 2026-10-07

Dalla radice di daemon, in Git Bash, dopo `export MSYS_NO_PATHCONV=1`. Ciò che la pagina legge si legge su `origin/main`
(§6.2); `daemon_kit/` e lo stato della macchina, dalla cartella.

| Fatto | Sostiene | Comando o fonte |
|---|---|---|
| il repository di daemon è pubblico e non ha una licenza | la regola 3 (§1), §6.3 | `gh repo view devfrx/daemon --json visibility,licenseInfo` |
| il repository della landing è pubblico | §7.1 | `gh repo view devfrx/daemon-landing --json visibility` |
| `daemon_kit/` e `landing/` sono ignorate da daemon su questa macchina, con `.git/info/exclude` | §7.2, §7.4 | `git check-ignore -v daemon_kit landing/CLAUDE.md` |
| daemon sta sul ramo `repo-audit/20260930-1510` | §6.2 | `git status -sb` |
| il blocco `GEOMETRY` sta nella splash, non nello studio | §5.2, §7.2 | `grep -c 'GEOMETRY-START' daemon_kit/*.html` |
| i file del kit vanno a capo alla Linux | §7.3 | `for f in daemon_kit/*.svg daemon_kit/*.html; do tr -cd '\r' < "$f" \| wc -c; done`: tutti 0 |
| Git converte gli a-capo da solo su questa macchina | §7.3 | `git config --show-origin --get-all core.autocrlf` |
| `themes.css` contiene i colori del marchio; `base.css` ha regole per l'app | §5.4 | `git show "origin/main:gui/src/tokens/themes.css" \| grep -c '#151112'`; `git show "origin/main:gui/src/tokens/base.css" \| grep -n '^body\|focus-visible'` |
| la CI di daemon: Linux e Windows, lo stesso cancello | §6.3 | `git show "origin/main:.github/workflows/quality-gate.yml"` |
| `check-docs.sh` trova i `.md` con `find` e `git check-ignore --stdin` | §7.4 | `git show "origin/main:scripts/check-docs.sh" \| grep -n 'check-ignore'` |
| daemon non ignora una `node_modules/` fuori da `gui/`: le sue righe hanno la `/` davanti | §7.4 | `git check-ignore -v --no-index foo/node_modules/x/README.md`: nessuna uscita |
| ⚠️ **il segno «(col N)» della regola 2 del README, e i «(col N)» di `design/01`, non sono su `main`**: stanno sul ramo dell'audit, dal commit `3d318ec` | §4 | `git show "origin/main:docs/README.md" \| grep -c 'col N'` e `git show "origin/main:docs/design/01-topologia-dei-processi.md" \| grep -c '(col '`: 0; con `origin/repo-audit/20260930-1510` al posto di `origin/main`, più di 0 |
| Astro mette la lingua principale su `/` e le altre sotto il loro prefisso, come `/it/`: lo fa `prefixDefaultLocale`, che vale `false` se non lo si scrive | §2.4, §5.1 | https://docs.astro.build/en/guides/internationalization/ |
| Astro controlla i testi con uno schema, anche in file JSON o YAML | §3.1, §5.1 | https://docs.astro.build/en/guides/content-collections/ |
| le soglie dei Core Web Vitals: LCP 2,5 s, INP 200 ms, CLS 0,1, sul 75° percentile | §6.1 | https://web.dev/articles/vitals, aggiornata il 2024-10-31 |
| l'INP, in laboratorio, c'è solo se qualcuno interagisce con la pagina; il TBT ne è un'approssimazione, non un sostituto | §6.1 | https://web.dev/articles/inp, aggiornata il 2025-09-02 |
| Playwright tiene una foto originale per browser e sistema | §6.3 | https://playwright.dev/docs/test-snapshots |

### 8.2 Verificato il 2026-10-06

Coi comandi, nel diario in archivio (§10): le versioni dei pacchetti, il peso di three.js, il supporto di
`animation-timeline`. Le versioni si riverificano il giorno in cui si scrive il piano.

### 8.3 Dedotto, da verificare nel piano

| Che cosa | Da che cosa è dedotto | Come si verifica |
|---|---|---|
| l'etichetta di ogni figura | i `pub mod` di `crates/kernel/src/lib.rs` e i «(col N)» di `design/01` (§4) | riga per riga, contro il codice e i documenti di `origin/main` |
| i livelli della Fig. 1 | la bozza `b` (§4) | sulla spec del kernel |

### 8.4 Assunto

| Assunto | Se è falso |
|---|---|
| l'audit arriva su `main` col segno «(col N)», nella regola 2 del README e in `design/01`, come sta oggi sul suo ramo | il controllo delle fonti è rosso sulla legenda e sulle etichette — è il suo scopo — e la legenda si decide di nuovo, col proprietario |

**Costo dichiarato:** nel piano, i compiti della legenda e delle etichette vengono dopo l'arrivo dell'audit su `main`. I
primi compiti, il `.gitattributes` e la copia in `brand/`, non ne dipendono.

**Scartata:** leggere il ramo dell'audit finché non arriva su `main`. Romperebbe la §6.2: quel ramo può cambiare o
sparire, e i link ai suoi commit si romperebbero.

---

## 9. Come si riprende

**Dove siamo:** il disegno è finito, il 2026-10-07: le §1–§9 sono approvate, la rilettura è fatta — il verbale è in
[`docs/archivio/2026-10-07-rilettura-disegno-landing.md`](../../archivio/2026-10-07-rilettura-disegno-landing.md) — e il
proprietario l'ha riletto per intero. Il prossimo passo è il piano del primo traguardo.

**I traguardi.** Il piano si scrive un traguardo per volta, come in daemon: ogni piano è corto e si scrive sul codice di
quel momento — la regola 5 di `CLAUDE.md` di daemon, *«un compito scritto prima si legge contro il codice di ADESSO»*.
Il primo traguardo porta lo scheletro e il cancello, prima delle figure; le figure arrivano quando l'orologio e il
cancello esistono. Il perimetro di ciascuno lo fissa il suo piano.

**Costo dichiarato:** più sessioni di piano, una per traguardo.

**Il prossimo passo**, in una sessione nuova:

1. apri la sessione dentro `landing/`; `git fetch --all --prune`, `git status -sb`, e il fast-forward se serve;
2. leggi `CLAUDE.md` e questo file, per intero;
3. le skill: `superpowers:writing-plans`, `anthropic-skills:decision-principles`, `anthropic-skills:dev-communication`;
4. prima di scrivere, rilancia ciò che invecchia: le versioni dei pacchetti (§8.2), e la riga ⚠️ della §8.1 — se
   l'audit è arrivato su `main`;
5. scrivi il piano del primo traguardo in `docs/superpowers/plans/`: il primo compito è il `.gitattributes` (§7.3), il
   secondo la copia in `brand/` (§7.2);
6. quando il piano esiste, il `CLAUDE.md` di questo repository rimanda al piano, non più a questo file; commit e push.

Dopo il piano, una fase per sessione (§7.1): il pre-controllo, poi un compito per sessione.

**Le voci aperte**, ciascuna con chi la chiude:

| Voce | Dove | Chi la chiude |
|---|---|---|
| il formato dei file dei testi | §3.1 | il piano che porta i testi |
| le interazioni con cui si misura l'INP | §6.1 | il piano che porta il controllo della velocità |
| dove si fanno le foto originali delle scene, e quanta differenza si tollera | §6.3 | il piano che porta le foto |
| l'etichetta di ogni figura, e i livelli della Fig. 1 | §4, §8.3 | il piano che porta le figure |
| l'audit arriva su `main` col segno «(col N)» | §8.4 | daemon; i compiti che ne dipendono vengono dopo |
| la riga `landing/` nel `.gitignore` di daemon | §7.4 | una sessione di daemon, dopo l'audit, su `main` |
| dove si pubblica | §7.5 | il proprietario, quando la pagina è pronta |

**Da sapere subito:**

- ⏳ `landing/` è nascosta a daemon solo su questa macchina (§7.4): su ogni altra, prima di lanciare i cancelli di
  daemon con `landing/` presente, la riga `/landing/` va in `.git/info/exclude` di daemon;
- daemon sta sul ramo dell'audit (§8.1): da qui non si tocca, e la pagina legge solo `origin/main` (§6.2);
- fino al `.gitattributes`, su questa macchina Git avvisa *«LF will be replaced by CRLF»* a ogni commit: è atteso
  (§7.3), e nel repository i file restano LF;
- la bozza `d` del pentagramma sta in [`2026-10-07-landing-bozze/`](2026-10-07-landing-bozze/); le bozze `a`, `b`, `c`
  in archivio (§2.1).

La consegna della sessione del mattino, che stava qui, è in archivio, parola per parola:
[`docs/archivio/2026-10-07-consegna-disegno-landing.md`](../../archivio/2026-10-07-consegna-disegno-landing.md).
