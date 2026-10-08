"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Project } from "@/data/portfolioData";
import { ProjectVisualization } from "./ProjectVisualization";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  const isPrimary = index < 5 && !project.isSecondary;

  return (
    <motion.div
      layout
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="relative flex flex-col h-full cursor-pointer group"
      onClick={() => onSelect(project)}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
    >
      {/* Compact Editorial Paper Sheet Card */}
      <div
        className={`paper-sheet p-4 sm:p-5 bg-white rounded-xs border flex flex-col justify-between h-full relative shadow-xs transition-all duration-300 ${
          isPrimary
            ? "border-[#D8CEBC] group-hover:border-[#8B6F47]/60 group-hover:shadow-md"
            : "border-[#E4DCCE] opacity-95 group-hover:opacity-100 group-hover:border-[#8B6F47]/40"
        }`}
      >
        <div className="flex flex-col">
          {/* Card Top: Number, Badge, and Action Icon */}
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#F0E8DC]">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#161616]">
                {project.number}
              </span>
              <span
                className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-xs font-semibold ${
                  isPrimary
                    ? "bg-[#FAF7F2] border border-[#D5C9B4] text-[#8B6F47]"
                    : "bg-[#F5EFE6] border border-[#E0D7C6] text-[#7A7268]"
                }`}
              >
                {isPrimary ? "PRIMARY SYSTEM" : "SYSTEM ARCHIVE"}
              </span>
            </div>

            <div className="w-7 h-7 rounded-full bg-[#FAF7F2] border border-[#D5C9B4] flex items-center justify-center text-[#161616] group-hover:bg-[#161616] group-hover:text-white transition-colors duration-200 shrink-0">
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          {/* Category */}
          <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#8B6F47] font-semibold mb-2.5 truncate">
            {project.category}
          </p>

          {/* Moderate Height Image / Architectural Diagram */}
          <div className="relative aspect-[16/10] w-full rounded-xs overflow-hidden mb-3 bg-[#141210] border border-[#E0D7C6]">
            {project.diagramType ? (
              <ProjectVisualization type={project.diagramType} />
            ) : project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
              />
            ) : null}
          </div>

          {/* Project Title */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#161616] group-hover:text-[#8B6F47] transition-colors leading-snug tracking-tight">
            {project.title}
          </h3>

          {/* Very short 1-2 line description */}
          <p className="text-xs text-[#4A433A] leading-relaxed mt-1.5 font-sans line-clamp-2">
            {project.brief}
          </p>
        </div>

        {/* Card Footer: Compact VIEW CASE STUDY → Action */}
        <div className="pt-3 mt-3.5 border-t border-[#F0E8DC] flex items-center justify-between text-xs font-semibold text-[#161616]">
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#161616] group-hover:text-[#8B6F47] transition-colors flex items-center gap-1.5">
            VIEW CASE STUDY
            <ArrowRight className="w-3.5 h-3.5 text-[#8B6F47] group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="font-mono text-[10px] text-[#A89A88]">
            {project.number} / 08
          </span>
        </div>
      </div>
    </motion.div>
  );
};
