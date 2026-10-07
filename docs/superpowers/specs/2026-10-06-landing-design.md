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
| 3 | Le parole e le fonti | ⏳ da presentare |
| 4 | Le figure | ⏳ |
| 5 | Com'è fatta dentro | ⏳ da presentare: i token |
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
