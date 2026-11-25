import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "outline";
}

const variantStyles: Record<string, string> = {
  default:
    "bg-white/5 border border-white/10 text-text-primary",
  accent:
    "bg-accent/10 text-accent border border-accent/20",
  outline:
    "border border-white/10 text-text-secondary",
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
}
