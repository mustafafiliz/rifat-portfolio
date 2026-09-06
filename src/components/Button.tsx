import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-forest-800 text-cream-50 hover:bg-forest-700 shadow-[0_1px_0_rgba(255,255,255,0.08)_inset]",
  secondary:
    "border border-white/30 bg-white/10 text-cream-50 backdrop-blur-sm hover:bg-white/20",
  outline:
    "border border-forest-800 text-forest-800 hover:bg-forest-800 hover:text-cream-50",
  light:
    "bg-cream-50 text-forest-900 hover:bg-white",
} as const;

const sizes = {
  md: "px-5 py-3 text-[0.95rem]",
  lg: "px-6 py-3.5 text-base",
} as const;

type ButtonProps = {
  href?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
