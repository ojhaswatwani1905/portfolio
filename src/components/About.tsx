"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, ShieldCheck, Cpu, Database, Layers, BarChart2 } from "lucide-react";
import { PROFILE } from "@/data/portfolioData";

interface AboutProps {
  onOpenContact?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  const [activeStep, setActiveStep] = useState<number>(3);

  const pipelineSteps = [
    {
      id: 1,
      title: "TRANSACTION",
      subtitle: "Order & Payment Ingestion",
      icon: Cpu,
      desc: "API gateways and transaction interfaces receiving incoming operations and requests.",
    },
    {
      id: 2,
      title: "VALIDATION",
      subtitle: "Risk & Account Checks",
      icon: ShieldCheck,
      desc: "Verification of account balances, authorization parameters, and transaction safety checks.",
    },
    {
      id: 3,
      title: "PROCESSING",
      subtitle: "Core Engine Execution",
      icon: Layers,
      desc: "Business logic execution, transaction state transitions, and real-time coordination.",
    },
    {
      id: 4,
      title: "LEDGER & RECORDS",
      subtitle: "Ledger Updates & Balances",
      icon: Database,
      desc: "Persistent ledger updates, payment integrations, and wallet balance synchronization.",
    },
    {
      id: 5,
      title: "ANALYTICS",
      subtitle: "Reporting & Monitoring",
      icon: BarChart2,
      desc: "Operational monitoring, administrative dashboards, and reporting.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Label */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-6 h-[1px] bg-[#8B6F47]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#8B6F47] font-semibold">
            About The Architecture
          </span>
          <span className="w-12 h-[1px] bg-[#E0D7C6]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT: Abstract Financial Systems Architecture Pipeline */}
          <div className="lg:col-span-5 paper-sheet p-4 sm:p-7 bg-[#FAF7F2] rounded-xs border border-[#D5C9B4] relative">
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#E0D7C6] mb-4 sm:mb-5">
              <div>
                <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#161616] block">
                  FINANCIAL SYSTEMS PIPELINE
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#645D53]">
                  End-to-End System Flow
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono text-[#8B6F47] px-2 py-0.5 bg-white border border-[#E0D7C6] rounded-xs font-semibold">
                ARCH // STACK
              </span>
            </div>

            {/* Vertical Interactive Pipeline */}
            <div className="space-y-3">
              {pipelineSteps.map((step, idx) => {
                const IconComponent = step.icon;
                const isSelected = activeStep === step.id;
                return (
                  <div key={step.id}>
                    <div
                      onClick={() => setActiveStep(step.id)}
                      className={`p-3 rounded-xs border transition-all cursor-pointer ${
                        isSelected
                          ? "bg-white border-[#8B6F47] shadow-xs ring-1 ring-[#8B6F47]/25"
                          : "bg-white/60 border-[#E0D7C6] hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className={`p-1 rounded-xs ${isSelected ? "bg-[#161616] text-[#FAF7F2]" : "bg-[#EDE5D7] text-[#8B6F47]"}`}>
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="text-xs font-mono font-bold text-[#161616] block leading-tight">
                              {step.title}
                            </span>
                            <span className="text-[10px] text-[#7A7268] font-sans">
                              {step.subtitle}
                            </span>
                          </div>
                        </div>
                        <span className={`text-[10px] font-mono ${isSelected ? "text-[#8B6F47] font-bold" : "text-[#A89F91]"}`}>
                          0{step.id}
                        </span>
                      </div>

                      {isSelected && (
                        <p className="mt-2 pt-2 border-t border-[#F0E8DC] text-xs text-[#544D42] leading-relaxed">
                          {step.desc}
                        </p>
                      )}
                    </div>

                    {/* Subtle Downward Connector Line */}
                    {idx < pipelineSteps.length - 1 && (
                      <div className="flex justify-center py-1">
                        <div className="w-[1.5px] h-2 bg-[#8B6F47]/40" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Footer indicator */}
            <div className="mt-4 pt-3 border-t border-[#E0D7C6] flex items-center justify-between text-[11px] font-mono text-[#7A7268]">
              <span>TRANSACTION CONSISTENCY</span>
              <span className="text-[#8B6F47] font-semibold">RELIABLE ARCHITECTURE</span>
            </div>
          </div>

          {/* RIGHT: Heading, Narrative, and 4 Core Strengths */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#161616] leading-[1.12]">
                TURNING COMPLEX <br />
                SYSTEMS INTO <br />
                <span className="italic font-serif text-[#8B6F47]">
                  RELIABLE PRODUCTS.
                </span>
              </h2>

              <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-[#4A433A] leading-relaxed font-sans">
                {PROFILE.aboutText}
              </p>
            </div>

            {/* 4 Core Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {PROFILE.strengths.map((strength, i) => (
                <div
                  key={strength.title}
                  className="paper-sheet p-4 bg-white rounded-xs border border-[#E0D7C6] hover:border-[#8B6F47]/60 transition-colors shadow-2xs"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F47] shrink-0" />
                    <h3 className="font-serif text-base font-bold text-[#161616]">
                      {strength.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#544D42] leading-relaxed font-sans pl-6">
                    {strength.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Connect Action */}
            <div className="pt-2">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#161616] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-[#29251F] transition-all"
              >
                <span>Explore 10-Year Track Record</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
