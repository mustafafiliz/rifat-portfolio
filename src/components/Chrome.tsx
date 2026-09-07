import { siteConfig } from "@/lib/site";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

export function CallBar() {
  return (
    <div className="callbar">
      <a href={siteConfig.email.href}>
        <MailIcon />
        Kontakt
      </a>
      <a href={siteConfig.whatsapp.href} target="_blank" rel="noopener">
        <WhatsAppIcon />
        WhatsApp
      </a>
    </div>
  );
}

export function Rail() {
  return (
    <div className="rail">
      <a href={siteConfig.phone.href} aria-label={`Anrufen: ${siteConfig.phone.display}`}>
        <b>{siteConfig.phone.display}</b>
        <PhoneIcon />
      </a>
      <a href={siteConfig.email.href} aria-label="E-Mail schreiben">
        <b>Angebot anfragen</b>
        <MailIcon />
      </a>
      <a
        href={siteConfig.whatsapp.href}
        target="_blank"
        rel="noopener"
        aria-label="Per WhatsApp schreiben"
      >
        <b>Per WhatsApp</b>
        <WhatsAppIcon />
      </a>
    </div>
  );
}
