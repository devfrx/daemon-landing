# Landing page di daemon — la consegna del mattino del 2026-10-07

> 🎯 **Che cos'è questo file.** La consegna con cui la sessione del mattino del 2026-10-07 ha chiuso la §9 del
> [disegno](../superpowers/specs/2026-10-06-landing-design.md), presa dal commit `1a04f95`, parola per parola. La
> sessione dopo, lo stesso giorno, l'ha sostituita con la §9 definitiva: la regola di `CLAUDE.md` di daemon vuole che un
> documento vivo tenga una sola chiusura, l'ultima, e che la precedente vada in archivio. I link relativi qui sotto sono
> quelli del disegno, che sta in `docs/superpowers/specs/`.

---

## 9. Come si riprende

> ⏳ **La consegna della sessione del 2026-10-07.** Il proprietario ha rimandato alla prossima sessione la §8 e la §9
> definitiva, cioè la consegna per la sessione che scrive il piano. Oggi questa sezione è solo la consegna; quella
> definitiva la sostituisce quando il disegno è finito.

**Dove siamo:** le §1–§7 sono approvate e scritte, e con loro le risposte alle otto domande del brainstorming (la §11 del
diario in archivio) più una nuova, la lingua all'indirizzo principale (§2.4). `main` è allineato a GitHub, il working
tree è pulito.

**Il prossimo passo:**

1. apri la sessione dentro `landing/`; `git fetch --all --prune`, `git status -sb`, e il fast-forward se serve;
2. leggi `CLAUDE.md` e questo file, per intero;
3. le skill: `superpowers:brainstorming` (la parte «dopo il disegno»), `anthropic-skills:decision-principles`,
   `anthropic-skills:dev-communication`;
4. presenta al proprietario la §8 e la §9 definitiva — le bozze sono qui sotto — e scrivile dopo il sì;
5. rileggi da solo il disegno intero con la lista di `superpowers:brainstorming` — segnaposto, contraddizioni,
   ambiguità, ambito — partendo dai due punti già trovati qui sotto;
6. chiedi al proprietario di rileggere il disegno intero; commit e push;
7. il piano, con `superpowers:writing-plans`, nella sessione dopo.

**La bozza della §8**, mostrata al proprietario e non ancora approvata. Verificato il 2026-10-07; i comandi si
rieseguono, dalla radice di daemon, prima di scriverla:

| Fatto | Comando |
|---|---|
| `daemon_kit/` e `landing/` sono ignorate da daemon su questa macchina, con `.git/info/exclude` | `git check-ignore -v daemon_kit landing/CLAUDE.md` |
| daemon sta sul ramo `repo-audit/20260930-1510` | `git status -sb` |
| il blocco `GEOMETRY` sta nella splash, non nello studio | `grep -c 'GEOMETRY-START' daemon_kit/*.html` |
| i file del kit vanno a capo alla Linux | `for f in daemon_kit/*.svg daemon_kit/*.html; do tr -cd '\r' < "$f" \| wc -c; done`: tutti 0 |
| Git converte gli a-capo da solo su questa macchina | `git config --show-origin --get-all core.autocrlf` |
| `themes.css` contiene i colori del marchio; `base.css` ha regole per l'app | `grep -c '#151112' gui/src/tokens/themes.css`; `grep -n '^body\|focus-visible' gui/src/tokens/base.css` |
| «(col N)»: N è il sotto-progetto della roadmap che costruisce il pezzo | `grep -n 'col N' docs/README.md` |
| la CI di daemon: Linux e Windows, lo stesso cancello | `MSYS_NO_PATHCONV=1 git show "origin/main:.github/workflows/quality-gate.yml"` |
| `check-docs.sh` trova i `.md` con `find` e `git check-ignore --stdin` | `MSYS_NO_PATHCONV=1 git show "origin/main:scripts/check-docs.sh" \| grep -n 'check-ignore'` |
| le soglie dei Core Web Vitals: LCP 2,5 s, INP 200 ms, CLS 0,1, sul 75° percentile | https://web.dev/articles/vitals, aggiornata il 2024-10-31 |
| Playwright tiene una foto originale per browser e sistema | https://playwright.dev/docs/test-snapshots |

Verificato il 2026-10-06, coi comandi, nel diario in archivio (§10): le versioni dei pacchetti, il peso di three.js, il
supporto di `animation-timeline`; le versioni si riverificano il giorno in cui si scrive il piano. **Dedotto**, da
verificare nel piano: l'etichetta di ogni figura e i livelli della Fig. 1 (§4); che `check-docs.sh` leggerebbe anche i
`.md` delle librerie della landing (§7.4).

**La bozza della §9 definitiva:** il prossimo passo è il piano, con `superpowers:writing-plans`, in una sessione nuova;
il suo primo compito è il `.gitattributes` (§7.3), il secondo la copia in `brand/` (§7.2); quando il piano esiste, il
`CLAUDE.md` di questo repository rimanda al piano; su ogni altra macchina, la riga in `.git/info/exclude` di daemon
(§7.4).

**Già trovato per la rilettura:**

- i rimandi alla §8 — in §5.1, §6.1, §6.3 e §7.4 — puntano a una sezione che ancora non c'è;
- il percorso della §5.3 scrive «documenti di daemon (../)», mentre la §6.2 dice che si leggono a `origin/main` e non
  dalla cartella di lavoro: va allineato, col richiamo datato.

**Da sapere subito:**

- ⏳ `/landing/` è nascosta a daemon solo su questa macchina (§7.4);
- daemon sta sul ramo dell'audit, con il worktree di un'altra sessione: da qui non si tocca;
- la bozza `d` del pentagramma sta in [`2026-10-07-landing-bozze/`](2026-10-07-landing-bozze/).
