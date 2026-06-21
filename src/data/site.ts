// ============================================================
// Dati globali del sito — modifica QUI i tuoi contatti.
// I valori segnati con TODO vanno completati prima del deploy.
// ============================================================

export const site = {
  // TODO: il tuo nome o brand
  nome: 'Studio Smalto',
  ruolo: 'Sviluppatore web freelance · Palermo',

  // Email già impostata
  email: 'massiown@gmail.com',

  // TODO: numero per WhatsApp/telefono in formato internazionale, senza spazi né "+"
  // Esempio: 393331234567. Lascia stringa vuota '' per nascondere il pulsante.
  whatsapp: '',
  telefonoVisibile: '+39 333 123 4567', // TODO: come appare a schermo

  // TODO: incolla qui l'endpoint del tuo form Formspree (https://formspree.io/f/XXXX)
  formspreeEndpoint: 'https://formspree.io/f/your-id',

  // TODO opzionale: link social (lascia '' per nasconderli)
  social: {
    github: '',
    linkedin: '',
    instagram: '',
  },

  // Meta
  url: 'https://example.com', // TODO: dominio reale
  descrizione:
    'Siti veloci e curati per le imprese siciliane: più prenotazioni dirette, ' +
    'meno commissioni alle piattaforme, vendite online per le botteghe. ' +
    'Sviluppatore web freelance a Palermo.',
} as const;
