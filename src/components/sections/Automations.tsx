"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { automations, automationsIntro } from "@/data/automations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function Automations() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section id="automations" className="relative bg-bg-primary py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="AI automation systems" align="center" />

        <p className="mx-auto mt-4 mb-12 max-w-3xl text-center font-body text-lg leading-relaxed text-text-secondary">
          {automationsIntro}
        </p>

        {/* Preview video slot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="relative mb-12 aspect-video w-full overflow-hidden rounded-2xl border border-border-subtle bg-bg-card"
        >
          {videoError ? (
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-accent/10 via-bg-card to-bg-primary p-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div>
                <p className="font-heading text-lg font-semibold text-text-primary">
                  Systems Preview
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  Multi-agent orchestration &amp; support automation demo
                </p>
              </div>
            </div>
          ) : (
            <video
              src="/systems-preview.mp4"
              poster="/systems-preview-poster.jpg"
              muted
              autoPlay
              loop
              playsInline
              onError={() => setVideoError(true)}
              className="h-full w-full object-cover"
            />
          )}
        </motion.div>

        {/* 4 Automation cards in 2x2 grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {automations.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={index}
            >
              <Card
                hover
                className="h-full border-l-2 border-l-accent p-6"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_#00e5ff]" />
                    <span className="font-heading text-xs uppercase tracking-widest text-accent">
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-text-primary">
                    {item.title}
                  </h3>

                  <p className="font-body text-text-secondary leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
