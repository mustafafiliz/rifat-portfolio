import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CheckIcon } from "@/components/icons";
import { trustItems } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="start"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <Image
        src="/images/hero-garden-paving.png"
        alt="Frisch verlegte Pflasterfläche mit gepflegter Bepflanzung in einem Wohngarten"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        quality={85}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/88 via-forest-950/58 to-forest-950/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/75 via-transparent to-forest-950/35" />

      <Container className="relative z-10 w-full pb-16 pt-32 sm:pb-20 md:pb-36 lg:pt-36">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-stone-300">
          <span className="h-px w-8 bg-stone-300" />
          Garten- und Landschaftsbau
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-[2.35rem] font-medium leading-[1.12] tracking-tight text-cream-50 sm:text-5xl lg:text-[4rem]">
          Professionelle Garten- und Pflasterarbeiten in Ihrer Nähe
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-100/90 sm:text-xl">
          Zuverlässige Arbeiten rund um Garten, Wege, Terrassen und
          Außenanlagen – sauber, professionell und nach Ihren Vorstellungen.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href="/#kontakt" variant="light" size="lg">
            Kostenloses Angebot anfragen
          </Button>
          <Button href="/#leistungen" variant="secondary" size="lg">
            Unsere Leistungen
          </Button>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:hidden">
          {trustItems.map((item) => (
            <li
              key={item.title}
              className="flex items-center gap-3 text-cream-50"
            >
              <CheckIcon className="h-5 w-5 text-stone-300" />
              <span className="font-semibold">{item.title}</span>
            </li>
          ))}
        </ul>
      </Container>

      <div className="absolute inset-x-0 bottom-0 z-20 hidden translate-y-1/2 sm:block">
        <Container>
          <ul className="grid grid-cols-3 overflow-hidden rounded-md border border-cream-200 bg-cream-50 shadow-[0_18px_50px_rgba(28,25,22,0.12)]">
            {trustItems.map((item, index) => (
              <li
                key={item.title}
                className={
                  index > 0 ? "border-l border-cream-200" : undefined
                }
              >
                <div className="px-4 py-5 sm:px-5 lg:px-8 lg:py-7">
                  <p className="font-display text-lg font-medium text-ink lg:text-xl">
                    {item.title}
                  </p>
                  <p className="mt-1 hidden text-sm leading-relaxed text-ink-muted lg:block">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
