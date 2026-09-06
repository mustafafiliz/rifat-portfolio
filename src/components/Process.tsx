import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Ablauf"
            title="So arbeiten wir zusammen"
            description="Vier klare Schritte – vom ersten Kontakt bis zur fertigen Fläche."
          />
        </Reveal>

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden h-px bg-cream-200 md:block"
          />
          <ol className="grid gap-10 md:grid-cols-4 md:gap-8">
            {processSteps.map((step, index) => (
              <li key={step.number}>
                <Reveal delay={index * 80}>
                  <div className="flex gap-4 md:block">
                    <span className="font-display text-3xl leading-none text-forest-700 md:mb-5 md:block md:text-5xl md:text-stone-400">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-medium text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
