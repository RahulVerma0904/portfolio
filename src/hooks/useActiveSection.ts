"use client";

import { useEffect, useState } from "react";

const DEFAULT_SECTION_IDS = [
  "home",
  "projects",
  "automations",
  "skills",
  "services",
  "certificates",
  "experience",
  "contact",
];

export function useActiveSection(
  sectionIds: string[] = DEFAULT_SECTION_IDS
): string {
  const [activeSection, setActiveSection] = useState<string>(
    sectionIds[0] || "home"
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
}
