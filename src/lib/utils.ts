type ClassValue = string | boolean | undefined | null;

/**
 * Joins class names, filtering out falsy values.
 */
export function cn(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(" ");
}

/**
 * Returns an empty string if the user prefers reduced motion,
 * otherwise returns the provided value.
 */
export function motionSafe(value: string): string {
  if (typeof window === "undefined") return value;
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  return prefersReduced ? "" : value;
}
