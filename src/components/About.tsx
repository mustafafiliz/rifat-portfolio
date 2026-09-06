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
                  alt="Pflastersteine werden auf vorbereitetem Untergrund fachgerecht verlegt"
                  width={1536}
                  height={1024}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 hidden w-48 overflow-hidden rounded-md border-4 border-cream-50 shadow-lg sm:block lg:w-56">
                <Image
                  src="/images/garden-care.png"
                  alt="Gepflegte Gartenfläche mit klarer Wegeführung und Bepflanzung"
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
              title={`Über ${siteConfig.owner}`}
            />
            <blockquote className="mt-8 border-l-2 border-forest-700 pl-5 font-display text-2xl font-medium leading-snug text-ink sm:text-[1.7rem]">
              Mit Erfahrung, handwerklichem Anspruch und einem Blick fürs Detail
              unterstützt {siteConfig.owner} seine Kunden bei der Gestaltung und
              Erneuerung ihrer Außenanlagen.
            </blockquote>
            <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-ink-muted">
              <p>
                Ob Pflege, Pflasterarbeiten oder eine neue Terrasse: Die Arbeit
                soll sauber, zuverlässig und nach Ihren Vorstellungen umgesetzt
                werden. Jedes Grundstück ist anders – deshalb beginnt jedes
                Projekt mit einem persönlichen Gespräch und einer klaren
                Abstimmung.
              </p>
              <p>
                {siteConfig.name} steht für nachvollziehbare Abläufe, eine
                ordentliche Baustelle und Ergebnisse, die im Alltag bestehen:
                Wege, die sich gut gehen und befahren lassen, Flächen, die
                halten, und Gärten, die gepflegt wirken.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
