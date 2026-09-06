import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export function Quote() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <Image
        src="/images/quote-terrace.png"
        alt="Naturstein-Terrasse mit umgebender Gartenbepflanzung im Abendlicht"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-forest-950/72" />
      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-300">
              Angebot
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-cream-50 sm:text-4xl lg:text-5xl">
              Sie planen ein Projekt?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cream-100/90">
              Ob neue Pflasterfläche, Gartenarbeit, Terrasse oder Einfahrt –
              wir besprechen Ihr Vorhaben persönlich und erstellen Ihnen ein
              individuelles Angebot. Der Preis richtet sich nach Fläche,
              Material, Untergrund und Aufwand – nicht nach Pauschalwerten.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/#kontakt" variant="light" size="lg">
                Angebot anfragen
              </Button>
              <Button href="/#kontakt" variant="secondary" size="lg">
                Jetzt kontaktieren
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
