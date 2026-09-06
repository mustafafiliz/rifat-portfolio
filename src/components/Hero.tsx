import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CheckIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import { trustItems } from "@/lib/data";
import { siteConfig } from "@/lib/site";

function FramedPhoto({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden bg-white p-2 shadow-[0_18px_50px_rgba(17,17,17,0.14)] ring-1 ring-black/8",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 40vw, 90vw"
          className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="start" className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(17,17,17,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,17,0.04)_1px,transparent_1px)] bg-size-[72px_72px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#A22727]/8 blur-3xl"
      />

      <Container className="relative z-10 grid items-center gap-12 pb-16 pt-32 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-36">
        <div className="hero-copy lg:col-span-5">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#A22727]">
            <span className="h-px w-8 bg-[#A22727]" />
            Tiefbau
          </p>
          <h1 className="mt-5 font-display text-[2.4rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.6rem]">
            Erdarbeiten.
            <br />
            Leitungen.
            <br />
            Pflaster.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
            Aushub und Gräben, die Verlegung von Drainage-, Abwasser- und
            Leerrohrleitungen und das anschließende Pflastern – alles aus einer
            Hand.
          </p>
          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Button href={siteConfig.email.href} size="lg">
              Kostenloses Angebot anfragen
            </Button>
            <Button href="/#leistungen" variant="outline" size="lg">
              Unsere Leistungen
            </Button>
          </div>
        </div>

        <div className="relative pb-12 lg:col-span-7 lg:pb-8">
          <div className="group relative mx-auto max-w-xl lg:ml-auto lg:max-w-none">
            <FramedPhoto
              src="/images/tiefbau-baustelle.png"
              alt="Offener Graben mit verlegten Rohrleitungen neben einem neu gepflasterten Gehweg"
              priority
              className="relative z-10 w-[88%] lg:w-[84%]"
            />
            <FramedPhoto
              src="/images/pflasterung-arbeit.png"
              alt="Gehweg im Bau: Sandbett, Rüttelplatte und Pflastersteine über dem verfüllten Graben"
              className="absolute -bottom-8 right-0 z-20 w-[48%] rotate-[-2.5deg] sm:-bottom-10"
            />
            <FramedPhoto
              src="/images/about-craftsmanship.png"
              alt="Pflastersteine und Werkzeug neben dem offenen Graben mit Drainagerohr"
              className="absolute -right-2 top-8 z-0 hidden w-[36%] rotate-[3deg] sm:block lg:right-0"
            />
          </div>
        </div>
      </Container>

      <Container className="relative z-10 pb-14 lg:pb-16">
        <ul className="mt-10 grid gap-4 border-t border-cream-200 pt-8 sm:grid-cols-3 sm:mt-16">
          {trustItems.map((item) => (
            <li key={item.title} className="flex gap-3">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#A22727]" />
              <div>
                <p className="font-display text-lg font-medium text-ink">
                  {item.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
