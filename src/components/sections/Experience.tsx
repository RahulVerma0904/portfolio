"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      line.style.height = "100%";
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative bg-bg-primary py-24 px-6"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Professional Experience"
          subtitle="Roles across AI automation, web engineering, and university robotics leadership."
          align="center"
        />

        <div className="relative mt-16">
          {/* Static track line */}
          <div className="absolute top-0 bottom-0 left-4 w-px bg-border-subtle md:left-1/2 md:-translate-x-1/2" />

          {/* Animated draw line */}
          <div
            ref={lineRef}
            className="absolute top-0 left-4 w-px bg-gradient-to-b from-accent/40 via-accent to-accent/40 shadow-[0_0_12px_rgba(0,229,255,0.4)] md:left-1/2 md:-translate-x-1/2"
            style={{ height: "0%" }}
          />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className={`relative flex items-start pl-12 md:pl-0 ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline node */}
                  <div
                    className="absolute top-6 left-4 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-accent bg-bg-primary shadow-[0_0_14px_rgba(0,229,255,0.6)] md:left-1/2"
                    aria-hidden="true"
                  />

                  <div
                    className={`w-full md:w-[calc(50%-2.5rem)] ${
                      isLeft ? "md:pr-2" : "md:pl-2"
                    }`}
                  >
                    <Card hover className="max-w-md p-6">
                      <span className="font-mono text-sm text-accent">
                        {exp.period}
                      </span>
                      <h3 className="mt-1 font-heading text-xl font-bold text-text-primary">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-text-secondary">
                        {exp.company}
                      </p>
                      <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary">
                        {exp.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.highlights.map((highlight) => (
                          <Badge key={highlight} variant="outline">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
