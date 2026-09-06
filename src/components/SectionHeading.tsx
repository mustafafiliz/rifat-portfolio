import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const centered = align === "center";

  return (
    <div className={cn(centered && "mx-auto max-w-2xl text-center", !centered && "max-w-2xl")}>
      <p
        className={cn(
          "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em]",
          centered && "justify-center",
          tone === "dark" ? "text-stone-300" : "text-forest-700",
        )}
      >
        <span
          className={cn(
            "h-px w-8",
            tone === "dark" ? "bg-stone-400" : "bg-forest-600",
          )}
        />
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]",
          tone === "dark" ? "text-cream-50" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            tone === "dark" ? "text-cream-200/90" : "text-ink-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
