"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.15 + i * 0.05, duration: 0.35 },
  }),
};

export function Skills() {
  return (
    <section id="skills" className="relative bg-bg-primary py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Technical Skills"
          subtitle="Core languages, robotics protocols, and AI/computer vision frameworks."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={groupIdx}
            >
              <Card hover className="h-full p-6">
                <h3 className="mb-5 font-heading text-sm uppercase tracking-widest text-accent">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill, skillIdx) => (
                    <motion.span
                      key={skill.name}
                      variants={chipVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={skillIdx}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-text-primary transition-all duration-200 hover:border-accent/50 hover:bg-accent/10 hover:text-accent hover:shadow-[0_0_16px_rgba(0,229,255,0.18)]"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
