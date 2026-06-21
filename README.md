# Portfolio "Smalto"

Sito portfolio per sviluppatore web freelance a Palermo. Statico, veloce e curato:
costruito con [Astro](https://astro.build), senza backend.

**Identità visiva:** "Smalto" — palette derivata dalla maiolica di Caltagirone
(cobalto smaltato, ocra-oro, verde maiolica su bianco gesso). Tipografia
*Bricolage Grotesque* (display) + *Schibsted Grotesk* (testo) + *Space Mono* (dati/label).
Signature element: il "riflesso sullo smalto" nell'hero.

---

## Sviluppo

Serve [Node.js](https://nodejs.org) 18+.

```bash
npm install      # installa le dipendenze
npm run dev      # avvia il server di sviluppo su http://localhost:4321
```

Altri comandi:

```bash
npm run build    # genera il sito statico in dist/
npm run preview  # serve in locale la build di dist/
```

---

## Prima del deploy: completa i tuoi dati

Apri **`src/data/site.ts`** e compila i campi segnati con `TODO`:

- `nome` — il tuo nome o brand
- `whatsapp` / `telefonoVisibile` — contatti diretti (lascia `whatsapp` vuoto per nasconderlo)
- `formspreeEndpoint` — l'endpoint del form (vedi sotto)
- `social` — link opzionali (vuoti = nascosti)
- `url` — il dominio reale (serve agli OG tag)

L'email è già impostata su `massiown@gmail.com`.

### Form di contatto (Formspree)

1. Crea un account gratuito su [formspree.io](https://formspree.io) e un nuovo form.
2. Copia l'endpoint (es. `https://formspree.io/f/abcdwxyz`).
3. Incollalo in `formspreeEndpoint` dentro `src/data/site.ts`.

Finché l'endpoint non è configurato, il form mostra un messaggio che invita a usare
l'email — non invia richieste a vuoto. La validazione (nome, email, messaggio) funziona
comunque lato client con messaggi chiari.

---

## Aggiungere un caso studio

Un caso studio = **un file markdown** in `src/content/projects/`. Non serve toccare il
layout. Copia un file esistente (es. `bb-centro-storico.md`) e modifica il frontmatter:

```markdown
---
titolo: "Titolo del lavoro"
cliente: "Nome cliente"      # per i concept usa una descrizione + concept: true
concept: false               # true = mostra l'etichetta "Progetto dimostrativo"
settore: "Ospitalità"
sintesi: "Una frase che vende il risultato."
problema: "Qual era il problema reale."
soluzione: "Cosa hai costruito e perché."
risultati:
  - "Risultato concreto 1"
  - "Risultato concreto 2"
tecnologie:
  - "Astro"
tinta: "cobalto"             # cobalto | verde | ocra (colore della card)
ordine: 1                    # ordine di apparizione (numero più basso = prima)
---

Testo libero in markdown sotto al frontmatter (opzionale).
```

Lo schema dei campi è definito e validato in `src/content/config.ts`: se sbagli un
campo, `npm run dev` te lo segnala.

**Quando avrai clienti veri:** imposta `concept: false` e sostituisci il copy. L'etichetta
"Progetto dimostrativo" sparisce da sola.

---

## Deploy

Il sito è completamente statico (output in `dist/`). Funziona ovunque.

- **Netlify / Vercel:** collega il repo. Build command `npm run build`, output `dist`.
  Su Vercel il framework Astro viene rilevato in automatico.
- **GitHub Pages:** esegui `npm run build` e pubblica `dist/`, oppure usa la
  [GitHub Action ufficiale di Astro](https://docs.astro.build/en/guides/deploy/github/).
  Ricordati di impostare `site` (e `base`, se il repo non è alla root) in
  `astro.config.mjs`.

Prima di pubblicare imposta `site` in `astro.config.mjs` con il dominio reale, così gli
URL canonici e gli OG tag sono corretti.

---

## Struttura

```
src/
├─ content/projects/   # casi studio (un file markdown ciascuno)
├─ content/config.ts   # schema dei casi studio
├─ data/site.ts        # i tuoi contatti e meta — modifica qui
├─ layouts/Base.astro  # <head>, meta/OG, font, skip-link
├─ styles/             # tokens.css (palette/scale) + global.css
├─ components/         # Header, Hero, Servizi, Lavori, Approccio, Contatti, Footer
├─ scripts/glaze.ts    # riflesso hero + reveal allo scroll
└─ pages/              # index.astro + lavori/[slug].astro
```

## Accessibilità e performance

- Responsive fino a mobile, focus da tastiera visibile, skip-link.
- `prefers-reduced-motion` rispettato: tutte le animazioni si fermano.
- Contrasto colore AA, output statico per Lighthouse alto.
- Font self-hosted (nessuna richiesta a Google Fonts).
