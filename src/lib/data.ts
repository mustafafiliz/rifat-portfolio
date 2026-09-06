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
    title: "Fachgerechter Aufbau",
    text: "Gräben verfüllt, verdichtet und Flächen wieder hergestellt.",
  },
  {
    title: "Faire Preise",
    text: "Individuelles Angebot statt pauschaler Versprechen.",
  },
] as const;

export type ServiceIconName = "pipe" | "paving" | "earth";

export const services = [
  {
    id: "erdarbeiten",
    title: "Erdarbeiten & Aushub",
    description:
      "Aushub, Graben und Geländeanpassung – vom ersten Spatenstich bis zum tragfähigen Untergrund.",
    icon: "earth" as const,
  },
  {
    id: "leitungsbau",
    title: "Leitungs- & Rohrverlegung",
    description:
      "Verlegung von Drainage-, Abwasser- und Leerrohrleitungen im Graben, fachgerecht gebettet und verdichtet.",
    icon: "pipe" as const,
  },
  {
    id: "pflasterarbeiten",
    title: "Pflasterarbeiten",
    description:
      "Gehwege, Höfe und Einfahrten werden nach den Leitungsarbeiten wieder sauber gepflastert.",
    icon: "paving" as const,
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
    text: "Wir prüfen Untergrund, Grabenverlauf, Leitungslage und Zugang für die Maschinen direkt am Grundstück.",
  },
  {
    number: "03",
    title: "Individuelles Angebot",
    text: "Sie erhalten ein nachvollziehbares Angebot, abgestimmt auf Material, Aufwand und Ihre Vorstellungen.",
  },
  {
    number: "04",
    title: "Umsetzung & Wiederherstellung",
    text: "Aushub, Leitungsverlegung, Verfüllung und Pflasterung aus einer Hand – die Fläche bleibt nutzbar.",
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
    id: "leitungsbau",
    title: "Leitungsbau",
    summary:
      "Graben ausgehoben, Drainage- und Leerrohre im Kiesbett verlegt und verdichtet.",
    image: "/images/projects/leitungsbau.png",
  },
  {
    id: "gehwegpflasterung",
    title: "Gehweg neu gepflastert",
    summary:
      "Nach den Leitungsarbeiten wird die Fläche neu aufgebaut und im Verband gepflastert.",
    image: "/images/projects/pflasterarbeiten.png",
  },
  {
    id: "hofflaeche",
    title: "Hoffläche & Untergrund",
    summary:
      "Tragschicht, Entwässerung und Anschlüsse am Haus – Grundlage für die neue Hoffläche.",
    image: "/images/projects/hof.png",
  },
];

export const faqs = [
  {
    question: "Welche Arbeiten bieten Sie an?",
    answer:
      "inces.de übernimmt Tiefbauarbeiten rund um Haus und Grundstück: Erdarbeiten und Aushub, Gräben für Drainage-, Abwasser- und Leerrohrleitungen, den Aufbau tragfähiger Untergründe sowie das anschließende Pflastern von Gehwegen, Höfen und Einfahrten.",
  },
  {
    question: "Wie kann ich ein Angebot erhalten?",
    answer:
      "Schreiben Sie uns per E-Mail oder WhatsApp, oder rufen Sie uns an. Beschreiben Sie kurz, was geplant ist – etwa Fläche, gewünschtes Material und den aktuellen Zustand. Anschließend vereinbaren wir bei Bedarf eine Besichtigung vor Ort und erstellen Ihnen ein individuelles Angebot.",
  },
  {
    question: "Kann ich vorab Fotos von meinem Projekt schicken?",
    answer:
      "Ja, gerne. Fotos vom Grundstück oder der bestehenden Fläche helfen, den Umfang besser einzuschätzen. Sie können uns die Bilder per E-Mail oder WhatsApp zusenden.",
  },
  {
    question: "Wird die Fläche nach den Leitungsarbeiten wieder hergestellt?",
    answer:
      "Ja. Nach dem Verlegen der Leitungen wird der Graben lagenweise verfüllt und verdichtet, der Untergrund neu aufgebaut und die Fläche wieder gepflastert – so bleibt kein offener Bereich zurück.",
  },
  {
    question: "Wie wird der Preis berechnet?",
    answer:
      "Ein belastbares Angebot hängt vom konkreten Vorhaben ab. Wichtige Faktoren sind unter anderem die Fläche, das Material, der Untergrund, der Arbeitsaufwand und besondere Anforderungen vor Ort. Deshalb nennen wir keine Pauschalpreise, sondern erstellen nach dem Gespräch – und bei Bedarf nach der Besichtigung – ein individuelles Angebot.",
  },
] as const;
