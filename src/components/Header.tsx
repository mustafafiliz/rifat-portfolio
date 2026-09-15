"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/lib/site";
import { PhoneIcon } from "@/components/icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const home = pathname === "/";

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.classList.remove("nav-open");
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function hrefFor(hash: string) {
    return home ? hash : `/${hash}`;
  }

  function close() {
    setOpen(false);
  }

  return (
    <header className="site-header" id="header">
      <div className="topbar">
        <div className="wrap topbar-inner">
          <div className="topbar-left">
            <span>Garten- & Landschaftsbau</span>
            <span>Im Handwerk seit 2004</span>
          </div>
          <div className="topbar-left">
            <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>
            <a href={siteConfig.email.href}>{siteConfig.email.display}</a>
          </div>
        </div>
      </div>

      <div className="bar">
        <div className="wrap bar-inner">
          <Link
            className="brand"
            href={home ? "#start" : "/"}
            aria-label="Inces Gartenbau – Startseite"
            onClick={close}
          >
            <Image
              src="/logo.png"
              alt="Inces Gartenbau"
              width={1024}
              height={295}
              priority
            />
          </Link>

          <nav className="nav" aria-label="Hauptnavigation">
            {navItems.map((item) => (
              <Link key={item.href} href={hrefFor(item.href)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="bar-cta">
            <a className="bar-tel" href={siteConfig.phone.href}>
              <PhoneIcon />
              {siteConfig.phone.display}
            </a>
            <a className="btn btn-light btn-sm" href={siteConfig.email.href}>
              Angebot anfragen
            </a>
          </div>

          <button
            className="burger"
            type="button"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
          </button>
        </div>
      </div>

      <div className="mobile-nav" id="mobile-nav">
        <div className="mobile-nav-inner">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="m-link"
              href={hrefFor(item.href)}
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
          <div className="mobile-actions">
            <a className="btn btn-light" href={siteConfig.email.href}>
              Angebot anfragen
            </a>
            <a className="btn btn-ghost" href={siteConfig.phone.href}>
              {siteConfig.phone.display}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
