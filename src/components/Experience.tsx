"use client";

import React from "react";
import { Check, ShieldCheck, Briefcase, Building2 } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Label */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-6 h-[1px] bg-[#8B6F47]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#8B6F47] font-semibold">
            Track Record
          </span>
          <span className="w-12 h-[1px] bg-[#E0D7C6]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* LEFT: Section Title & Narrative */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#161616] leading-[1.12]">
              10+ YEARS <br />
              <span className="italic font-serif text-[#8B6F47]">
                BUILDING FINANCIAL TECHNOLOGY
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#4A433A] leading-relaxed font-sans pt-2">
              Over a decade of senior engineering and architectural advisory spanning digital
              banking, trading platforms, and real-time wallet systems across two major tenures.
            </p>

            {/* Corporate Tenure Breakdown Box */}
            <div className="pt-4">
              <div className="p-4 bg-white border border-[#E0D7C6] rounded-xs shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#161616]">
                  <ShieldCheck className="w-4 h-4 text-[#8B6F47]" />
                  <span>DUAL 5-YEAR SENIOR TENURES</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-[#F0E8DC]">
                  <div className="p-2 bg-[#FAF7F2] rounded-xs border border-[#E0D7C6]">
                    <span className="text-[10px] font-mono text-[#8B6F47] block font-semibold">2021 — PRESENT</span>
                    <span className="text-xs font-bold text-[#161616] block mt-0.5">BETADRiX</span>
                    <span className="text-[10px] text-[#645D53]">5 Years Tenure</span>
                  </div>
                  <div className="p-2 bg-[#FAF7F2] rounded-xs border border-[#E0D7C6]">
                    <span className="text-[10px] font-mono text-[#8B6F47] block font-semibold">2016 — 2021</span>
                    <span className="text-xs font-bold text-[#161616] block mt-0.5">INFOTECH</span>
                    <span className="text-[10px] text-[#645D53]">5 Years Tenure</span>
                  </div>
                </div>
                <div className="text-xs text-[#645D53] mt-2.5 font-sans leading-relaxed">
                  Demonstrated career stability delivering enterprise digital banking, payment systems, and real-time platforms.
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Clean Corporate Architectural Timeline */}
          <div className="lg:col-span-8 relative">
            
            {/* Timeline Vertical Rail */}
            <div className="absolute left-3.5 sm:left-6 top-6 bottom-8 w-[2px] bg-[#D5C9B4]" />

            <div className="space-y-8 sm:space-y-14 pl-7 sm:pl-16">
              {EXPERIENCES.map((exp, idx) => (
                <div key={exp.id} className="relative">
                  
                  {/* Timeline Badge Node */}
                  <div className="absolute -left-7 sm:-left-16 top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#161616] text-[#FAF7F2] border-2 border-white shadow-md flex items-center justify-center -translate-x-1/2 z-10 font-mono text-[9px] sm:text-[10px] font-bold">
                    0{idx + 1}
                  </div>

                  {/* Main Experience Card */}
                  <div className="paper-sheet p-4 sm:p-7 bg-white rounded-xs border border-[#E0D7C6] shadow-sm">
                    
                    {/* Header bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-[#F0E8DC]">
                      <div>
                        <span className="font-mono text-[11px] sm:text-xs font-bold text-[#8B6F47] tracking-wider block">
                          {exp.period}
                        </span>
                        <h3 className="font-serif text-xl sm:text-3xl font-bold text-[#161616] mt-0.5">
                          {exp.company}
                        </h3>
                      </div>
                      <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-mono font-bold uppercase rounded-full bg-[#EDE5D7] text-[#161616] border border-[#D5C9B4]">
                        {exp.duration}
                      </span>
                    </div>

                    {/* Category */}
                    <div className="text-xs font-mono uppercase tracking-wider font-bold text-[#8B6F47] mb-3">
                      {exp.category}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#4A433A] leading-relaxed font-sans mb-5">
                      {exp.description}
                    </p>

                    {/* Core Architectural Focus */}
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#645D53] font-bold mb-2.5">
                        ARCHITECTURAL & SYSTEM FOCUS:
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {exp.keyFocus.map((focusItem) => (
                          <li
                            key={focusItem}
                            className="flex items-start gap-2 p-2 bg-[#FAF7F2] border border-[#E0D7C6] rounded-xs text-xs text-[#29251F]"
                          >
                            <Check className="w-3.5 h-3.5 text-[#8B6F47] shrink-0 mt-0.5" />
                            <span className="font-medium">{focusItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
