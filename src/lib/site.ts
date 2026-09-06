/**
 * Zentrale Geschäftsdaten.
 * Telefon, E-Mail und Arbeitsgebiet hier ergänzen – die gesamte Website zieht die Werte von hier.
 */
export const siteConfig = {
  name: "inces.de",
  shortName: "inces.de",
  owner: "inces.de",
  legalName: "inces.de",
  tagline: "Tiefbau",

  description:
    "Tiefbau und Pflasterarbeiten: inces.de übernimmt Erdarbeiten, Aushub, die Verlegung von Drainage-, Abwasser- und Leerrohrleitungen sowie die anschließende Wiederherstellung und Pflasterung der Fläche.",

  url: "https://inces.de",

  locale: "de_DE",
  language: "de",

  phone: {
    display: "0178 4632200",
    href: "tel:+491784632200",
    available: true,
  },

  email: {
    display: "rifatince40@gmail.com",
    href: "mailto:rifatince40@gmail.com?subject=Angebot%20anfragen",
    available: true,
  },

  whatsapp: {
    href: "https://wa.me/491784632200?text=Hallo%2C%20ich%20m%C3%B6chte%20gerne%20ein%20Angebot%20anfragen.",
    label: "Per WhatsApp schreiben",
  },

  serviceArea: {
    display: "[Arbeitsgebiet folgt]",
    available: false,
  },

  social: {
    instagram: "",
    facebook: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
