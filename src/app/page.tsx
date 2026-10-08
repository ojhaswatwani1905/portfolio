"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { DomainExpertise } from "@/components/DomainExpertise";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollIndicators } from "@/components/ScrollIndicators";
import { ResumeModal } from "@/components/ResumeModal";

export default function HomePage() {
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  const handleOpenContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const topOffset = el.offsetTop - 70;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F4EFE5] text-[#161616] selection:bg-[#8B6F47] selection:text-[#FAF7F2]">
      {/* Scroll Progress Bar and Side Section Tracker */}
      <ScrollIndicators />

      {/* Navigation Bar */}
      <Navbar
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <About onOpenContact={handleOpenContact} />
        <DomainExpertise />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
