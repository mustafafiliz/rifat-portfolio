/**
 * Zentrale Geschäftsdaten.
 * Telefon, E-Mail und Arbeitsgebiet hier ergänzen – die gesamte Website zieht die Werte von hier.
 */
export const siteConfig = {
  name: "Rıfat Garten- & Landschaftsbau",
  shortName: "Rıfat",
  owner: "Rıfat",
  legalName: "Rıfat Garten- & Landschaftsbau",
  tagline: "Garten- und Landschaftsbau",

  description:
    "Professionelle Gartenarbeiten, Pflasterarbeiten und Außenanlagen. Rıfat übernimmt Wege, Terrassen, Einfahrten und Gartenpflege – zuverlässig, sauber und nach Absprache.",

  url: "https://www.example.com",

  locale: "de_DE",
  language: "de",

  phone: {
    display: "[Telefonnummer folgt]",
    href: "",
    available: false,
  },

  email: {
    display: "[E-Mail-Adresse folgt]",
    href: "",
    available: false,
  },

  serviceArea: {
    display: "[Arbeitsgebiet folgt]",
    available: false,
  },

  /**
   * Optional: Formspree, Getform oder eigene API-URL.
   * Wenn gesetzt, sendet das Kontaktformular per POST (multipart).
   */
  formEndpoint: "",

  social: {
    instagram: "",
    facebook: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
