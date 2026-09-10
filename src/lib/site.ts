export const siteConfig = {
  name: "Inces Gartenbau",
  shortName: "Inces",
  legalName: "Inces Gartenbau",
  domain: "inces-gartenbau.de",
  url: "https://www.inces-gartenbau.de",
  tagline: "Garten- & Gewerbe",
  since: "2004",
  title: "Inces Gartenbau — Garten- & Gewerbe",
  description:
    "Erdarbeiten, Leitungs- und Pflasterarbeiten für Garten und Gewerbe. Inces Gartenbau hebt den Graben aus, verlegt Rohre und stellt die Fläche wieder her.",
  keywords: [
    "Gewerbe",
    "Erdarbeiten",
    "Aushub",
    "Leitungsbau",
    "Rohrverlegung",
    "Drainage",
    "Kanalanschluss",
    "Pflasterarbeiten",
    "Gehwegpflasterung",
    "Hofgestaltung",
    "Gartenbau",
  ],
  phone: {
    display: "0178 4632200",
    href: "tel:+491784632200",
  },
  email: {
    display: "kontakt@inces-gartenbau.de",
    href: "mailto:kontakt@inces-gartenbau.de?subject=Angebot%20anfragen",
  },
  whatsapp: {
    href: "https://wa.me/491784632200?text=Hallo%2C%20ich%20m%C3%B6chte%20gerne%20ein%20Angebot%20anfragen.",
  },
} as const;

export const navItems = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#kontakt", label: "Kontakt" },
] as const;
