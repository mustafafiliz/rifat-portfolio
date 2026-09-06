import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum von ${siteConfig.name} – Angaben werden ergänzt.`,
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <main className="flex-1 bg-cream-50 pb-24 pt-28 lg:pb-16">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-700">
          Rechtliches
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-ink">
          Impressum
        </h1>
        <p className="mt-5 rounded-md border border-cream-200 bg-white px-4 py-3 text-sm leading-relaxed text-ink-muted">
          Diese Seite ist ein Platzhalter. Die gesetzlich erforderlichen Angaben
          gemäß § 5 TMG werden ergänzt, sobald Name, Anschrift und Kontaktdaten
          vollständig vorliegen. Es werden keine Firmen- oder Inhaberdaten
          erfunden.
        </p>

        <section className="mt-10 space-y-8 text-[1.05rem] leading-relaxed text-ink-muted">
          <div>
            <h2 className="font-display text-2xl font-medium text-ink">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="mt-3">
              {siteConfig.legalName}
              <br />
              [Straße und Hausnummer folgen]
              <br />
              [PLZ und Ort folgen]
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-medium text-ink">
              Kontakt
            </h2>
            <p className="mt-3">
              Telefon: {siteConfig.phone.display}
              <br />
              E-Mail: {siteConfig.email.display}
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-medium text-ink">
              Verantwortlich für den Inhalt
            </h2>
            <p className="mt-3">
              [Name und Anschrift der verantwortlichen Person folgen]
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
