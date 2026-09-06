import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="8" fill="#243B30" />
      <rect x="8" y="27" width="14" height="9" rx="1.2" fill="#F1EBE2" />
      <rect x="24" y="27" width="16" height="9" rx="1.2" fill="#E4DACB" />
      <path
        d="M24 28c0-7.2-6.2-11.5-10.5-12.2 2 5.2 6 8.4 10.5 11 0-6.2 5.4-11.4 11.2-12.2-1.6 5.4-5.6 9-11.2 13.4Z"
        fill="#8FA98C"
      />
      <path
        d="M24 29V16"
        stroke="#DCE6D8"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <LogoMark className="h-10 w-10" />
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={cn(
            "font-display text-[1.15rem] font-medium tracking-tight",
            inverted ? "text-cream-50 drop-shadow-sm" : "text-ink",
          )}
        >
          {siteConfig.shortName}
        </span>
        <span
          className={cn(
            "truncate text-[0.68rem] font-semibold uppercase tracking-[0.14em]",
            inverted ? "text-cream-200 drop-shadow-sm" : "text-forest-700",
          )}
        >
          Garten- & Landschaftsbau
        </span>
      </span>
    </span>
  );
}
