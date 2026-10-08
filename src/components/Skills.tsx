"use client";

import React, { useState } from "react";
import { Terminal, Shield, Cpu, Database, Cloud } from "lucide-react";
import { SKILLS_DATA } from "@/data/portfolioData";

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"domain" | "tech">("domain");

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-[1px] bg-[#8B6F47]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#8B6F47] font-semibold">
            Capabilities
          </span>
          <span className="w-12 h-[1px] bg-[#E0D7C6]" />
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#161616]">
              ENGINEERING & DOMAIN COMPETENCIES
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#4A433A] max-w-xl font-sans">
              Systematic capabilities spanning financial platforms, distributed architectures,
              and modern application engineering.
            </p>
          </div>

          {/* Tab Filter */}
          <div className="inline-flex p-1 bg-[#EDE5D7] rounded-full border border-[#D5C9B4] self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab("domain")}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === "domain"
                  ? "bg-[#161616] text-[#FAF7F2] shadow-xs"
                  : "text-[#645D53] hover:text-[#161616]"
              }`}
            >
              Domain Expertise
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("tech")}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === "tech"
                  ? "bg-[#161616] text-[#FAF7F2] shadow-xs"
                  : "text-[#645D53] hover:text-[#161616]"
              }`}
            >
              Technology Stack
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* LEFT: Primary Organized List */}
          <div className="lg:col-span-8 paper-sheet p-4 sm:p-10 bg-white rounded-xs border border-[#E0D7C6]">
            {activeTab === "domain" ? (
              <div>
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#F0E8DC] mb-4 sm:mb-6">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#161616]">
                      Institutional Domain Expertise
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#7A7268] mt-0.5 sm:mt-1">
                      Mission-critical financial, compliance, and distributed system disciplines.
                    </p>
                  </div>
                  <Shield className="w-5 h-5 text-[#8B6F47] shrink-0" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  {SKILLS_DATA.domainExpertise.map((domain, i) => (
                    <div
                      key={domain}
                      className="p-2.5 sm:p-3 bg-[#FAF7F2] border border-[#E0D7C6] rounded-xs hover:border-[#8B6F47] transition-colors"
                    >
                      <span className="text-[9px] sm:text-[10px] font-mono text-[#8B6F47] block mb-1">
                        DOM // 0{i + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#161616] truncate block">
                        {domain}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#F0E8DC] mb-4 sm:mb-6">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#161616]">
                      Production Technology Stack
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#7A7268] mt-0.5 sm:mt-1">
                      Core languages, database systems, containerization, and cloud infrastructure.
                    </p>
                  </div>
                  <Terminal className="w-5 h-5 text-[#8B6F47] shrink-0" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  {SKILLS_DATA.technologyStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="p-2.5 sm:p-3 bg-[#FAF7F2] border border-[#E0D7C6] rounded-xs hover:border-[#8B6F47] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-semibold text-[#161616] truncate block">
                          {tech.name}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47]" />
                      </div>
                      <span className="text-[10px] text-[#7A7268] font-mono mt-1 block">
                        {tech.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-[#F0E8DC] flex items-center justify-between text-xs font-mono text-[#7A7268]">
              <span>ENTERPRISE-GRADE EXPERTISE</span>
              <span className="text-[#8B6F47] font-semibold">10+ YEARS HANDS-ON</span>
            </div>
          </div>

          {/* RIGHT: Architecture Standards Panel */}
          <div className="lg:col-span-4 space-y-4">
            <div className="paper-sheet p-6 bg-[#FAF7F2] rounded-xs border border-[#D5C9B4]">
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-4 h-4 text-[#8B6F47]" />
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#161616]">
                  ARCHITECTURAL PRINCIPLES
                </h4>
              </div>
              <ul className="space-y-2.5 text-xs text-[#4A433A] font-sans">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#161616] font-mono">01.</span>
                  <span><strong>Data Integrity:</strong> Transactional consistency, validation, and ledger reconciliation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#161616] font-mono">02.</span>
                  <span><strong>Fault Isolation:</strong> Circuit breakers, bulkhead patterns, and idempotent API retries.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#161616] font-mono">03.</span>
                  <span><strong>System Resilience:</strong> Reliable transaction throughput and robust platform stability.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-[#161616] text-[#FAF7F2] rounded-xs border border-[#29251F]">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#8B6F47] mb-2 font-semibold">
                SYSTEM STANDARDS
              </div>
              <p className="font-serif text-lg text-[#FAF7F2] leading-snug">
                Engineered for high reliability, data integrity, and stable financial platform operations.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
