import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone.available
      ? siteConfig.phone.href.replace("tel:", "")
      : undefined,
    email: siteConfig.email.available ? siteConfig.email.display : undefined,
    areaServed: siteConfig.serviceArea.available
      ? siteConfig.serviceArea.display
      : "DE",
    inLanguage: "de",
    image: `${siteConfig.url}/images/tiefbau-baustelle.png`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
