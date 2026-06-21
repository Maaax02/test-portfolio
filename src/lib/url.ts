// Unisce il base path del sito (es. "/test-portfolio" su GitHub Pages, "/" in dev)
// a un percorso interno, evitando slash doppi o mancanti.
// Usa import.meta.env.BASE_URL così funziona sia in locale sia in produzione.
export function link(path: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base}/${path}`.replace(/\/{2,}/g, '/');
}
