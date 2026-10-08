"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterOptions = [
    "ALL",
    "FINTECH",
    "BANKING",
    "TRADING",
    "DIGITAL ASSETS",
    "PAYMENTS",
    "AI/ML",
    "GAMING",
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    if (selectedCategory === "ALL") return true;
    const target = selectedCategory.toUpperCase();

    // Check explicit filter categories
    if (project.filterCategories?.some((fc) => fc.toUpperCase() === target)) {
      return true;
    }

    // Check category title
    if (project.category.toUpperCase().includes(target)) {
      return true;
    }

    // Check system focus / tags
    if (project.systemFocus?.some((sf) => sf.toUpperCase().includes(target))) {
      return true;
    }
    if (project.tags?.some((tag) => tag.toUpperCase().includes(target))) {
      return true;
    }

    return false;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-[1px] bg-[#8B6F47]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#8B6F47] font-semibold">
            Featured Systems Portfolio
          </span>
          <span className="w-12 h-[1px] bg-[#E2D8C7]" />
        </div>

        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#161616]">
                Featured Systems
              </h2>
              <div className="w-8 h-8 rounded-full bg-[#EDE5D7] border border-[#D5C9B4] flex items-center justify-center text-[#8B6F47]">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            <p className="mt-2 text-sm sm:text-base text-[#4A433A] max-w-2xl font-sans leading-relaxed">
              An architectural archive of 8 featured systems spanning digital banking, trading platforms,
              multi-currency wallet infrastructure, payment orchestration, financial intelligence, and real-time backend services.
            </p>
          </div>

          {/* Filter Pills with smooth layout animation */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#EDE5D7]/85 rounded-full border border-[#D5C9B4] shadow-xs self-start lg:self-auto max-w-full">
            {filterOptions.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "text-[#FAF7F2]"
                    : "text-[#645D53] hover:text-[#161616]"
                }`}
              >
                {selectedCategory === cat && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 bg-[#161616] rounded-full shadow-xs -z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid: 2-column Editorial Layout on Desktop, responsive stacked on mobile */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onSelect={(proj) => setActiveProject(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footnote / Architecture Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 bg-[#FAF7F2] border border-[#E2D8C7] rounded-full text-xs text-[#7A7268] font-mono shadow-2xs">
            <span>
              SHOWING {filteredProjects.length} OF {PROJECTS.length} FEATURED SYSTEMS
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="text-[#8B6F47] font-semibold">CLICK ANY CARD TO EXPAND CASE STUDY</span>
          </div>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
