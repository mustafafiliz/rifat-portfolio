import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/lib/data";

export function FAQ() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Fragen"
              title="Häufige Fragen"
              description="Kurze Antworten vor dem ersten Gespräch – damit Sie wissen, wie die Zusammenarbeit abläuft."
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="divide-y divide-cream-200 border-y border-cream-200">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left font-display text-xl font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>
                    <span
                      aria-hidden="true"
                      className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cream-200 text-lg leading-none text-forest-800 transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl pr-10 leading-relaxed text-ink-muted">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
