# Landing page di daemon — consegna del brainstorming

> 🎯 **Che cos'è questo file.** Il diario del brainstorming del 2026-10-06 e la consegna per la sessione che scrive il
> disegno. ⛔ **Il disegno si scrive QUI, a questo stesso percorso**, nella prossima sessione: questo diario allora va in
> archivio parola per parola, come vuole la regola di `CLAUDE.md` di daemon sui verbali.
>
> 📌 **Dove siamo:** brainstorming **chiuso**, le sei parti approvate dal proprietario. **Prossimo passo:** scrivere il
> disegno, in una sessione nuova — la sezione *«Come si riprende»*, in fondo.

---

## 1. La richiesta del proprietario, parola per parola

- «contenuta come repo a parte nella root di questa repo, vorrei creare una landing page per daemon, che non inventi nulla
  e non abbia typo cringe. Che sia fatta in modo creativo moderno e professionale. Vorrei sfruttare il motion design
  (/anthropic-skills:motion-craft se serve) e scroll animation, anche il 3d se necessario o parallasse. Utilizza
  /anthropic-skills:frontend-craft e /anthropic-skills:decision-principles e tutte le mie skill che possono essere utili
  per crearla. Deve essere qualcosa che impressioni anche gli sviluppatori piu esperti in termini di design. Dobbiamo dare
  il massimo possibile.»
- «tutto il branding lo trovi direttamente in daemon_kit»
- «la landing deve contenere anche l'illustrazione dell'architettura del progetto e speigazioni tecniche.»

**Classificazione:** progetto nuovo, quindi il percorso architetturale di `superpowers:brainstorming` — domande una alla
volta, approcci, disegno a sezioni, disegno scritto, piano. Una fase per sessione, come vuole `CLAUDE.md` di daemon.

---

## 2. Le risposte del proprietario

| # | Domanda | Risposta, parola per parola | Che cosa decide |
|---|---|---|---|
| 1 | La lingua della pagina | «italiano + inglese col file» | due lingue; il testo sta in un file per lingua |
| 2 | Le bozze in chat | «si» | bozze con `show_widget`, provate prima nel browser |
| 3 | Lo stile: A «L'occhio» o B «Tavola tecnica» | «misto tra a e b» | la pagina cambia modo a metà — §3 |
| 4 | Parte 1, la pagina | «Sì, va bene» | §3 |
| 5 | Parte 2, verità e refusi | «A · Fonti controllate» | §4 |
| 6 | Parte 3, le figure | «A · Tutte e dieci» | §5 |
| 7 | Parte 4, gli strumenti | «A · Orologio nostro» | §6 |
| 8 | Parte 5, la porta di qualità | «Sì, va bene» | §7 |
| 9 | Parte 6a, il repo su GitHub | «A · Sì, pubblico» | `devfrx/daemon-landing`, pubblico — §8 |
| 10 | Parte 6b, i file del brand | «A · Copia nella landing» | una cartella `brand/` qui — §8 |
| 11 | Parte 6c, la lettura d'apertura | «A · Solo i suoi documenti» | il compendio di daemon qui non si legge — §8 |

---

## 3. Parte 1 — la pagina, approvata

**Il misto di A e B:** la pagina si apre come A, il **racconto** — i semi all'angolo aureo diventano un vortice, poi una
luna, poi l'occhio, che diventa la o di «daemon». Poi l'occhio si ferma, gli compaiono i cerchi di costruzione e la griglia:
è la **Fig. 0**, e da lì la pagina è B, la **tavola tecnica** con le figure numerate. Nell'architettura stanno tutte e due:
la pila dei livelli che si apre (B) e il puntino che viaggia sui canali (A).

| # | Sezione | Modo | Che cosa c'è |
|---|---|---|---|
| 1 | Apertura | racconto | i semi diventano l'occhio, poi la o di «daemon» |
| 2 | Fig. 0 · Il marchio | il passaggio | l'occhio si ferma, arrivano i cerchi e la griglia |
| 3 | Cos'è | tavola | quattro pilastri su un kernel comune; il limite vero: una sola GPU da 16 GB |
| 4 | Architettura | tavola | i livelli che si aprono; il puntino che viaggia sui canali |
| 5 | Meccanismi | tavola | arbitro GPU, giornale e ripresa (la prova da toccare), dati non fidati, le sei invarianti, i test deterministici |
| 6 | Metodo | tavola | prima la spec, poi il codice; gli ADR; la porta di qualità |
| 7 | Stato | tavola | che cosa è costruito, che cosa è deciso, che cosa viene dopo |
| 8 | Chiusura | — | il codice su GitHub; da quale commit del repo vengono i dati |

**Tre regole per tutta la pagina:**

