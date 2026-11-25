"use client";

import { useState, useMemo } from "react";
import { navItems } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { SplashScreen } from "@/components/layout/SplashScreen";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ChatWidget } from "@/components/ui/ChatWidget";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Automations } from "@/components/sections/Automations";
import { Skills } from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services";
import { Certificates } from "@/components/sections/Certificates";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.replace("#", "")),
    []
  );
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}

      <CustomCursor />
      <Navbar activeSection={activeSection} />

      <main className="relative overflow-x-clip">
        <Hero />
        <About />
        <Projects />
        <Automations />
        <Skills />
        <Services />
        <Certificates />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <ChatWidget />
    </>
  );
}
