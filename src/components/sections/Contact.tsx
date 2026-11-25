"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personal } from "@/data/personal";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: open mailto if clipboard is unavailable
      window.location.href = `mailto:${personal.email}`;
    }
  };

  return (
    <section id="contact" className="relative bg-bg-primary py-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <h2 className="font-heading text-5xl font-bold text-text-primary md:text-7xl">
            {personal.contact.heading}
          </h2>

          <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-text-secondary">
            {personal.contact.copy}
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <Button variant="primary" href={`mailto:${personal.email}`}>
              Get In Touch
            </Button>

            <Button
              variant="secondary"
              href={personal.contact.resumePath}
              target="_blank"
              rel="noopener noreferrer"
            >
              Review Resume
            </Button>

            <Button
              variant="ghost"
              href={personal.contact.resumePath}
              download="Abdalla-Elsiddig-Resume.pdf"
            >
              Download Resume
            </Button>
          </div>

          <div className="relative mt-4">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="cursor-pointer font-mono text-lg text-accent transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {personal.email}
            </button>

            {copied && (
              <span className="ml-3 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                Copied!
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
