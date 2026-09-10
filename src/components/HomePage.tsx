import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { MailIcon, WhatsAppIcon, PhoneIcon } from "@/components/icons";

const services = [
  {
    num: "01",
    title: "Erdarbeiten & Aushub",
    text: "Wir öffnen das Gelände dort, wo gearbeitet werden muss: Gräben für Leitungen, Aushub für neue Flächen und die Anpassung des Geländes. Anschließend wird der Untergrund so aufgebaut, dass er die späteren Lasten trägt.",
    ticks: [
      "Grabenaushub für Leitungen",
      "Aushub für Hof und Einfahrt",
      "Geländeanpassung und Planum",
      "Tragschicht aufbauen und verdichten",
      "Abtransport des Aushubs",
      "Arbeiten an bestehenden Flächen",
    ],
  },
  {
    num: "02",
    title: "Leitungs- & Rohrverlegung",
    text: "Rohre werden im Kiesbett verlegt, ausgerichtet und sauber eingebettet. Danach wird der Graben lagenweise verfüllt und verdichtet – damit sich die Fläche später nicht setzt und die Leitung dauerhaft geschützt liegt.",
    ticks: [
      "Drainageleitungen",
      "Abwasser- und Regenwasserleitungen",
      "Leerrohre für Strom und Wasser",
      "Kiesbett und Einbettung",
      "Entwässerungsrinnen und Schächte",
      "Lagenweise Verfüllung und Verdichtung",
    ],
  },
  {
    num: "03",
    title: "Pflasterarbeiten",
    text: "Zum Abschluss wird die Fläche neu aufgebaut und im Verband gepflastert. Gehweg, Hof oder Einfahrt sind danach wieder nutzbar – ohne offene Stelle, die auf den nächsten Betrieb wartet.",
    ticks: [
      "Gehwege und Wege",
      "Hofflächen",
      "Einfahrten",
      "Rand- und Bordsteine",
      "Wiederherstellung nach Leitungsarbeiten",
      "Ausbessern bestehender Pflasterflächen",
    ],
  },
];

const faqs = [
  {
    q: "Welche Arbeiten bieten Sie an?",
    a: "Inces Gartenbau übernimmt Erdarbeiten und Aushub, Gräben für Drainage-, Abwasser- und Leerrohrleitungen, den Aufbau tragfähiger Untergründe sowie das anschließende Pflastern von Gehwegen, Höfen und Einfahrten.",
  },
  {
    q: "Wie kann ich ein Angebot erhalten?",
    a: "Schreiben Sie uns per E-Mail oder WhatsApp, oder rufen Sie uns an. Beschreiben Sie kurz, was geplant ist – etwa Fläche, gewünschtes Material und den aktuellen Zustand. Anschließend vereinbaren wir bei Bedarf eine Besichtigung vor Ort und erstellen Ihnen ein individuelles Angebot.",
  },
  {
    q: "Kann ich vorab Fotos von meinem Projekt schicken?",
    a: "Ja, gerne. Fotos vom Grundstück oder der bestehenden Fläche helfen, den Umfang besser einzuschätzen. Sie können uns die Bilder per E-Mail oder WhatsApp zusenden.",
  },
  {
    q: "Wird die Fläche nach den Leitungsarbeiten wieder hergestellt?",
    a: "Ja. Nach dem Verlegen der Leitungen wird der Graben lagenweise verfüllt und verdichtet, der Untergrund neu aufgebaut und die Fläche wieder gepflastert – so bleibt kein offener Bereich zurück.",
  },
  {
    q: "Wie wird der Preis berechnet?",
    a: "Ein belastbares Angebot hängt vom konkreten Vorhaben ab. Wichtige Faktoren sind unter anderem die Fläche, das Material, der Untergrund, der Arbeitsaufwand und besondere Anforderungen vor Ort. Deshalb nennen wir keine Pauschalpreise, sondern erstellen nach dem Gespräch – und bei Bedarf nach der Besichtigung – ein individuelles Angebot.",
  },
];

