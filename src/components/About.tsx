import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export function About() {
  return (
    <section
      id="ueber-uns"
      className="scroll-mt-24 bg-cream-50 py-20 md:py-28"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative mb-8 sm:mb-4 lg:mb-0 lg:pr-6">
              <div className="absolute -left-3 -top-3 hidden h-full w-full rounded-md border border-forest-800/20 sm:block" />
              <div className="relative overflow-hidden rounded-md">
                <Image
                  src="/images/about-craftsmanship.png"
                  alt="Pflasterfläche und Werkzeug neben dem offenen Graben mit verlegtem Drainagerohr"
                  width={1536}
                  height={1024}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 hidden w-48 overflow-hidden rounded-md border-4 border-cream-50 shadow-lg sm:block lg:w-56">
                <Image
                  src="/images/erdarbeiten.png"
                  alt="Ausgehobener Graben mit Drainagerohr im Kiesbett"
                  width={1536}
                  height={1024}
                  className="h-32 w-full object-cover lg:h-36"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <SectionHeading
              eyebrow="Über uns"
              title={`Über ${siteConfig.name}`}
            />
            <blockquote className="mt-8 border-l-2 border-forest-700 pl-5 font-display text-2xl font-medium leading-snug text-ink sm:text-[1.7rem]">
              {siteConfig.name} übernimmt den Tiefbau rund um Haus und
              Grundstück – vom Aushub über die Leitungsverlegung bis zur
              wiederhergestellten Pflasterfläche.
            </blockquote>
            <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-ink-muted">
              <p>
                Ob Drainage, Abwasseranschluss oder Leerrohre für Strom und
                Wasser: Zuerst wird der Graben ausgehoben, das Rohr im Kiesbett
                verlegt und ordentlich eingebettet. Anschließend wird lagenweise
                verfüllt und verdichtet, damit sich die Fläche später nicht
                setzt.
              </p>
              <p>
                Zum Schluss bauen wir den Untergrund neu auf und pflastern
                Gehweg, Hof oder Einfahrt wieder ein. So kommt alles aus einer
                Hand – ohne offene Baustelle, die auf den nächsten Betrieb
                wartet.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