1. due temi, chiaro e scuro: segue il sistema, e c'è un interruttore;
2. lo scroll resta quello del browser, niente scroll «rubato»: le animazioni seguono lo scroll, non lo comandano;
3. con *riduci il movimento* la pagina è ferma, ma completa.

---

## 4. Parte 2 — ogni frase vera, nessun refuso: approvata (A)

| | La regola |
|---|---|
| il testo | ogni frase sta in un file per lingua, italiano e inglese |
| la fonte | accanto a ogni frase: il file del repo di daemon e una citazione letterale, in italiano |
| il controllo | un programma verifica che la citazione esista ancora nel file: **rosso** se la fonte cambia. Così la pagina non mente in silenzio |
| i numeri | non si scrivono a mano: li produce un comando, e in fondo alla pagina c'è il commit di `devfrx/daemon` da cui vengono — la regola di `CLAUDE.md` di daemon, *«Un numero misurato non si scrive: si scrive il COMANDO che lo produce»* |
| le fonti visibili | ogni frase tecnica porta un segno: lo si tocca e si vede il file da cui viene, col link su GitHub |
| costruito o deciso | ogni meccanismo porta l'etichetta «costruito» o «deciso · col N», la convenzione dei diagrammi di daemon |
| parole vietate | «open source» (il repo di daemon non ha licenza) e «scarica» (non c'è niente da scaricare) |
| i refusi | controllo ortografico in italiano e in inglese, più un controllo della tipografia: apostrofi, spazi, trattini |
| l'inglese | lo rilegge un secondo revisore, frase per frase, contro l'italiano |

**Costo dichiarato:** quando una frase cambia nei documenti di daemon, il controllo chiede di aggiornare la pagina.

---

## 5. Parte 3 — le figure: approvata (A, tutte e dieci)

Ogni figura ha un disegno, due o tre frasi semplici, i nomi veri del codice (per esempio `Untrusted::promote`) e il link
all'ADR su GitHub.

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
| 9 · Lo stack | Rust `no_std`, cinque crate, Vue 3, Electron, Python, redb | — |

**Costo dichiarato:** la pagina è lunga, circa 15–20 schermate, e vuole un indice fisso in alto.

⚠️ **Dedotto, non verificato per figura:** quale etichetta, «costruito» o «deciso · col N», vada su ogni figura. Oggi è
dedotto dalla lista dei `pub mod` di `crates/kernel/src/lib.rs` e dai `(col N)` di `docs/design/01-topologia-dei-processi.md`;
si verifica riga per riga contro il codice nel piano.

---

## 6. Parte 4 — gli strumenti: approvata (A, l'orologio nostro)

| | La scelta | Perché |
|---|---|---|
| lo strumento | **Astro**, sito statico | genera HTML statico, gestisce le due lingue, controlla i testi con uno schema; usa Vite come la GUI |
| le animazioni | **nessuna libreria**: un orologio nostro — lo scroll diventa un numero da 0 a 1, ogni scena è una funzione pura di quel numero | uguale su tutti i browser, Firefox compreso; ogni fotogramma si prova in un test; la stessa logica della splash |
| il 3D | **niente motore 3D**: la profondità con un canvas 2D a prospettiva calcolata, come la splash, e il 3D del CSS per la pila dei livelli | il brand è piatto; il motore costerebbe peso per nulla — §10 per la misura |
| l'apertura | la **stessa geometria** della splash, presa dal suo blocco `GEOMETRY` | un marchio solo: il blocco dice di sé *«so there is one geometry»* |
| i caratteri | Geist e Barlow, ospitati dalla pagina, gli stessi pacchetti della GUI | nessuna richiesta a terzi |
| la rete | **nessuna richiesta a siti terzi**: niente Google Fonts, niente statistiche | un test lo controlla (§7) |
| il suono | nessuno | una pagina non parte con l'audio |

**Costo dichiarato:** qualche centinaio di righe di codice nostro al posto di una libreria.

**Scartata, B:** GSAP. Gratuito ma con una licenza propria, non open source; una dipendenza in più; due modi di animare
nella stessa pagina.

---

## 7. Parte 5 — la porta di qualità: approvata

Un comando solo, `npm run gate`, come `scripts/gate.sh` in daemon. Diventa rosso se:

| Controllo | Che cosa guarda |
|---|---|
| fonti | ogni citazione esiste ancora nel suo file; ogni nome del codice esiste ancora in `crates/` |
| parole | refusi in italiano e in inglese; apostrofi e spazi giusti; nessuna parola vietata |
| scene | ogni scena fotografata in punti fissi dello scroll: chiaro e scuro, computer e telefono |
| accessibilità | zero errori WCAG 2.2 AA; tutto si usa da tastiera; il movimento ridotto funziona |
| rete | nessuna richiesta a siti terzi |
| velocità | le soglie «buone» dei Core Web Vitals: contenuto principale entro 2,5 s, niente salti della pagina |
| marchio | il marchio disegnato è identico a quello del kit |

Ogni controllo si prova **nei due sensi**: rosso su un difetto messo apposta, verde sulla pagina giusta — la regola di
`CLAUDE.md` di daemon.

**Costo dichiarato:** le foto delle scene si rifanno apposta ogni volta che cambia il design.

---

## 8. Parte 6 — dove vive, e come si lavora: approvata

- la cartella `landing/` nella radice di daemon, con il suo repo git, e il repo **`devfrx/daemon-landing`, pubblico**
  (risposta 9);
- in daemon cambia **una riga sola**: `landing/` entra nel `.gitignore`, con un commento che dice che cos'è. Serve davvero:
  `scripts/check-docs.sh` legge tutti i `.md` sotto la radice che git non ignora (`find . -name '*.md'` e poi
  `git check-ignore --stdin`), quindi leggerebbe anche quelli della landing, librerie comprese. ⏳ **Oggi la riga sta solo
  in `.git/info/exclude` di questa macchina** — §12;
- il compendio di daemon **non si tocca**: la landing non è una decisione del kernel e non cambia il prossimo passo di
  daemon; e il compendio ha 280 byte di margine sul suo tetto (`ceiling=100352` in `scripts/check-docs.sh` contro
  `wc -c docs/COMPENDIO.md`, 100072, il 2026-10-06);
- i file del brand che la pagina usa si **copiano qui**, in `brand/`, con una nota da dove vengono: i SVG del marchio e lo
  studio del marchio (risposta 10). `daemon_kit/` resta com'è;
- il `CLAUDE.md` di questo repo dice che qui si leggono i documenti della landing, **non il compendio di daemon**; le fonti
  di daemon si aprono solo quando una frase le cita (risposta 11). Le altre regole di daemon valgono anche qui;
- le prossime sessioni, una fase per volta: il disegno, il piano, il pre-controllo, poi un compito per sessione;
- dove pubblicare la pagina si decide quando è pronta.

---

## 9. Le bozze mostrate al proprietario

Nella cartella [`2026-10-06-landing-bozze/`](2026-10-06-landing-bozze/), così come sono state mostrate con `show_widget`.
Provate prima nel browser (testo che esce, sovrapposizioni, stati dello slider).

| File | Che cosa mostra | Esito |
|---|---|---|
| `a.html` | A · L'occhio: l'apertura guidata da uno slider al posto dello scroll; l'occhio segue il puntatore; la Fig. 2 col puntino che viaggia | entra nel misto |
| `b.html` | B · Tavola tecnica: la Fig. 0 costruita dai cerchi; la Fig. 3 coi quattro livelli che si aprono | entra nel misto |
| `c.html` | il passaggio: l'occhio vivo del racconto diventa la Fig. 0 della tavola | il misto approvato |

⚠️ **Sono bozze, non il disegno:** caricano Geist e Barlow da Google Fonts, cosa che la pagina vera non farà (§6), e i
contenuti dei livelli nella Fig. 3 di `b.html` sono un'approssimazione da verificare sulla spec del kernel.

---

## 10. Che cosa è verificato, dedotto, assunto

**Verificato coi comandi, il 2026-10-06:**

| Fatto | Comando |
|---|---|
| `devfrx/daemon` è pubblico e **senza licenza** | `gh repo view devfrx/daemon --json visibility,licenseInfo` |
| nella radice di daemon non ci sono `README.md` né `LICENSE` | `ls` |
| `daemon_kit/` non è tracciato né ignorato | `git status -sb`; `git check-ignore -v` |
| `check-docs.sh` legge ogni `.md` non ignorato sotto la radice | la riga `find . -name '*.md'` dello script |
| la GUI usa Vue 3.5.42, Vite 8.3.0, TypeScript 5.9.3, `@fontsource-variable/geist` 5.3.0, `@fontsource/barlow` 5.3.0, Playwright 1.63.0, axe-core 4.13.0 | `gui/package.json` |
| Astro 7.3.6 (MIT); GSAP 3.15.0 con licenza *Standard 'no charge'*; Motion 14.0.0 (MIT); three 0.186.1 (MIT); cspell 10.3.6 (MIT); `@cspell/dict-it-it` 3.1.7 (**GPL-3.0-or-later**, uno strumento di sviluppo che non entra nella pagina); `@cspell/dict-en_us` 4.4.40 (MIT) | `npm view <pacchetto> version license` |
| `animation-timeline` c'è in Chrome 115, Edge e Safari 26; in Firefox solo in anteprima | i dati di compatibilità di MDN, `css/properties/animation-timeline.json` |
| three r186 completo, minificato: `three.core.min.js` 104 092 byte e `three.module.min.js` 89 831 byte compressi con `gzip -9`, e il secondo importa il primo | `curl` da jsDelivr, `gzip -9 -c \| wc -c` |
| il kernel è `#![no_std]` e `#![forbid(unsafe_code)]`; i suoi moduli sono la lista dei `pub mod` | `crates/kernel/src/lib.rs` |
| il marchio: tre cerchi r, r/φ, r/φ², ciascuno tangente dentro il precedente; l'occhio guarda a −45°; semi a 137,5°; scuro `#151112` · `#ECE6DA` · `#BF5567`, chiaro `#F3EEE6` · `#1B1718` · `#7A1F2E`; Geist e Barlow | `daemon_kit/daemon - studio del marchio.html` |
| la splash dura 10,3 s: seme → rete in profondità → vortice → anello → luna → pentagramma col ghigno (≈ 4,1 s) → pannelli → la mano → «daemon» con «AGENTIC OS» → la Home | `daemon_kit/daemon — splash.html`, cursore del tempo |
| sulla stessa macchina un'altra sessione lavora all'audit di daemon, in un worktree bloccato | `git worktree list` |

**Corretto in chat, apertamente:** il peso di three.js era stato detto «circa 150 KB» a memoria; misurato, la build
completa pesa circa 194 KB compressi. Con un bundler che toglie le parti non usate peserebbe meno: **non misurato**. La
scelta non cambia.

**Dedotto, da verificare nel piano:** le etichette costruito/deciso per figura (§5); che i `.md` di `node_modules` della
landing farebbero rosso `check-docs.sh` (la logica dello script lo dice; non è stato provato).

**Riferimenti guardati per lo stato dell'arte:** `tigerbeetle.com` — un indice per pilastri in alto, e ogni affermazione
con una dimostrazione da toccare; `oxide.computer` — l'estetica da documento tecnico, con etichette «FIG. 1».

---

## 11. Le domande aperte per il disegno

Si portano al proprietario **una alla volta**, in forma A/B, col costo e il consiglio.

| | La domanda | Di chi è | Il consiglio di oggi |
|---|---|---|---|
| 1 | Il **pentagramma col ghigno** della splash entra nell'apertura? | del proprietario: è gusto | da proporre con una bozza |
| 2 | Quanto è lunga l'apertura, e c'è un «salta»? | del disegno | al massimo due schermate, col «salta» |
| 3 | Le scene fisse sul telefono | del disegno | versioni più corte, stesse figure |
| 4 | I token: letti al momento della build da `../gui/src/tokens`, o copiati con un controllo di divergenza? | del disegno | letti: una fonte sola |
| 5 | La CI su GitHub ha bisogno di daemon accanto: un secondo checkout di `devfrx/daemon` | del disegno | sì, è pubblico |
| 6 | Il `.gitattributes` del repo, per i fine-riga | del disegno | da decidere prima del primo codice |
| 7 | Dove pubblicare la pagina | del proprietario: è un'azione verso l'esterno | quando è pronta |
| 8 | Quando e su quale ramo la riga del `.gitignore` di daemon | del proprietario, con lo stato dell'audit | dopo l'audit |

---

## 12. Come si riprende

**La prossima sessione scrive il disegno.** Niente codice: prima il disegno approvato, poi il piano.

1. Apri la sessione **dentro `landing/`**, così si carica il `CLAUDE.md` di questo repo.
2. `git fetch --all --prune`, `git status -sb`, e il fast-forward se serve.
3. Leggi `CLAUDE.md` e **questo file**, per intero. Il compendio di daemon no (risposta 11).
4. Le skill: `superpowers:brainstorming` (la parte «dopo il disegno»: scriverlo, rileggerlo, farlo rivedere),
   `anthropic-skills:decision-principles`, `anthropic-skills:frontend-craft`, `anthropic-skills:motion-craft`.
5. Scrivi il disegno **a questo percorso**: il merito delle sei parti approvate **invariato**, sezione per sezione; le
   domande della §11 al proprietario una alla volta, ciascuna nella sezione a cui appartiene; il diario di oggi in
   `docs/archivio/`, parola per parola.
6. Rileggi il disegno da solo (segnaposto, contraddizioni, ambiguità), poi chiedi al proprietario di rileggerlo.
7. Commit e push. Il piano, con `superpowers:writing-plans`, si scrive nella sessione dopo.

⏳ **Fatto su questa macchina e NON committato:** `/landing/` sta in `.git/info/exclude` di daemon. Su un'altra macchina,
prima di lanciare i cancelli di daemon con `landing/` presente, va aggiunta la stessa riga, finché la riga vera non entra
nel `.gitignore` di daemon (§11, domanda 8).
