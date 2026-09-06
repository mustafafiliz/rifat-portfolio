import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center bg-cream-50 pb-24 pt-32 lg:pb-16">
      <Container className="max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-700">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-ink">
          Seite nicht gefunden
        </h1>
        <p className="mt-4 leading-relaxed text-ink-muted">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-8">
          <Button href="/">Zur Startseite</Button>
        </div>
        <p className="mt-6 text-sm">
          <Link href="/#kontakt" className="text-forest-800 hover:underline">
            Direkt zum Kontaktformular
          </Link>
        </p>
      </Container>
    </main>
  );
}
