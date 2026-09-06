import Link from "next/link";
import { PhoneIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-cream-200 bg-cream-50/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-2 gap-2">
        {siteConfig.phone.available ? (
          <a
            href={siteConfig.phone.href}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-forest-800 text-sm font-semibold text-forest-800"
          >
            <PhoneIcon className="h-5 w-5" />
            Anrufen
          </a>
        ) : (
          <Link
            href="/#kontakt"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-forest-800 text-sm font-semibold text-forest-800"
          >
            <PhoneIcon className="h-5 w-5" />
            Jetzt kontaktieren
          </Link>
        )}
        <Link
          href="/#kontakt"
          className="inline-flex h-12 items-center justify-center rounded-md bg-forest-800 text-sm font-semibold text-cream-50"
        >
          Angebot anfragen
        </Link>
      </div>
    </div>
  );
}
