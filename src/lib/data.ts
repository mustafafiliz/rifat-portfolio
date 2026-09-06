export const navigation = [
  { href: "/#start", label: "Startseite" },
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#projekte", label: "Projekte" },
  { href: "/#ueber-uns", label: "Über uns" },
  { href: "/#kontakt", label: "Kontakt" },
] as const;

export const trustItems = [
  {
    title: "Zuverlässig",
    text: "Klare Absprache und termingerechte Umsetzung.",
  },
  {
    title: "Saubere Arbeit",
    text: "Ordentliche Baustelle und ein gepflegtes Ergebnis.",
  },
  {
    title: "Faire Preise",
    text: "Individuelles Angebot statt pauschaler Versprechen.",
  },
] as const;

export type ServiceIconName =
  | "garden"
  | "paving"
  | "removal"
  | "terrace"
  | "path"
  | "earth";

export const services = [
  {
    id: "gartenarbeiten",
    title: "Gartenarbeiten",
    description:
      "Pflege, Gestaltung und Verschönerung Ihrer Außenanlagen.",
    icon: "garden" as const,
  },
  {
    id: "pflasterarbeiten",
    title: "Pflasterarbeiten",
    description:
      "Professionelle Verlegung von Pflastersteinen für Wege, Höfe, Terrassen und Einfahrten.",
    icon: "paving" as const,
  },
  {
    id: "abbruch",
    title: "Abbruch & Entfernung",
    description:
      "Entfernung von alten Pflasterflächen und bestehenden Außenanlagen.",
    icon: "removal" as const,
  },
  {
    id: "terrassenbau",
    title: "Terrassenbau",
    description:
      "Neue Terrassenflächen passend zu Ihrem Grundstück und Ihren Vorstellungen.",
    icon: "terrace" as const,
  },
  {
    id: "wege",
    title: "Wege & Einfahrten",
    description:
      "Funktionale und optisch ansprechende Wege, Zufahrten und Hofbereiche.",
    icon: "path" as const,
  },
  {
    id: "erdarbeiten",
    title: "Erdarbeiten",
    description:
      "Vorbereitung des Untergrunds und notwendige Erdarbeiten für Ihre Außenprojekte.",
    icon: "earth" as const,
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Kontakt aufnehmen",
    text: "Schildern Sie kurz Ihr Vorhaben – per Formular oder telefonisch. Fotos helfen bei der ersten Einschätzung.",
  },
  {
    number: "02",
    title: "Besichtigung vor Ort",
    text: "Wir schauen uns Fläche, Untergrund und Zugang gemeinsam an und klären offene Fragen direkt am Grundstück.",
  },
  {
    number: "03",
    title: "Individuelles Angebot",
    text: "Sie erhalten ein nachvollziehbares Angebot, abgestimmt auf Material, Aufwand und Ihre Vorstellungen.",
  },
  {
    number: "04",
    title: "Professionelle Umsetzung",
    text: "Die Arbeiten werden sauber und zuverlässig ausgeführt – mit Blick auf ein Ergebnis, das im Alltag besteht.",
  },
] as const;

export const projects: Array<{
  id: string;
  title: string;
  summary: string;
  /** Relativer Pfad unter /public, z. B. "/images/projects/hof.jpg". null = Platzhalter. */
  image: string | null;
}> = [
  {
    id: "pflasterarbeiten",
    title: "Pflasterarbeiten",
    summary: "Neue Beläge für Wege, Höfe und befahrbare Flächen.",
    image: null,
  },
  {
    id: "gartenneugestaltung",
    title: "Gartenneugestaltung",
    summary: "Ordnung, Struktur und neue Pflanz- und Nutzflächen.",
    image: null,
  },
  {
    id: "terrassenbau",
    title: "Terrassenbau",
    summary: "Aufenthaltsflächen mit passendem Belag und sauberen Anschlüssen.",
    image: null,
  },
  {
    id: "hofgestaltung",
    title: "Hofgestaltung",
    summary: "Funktionale Hofflächen mit klarer Wegeführung.",
    image: null,
  },
  {
    id: "wege-einfahrten",
    title: "Wege und Einfahrten",
    summary: "Gehwege, Zufahrten und Verbindungen rund ums Haus.",
    image: null,
  },
];

export const workTypes = [
  "Gartenarbeiten / Gartenpflege",
  "Pflasterarbeiten",
  "Alte Pflastersteine entfernen",
  "Terrassenbau",
  "Wege, Hof oder Einfahrt",
  "Erdarbeiten",
  "Reparatur / Erneuerung",
  "Sonstiges / noch unsicher",
] as const;

export const faqs = [
  {
    question: "Welche Arbeiten bieten Sie an?",
    answer:
      "Rıfat übernimmt Gartenarbeiten und Gartenpflege, Pflasterarbeiten, den Bau von Gehwegen und Wegen, das Entfernen alter Pflastersteine sowie das Verlegen neuer Flächen. Dazu kommen Terrassenbau, Hofgestaltung, Einfahrten und Zufahrten, Erdarbeiten an Außenanlagen sowie die Reparatur und Erneuerung bestehender Flächen.",
  },
  {
    question: "Wie kann ich ein Angebot erhalten?",
    answer:
      "Am einfachsten nutzen Sie das Kontaktformular oder rufen uns an. Beschreiben Sie kurz, was geplant ist – etwa Fläche, gewünschtes Material und den aktuellen Zustand. Anschließend vereinbaren wir bei Bedarf eine Besichtigung vor Ort und erstellen Ihnen ein individuelles Angebot.",
  },
  {
    question: "Kann ich vorab Fotos von meinem Projekt schicken?",
    answer:
      "Ja, gerne. Fotos vom Grundstück oder der bestehenden Fläche helfen, den Umfang besser einzuschätzen. Sie können Bilder über das Kontaktformular auswählen oder uns später per E-Mail zusenden.",
  },
  {
    question: "Arbeiten Sie auch an bestehenden Pflasterflächen?",
    answer:
      "Ja. Wir erneuern, reparieren und erweitern vorhandene Pflasterflächen. Dazu gehört auch das Aufnehmen alter Steine und das fachgerechte Verlegen neuer Beläge – abgestimmt auf Untergrund und Nutzung.",
  },
  {
    question: "Wie wird der Preis berechnet?",
    answer:
      "Ein belastbares Angebot hängt vom konkreten Vorhaben ab. Wichtige Faktoren sind unter anderem die Fläche, das Material, der Untergrund, der Arbeitsaufwand und besondere Anforderungen vor Ort. Deshalb nennen wir keine Pauschalpreise, sondern erstellen nach dem Gespräch – und bei Bedarf nach der Besichtigung – ein individuelles Angebot.",
  },
] as const;
