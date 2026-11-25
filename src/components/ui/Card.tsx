"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const background = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(0,229,255,0.06), transparent 80%)`;

  if (hover) {
    return (
      <motion.div
        className={`group relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-card backdrop-blur-md ${className}`}
        onMouseMove={handleMouseMove}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {/* Glow overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background }}
        />
        {/* Accent border glow near cursor */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(0,229,255,0.15), transparent 70%)`,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-border-subtle bg-bg-card backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}
