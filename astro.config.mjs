// @ts-check
import { defineConfig } from 'astro/config';

// Sito statico, zero JS inutile. Imposta `site` con il dominio reale prima del deploy
// per generare URL assoluti corretti negli OG tag.
export default defineConfig({
  site: 'https://example.com',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});
