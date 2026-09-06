import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PavingIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section
      id="projekte"
      className="scroll-mt-24 bg-forest-950 py-20 text-cream-50 md:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Projekte"
            title="Beispielprojekte"
            description="Einblicke in typische Tiefbauarbeiten: offene Gräben mit verlegten Leitungen, neu aufgebaute Untergründe und die anschließende Pflasterung. Die Aufnahmen dienen als Beispiele und können später durch echte Projektfotos ersetzt werden."
            tone="dark"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-6">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 70}
              className={index === 0 ? "md:col-span-3 md:row-span-2" : "md:col-span-3"}
            >
              <article
                className={cn(
                  "group relative overflow-hidden rounded-md border border-white/10 bg-forest-900",
                  index === 0 ? "min-h-[22rem] md:h-full md:min-h-[28rem]" : "min-h-[16rem]",
                )}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.08]"
                  />
                ) : (
                  <div className="paving-grid absolute inset-0 opacity-40" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/35 to-transparent" />
                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-md bg-white/8 text-cream-100">
                  <PavingIcon className="h-6 w-6" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  {!project.image ? (
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-stone-300">
                      Foto folgt
                    </p>
                  ) : null}
                  <h3 className="mt-2 font-display text-2xl font-medium tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-cream-200/85">
                    {project.summary}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
