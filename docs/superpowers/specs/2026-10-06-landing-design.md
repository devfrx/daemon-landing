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
| 2 | La pagina | ⏳ da presentare: la durata dell'apertura, il pentagramma, il telefono |
| 3 | Le parole e le fonti | ⏳ |
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
