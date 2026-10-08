"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
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
      {/* Clean Architectural Paper Sheet Card */}
      <div className="paper-sheet p-4 sm:p-5 bg-white rounded-xs border border-[#E0D7C6] flex flex-col justify-between h-full relative shadow-xs group-hover:border-[#8B6F47]/50 transition-colors">
        <div>
          {/* Card Top: Number & Arrow */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F0E8DC]">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#161616]">
                {project.number}
              </span>
              {index < 3 ? (
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8B6F47] px-2 py-0.5 bg-[#FAF7F2] border border-[#E0D7C6] rounded-xs font-semibold">
                  PRIMARY
                </span>
              ) : (
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#7A7268] px-2 py-0.5 bg-[#FAF7F2] border border-[#E0D7C6] rounded-xs">
                  PLATFORM
                </span>
              )}
            </div>
            <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#D5C9B4] flex items-center justify-center text-[#161616] group-hover:bg-[#161616] group-hover:text-white transition-colors duration-200">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          {/* Screenshot / Mockup Image Preview */}
          <div className="relative aspect-[16/10] w-full rounded-xs overflow-hidden mb-4 bg-[#161616] border border-[#E0D7C6]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
            />
          </div>

          {/* Project Title */}
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#161616] group-hover:text-[#8B6F47] transition-colors leading-snug">
            {project.title}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 my-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[10px] uppercase font-mono tracking-wider font-semibold bg-[#EDE5D7] text-[#4A433A] rounded-full border border-[#D5C9B4]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#4A433A] leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Card Footer */}
        <div className="pt-4 mt-4 border-t border-[#F0E8DC] flex items-center justify-between text-xs font-semibold text-[#161616]">
          <span className="group-hover:text-[#8B6F47] transition-colors font-mono text-[11px] uppercase">
            Case Study
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-[#8B6F47] group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};
