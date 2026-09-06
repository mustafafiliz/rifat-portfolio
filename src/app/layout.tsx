import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileCallBar } from "@/components/MobileCallBar";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-source",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#243B30",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Rıfat Garten- & Landschaftsbau | Pflasterarbeiten & Gartenarbeiten",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Gartenbau",
    "Gartenarbeiten",
    "Pflasterarbeiten",
    "GaLaBau",
    "Terrassenbau",
    "Einfahrt pflastern",
    "Garten- und Landschaftsbau",
    "Gartenpflege",
    "Wege bauen",
    "Hofgestaltung",
  ],
  authors: [{ name: siteConfig.owner }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Professionelle Garten- und Pflasterarbeiten",
    description: siteConfig.description,
    images: [
      {
        url: "/images/hero-garden-paving.png",
        width: 1536,
        height: 1024,
        alt: "Pflasterfläche und Gartenanlage – Rıfat Garten- & Landschaftsbau",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/hero-garden-paving.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${fraunces.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream-50 font-sans text-ink">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-cream-50 focus:px-4 focus:py-2 focus:text-ink"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <div id="inhalt" className="flex min-h-full flex-col">
          {children}
        </div>
        <Footer />
        <MobileCallBar />
        <JsonLd />
      </body>
    </html>
  );
}
