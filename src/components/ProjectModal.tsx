"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Cpu, ShieldCheck, Layers } from "lucide-react";
import { Project } from "@/data/portfolioData";
import { ProjectVisualization } from "./ProjectVisualization";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#161616]/75 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className="relative w-full max-w-4xl bg-[#FAF7F2] border border-[#E0D7C6] rounded-xs shadow-2xl overflow-hidden z-10 max-h-[94vh] sm:max-h-[92vh] flex flex-col"
          >
            {/* Header bar */}
            <div className="px-4 py-3 sm:px-6 sm:py-4 bg-[#EDE5D7] border-b border-[#E0D7C6] flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#161616] text-[#FAF7F2] rounded-xs shrink-0">
                  {project.number}
                </span>
                <span className="text-[11px] sm:text-xs uppercase font-mono tracking-widest text-[#8B6F47] font-semibold truncate">
                  {project.category}
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 sm:p-2 rounded-full hover:bg-[#E0D7C6] text-[#161616] transition-colors shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto p-4 sm:p-8 space-y-4 sm:space-y-6">
              
              {/* Title & Role */}
              <div>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#161616] leading-tight">
                  {project.number} — {project.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#645D53]">
                  <span className="font-semibold text-[#8B6F47]">Role: {project.role}</span>
                  <span className="hidden xs:inline">•</span>
                  <span className="font-mono text-[11px] sm:text-xs">SYSTEM ARCHITECTURE CASE STUDY</span>
                </div>
              </div>

              {/* High-res UI Product Mockup or Architectural Vector Diagram */}
              <div className="relative aspect-[16/9] w-full rounded-xs overflow-hidden border border-[#D5C9B4] shadow-md bg-[#141210]">
                {project.diagramType ? (
                  <ProjectVisualization type={project.diagramType} />
                ) : project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 850px"
                  />
                ) : null}
              </div>

              {/* OVERVIEW */}
              <div className="p-4 bg-white border border-[#E0D7C6] rounded-xs">
                <h4 className="text-[11px] uppercase font-mono tracking-wider font-bold text-[#8B6F47] mb-1.5">
                  OVERVIEW
                </h4>
                <p className="text-xs sm:text-sm text-[#29251F] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* BUSINESS PROBLEM & SYSTEM SOLUTION GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-[#E0D7C6] rounded-xs">
                  <h4 className="text-[11px] uppercase font-mono tracking-wider font-bold text-[#8B6F47] mb-1.5">
                    BUSINESS / PRODUCT PROBLEM
                  </h4>
                  <p className="text-xs text-[#4A433A] leading-relaxed font-sans">
                    {project.businessProblem}
                  </p>
                </div>

                <div className="p-4 bg-white border border-[#E0D7C6] rounded-xs">
                  <h4 className="text-[11px] uppercase font-mono tracking-wider font-bold text-[#8B6F47] mb-1.5">
                    SYSTEM SOLUTION
                  </h4>
                  <p className="text-xs text-[#4A433A] leading-relaxed font-sans">
                    {project.systemSolution}
                  </p>
                </div>
              </div>

              {/* KEY CAPABILITIES */}
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-[#8B6F47] mb-2.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  KEY CAPABILITIES
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.keyCapabilities.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 p-2.5 bg-white border border-[#E0D7C6] rounded-xs text-xs text-[#29251F]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8B6F47] shrink-0 mt-0.5" />
                      <span className="font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ARCHITECTURE & IMPACT */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-[#EDE5D7]/60 border border-[#D5C9B4] rounded-xs">
                  <h4 className="text-[11px] uppercase font-mono tracking-wider font-bold text-[#161616] mb-1.5 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#8B6F47]" />
                    ARCHITECTURE NOTES
                  </h4>
                  <p className="text-xs text-[#4A433A] leading-relaxed font-sans">
                    {project.architectureNotes}
                  </p>
                </div>

                <div className="p-4 bg-[#EDE5D7]/60 border border-[#D5C9B4] rounded-xs">
                  <h4 className="text-[11px] uppercase font-mono tracking-wider font-bold text-[#161616] mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8B6F47]" />
                    QUALITATIVE IMPACT
                  </h4>
                  <p className="text-xs text-[#4A433A] leading-relaxed font-sans">
                    {project.impactOutcome}
                  </p>
                </div>
              </div>

              {/* TECHNOLOGY */}
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-[#8B6F47] mb-2 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4" />
                  TECHNOLOGY
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white border border-[#D5C9B4] text-xs font-mono font-medium text-[#29251F] rounded-full shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-4 py-3 sm:px-6 sm:py-4 bg-[#EDE5D7]/70 border-t border-[#E0D7C6] flex flex-col sm:flex-row items-center justify-between gap-2.5">
              <span className="text-[11px] sm:text-xs text-[#7A7268] font-mono text-center sm:text-left">
                SYSTEM CASE STUDY // OJHAS WATWANI
              </span>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 sm:py-2 bg-[#161616] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-[#29251F] transition-colors text-center cursor-pointer"
              >
                Close Case Study
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
