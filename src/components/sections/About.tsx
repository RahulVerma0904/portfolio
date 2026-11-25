"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personal } from "@/data/personal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export function About() {
  const { craft, mindset, location } = personal.about;
  const [mindsetImgErr, setMindsetImgErr] = useState(false);
  const [locationImgErr, setLocationImgErr] = useState(false);

  return (
    <section id="about" className="relative bg-bg-primary py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* ── Card 1 – CRAFT ── */}
          <motion.div
            className="md:col-span-2 lg:col-span-1"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
          >
            <Card hover className="relative h-full overflow-hidden">
              {/* Accent gradient bg */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />

              <div className="relative z-10 flex flex-col gap-5 p-6">
                <span className="font-heading text-sm uppercase tracking-widest text-accent">
                  Craft
                </span>

                <p className="font-body text-text-secondary leading-relaxed">
                  {craft.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {craft.tags.map((tag: string) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* ── Card 2 – MINDSET ── */}
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={1}
          >
            <Card hover className="relative h-full overflow-hidden">
              {/* Background image */}
              <div className="pointer-events-none absolute inset-0">
                {!mindsetImgErr && (
                  <Image
                    src="/c1.jpg"
                    alt=""
                    fill
                    className="object-cover opacity-20"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    onError={() => setMindsetImgErr(true)}
                  />
                )}
                <div className="absolute inset-0 bg-bg-card/80" />
              </div>

              <div className="relative z-10 flex flex-col gap-5 p-6">
                <span className="font-heading text-sm uppercase tracking-widest text-accent">
                  Mindset
                </span>

                <p className="font-body text-text-secondary leading-relaxed">
                  {mindset.description}
                </p>

                {/* Pull quote */}
                <blockquote className="border-l-2 border-accent pl-4">
                  <p className="font-heading text-lg italic text-text-primary">
                    &ldquo;Build with purpose. Lead with vision.&rdquo;
                  </p>
                </blockquote>
              </div>
            </Card>
          </motion.div>

          {/* ── Card 3 – LOCATION ── */}
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={2}
          >
            <Card hover className="relative h-full overflow-hidden">
              {/* Background image */}
              <div className="pointer-events-none absolute inset-0">
                {!locationImgErr && (
                  <Image
                    src="/manama.jpg"
                    alt=""
                    fill
                    className="object-cover opacity-20"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    onError={() => setLocationImgErr(true)}
                  />
                )}
                <div className="absolute inset-0 bg-bg-card/80" />
              </div>

              <div className="relative z-10 flex flex-col gap-5 p-6">
                <span className="font-heading text-sm uppercase tracking-widest text-accent">
                  Location
                </span>

                <div className="flex items-start gap-3">
                  {/* Pin icon */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mt-1 shrink-0 text-accent"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                      fill="currentColor"
                      opacity="0.3"
                    />
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
                      fill="currentColor"
                    />
                  </svg>

                  <div>
                    <p className="font-heading text-xl text-text-primary">
                      {location.city}
                    </p>
                    <p className="mt-1 font-mono text-sm text-text-secondary">
                      {location.coordinates}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
