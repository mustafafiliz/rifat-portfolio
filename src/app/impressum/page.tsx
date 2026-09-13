import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum von Inces Gartenbau: Angaben gemäß § 5 DDG zur Anbieterkennzeichnung.",
  alternates: { canonical: "/impressum" },
  openGraph: {
    title: "Impressum | Inces Gartenbau",
    description:
      "Impressum von Inces Gartenbau: Angaben gemäß § 5 DDG zur Anbieterkennzeichnung.",
    url: `${siteConfig.url}/impressum`,
    images: [{ url: "/og.png", width: 200, height: 200, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary",
    title: "Impressum | Inces Gartenbau",
    description:
      "Impressum von Inces Gartenbau: Angaben gemäß § 5 DDG zur Anbieterkennzeichnung.",
  },
};

export default function ImpressumPage() {
  return (
    <LegalShell>
      <p className="eyebrow">Rechtliches</p>
      <h1>Impressum</h1>
      <p className="intro">
        Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz) zur Anbieterkennzeichnung.
      </p>

      <h2>Diensteanbieter</h2>
      <p>
        {siteConfig.name}
        <br />
        {siteConfig.owner}
        <br />
        {siteConfig.address.street}
        <br />
        {siteConfig.address.postalCode} {siteConfig.address.city}
        <br />
        {siteConfig.address.country}
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>
        <br />
        E-Mail:{" "}
        <a href={siteConfig.email.href}>{siteConfig.email.display}</a>
      </p>

      <h2>Vertreten durch</h2>
      <p>{siteConfig.owner}</p>

      <h2>Rechtsform</h2>
      <p>Einzelunternehmen. Eine Eintragung im Handelsregister besteht nicht.</p>

      <h2>Berufsgenossenschaft</h2>
      <p>
        Zuständige gesetzliche Unfallversicherung:{" "}
        <a href={siteConfig.bgBau.href} target="_blank" rel="noopener">
          {siteConfig.bgBau.name}
        </a>
      </p>

      <h2>Verantwortlich für den Inhalt</h2>
      <p>
        {siteConfig.owner}
        <br />
        {siteConfig.address.street}
        <br />
        {siteConfig.address.postalCode} {siteConfig.address.city}
        <br />
        {siteConfig.address.country}
      </p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle im Sinne des
        Verbraucherstreitbeilegungsgesetzes (VSBG) teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
        10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder
        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen.
      </p>
      <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
        nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
        diesbezügliche Haftung ist erst ab dem Zeitpunkt der Kenntnis einer
        konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
        Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
        stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
        verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
        Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
        Verlinkung nicht erkennbar.
      </p>
      <p>
        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne
        konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
        Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
        entfernen.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
        des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen
        Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
        privaten, nicht kommerziellen Gebrauch gestattet.
      </p>

      <h2>Bildhinweis</h2>
      <p>
        Die auf dieser Website gezeigten Aufnahmen dienen als Beispiel für
        typische Arbeitsschritte und stellen keine dokumentierten Projekte dar.
      </p>
    </LegalShell>
  );
}
