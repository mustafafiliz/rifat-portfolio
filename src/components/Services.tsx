import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceIcon } from "@/components/icons";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section
      id="leistungen"
      className="scroll-mt-24 bg-cream-50 pb-20 pt-24 sm:pt-36 md:pb-28 md:pt-44"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Leistungen"
            title="Was wir für Sie umsetzen"
            description="Von der Pflege bis zur neuen Pflasterfläche: Alle Arbeiten rund um Garten, Wege und Außenanlagen – klar abgestimmt und handwerklich ausgeführt."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 60}>
              <article className="group h-full rounded-md border border-cream-200 bg-white p-7 shadow-[0_1px_0_rgba(28,25,22,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-forest-700/30 hover:shadow-[0_16px_40px_rgba(36,59,48,0.08)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-forest-800 text-cream-100">
                  <ServiceIcon name={service.icon} className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-muted">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