export function HomePage() {
  return (
    <main>
      <section className="hero" id="start">
        <div className="hero-bg">
          <Image
            src="/images/hero.jpg"
            alt="Offener Leitungsgraben mit verlegten Rohren neben einem neu gepflasterten Gehweg"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <p className="eyebrow on-dark">Inces Gartenbau · Garten & Gewerbe</p>
            <p className="claim">Gewerbe aus einer Hand.</p>
            <h1>Erdarbeiten, Leitungen und Pflasterarbeiten.</h1>
            <p className="lead">
              Wir heben den Graben aus, verlegen Drainage-, Abwasser- und
              Leerrohrleitungen und stellen die Fläche danach wieder her – ohne
              Übergabe an einen zweiten Betrieb.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href={siteConfig.email.href}>
                Angebot anfragen
              </a>
              <a className="btn btn-ghost" href="#leistungen">
                Leistungen im Detail
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="figures">
        <div className="wrap">
          <ul>
            <li className="reveal">
              <b>seit 2004</b>
              <span>Im Handwerk</span>
              <p>Gewachsene Erfahrung auf Baustellen rund um Haus und Grundstück.</p>
            </li>
            <li className="reveal">
              <b>3 Gewerke</b>
              <span>Aus einer Hand</span>
              <p>Erdarbeiten, Leitungsverlegung und Pflasterarbeiten im selben Auftrag.</p>
            </li>
            <li className="reveal">
              <b>1 Ansprechpartner</b>
              <span>Von Anfang bis Ende</span>
              <p>Ein Kontakt für Angebot, Ausführung und Wiederherstellung der Fläche.</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="leistungen">
        <div className="wrap svc-layout">
          <div className="svc-side reveal">
            <div className="sec-head">
              <p className="eyebrow">Leistungen</p>
              <h2>Leistungen im Detail</h2>
              <p>
                Von der ersten Schaufel bis zum letzten Pflasterstein: Wir
                übernehmen die komplette Arbeit rund um Haus, Hof und Grundstück
                – abgestimmt auf Untergrund, Leitungslage und Nutzung.
              </p>
            </div>
            <a className="btn btn-dark" href={siteConfig.email.href}>
              Projekt besprechen
            </a>
          </div>
          <div className="svc-rows">
            {services.map((service) => (
              <article className="svc-row reveal" key={service.num}>
                <p className="svc-num">{service.num}</p>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul className="ticks">
                    {service.ticks.map((tick) => (
                      <li key={tick}>{tick}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-coal" id="referenzen">
        <div className="wrap">
          <div className="sec-head on-dark reveal">
            <p className="eyebrow on-dark">Referenzen</p>
            <h2>Typische Projekte</h2>
            <p>
              So sehen unsere Baustellen aus: offene Gräben mit verlegten
              Leitungen, neu aufgebaute Untergründe und die anschließende
              Pflasterung.
            </p>
          </div>
          <div className="refs">
            <article className="ref wide reveal">
              <Image
                src="/images/leitungsbau.jpg"
                alt="Ausgehobener Graben mit Drainage- und Leerrohr im Kiesbett"
                fill
                sizes="(min-width: 768px) 100vw, 100vw"
              />
              <div className="ref-body">
                <p className="eyebrow">01 · Leitungsbau</p>
                <h3>Graben ausgehoben, Rohre verlegt</h3>
                <p>
                  Drainage- und Leerrohr im Kiesbett verlegt, ausgerichtet und
                  lagenweise verfüllt.
                </p>
              </div>
            </article>
            <article className="ref reveal">
              <Image
                src="/images/gehweg.jpg"
                alt="Gehweg wird nach den Leitungsarbeiten neu gepflastert"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="ref-body">
                <p className="eyebrow">02 · Pflasterarbeiten</p>
                <h3>Gehweg neu gepflastert</h3>
                <p>Nach den Leitungsarbeiten neu aufgebaut und im Verband gepflastert.</p>
              </div>
            </article>
            <article className="ref reveal">
              <Image
                src="/images/hof.jpg"
                alt="Hoffläche im Aufbau mit Tragschicht und Entwässerung"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="ref-body">
                <p className="eyebrow">03 · Erdarbeiten</p>
                <h3>Hoffläche & Untergrund</h3>
                <p>
                  Tragschicht, Entwässerung und Anschlüsse am Haus als Grundlage
                  der neuen Fläche.
                </p>
              </div>
            </article>
          </div>
          <p className="note-dark reveal">
            Die Aufnahmen zeigen typische Arbeitsschritte und dienen als Beispiel.
            Echte Projektfotos werden ergänzt.
          </p>
        </div>
      </section>

      <section id="ablauf">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow">Ablauf</p>
            <h2>So arbeiten wir zusammen</h2>
            <p>Vier klare Schritte – vom ersten Kontakt bis zur wieder hergestellten Fläche.</p>
          </div>
          <ol className="steps">
            <li className="reveal">
              <div className="step-num">
                <b>01</b>
                <i />
              </div>
              <h3>Kontakt aufnehmen</h3>
              <p>
                Schildern Sie kurz Ihr Vorhaben – per E-Mail, WhatsApp oder
                telefonisch. Fotos helfen bei der ersten Einschätzung.
              </p>
            </li>
            <li className="reveal">
              <div className="step-num">
                <b>02</b>
                <i />
              </div>
              <h3>Besichtigung vor Ort</h3>
              <p>
                Wir prüfen Untergrund, Grabenverlauf, Leitungslage und Zugang
                für die Maschinen direkt am Grundstück.
              </p>
            </li>
            <li className="reveal">
              <div className="step-num">
                <b>03</b>
                <i />
              </div>
              <h3>Individuelles Angebot</h3>
              <p>
                Sie erhalten ein nachvollziehbares Angebot, abgestimmt auf
                Material, Aufwand und Ihre Vorstellungen.
              </p>
            </li>
            <li className="reveal">
              <div className="step-num">
                <b>04</b>
                <i />
              </div>
              <h3>Umsetzung & Wiederherstellung</h3>
              <p>
                Aushub, Leitungsverlegung, Verfüllung und Pflasterung aus einer
                Hand – die Fläche bleibt nutzbar.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="bg-mist" id="ueber-uns">
        <div className="wrap about">
          <div className="reveal">
            <div className="about-photo">
              <Image
                src="/images/detail.jpg"
                alt="Pflasterfläche und Werkzeug neben dem offenen Graben mit verlegtem Drainagerohr"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="about-mark">
              <b>seit 2004</b>
              <span>Inces Gartenbau</span>
            </div>
          </div>
          <div className="reveal">
            <div className="sec-head">
              <p className="eyebrow">Über uns</p>
              <h2>Handwerk mit Blick unter die Oberfläche</h2>
            </div>
            <blockquote>
              Inces Gartenbau übernimmt Erdarbeiten, Leitungsverlegung und
              Pflasterarbeiten rund um Haus und Grundstück – vom Aushub bis zur
              wieder hergestellten Fläche.
            </blockquote>
            <div className="about-text">
              <p>
                Ob Drainage, Abwasseranschluss oder Leerrohre für Strom und
                Wasser: Zuerst wird der Graben ausgehoben, das Rohr im Kiesbett
                verlegt und ordentlich eingebettet. Anschließend wird lagenweise
                verfüllt und verdichtet, damit sich die Fläche später nicht setzt.
              </p>
              <p>
                Zum Schluss bauen wir den Untergrund neu auf und pflastern
                Gehweg, Hof oder Einfahrt wieder ein. Was unter der Oberfläche
                liegt, entscheidet darüber, wie lange das Ergebnis darüber hält
                – deshalb liegt hier unser Schwerpunkt.
              </p>
              <p>
                Jedes Grundstück ist anders. Deshalb beginnt jedes Projekt mit
                einem Gespräch und, wenn nötig, einer Besichtigung vor Ort.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap cta-grid reveal">
          <div>
            <p className="eyebrow on-dark">Angebot</p>
            <h2>Sie planen ein Projekt?</h2>
            <p>
              Ob Drainage, Abwasser- oder Leerrohrleitung, Aushub oder eine neue
              Pflasterfläche – wir besprechen Ihr Vorhaben persönlich und
              erstellen Ihnen ein individuelles Angebot. Der Preis richtet sich
              nach Grabenlänge, Tiefe, Untergrund, Material und Aufwand – nicht
              nach Pauschalwerten.
            </p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-primary" href={siteConfig.email.href}>
              Angebot anfragen
            </a>
            <a
              className="btn btn-ghost"
              href={siteConfig.whatsapp.href}
              target="_blank"
              rel="noopener"
            >
              Per WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap faq-grid">
          <div className="sec-head reveal">
            <p className="eyebrow">Fragen</p>
            <h2>Häufige Fragen</h2>
            <p>
              Kurze Antworten vor dem ersten Gespräch – damit Sie wissen, wie
              die Zusammenarbeit abläuft.
            </p>
          </div>
          <div className="faq-list reveal">
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>
                  <span>{item.q}</span>
                  <i>+</i>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist" id="kontakt">
        <div className="wrap contact-grid">
          <div className="reveal">
            <div className="sec-head">
              <p className="eyebrow">Kontakt</p>
              <h2>Kostenloses Angebot anfragen</h2>
              <p>
                Beschreiben Sie Ihr Vorhaben per E-Mail oder WhatsApp. Wir
                melden uns und klären die nächsten Schritte – bei Bedarf mit
                einer Besichtigung vor Ort.
              </p>
            </div>
            <div className="btn-row">
              <a className="btn btn-primary" href={siteConfig.email.href}>
                <MailIcon />
                E-Mail schreiben
              </a>
              <a
                className="btn btn-outline"
                href={siteConfig.whatsapp.href}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </div>
          </div>
          <ul className="channels reveal">
            <li>
              <a href={siteConfig.phone.href}>
                <span className="ic">
                  <PhoneIcon />
                </span>
                <span>
                  <span className="lb">Telefon</span>
                  <span className="vl">{siteConfig.phone.display}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={siteConfig.email.href}>
                <span className="ic">
                  <MailIcon />
                </span>
                <span>
                  <span className="lb">E-Mail</span>
                  <span className="vl">{siteConfig.email.display}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={siteConfig.whatsapp.href} target="_blank" rel="noopener">
                <span className="ic">
                  <WhatsAppIcon />
                </span>
                <span>
                  <span className="lb">WhatsApp</span>
                  <span className="vl">Per WhatsApp schreiben</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
