import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function LegalShell({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <div className="legal-doc">
      <header className="legal-bar">
        <div className="legal-bar-inner">
          <Link className="brand" href="/" aria-label="Inces Gartenbau – Startseite">
            <Image
              src="/logo.png"
              alt="Inces Gartenbau"
              width={1024}
              height={478}
              priority
            />
          </Link>
          <Link className="back" href="/">
            ← Zur Startseite
          </Link>
        </div>
      </header>
      <main className="legal-main">{children}</main>
      <footer className="legal-footer">
        <div className="legal-footer-inner">
          <p>
            © {year} {siteConfig.name}
          </p>
          <nav className="footer-nav" aria-label="Rechtliches">
            <Link href="/">Startseite</Link>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
            <Link href="/#kontakt">Kontakt</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
