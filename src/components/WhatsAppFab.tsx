import { WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={siteConfig.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={siteConfig.whatsapp.label}
      className="fixed right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#A22727] text-white shadow-[0_10px_28px_rgba(162,39,39,0.4)] transition-transform duration-300 hover:scale-110 hover:bg-[#8b1e1e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A22727] focus-visible:ring-offset-2 bottom-[5.5rem] lg:bottom-6 lg:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="sr-only">{siteConfig.whatsapp.label}</span>
    </a>
  );
}
