"use client";

import React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { DOMAINS } from "@/data/portfolioData";

export const DomainExpertise: React.FC = () => {
  return (
    <section id="expertise" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-[1px] bg-[#8B6F47]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#8B6F47] font-semibold">
            Domain Expertise
          </span>
          <span className="w-12 h-[1px] bg-[#E0D7C6]" />
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#161616]">
              WHAT I WORK WITH
            </h2>
            <p className="mt-2 text-xs sm:text-base text-[#4A433A] max-w-xl font-sans leading-relaxed">
              Engineering experience across financial platforms, digital banking, trading systems,
              crypto platforms, and real-time gaming services.
            </p>
          </div>

          <div className="text-[11px] sm:text-xs font-mono text-[#8B6F47] bg-[#EDE5D7] px-3.5 py-1.5 rounded-full border border-[#D5C9B4] self-start md:self-auto font-semibold">
            5 CORE DOMAINS // 10+ YEARS
          </div>
        </div>

        {/* 5 Large Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {DOMAINS.map((domain, index) => (
            <div
              key={domain.number}
              className={`paper-sheet p-5 sm:p-7 bg-white rounded-xs border border-[#E0D7C6] flex flex-col justify-between hover:-translate-y-1 transition-all ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Number & Arrow */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#F0E8DC]">
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#161616]">
                      {domain.number}
                    </span>
                    {index < 3 ? (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#8B6F47] px-2 py-0.5 bg-[#FAF7F2] border border-[#E0D7C6] rounded-xs font-semibold">
                        CORE FOCUS
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#7A7268] px-2 py-0.5 bg-[#FAF7F2] border border-[#E0D7C6] rounded-xs">
                        SPECIALIZED
                      </span>
                    )}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#D5C9B4] flex items-center justify-center text-[#8B6F47]">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-serif text-2xl font-bold text-[#161616] tracking-tight">
                  {domain.title}
                </h3>
                <span className="text-xs font-mono uppercase tracking-wider text-[#8B6F47] block mt-1 font-semibold">
                  {domain.subtitle}
                </span>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-[#4A433A] leading-relaxed font-sans">
                  {domain.description}
                </p>

                {/* Areas Bullet List */}
                <div className="mt-5 pt-4 border-t border-[#F0E8DC] space-y-2">
                  {domain.areas.map((area) => (
                    <div key={area} className="flex items-start gap-2 text-xs text-[#29251F]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8B6F47] shrink-0 mt-0.5" />
                      <span className="font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-3 border-t border-[#F0E8DC] flex items-center justify-between text-[11px] font-mono text-[#7A7268]">
                <span>ARCHITECTURE DOMAIN</span>
                <span className="text-[#8B6F47] font-semibold">CORE PRACTICE</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
