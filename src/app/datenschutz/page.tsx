import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von Inces Gartenbau: Verarbeitung personenbezogener Daten gemäß DSGVO.",
  alternates: { canonical: "/datenschutz" },
  openGraph: {
    title: "Datenschutzerklärung | Inces Gartenbau",
    description:
      "Datenschutzerklärung von Inces Gartenbau: Verarbeitung personenbezogener Daten gemäß DSGVO.",
    url: `${siteConfig.url}/datenschutz`,
    images: [{ url: "/og.png", width: 512, height: 512, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary",
    title: "Datenschutzerklärung | Inces Gartenbau",
    description:
      "Datenschutzerklärung von Inces Gartenbau: Verarbeitung personenbezogener Daten gemäß DSGVO.",
  },
};

export default function DatenschutzPage() {
  return (
    <LegalShell>
      <p className="eyebrow">Rechtliches</p>
      <h1>Datenschutzerklärung</h1>
      <p className="intro">
        Informationen zur Verarbeitung personenbezogener Daten gemäß
        Datenschutz-Grundverordnung (DSGVO).
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
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
        <br />
        Telefon: <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>
        <br />
        E-Mail:{" "}
        <a href={siteConfig.email.href}>{siteConfig.email.display}</a>
      </p>
      <p>
        Ein betrieblicher Datenschutzbeauftragter ist nicht bestellt, da die
        gesetzlichen Voraussetzungen hierfür nicht vorliegen.
      </p>

      <h2>2. Ihre Rechte</h2>
      <p>Sie haben jederzeit das Recht:</p>
      <ul>
        <li>Auskunft über Ihre gespeicherten Daten zu erhalten (Art. 15 DSGVO)</li>
        <li>unrichtige Daten berichtigen zu lassen (Art. 16 DSGVO)</li>
        <li>Ihre Daten löschen zu lassen (Art. 17 DSGVO)</li>
        <li>die Verarbeitung einschränken zu lassen (Art. 18 DSGVO)</li>
        <li>
          Ihre Daten in einem übertragbaren Format zu erhalten (Art. 20 DSGVO)
        </li>
        <li>der Verarbeitung zu widersprechen (Art. 21 DSGVO)</li>
      </ul>
      <p>
        Wenden Sie sich dazu einfach an die oben genannten Kontaktdaten. Darüber
        hinaus können Sie sich bei der zuständigen Aufsichtsbehörde beschweren
        (Art. 77 DSGVO):
      </p>
      <p>
        Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit
        Baden-Württemberg
        <br />
        Lautenschlagerstraße 20
        <br />
        70173 Stuttgart
        <br />
        <a
          href="https://www.baden-wuerttemberg.datenschutz.de/"
          target="_blank"
          rel="noopener"
        >
          baden-wuerttemberg.datenschutz.de
        </a>
      </p>

      <h2>3. Aufruf der Website und Server-Logfiles</h2>
      <p>
        Beim Aufruf dieser Website übermittelt Ihr Browser technisch notwendige
        Daten, die vom Hosting-Anbieter in sogenannten Server-Logfiles
        gespeichert werden. Dazu gehören in der Regel:
      </p>
      <ul>
        <li>IP-Adresse des anfragenden Geräts</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>aufgerufene Seite oder Datei</li>
        <li>übertragene Datenmenge und Statusmeldung</li>
        <li>Browsertyp, Browserversion und Betriebssystem</li>
      </ul>
      <p>
        Diese Daten sind erforderlich, um die Website technisch bereitzustellen
        und ihre Sicherheit und Stabilität zu gewährleisten. Rechtsgrundlage ist
        unser berechtigtes Interesse an einem sicheren und störungsfreien Betrieb
        nach Art. 6 Abs. 1 lit. f DSGVO. Eine Zusammenführung dieser Daten mit
        anderen Datenquellen findet nicht statt.
      </p>

      <h2>4. Hosting</h2>
      <p>
        Diese Website wird als statische Website bei Cloudflare, Inc., 101
        Townsend Street, San Francisco, CA 94107, USA (Cloudflare Pages)
        bereitgestellt. Cloudflare Germany GmbH, c/o Design Offices München
        Atlas, Rosenheimer Straße 143C, 81671 München, ist die deutsche
        Niederlassung. Der Anbieter verarbeitet die beim Aufruf der Website
        anfallenden Daten – insbesondere die unter Punkt 3 genannten
        Server-Logfiles sowie technische Daten zum Schutz vor Missbrauch und
        Angriffen – in unserem Auftrag. Grundlage dafür ist ein Vertrag über die
        Auftragsverarbeitung nach Art. 28 DSGVO.
      </p>
      <h3>Datenübermittlung in ein Drittland</h3>
      <p>
        Cloudflare hat seinen Sitz in den USA. Die Übermittlung
        personenbezogener Daten (insbesondere IP-Adressen) erfolgt auf Grundlage
        des Angemessenheitsbeschlusses der Europäischen Kommission für das EU-US
        Data Privacy Framework gemäß Art. 45 DSGVO, hilfsweise der
        Standardvertragsklauseln der EU-Kommission gemäß Art. 46 Abs. 2 lit. c
        DSGVO. Weitere Informationen:{" "}
        <a
          href="https://www.cloudflare.com/de-de/privacypolicy/"
          target="_blank"
          rel="noopener"
        >
          cloudflare.com/de-de/privacypolicy
        </a>
        .
      </p>

      <h2>5. Kontaktaufnahme per E-Mail oder Telefon</h2>
      <p>
        Wenn Sie uns per E-Mail oder telefonisch kontaktieren, verarbeiten wir
        die von Ihnen mitgeteilten Angaben – etwa Name, Telefonnummer,
        E-Mail-Adresse, Beschreibung des Vorhabens sowie eventuell mitgeschickte
        Fotos – ausschließlich, um Ihre Anfrage zu beantworten und ein Angebot zu
        erstellen.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage auf
        den Abschluss eines Vertrags gerichtet ist, im Übrigen unser berechtigtes
        Interesse an der Beantwortung Ihrer Anfrage nach Art. 6 Abs. 1 lit. f
        DSGVO. Wir löschen die Daten, sobald sie nicht mehr erforderlich sind und
        keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>
      <p>
        Diese Website enthält kein Kontaktformular. Anfragen erreichen uns
        ausschließlich über Ihr eigenes E-Mail-Programm, per Telefon oder über
        WhatsApp.
      </p>

      <h2>6. Kontaktaufnahme über WhatsApp</h2>
      <p>
        Auf dieser Website finden Sie Links, mit denen Sie uns über WhatsApp
        schreiben können. Wenn Sie einen dieser Links nutzen, verlassen Sie
        unsere Website und es gelten die Bedingungen und Datenschutzhinweise des
        Anbieters WhatsApp Ireland Limited beziehungsweise Meta Platforms. Dabei
        können Daten – etwa Ihre Telefonnummer und Ihre Nachricht – an den
        Anbieter übermittelt und auch außerhalb der Europäischen Union
        verarbeitet werden.
      </p>
      <p>
        Auf diese Verarbeitung haben wir keinen Einfluss. Die Nutzung von
        WhatsApp ist freiwillig; Sie können uns stattdessen jederzeit per E-Mail
        oder telefonisch erreichen. Die Datenschutzhinweise des Anbieters finden
        Sie unter{" "}
        <a
          href="https://www.whatsapp.com/legal/privacy-policy-eea"
          target="_blank"
          rel="noopener"
        >
          whatsapp.com/legal/privacy-policy-eea
        </a>
        .
      </p>

      <h2>7. Schriftarten</h2>
      <p>
        Die auf dieser Website verwendeten Schriftarten werden von unserem
        eigenen Server geladen. Es besteht dabei keine Verbindung zu Servern
        Dritter, und es werden keine IP-Adressen an Google oder andere
        Schriftdienste übermittelt.
      </p>

      <h2>8. Cookies, Analyse und Karten</h2>
      <p>
        Diese Website setzt keine Cookies, verwendet keine Analyse- oder
        Tracking-Dienste und bindet keine Kartendienste, Videos oder
        Social-Media-Plugins ein. Ein Cookie-Banner ist daher nicht erforderlich.
      </p>

      <h2>9. Verschlüsselung</h2>
      <p>
        Diese Website wird über eine verschlüsselte Verbindung (HTTPS)
        ausgeliefert, damit die zwischen Ihrem Browser und dem Server
        übertragenen Daten nicht von Dritten mitgelesen werden können.
      </p>

      <h2>10. Änderungen</h2>
      <p>
        Wir passen diese Datenschutzerklärung an, wenn sich die Website oder die
        eingesetzten Dienste ändern oder sich neue rechtliche Anforderungen
        ergeben.
      </p>
    </LegalShell>
  );
}
