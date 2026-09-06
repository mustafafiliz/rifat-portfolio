"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/cn";
import { navigation } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    const frame = requestAnimationFrame(onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "border-cream-200 shadow-sm" : "border-transparent",
      )}
    >
      <Container className="flex h-[4.75rem] items-center justify-between gap-4 lg:h-20">
        <Link
          href="/"
          className="relative z-50 min-w-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500"
          onClick={() => setOpen(false)}
        >
          <span className="sr-only">{siteConfig.name}</span>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-[0.95rem] font-medium text-ink-muted hover:text-forest-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={siteConfig.email.href} size="md">
            Angebot anfragen
          </Button>
        </div>

        <button
          type="button"
          className="relative z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-md text-ink lg:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Menü schließen" : "Menü öffnen"}</span>
          <span className="flex h-4 w-5 flex-col justify-between">
            <span
              className={cn(
                "h-[1.5px] w-full origin-center bg-current transition-transform",
                open && "translate-y-[7.25px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-[1.5px] w-full bg-current transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-[1.5px] w-full origin-center bg-current transition-transform",
                open && "-translate-y-[7.25px] -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-white pt-[4.75rem] transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav
          className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 pb-8 pt-4"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-cream-200 py-4 font-display text-3xl font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-3">
            <Button href={siteConfig.email.href} size="lg" onClick={() => setOpen(false)}>
              Kostenloses Angebot anfragen
            </Button>
            <Button
              href={siteConfig.whatsapp.href}
              variant="outline"
              size="lg"
              onClick={() => setOpen(false)}
            >
              Per WhatsApp schreiben
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
