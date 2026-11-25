"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { certificates, type Certificate } from "@/data/certificates";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: (i % 8) * 0.06, duration: 0.45, ease: "easeOut" as const },
  }),
};

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const markFailed = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="certificates" className="relative bg-bg-primary py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Certificates"
          subtitle="Verified credentials across AI, networking, cybersecurity, cloud, and engineering."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {certificates.map((cert, index) => {
            const hasFailed = failedImages[cert.id];

            return (
              <motion.div
                key={cert.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index}
              >
                <Card hover className="group overflow-hidden">
                  <div
                    role="button"
                    tabIndex={0}
                    aria-label={`Inspect certificate: ${cert.name}`}
                    onClick={() => setSelectedCert(cert)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedCert(cert);
                      }
                    }}
                    className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden bg-bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {hasFailed ? (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-accent/10 via-bg-card to-bg-primary p-4 text-center">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="text-accent/70"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="8" r="6" />
                          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                        </svg>
                        <span className="line-clamp-2 text-xs font-medium text-text-secondary">
                          {cert.name}
                        </span>
                      </div>
                    ) : (
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={() => markFailed(cert.id)}
                      />
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/70 opacity-0 backdrop-blur-xs transition-opacity duration-200 group-hover:opacity-100">
                      <button
                        type="button"
                        aria-label={`Preview ${cert.name}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCert(cert);
                        }}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:border-accent hover:text-accent"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.3-4.3" />
                        </svg>
                      </button>

                      {cert.pdfLink && (
                        <a
                          href={cert.pdfLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-black transition-opacity hover:opacity-90"
                        >
                          View
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-3.5">
                    <p
                      title={cert.name}
                      className="truncate text-sm font-medium text-text-primary"
                    >
                      {cert.name}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox modal */}
      <Modal
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.name}
      >
        {selectedCert && (
          <div className="flex flex-col gap-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border-subtle bg-bg-card">
              {failedImages[selectedCert.id] ? (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-accent/15 to-bg-card p-6 text-center">
                  <span className="font-heading text-lg font-semibold text-text-primary">
                    {selectedCert.name}
                  </span>
                </div>
              ) : (
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 672px"
                  onError={() => markFailed(selectedCert.id)}
                />
              )}
            </div>

            {selectedCert.pdfLink && (
              <div className="flex justify-end">
                <Button
                  variant="primary"
                  size="sm"
                  href={selectedCert.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open PDF
                </Button>
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}
