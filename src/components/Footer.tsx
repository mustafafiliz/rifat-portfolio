import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { navigation } from "@/lib/data";
import { siteConfig } from "@/lib/site";

const legalLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
] as const;

export function Footer() {
  return (
    <footer className="bg-forest-950 pb-24 pt-16 text-cream-100 lg:pb-16">
      <Container>
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-3">
          <div>
            <Logo inverted />
            <p className="mt-5 max-w-xs leading-relaxed text-cream-200/80">
              Gartenarbeiten, Pflasterarbeiten und Außenanlagen – sauber,
              zuverlässig und nach Absprache.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-300">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-300">
              Kontakt
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>{siteConfig.phone.display}</li>
              <li>{siteConfig.email.display}</li>
              <li>{siteConfig.serviceArea.display}</li>
            </ul>
            <div className="mt-6 flex flex-col gap-2">
              {legalLinks.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <p className="pt-8 text-sm text-cream-200/60">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}
