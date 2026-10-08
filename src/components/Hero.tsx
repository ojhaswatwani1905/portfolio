"use client";

import React, { useState } from "react";
import { ArrowUpRight, FileText, ArrowRight, Activity, ShieldCheck, Database, Layers, Network } from "lucide-react";
import { PROFILE, RECRUITER_QUICK_FACTS } from "@/data/portfolioData";

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeNode, setActiveNode] = useState<number>(1);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) {
      const topOffset = el.offsetTop - 70;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 sm:pt-32 sm:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Subtle left indicator */}
      <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-20 pointer-events-none">
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#8B6F47] rotate-[-90deg] font-mono origin-center translate-y-[-10px]">
          SYSTEMS
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#8B6F47] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Recruiter Immediate Quick-Facts Bar (MNC Recruiter Visibility) */}
        <div className="mb-5 sm:mb-6 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          {RECRUITER_QUICK_FACTS.map((fact, i) => (
            <div
              key={i}
              className="px-2.5 py-2 sm:px-3.5 sm:py-2.5 bg-white/90 border border-[#E0D7C6] rounded-xs shadow-2xs hover:border-[#8B6F47]/50 transition-colors"
            >
              <div className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-[#8B6F47] font-semibold">
                {fact.label}
              </div>
              <div className="text-xs sm:text-base font-bold font-serif text-[#161616] mt-0.5 leading-tight">
                {fact.value}
              </div>
              <div className="text-[10px] sm:text-[11px] text-[#645D53] truncate mt-0.5">
                {fact.detail}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT COLUMN: Executive Profile & Headline */}
          <div className="lg:col-span-7 paper-sheet p-5 sm:p-10 md:p-12 bg-white rounded-xs relative flex flex-col justify-between">
            <div>
              {/* Category & Identity Subtitle */}
              <div className="flex flex-col gap-1 mb-3.5 sm:mb-4">
                <div className="inline-flex items-center gap-2 flex-wrap">
                  <span className="w-2 h-2 rounded-full bg-[#8B6F47] shrink-0" />
                  <span className="text-xs uppercase tracking-[0.2em] text-[#161616] font-mono font-bold">
                    {PROFILE.name}
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#8B6F47] font-mono tracking-wider">
                    // {PROFILE.title}
                  </span>
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-[#645D53] tracking-wide uppercase">
                  FINTECH · BANKING · TRADING SYSTEMS ARCHITECTURE
                </div>
              </div>

              {/* Major Editorial Headline */}
              <h1 className="font-serif text-2xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[#161616] leading-[1.12] sm:leading-[1.08] max-w-xl">
                {PROFILE.headlineLead} <br className="hidden sm:inline" />
                <span className="text-[#8B6F47] italic font-serif">
                  {PROFILE.headlineAccent}
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="mt-4 sm:mt-5 text-xs sm:text-base text-[#4A433A] leading-relaxed max-w-xl font-sans">
                {PROFILE.summary}
              </p>

              {/* Domain Tag Strip */}
              <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-[#544D42]">
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#FAF7F2] border border-[#E0D7C6] rounded-xs font-semibold text-[#161616]">
                  FinTech
                </span>
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#FAF7F2] border border-[#E0D7C6] rounded-xs font-semibold text-[#161616]">
                  Banking Systems
                </span>
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#FAF7F2] border border-[#E0D7C6] rounded-xs font-semibold text-[#161616]">
                  Trading Engines
                </span>
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#FAF7F2] border border-[#E0D7C6] rounded-xs font-semibold text-[#161616]">
                  Digital Assets
                </span>
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#FAF7F2] border border-[#E0D7C6] rounded-xs font-semibold text-[#161616]">
                  Real-Time Platforms
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#F0E8DC] flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-[#161616] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-[#29251F] hover:shadow-md transition-all border border-[#161616]"
              >
                <span>View Selected Work</span>
                <ArrowUpRight className="w-4 h-4 text-[#EDE5D7]" />
              </a>

              {onOpenResume && (
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-[#FAF7F2] text-[#29251F] text-xs uppercase tracking-wider font-semibold rounded-full border border-[#D5C9B4] hover:bg-[#EDE5D7] hover:border-[#8B6F47] transition-all"
                >
                  <FileText className="w-4 h-4 text-[#8B6F47]" />
                  <span>View Resume</span>
                </button>
              )}

              <a
                href="#expertise"
                className="text-xs uppercase tracking-wider text-[#645D53] hover:text-[#161616] underline underline-offset-4 font-semibold ml-1 sm:ml-2"
              >
                Domain Expertise ↓
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Abstract Financial-Technology Infrastructure Blueprint */}
          <div className="lg:col-span-5 paper-sheet p-4 sm:p-7 bg-[#FAF7F2] rounded-xs relative border border-[#D5C9B4] flex flex-col justify-between blueprint-grid overflow-hidden">
            
            {/* Header info of diagram */}
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#E0D7C6] gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <Network className="w-4 h-4 text-[#8B6F47] shrink-0" />
                <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-[#161616] uppercase truncate">
                  FINANCIAL ARCHITECTURE BLUEPRINT
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono text-[#8B6F47] px-1.5 sm:px-2 py-0.5 bg-white border border-[#E0D7C6] rounded-xs font-semibold shrink-0">
                SYSTEM SCHEMATIC
              </span>
            </div>

            {/* Interactive Transaction Routing & Ledger Simulation */}
            <div className="my-5 space-y-2.5">
              
              {/* Node 1: Ingestion Gateway */}
              <div
                onClick={() => setActiveNode(1)}
                className={`p-3 sm:p-3.5 rounded-xs border transition-all cursor-pointer ${
                  activeNode === 1
                    ? "bg-white border-[#8B6F47] shadow-sm ring-1 ring-[#8B6F47]/30"
                    : "bg-white/70 border-[#E0D7C6] hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-1.5">
                  <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${activeNode === 1 ? "bg-[#8B6F47]" : "bg-[#161616]"}`} />
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-[#161616] truncate">
                      01 // API & INGESTION
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#8B6F47] bg-[#FAF7F2] px-1.5 py-0.5 border border-[#E0D7C6] rounded-xs font-semibold shrink-0">
                    REST / WebSockets
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#544D42] mt-1 sm:mt-1.5 font-sans leading-relaxed">
                  Structured API gateways receiving transaction requests and market data streams.
                </p>
              </div>

              {/* Technical Flow Arrow */}
              <div className="flex flex-col items-center -my-1">
                <div className="w-[1.5px] h-3 bg-[#8B6F47]/50" />
                <div className="w-1.5 h-1.5 rotate-45 border-b border-r border-[#8B6F47] -mt-1" />
              </div>

              {/* Node 2: Core Validation & Risk */}
              <div
                onClick={() => setActiveNode(2)}
                className={`p-3 sm:p-3.5 rounded-xs border transition-all cursor-pointer ${
                  activeNode === 2
                    ? "bg-white border-[#8B6F47] shadow-sm ring-1 ring-[#8B6F47]/30"
                    : "bg-white/70 border-[#E0D7C6] hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-1.5">
                  <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#8B6F47] shrink-0" />
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-[#161616] truncate">
                      02 // RISK & VALIDATION
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#8B6F47] bg-[#FAF7F2] px-1.5 py-0.5 border border-[#E0D7C6] rounded-xs font-semibold shrink-0">
                    Validation Rules
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#544D42] mt-1 sm:mt-1.5 font-sans leading-relaxed">
                  Verification of account balances, authorization parameters, and transaction safety checks.
                </p>
              </div>

              {/* Technical Flow Arrow */}
              <div className="flex flex-col items-center -my-1">
                <div className="w-[1.5px] h-3 bg-[#8B6F47]/50" />
                <div className="w-1.5 h-1.5 rotate-45 border-b border-r border-[#8B6F47] -mt-1" />
              </div>

              {/* Node 3: Ledger & Processing */}
              <div
                onClick={() => setActiveNode(3)}
                className={`p-3 sm:p-3.5 rounded-xs border transition-all cursor-pointer ${
                  activeNode === 3
                    ? "bg-white border-[#8B6F47] shadow-sm ring-1 ring-[#8B6F47]/30"
                    : "bg-white/70 border-[#E0D7C6] hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-1.5">
                  <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                    <Database className="w-3.5 h-3.5 text-[#161616] shrink-0" />
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-[#161616] truncate">
                      03 // LEDGER & PROCESSING
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#8B6F47] bg-[#FAF7F2] px-1.5 py-0.5 border border-[#E0D7C6] rounded-xs font-semibold shrink-0">
                    Payment Integrations
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#544D42] mt-1 sm:mt-1.5 font-sans leading-relaxed">
                  Persistent account records, payment gateway processing, and balance synchronization.
                </p>
              </div>

            </div>

            {/* Bottom System Telemetry Indicator */}
            <div className="pt-2.5 sm:pt-3 border-t border-[#E0D7C6] flex items-center justify-between text-[10px] sm:text-xs font-mono text-[#645D53]">
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>STATE: OPERATIONAL</span>
              </div>
              <span className="text-[#8B6F47] font-semibold">10+ YEARS EXPERIENCE</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
