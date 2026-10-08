"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterOptions = ["All", "FinTech", "Banking", "Trading", "Crypto", "Gaming"];

  const filteredProjects = PROJECTS.filter((project) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "FinTech") {
      return (
        project.category.toLowerCase().includes("fintech") ||
        project.tags.some((t) => t.toLowerCase() === "fintech")
      );
    }
    if (selectedCategory === "Banking") {
      return (
        project.category.toLowerCase().includes("banking") ||
        project.tags.some((t) => t.toLowerCase() === "banking")
      );
    }
    if (selectedCategory === "Trading") {
      return (
        project.category.toLowerCase().includes("trading") ||
        project.tags.some((t) => t.toLowerCase() === "trading")
      );
    }
    if (selectedCategory === "Crypto") {
      return (
        project.category.toLowerCase().includes("crypto") ||
        project.tags.some((t) => t.toLowerCase() === "crypto")
      );
    }
    if (selectedCategory === "Gaming") {
      return (
        project.category.toLowerCase().includes("gaming") ||
        project.tags.some((t) => t.toLowerCase() === "gaming")
      );
    }
    return true;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-[1px] bg-[#8B6F47]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#8B6F47] font-semibold">
            Featured Projects
          </span>
          <span className="w-12 h-[1px] bg-[#E2D8C7]" />
        </div>

        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#161616]">
                Selected Work
              </h2>
              <div className="w-8 h-8 rounded-full bg-[#EDE5D7] border border-[#D5C9B4] flex items-center justify-center text-[#8B6F47]">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            <p className="mt-2 text-sm sm:text-base text-[#4A433A] max-w-xl font-sans">
              A showcase of financial products and technology systems across banking,
              trading, crypto and gaming.
            </p>
          </div>

          {/* Filter Pills with real smooth animations */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 bg-[#EDE5D7]/80 rounded-full border border-[#D5C9B4] shadow-xs self-start lg:self-auto">
            {filterOptions.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
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

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAF7F2] border border-[#E2D8C7] rounded-full text-xs text-[#7A7268] font-mono">
            <span>SHOWING {filteredProjects.length} OF {PROJECTS.length} FEATURED SYSTEMS</span>
            <span>•</span>
            <span className="text-[#8B6F47]">CLICK ANY CARD TO EXPAND DEEP DIVE</span>
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
