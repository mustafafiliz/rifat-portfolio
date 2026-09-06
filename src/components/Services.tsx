import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceIcon } from "@/components/icons";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section
      id="leistungen"
      className="scroll-mt-24 bg-cream-100 pb-20 pt-20 md:pb-28 md:pt-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Leistungen"
            title="Was wir für Sie umsetzen"
            description="Tiefbau von Grund auf: Erdarbeiten und Aushub, Verlegung von Drainage- und Leerrohrleitungen und die anschließende Pflasterung der Fläche – alles aus einer Hand."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 60}>
              <article className="group h-full rounded-md border border-cream-200 bg-white p-7 shadow-[0_1px_0_rgba(17,17,17,0.03)] transition-all duration-500 hover:-translate-y-1.5 hover:border-forest-800/40 hover:shadow-[0_20px_48px_rgba(162,39,39,0.12)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-forest-800 text-white transition-transform duration-500 group-hover:scale-110">
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
