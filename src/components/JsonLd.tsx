import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone.available ? siteConfig.phone.display : undefined,
    email: siteConfig.email.available ? siteConfig.email.display : undefined,
    areaServed: siteConfig.serviceArea.available
      ? siteConfig.serviceArea.display
      : "DE",
    inLanguage: "de",
    image: `${siteConfig.url}/images/hero-garden-paving.png`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
