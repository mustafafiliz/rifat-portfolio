import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-24 bg-cream-100 py-20 md:py-28"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-14">
          <Reveal>
            <SectionHeading
              eyebrow="Kontakt"
              title="Kostenloses Angebot anfragen"
              description="Beschreiben Sie Ihr Vorhaben per E-Mail oder WhatsApp. Wir melden uns und klären die nächsten Schritte – bei Bedarf mit einer Besichtigung vor Ort."
            />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={siteConfig.email.href} size="lg">
                <MailIcon className="h-5 w-5" />
                E-Mail schreiben
              </Button>
              <Button href={siteConfig.whatsapp.href} variant="outline" size="lg">
                <WhatsAppIcon className="h-5 w-5" />
                {siteConfig.whatsapp.label}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <ul className="space-y-6 rounded-md bg-forest-900 p-8 text-cream-50 md:p-10">
              <li className="flex gap-4">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white/8">
                  <PhoneIcon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-300">
                    Telefon
                  </p>
                  <a
                    href={siteConfig.phone.href}
                    className="mt-1 block text-lg font-medium hover:text-cream-200"
                  >
                    {siteConfig.phone.display}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white/8">
                  <MailIcon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-300">
                    E-Mail
                  </p>
                  <a
                    href={siteConfig.email.href}
                    className="mt-1 block text-lg font-medium hover:text-cream-200"
                  >
                    {siteConfig.email.display}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white/8">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-300">
                    WhatsApp
                  </p>
                  <a
                    href={siteConfig.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-lg font-medium hover:text-cream-200"
                  >
                    {siteConfig.whatsapp.label}
                  </a>
                </div>
              </li>
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
