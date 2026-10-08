"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Printer, CheckCircle2, ShieldCheck, Mail, Globe, MapPin } from "lucide-react";
import { PROFILE, EXPERIENCES } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ojhas_Watwani_Resume.pdf";
    link.download = "Ojhas_Watwani_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#161616]/75 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 260 }}
            className="relative w-full max-w-3xl bg-[#FFFFFF] border border-[#E2D8C7] rounded-xs shadow-2xl overflow-hidden z-10 max-h-[94vh] sm:max-h-[92vh] flex flex-col"
          >
            {/* Action Bar */}
            <div className="px-4 py-3 sm:px-6 sm:py-4 bg-[#EDE5D7]/80 border-b border-[#E2D8C7] flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8B6F47] shrink-0" />
                <span className="text-[11px] sm:text-xs uppercase tracking-wider font-mono font-bold text-[#161616] truncate">
                  CURRICULUM VITAE // OJHAS WATWANI
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs uppercase tracking-wider font-medium text-[#29251F] bg-white border border-[#D5C9B4] rounded-full hover:bg-[#FAF7F2]"
                >
                  <Printer className="w-3.5 h-3.5 text-[#8B6F47]" />
                  <span>Print</span>
                </button>

                <button
                  type="button"
                  onClick={handleDownload}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-white bg-[#161616] rounded-full hover:bg-[#29251F]"
                >
                  <Download className="w-3.5 h-3.5 text-[#EDE5D7]" />
                  <span>PDF</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 rounded-full hover:bg-[#E2D8C7] text-[#161616] transition-colors"
                  aria-label="Close resume preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Body (Paper Style) */}
            <div className="overflow-y-auto p-4 sm:p-10 space-y-5 sm:space-y-6 bg-white text-[#161616]">
              {/* Header */}
              <div className="border-b pb-4 sm:pb-5 border-[#E2D8C7]">
                <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-[#161616]">
                  {PROFILE.name}
                </h2>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#8B6F47] mt-1">
                  Senior Technology Consultant | FinTech Systems Architect
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-[#645D53] mt-3 font-mono">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-[#8B6F47]" /> {PROFILE.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-[#8B6F47]" /> 10+ Years Experience
                  </span>
                  <span>M.Tech CSE</span>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h3 className="text-xs uppercase font-mono font-bold tracking-wider text-[#8B6F47] mb-2">
                  EXECUTIVE PROFILE
                </h3>
                <p className="text-xs sm:text-sm text-[#3A332A] leading-relaxed">
                  Accomplished Technology Consultant and Systems Architect with over 10 years of experience
                  designing and delivering scalable financial technology systems, digital banking platforms,
                  trading systems, crypto platforms, and real-time gaming services. Proven track record
                  at BETADRiX (5 Years) and Infotech (5 Years).
                </p>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-xs uppercase font-mono font-bold tracking-wider text-[#8B6F47] mb-4">
                  PROFESSIONAL TENURE
                </h3>
                <div className="space-y-5">
                  {EXPERIENCES.map((exp) => (
                    <div key={exp.id} className="border-l-2 border-[#8B6F47]/40 pl-4 space-y-1.5">
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <span className="font-bold text-sm text-[#161616]">
                          {exp.company} — Principal Consultant
                        </span>
                        <span className="font-mono text-xs text-[#8B6F47] font-semibold">
                          {exp.period} ({exp.duration})
                        </span>
                      </div>
                      <div className="text-xs text-[#645D53] font-medium">
                        {exp.category}
                      </div>
                      <p className="text-xs text-[#4A433A] leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {exp.keyFocus.map((k) => (
                          <span
                            key={k}
                            className="px-2 py-0.5 bg-[#FAF7F2] border border-[#E2D8C7] rounded-xs text-[10px] font-mono text-[#29251F]"
                          >
                            ✓ {k}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xs uppercase font-mono font-bold tracking-wider text-[#8B6F47] mb-2">
                  EDUCATION & CREDENTIALS
                </h3>
                <div className="p-3 bg-[#FAF7F2] border border-[#E2D8C7] rounded-xs flex items-center justify-between">
                  <div>
                    <span className="font-bold text-xs sm:text-sm text-[#161616] block">
                      M.Tech in Computer Science & Engineering
                    </span>
                    <span className="text-xs text-[#645D53]">
                      Focus: Distributed Systems, Database Architecture, and Advanced Software Engineering
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#8B6F47]">
                    Master of Technology
                  </span>
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xs uppercase font-mono font-bold tracking-wider text-[#8B6F47] mb-2">
                  CORE TECHNICAL PROFICIENCIES
                </h3>
                <div className="text-xs text-[#4A433A] leading-relaxed grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <strong>Languages & Web:</strong> Python, TypeScript, JavaScript, React, Next.js
                  </div>
                  <div>
                    <strong>Backend & Databases:</strong> Node.js, PostgreSQL, MongoDB
                  </div>
                  <div>
                    <strong>Cloud & Systems:</strong> AWS, Docker
                  </div>
                  <div>
                    <strong>Core Domains:</strong> FinTech, Banking Systems, Trading Platforms, Crypto, Gaming
                  </div>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="px-6 py-3 bg-[#FAF7F2] border-t border-[#E2D8C7] flex items-center justify-between text-xs text-[#7A7268]">
              <span>Verified Document // Ojhas Watwani</span>
              <button
                type="button"
                onClick={handleDownload}
                className="text-[#8B6F47] font-semibold hover:underline"
              >
                Direct Download (PDF)
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
