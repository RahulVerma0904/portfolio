"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
};

type ButtonAsButton = BaseProps &
  Omit<HTMLMotionProps<"button">, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = BaseProps &
  Omit<HTMLMotionProps<"a">, keyof BaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const variantStyles: Record<string, string> = {
  primary:
    "bg-accent text-black font-semibold hover:bg-accent/90",
  secondary:
    "bg-bg-card border border-border-subtle text-text-primary backdrop-blur-md hover:bg-bg-card-hover",
  ghost:
    "text-text-secondary hover:bg-white/5 hover:text-text-primary",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        {...(rest as Omit<HTMLMotionProps<"a">, keyof BaseProps>)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...(rest as Omit<HTMLMotionProps<"button">, keyof BaseProps>)}
    >
      {children}
    </motion.button>
  );
}

export default Button;
