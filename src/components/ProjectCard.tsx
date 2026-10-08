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
      {/* Editorial Paper Sheet Card */}
      <div
        className={`paper-sheet p-5 sm:p-6 bg-white rounded-xs border flex flex-col justify-between h-full relative shadow-xs transition-all duration-300 ${
          isPrimary
            ? "border-[#D8CEBC] group-hover:border-[#8B6F47]/60 group-hover:shadow-md"
            : "border-[#E4DCCE] opacity-95 group-hover:opacity-100 group-hover:border-[#8B6F47]/40"
        }`}
      >
        <div className="flex flex-col">
          {/* Card Top: Number, Category, and Action Icon */}
          <div className="flex items-start justify-between pb-3.5 mb-3.5 border-b border-[#F0E8DC]">
            <div>
              <div className="flex items-baseline gap-2.5">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#161616]">
                  {project.number}
                </span>
                <span
                  className={`text-[9px] sm:text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-xs font-semibold ${
                    isPrimary
                      ? "bg-[#FAF7F2] border border-[#D5C9B4] text-[#8B6F47]"
                      : "bg-[#F5EFE6] border border-[#E0D7C6] text-[#7A7268]"
                  }`}
                >
                  {isPrimary ? "PRIMARY SYSTEM" : "PLATFORM CASE STUDY"}
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#8B6F47] font-semibold mt-1">
                {project.category}
              </p>
            </div>

            <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#D5C9B4] flex items-center justify-center text-[#161616] group-hover:bg-[#161616] group-hover:text-white transition-colors duration-200 shrink-0 ml-2">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          {/* System Image or Architectural Vector Diagram */}
          <div className="relative aspect-[16/10] w-full rounded-xs overflow-hidden mb-4 bg-[#141210] border border-[#E0D7C6]">
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
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#161616] group-hover:text-[#8B6F47] transition-colors leading-snug tracking-tight">
            {project.title}
          </h3>

          {/* 2-3 sentence professional brief */}
          <p className="text-xs sm:text-sm text-[#4A433A] leading-relaxed mt-2.5 font-sans">
            {project.brief || project.description}
          </p>

          {/* SYSTEM FOCUS Tags */}
          <div className="mt-4 pt-3 border-t border-[#F5EFE6]">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#7A7268] font-bold mb-2">
              SYSTEM FOCUS
            </div>
            <div className="flex flex-wrap gap-1.5">
              {(project.systemFocus || project.tags).map((focusTag) => (
                <span
                  key={focusTag}
                  className="px-2.5 py-0.5 text-[10px] uppercase font-mono tracking-wider font-medium bg-[#FAF7F2] text-[#29251F] rounded-xs border border-[#D8CEBC]"
                >
                  {focusTag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card Footer: VIEW CASE STUDY → Button */}
        <div className="pt-4 mt-5 border-t border-[#F0E8DC] flex items-center justify-between text-xs font-semibold text-[#161616]">
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#161616] group-hover:text-[#8B6F47] transition-colors flex items-center gap-1.5">
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
