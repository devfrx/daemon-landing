# Landing page di daemon — la rilettura del disegno, 2026-10-07

> 🎯 **Che cos'è questo file.** Il verbale della rilettura del
> [disegno](../superpowers/specs/2026-10-06-landing-design.md), fatta il 2026-10-07 dopo la §8: che cosa diceva il testo
> prima, perché è cambiato, che cosa ha risposto il proprietario. Il disegno porta solo ciò che è vero adesso, con un
> richiamo di una riga che rimanda qui: è la regola di `CLAUDE.md` di daemon sui verbali.

---

## 1. Come è andata

La rilettura l'ha fatta l'agente da solo, con la lista di `superpowers:brainstorming`: segnaposto, contraddizioni,
ambiguità, ambito. Partiva dai due punti trovati nella sessione del mattino:

- i rimandi alla §8, in §5.1, §6.1, §6.3 e §7.4, puntavano a una sezione che non c'era. **Chiuso da solo** scrivendo la
  §8: ognuno ora trova la sua riga — il peso di three.js nella §8.2, i Core Web Vitals, Playwright e le librerie nella
  §8.1;
- il percorso della §5.3 contro la §6.2: è la correzione 2.1 qui sotto.

Le altre sei correzioni le ha trovate la rilettura. Il proprietario le ha viste tutte e sette in chat e ha risposto
**A**: correggerle tutte così, ciascuna col suo richiamo.

---

## 2. Le correzioni, col testo di prima

### 2.1 Il percorso — §5.3

Prima, le prime tre righe dello schema:

```
documenti di daemon (../) ─┐
brand/ ────────────────────┼─→ controllo delle fonti ─→ rosso o verde
testi (en, it) ────────────┘
```

Perché: la §6.2 dice che la pagina legge daemon a `origin/main`, non dalla sua cartella di lavoro.

### 2.2 Dove stanno le figure — §2

Prima, tre righe della tabella della pagina:

```
| 4 | Architettura | tavola | i livelli che si aprono; il puntino che viaggia sui canali |
| 5 | Meccanismi | tavola | arbitro GPU, giornale e ripresa (la prova da toccare), dati non fidati, le sei invarianti, i test deterministici |
| 6 | Metodo | tavola | prima la spec, poi il codice; gli ADR; la porta di qualità |
```

Perché: la tabella è nata nella parte 1 del brainstorming, prima delle figure della parte 3, e non dava un posto al
gateway (Fig. 7) né allo stack (Fig. 9). Ora le figure stanno nell'ordine dei loro numeri. L'unica scelta è la Fig. 9
all'inizio di «Metodo»: lo stack non è un meccanismo, e dice con che cosa è fatto daemon prima di come ci si lavora.

### 2.3 La Fig. 0 — §4

Prima:

```
Dieci figure numerate. Ognuna ha un disegno, due o tre frasi semplici, i nomi veri del codice — per esempio
`Untrusted::promote` — e il link all'ADR su GitHub.
```

Perché: la Fig. 0 è il marchio, e non ha nomi del codice né un ADR. Nessun file di `docs/adr/` su `origin/main` ha nel
nome il marchio, il logo o la splash:
`git ls-tree --name-only origin/main docs/adr/ | grep -i 'marchi\|brand\|logo\|splash'`, dalla radice di daemon, non
scrive niente.

### 2.4 La lingua delle citazioni — §3.1

Prima:

```
| la citazione | un pezzo letterale di quel file, in italiano |
```

Perché: le frasi del marchio, come «AGENTIC OS», vengono da `brand/` e sono in inglese.

### 2.5 L'accessibilità — §6.1

Prima:

```
| accessibilità | zero errori WCAG 2.2 AA; tutto si usa da tastiera; il movimento ridotto funziona |
```

Perché: si poteva leggere come «la pagina è conforme alle WCAG 2.2 AA», ma un programma prova solo le regole che sa
controllare. Il cancello prova quelle, la tastiera e il movimento ridotto; il resto lo vede chi rilegge.

### 2.6 L'INP in laboratorio — §6.1 e §8.1

Prima, la riga della velocità finiva così:

```
qui si misurano in laboratorio, sulla pagina costruita e sempre con lo stesso profilo: una misura ripetibile, non quella dei visitatori |
```

Perché: l'INP misura come la pagina risponde a chi interagisce, quindi in laboratorio c'è solo se qualcuno interagisce
apposta. Per web.dev il TBT può farne le veci come approssimazione, ma non lo sostituisce:
https://web.dev/articles/inp, aggiornata il 2025-09-02. La §8.1 ha guadagnato la riga di questa fonte.

### 2.7 Il secondo revisore — §3.2

Prima:

```
L'inglese, poi, lo rilegge un secondo revisore, frase per frase, contro l'italiano: è l'unico controllo che non fa un
programma.
```

Perché: non diceva chi. La proposta, accettata con la risposta A: un subagente nuovo, che non ha scritto la traduzione;
la rilettura finale del proprietario resta (§1).
