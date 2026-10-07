# Landing page di daemon — il disegno

> 🎯 **Che cos'è questo file.** Il disegno della landing page: che cosa si costruisce e come, quanto basta a scriverne il
> piano. Nasce dal brainstorming del 2026-10-06: la richiesta del proprietario, le sue risposte e le bozze stanno nel
> diario, in [`docs/archivio/consegna-brainstorming-landing.md`](../../archivio/consegna-brainstorming-landing.md),
> parola per parola.
>
> 📌 **Dove siamo:** il disegno si scrive una sezione per volta, e ciascuna entra qui solo dopo il sì del proprietario.
> Le domande aperte del brainstorming si fanno nella sezione a cui appartengono, una alla volta.

| § | Sezione | Stato |
|---|---|---|
| 1 | Che cosa si costruisce | ✅ approvata il 2026-10-07 |
| 2 | La pagina | ✅ approvata il 2026-10-07 |
| 3 | Le parole e le fonti | ✅ approvata il 2026-10-07 |
| 4 | Le figure | ✅ approvata il 2026-10-07 |
| 5 | Com'è fatta dentro | ✅ approvata il 2026-10-07 |
| 6 | La porta di qualità | ⏳ da presentare: la CI |
| 7 | Dove vive | ⏳ da presentare: i fine-riga, dove pubblicare, la riga in daemon |
| 8 | Verificato, dedotto, assunto | ⏳ |
| 9 | Come si riprende | ⏳ |

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
| 4 | Architettura | tavola | i livelli che si aprono; il puntino che viaggia sui canali |
| 5 | Meccanismi | tavola | arbitro GPU, giornale e ripresa (la prova da toccare), dati non fidati, le sei invarianti, i test deterministici |
| 6 | Metodo | tavola | prima la spec, poi il codice; gli ADR; la porta di qualità |
| 7 | Stato | tavola | che cosa è costruito, che cosa è deciso, che cosa viene dopo |
| 8 | Chiusura | — | il codice su GitHub; da quale commit di daemon vengono i dati |

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
| la citazione | un pezzo letterale di quel file, in italiano |
| l'etichetta | per un meccanismo: «costruito» oppure «deciso · col N», la convenzione dei diagrammi di daemon (§4) |

Il file inglese ha gli stessi identificatori, né uno in più né uno in meno, e ogni sua frase ha la fonte della frase
italiana. Il formato dei file si sceglie nel piano.

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

L'inglese, poi, lo rilegge un secondo revisore, frase per frase, contro l'italiano: è l'unico controllo che non fa un
programma.

### 3.3 Le fonti, sulla pagina

- ogni frase tecnica porta un segno: lo si tocca e si vede il file da cui viene, con il link su GitHub;
- il link punta al **commit esatto**, non a un ramo: mostra il testo che il controllo ha letto, anche dopo che il
  documento è cambiato;
- in fondo alla pagina c'è il commit di `devfrx/daemon` da cui vengono le frasi e i numeri;
- ogni meccanismo porta la sua etichetta, «costruito» o «deciso · col N».

**Costo dichiarato:** quando una frase cambia nei documenti di daemon, il controllo chiede di aggiornare la pagina.

---

## 4. Le figure

Dieci figure numerate. Ognuna ha un disegno, due o tre frasi semplici, i nomi veri del codice — per esempio
`Untrusted::promote` — e il link all'ADR su GitHub.

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
documenti di daemon (../) ─┐
brand/ ────────────────────┼─→ controllo delle fonti ─→ rosso o verde
testi (en, it) ────────────┘
          └─→ build di Astro ─→ file pronti:  /  (inglese)   /it/  (italiano)

nel browser:   scroll → orologio → numero 0…1 → scena → disegno
```

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
