import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";

export function Logo({
  className,
  variant = "compact",
}: {
  className?: string;
  inverted?: boolean;
  variant?: "compact" | "full";
}) {
  const large = variant === "full";

  return (
    <span
      className={cn(
        "inline-flex items-stretch overflow-hidden rounded-sm border border-black/10 shadow-[0_1px_2px_rgba(0,0,0,0.08)]",
        large ? "h-14 sm:h-16" : "h-11 lg:h-12",
        className,
      )}
      aria-label={`${siteConfig.name} – ${siteConfig.tagline}`}
    >
      <span
        className={cn(
          "flex items-center bg-white font-display font-bold leading-none tracking-tight text-black",
          large ? "px-5 text-[1.85rem] sm:text-[2.1rem]" : "px-3.5 text-[1.4rem] lg:px-4 lg:text-[1.6rem]",
        )}
      >
        Inces
      </span>
      <span
        className={cn(
          "flex items-center bg-[#A22727] font-display italic leading-none text-white",
          large ? "px-5 text-[1.2rem] sm:text-[1.35rem]" : "px-3.5 text-[0.98rem] lg:px-4 lg:text-[1.12rem]",
        )}
      >
        www.inces.de
      </span>
    </span>
  );
}
