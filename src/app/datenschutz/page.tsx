import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung von ${siteConfig.name} – Angaben werden ergänzt.`,
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <main className="flex-1 bg-cream-50 pb-24 pt-28 lg:pb-16">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-700">
          Rechtliches
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-ink">
          Datenschutzerklärung
        </h1>
        <p className="mt-5 rounded-md border border-cream-200 bg-white px-4 py-3 text-sm leading-relaxed text-ink-muted">
          Diese Seite ist ein Platzhalter. Die vollständige Datenschutzerklärung
          wird ergänzt, sobald die endgültigen Kontaktdaten und eingesetzten
          Dienste (Hosting, Formularversand, Analyse) feststehen.
        </p>

        <section className="mt-10 space-y-8 text-[1.05rem] leading-relaxed text-ink-muted">
          <div>
            <h2 className="font-display text-2xl font-medium text-ink">
              Verantwortliche Stelle
            </h2>
            <p className="mt-3">
              {siteConfig.legalName}
              <br />
              [Anschrift folgt]
              <br />
              E-Mail: {siteConfig.email.display}
              <br />
              Telefon: {siteConfig.phone.display}
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-medium text-ink">
              Kontakt per E-Mail und WhatsApp
            </h2>
            <p className="mt-3">
              Anfragen können per E-Mail oder WhatsApp gestellt werden. Dabei
              übermittelte Angaben (z. B. Nachricht, Fotos, Telefonnummer) werden
              ausschließlich zur Bearbeitung der Anfrage verwendet. Die
              vollständigen Hinweise werden ergänzt, sobald die endgültigen
              Kontaktdaten und eingesetzten Dienste feststehen.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-medium text-ink">
              Hosting und Server-Logs
            </h2>
            <p className="mt-3">
              Beim Aufruf der Website können technisch notwendige Daten wie
              IP-Adresse, Datum, Uhrzeit und aufgerufene Seiten durch den
              Hosting-Anbieter gespeichert werden. Die konkreten Angaben zum
              Anbieter folgen mit dem Live-Gang.
            </p>
          </div>
        </section>

        <p className="mt-12">
          <Link href="/" className="font-semibold text-forest-800 hover:underline">
            Zurück zur Startseite
          </Link>
        </p>
      </Container>
    </main>
  );
}
