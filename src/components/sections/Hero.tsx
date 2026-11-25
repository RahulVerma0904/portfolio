"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { personal } from "@/data/personal";
import { CountUp } from "@/components/ui/CountUp";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const charVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.035, duration: 0.5, ease: "easeOut" as const },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" as const },
  }),
};

export function Hero() {
  const [imgError, setImgError] = useState(false);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, -80]);

  const nameChars = personal.name.split("");
  const nameAnimDuration = 0.3 + nameChars.length * 0.035 + 0.5;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-bg-primary"
    >
      {/* ── Grid background ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Ambient glow ── */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/5 blur-[160px]" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:grid lg:grid-cols-2 lg:gap-16">
        {/* ── Left column ── */}
        <div className="flex flex-col gap-8">
          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-3"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            <span className="h-px w-8 bg-accent" />
            <span className="font-heading text-sm uppercase tracking-widest text-accent">
              {personal.title}
            </span>
          </motion.div>

          {/* Name – character split reveal */}
          <h1
            className="font-display whitespace-nowrap text-3xl font-bold uppercase tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
            style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
          >
            {nameChars.map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={charVariants}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            className="font-heading text-xl text-text-secondary md:text-2xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={nameAnimDuration + 0.1}
          >
            {personal.subtitle}
          </motion.p>

          {/* Stat chips */}
          <motion.div
            className="flex flex-wrap gap-3"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={nameAnimDuration + 0.3}
          >
            {personal.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2 rounded-full border border-border-subtle bg-bg-card/60 px-4 py-2 backdrop-blur-sm"
              >
                <span className="font-heading text-lg font-semibold text-accent">
                  <CountUp end={stat.value} />
                </span>
                <span className="text-sm text-text-secondary">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Highlight badges */}
          <motion.div
            className="flex flex-wrap gap-3"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={nameAnimDuration + 0.5}
          >
            <Badge variant="accent">Now: {personal.currentRole}</Badge>
            <Badge variant="accent">{personal.heroHighlight}</Badge>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={nameAnimDuration + 0.7}
          >
            <Button variant="primary" href="#contact">
              Book a call
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open-chat"))
              }
            >
              Ask my AI
            </Button>
          </motion.div>
        </div>

        {/* ── Right column (desktop) ── */}
        <motion.div
          className="mt-16 hidden items-center justify-center lg:mt-0 lg:flex"
          style={{ y: parallaxY }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={nameAnimDuration + 0.4}
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-3 rounded-2xl bg-accent/10 blur-2xl" />

            <div className="relative h-[500px] w-[500px] overflow-hidden rounded-2xl border border-accent/20">
              {imgError ? (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/20 to-bg-card">
                  <span className="font-heading text-6xl font-bold text-accent/60">
                    RV
                  </span>
                </div>
              ) : (
                <Image
                  src="/profile.png"
                  alt={personal.fullName}
                  width={500}
                  height={500}
                  priority
                  className="h-full w-full object-cover"
                  onError={() => setImgError(true)}
                />
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-text-secondary"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}
