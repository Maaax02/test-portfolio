// @ts-check
import { defineConfig } from 'astro/config';

// Sito statico, zero JS inutile.
// Deploy su GitHub Pages (project repo): il sito è servito sotto /test-portfolio/.
// `site` + `base` generano URL assoluti e percorsi asset corretti.
// Con un dominio custom togli `base` e aggiorna `site`.
export default defineConfig({
  site: 'https://maaax02.github.io',
  base: '/test-portfolio',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});
