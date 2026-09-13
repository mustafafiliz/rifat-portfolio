import Image from "next/image";
import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Image
              className="f-logo"
              src="/logo-dark.png"
              alt="Inces Gartenbau"
              width={1024}
              height={478}
            />
            <p className="f-about">
              Erdarbeiten, Leitungsverlegung und Pflasterarbeiten im Garten- und
              Landschaftsbau – fachgerecht,
              zuverlässig und nach Absprache. Im Handwerk seit 2004.
            </p>
          </div>

          <div>
            <p className="footer-title">Navigation</p>
            <ul>
              <li>
                <Link href="#start">Startseite</Link>
              </li>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-title">Kontakt</p>
            <ul>
              <li>
                <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>
              </li>
              <li>
                <a href={siteConfig.email.href}>{siteConfig.email.display}</a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsapp.href}
                  target="_blank"
                  rel="noopener"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
            <div className="footer-legal">
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {siteConfig.name}
          </p>
          <p>{siteConfig.domain}</p>
        </div>
      </div>
    </footer>
  );
}
