import { defineCollection, z } from 'astro:content';

// Un case study = un file markdown in src/content/projects/.
// Per aggiungere un lavoro reale, copia un file esistente e cambia i campi:
// il layout legge tutto da qui, non serve toccare i componenti.
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    titolo: z.string(),
    // Nome cliente. Per i concept dimostrativi lascia `concept: true`,
    // così l'etichetta "Progetto dimostrativo" resta visibile e onesta.
    cliente: z.string(),
    concept: z.boolean().default(false),
    settore: z.string(),
    sintesi: z.string(),
    problema: z.string(),
    soluzione: z.string(),
    risultati: z.array(z.string()).default([]),
    tecnologie: z.array(z.string()).default([]),
    // Palette della card: chiave dei colori smalto disponibili.
    tinta: z.enum(['cobalto', 'verde', 'ocra']).default('cobalto'),
    ordine: z.number().default(99),
  }),
});

export const collections = { projects };
