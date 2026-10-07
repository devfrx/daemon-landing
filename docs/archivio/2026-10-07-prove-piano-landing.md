# Le prove per scrivere i compiti del piano del traguardo 1 — il verbale

> 🗄️ **Che cos'è questo file.** Il verbale delle prove fatte il 2026-10-07, nel pomeriggio, prima di scrivere la §5 del
> [piano del traguardo 1](../superpowers/plans/2026-10-07-landing-traguardo-1.md): il proprietario ha scelto di provare
> il codice prima di scriverlo nel piano (risposta: A). Le prove sono girate nello scratchpad della sessione, che poi è
> stato cancellato. Qui c'è la storia; il piano porta ciò che ne è venuto.

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
