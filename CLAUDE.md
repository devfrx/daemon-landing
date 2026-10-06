# Istruzioni per l'agente — la landing page di daemon

Questo repository è la landing page di daemon: un progetto a parte, `devfrx/daemon-landing`, che vive nella cartella
`landing/` della radice di `devfrx/daemon`. Le frasi della pagina vengono dai documenti di daemon, che stanno nella
cartella sopra.

Il `CLAUDE.md` di daemon, nella cartella sopra, si carica anche qui, e le sue regole valgono anche qui — **tranne la
lettura d'apertura**, che per questo repository è quella qui sotto (decisione 6c del proprietario, 2026-10-06).

## ⛔ Prima cosa, e unica lettura obbligatoria

1. `git fetch --all --prune`, poi `git status -sb`: se il ramo è indietro e l'albero è pulito, `git merge --ff-only`.
2. Leggi **questo file** e il **documento in corso**, per intero: oggi è
   [`docs/superpowers/specs/2026-10-06-landing-design.md`](docs/superpowers/specs/2026-10-06-landing-design.md), e il
   punto da cui si riparte è la sua sezione *«Come si riprende»*.
3. ⛔ **Il compendio di daemon qui NON si legge.** Le fonti di daemon si aprono solo quando una frase della pagina le
   cita, una alla volta.

## Le regole proprie di questo repository

| Regola | |
|---|---|
| **la pagina non inventa nulla** | ogni frase ha la sua fonte nei documenti di daemon, controllata da un programma — la parte 2 del documento in corso |
| **parole vietate** | «open source», perché il repo di daemon non ha una licenza; «scarica», perché non c'è niente da scaricare |
| **nessun codice prima del piano** | il disegno si approva, poi si scrive il piano, poi si costruisce |
