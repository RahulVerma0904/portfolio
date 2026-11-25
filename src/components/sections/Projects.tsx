"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const markImageFailed = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="projects" className="relative bg-bg-primary py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Featured Projects"
          subtitle="Selected work across AI, computer vision, full-stack systems, and autonomous robotics."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => {
            const isFeatured = index < 2;
            const hasFailed = failedImages[project.id];

            return (
              <motion.article
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index}
                className={
                  isFeatured
                    ? "md:col-span-2 lg:col-span-2"
                    : "col-span-1"
                }
              >
                <div
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${project.title}`}
                  onClick={() => setSelectedProject(project)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-border-subtle bg-bg-card transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(0,229,255,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isFeatured ? "aspect-[16/10]" : "aspect-[4/3]"
                  }`}
                >
                  {/* Cover image or graceful fallback */}
                  {hasFailed ? (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/15 via-bg-card to-bg-primary">
                      <span className="font-heading text-4xl font-bold text-accent/30">
                        #{String(project.number).padStart(2, "0")}
                      </span>
                    </div>
                  ) : (
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes={
                        isFeatured
                          ? "(max-width: 768px) 100vw, 50vw"
                          : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      }
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={() => markImageFailed(project.id)}
                    />
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/15 transition-opacity duration-300 group-hover:from-black/95 group-hover:via-black/55" />

                  {/* Top row: number & badge */}
                  <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/60 font-mono text-xs text-text-primary backdrop-blur-md">
                      #{String(project.number).padStart(2, "0")}
                    </span>

                    {project.badge && (
                      <Badge variant="accent">{project.badge}</Badge>
                    )}
                  </div>

                  {/* Bottom overlay content */}
                  <div className="absolute inset-x-5 bottom-5 flex flex-col gap-1.5">
                    <span className="font-heading text-xs uppercase tracking-widest text-accent">
                      {project.category}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-text-primary transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Project detail modal */}
      <Modal
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="flex flex-col gap-5">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border-subtle bg-bg-card">
              {failedImages[selectedProject.id] ? (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/15 via-bg-card to-bg-primary">
                  <span className="font-heading text-5xl font-bold text-accent/40">
                    #{String(selectedProject.number).padStart(2, "0")}
                  </span>
                </div>
              ) : (
                <Image
                  src={selectedProject.coverImage}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                  onError={() => markImageFailed(selectedProject.id)}
                />
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="default">{selectedProject.category}</Badge>
              {selectedProject.badge && (
                <Badge variant="accent">{selectedProject.badge}</Badge>
              )}
              <span className="ml-auto font-mono text-xs text-text-secondary">
                Role: {selectedProject.role}
              </span>
            </div>

            <p className="font-body leading-relaxed text-text-secondary">
              {selectedProject.description}
            </p>

            <div>
              <p className="mb-2 font-heading text-xs uppercase tracking-widest text-text-secondary">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {selectedProject.links && selectedProject.links.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-2">
                {selectedProject.links.map((link) => (
                  <Button
                    key={link.href}
                    variant="primary"
                    size="sm"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}
