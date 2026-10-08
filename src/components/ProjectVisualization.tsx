"use client";

import React from "react";

interface ProjectVisualizationProps {
  type: "wallet" | "payments" | "analytics" | "intelligence";
  className?: string;
}

export const ProjectVisualization: React.FC<ProjectVisualizationProps> = ({ type, className = "" }) => {
  return (
    <div
      className={`relative w-full h-full bg-[#141210] overflow-hidden flex flex-col justify-between p-3 sm:p-3.5 select-none ${className}`}
    >
      {/* Subtle blueprint grid overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #8B6F47 1px, transparent 1px), linear-gradient(to bottom, #8B6F47 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top Header Bar of the Architecture Canvas */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#8B6F47]/20 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#C4B5A0] font-semibold">
            {type === "wallet" && "SYS_ARCH // MULTI-CURRENCY LEDGER"}
            {type === "payments" && "SYS_ARCH // TRANSACTION STATE MACHINE"}
            {type === "analytics" && "SYS_ARCH // FINANCIAL AGGREGATION MATRIX"}
            {type === "intelligence" && "SYS_ARCH // PATTERN DETECTION ENGINE"}
          </span>
        </div>
        <span className="text-[9px] font-mono text-[#8B6F47] uppercase tracking-wider px-1.5 py-0.5 border border-[#8B6F47]/30 rounded-xs">
          SPECIFICATION
        </span>
      </div>

      {/* Main Diagram Render */}
      <div className="relative z-10 flex-1 flex items-center justify-center my-2">
        {type === "wallet" && (
          <div className="w-full max-w-sm flex flex-col items-center gap-3">
            {/* Multi-Currency Balances Row */}
            <div className="grid grid-cols-4 gap-2 w-full">
              {[
                { code: "USD", symbol: "$", status: "SYNCED" },
                { code: "EUR", symbol: "€", status: "SYNCED" },
                { code: "GBP", symbol: "£", status: "SYNCED" },
                { code: "JPY", symbol: "¥", status: "SYNCED" },
              ].map((c) => (
                <div
                  key={c.code}
                  className="bg-[#1C1815] border border-[#8B6F47]/30 rounded-xs p-2 text-center"
                >
                  <div className="text-[11px] font-serif font-bold text-[#E8DFD0]">{c.symbol} {c.code}</div>
                  <div className="text-[8px] font-mono text-[#8B6F47] tracking-wider mt-0.5">{c.status}</div>
                </div>
              ))}
            </div>

            {/* Connecting Vertical Sync Channels */}
            <div className="flex items-center justify-around w-3/4 py-0.5">
              <div className="w-[1px] h-3 bg-gradient-to-b from-[#8B6F47] to-[#8B6F47]/40" />
              <div className="w-[1px] h-3 bg-gradient-to-b from-[#8B6F47] to-[#8B6F47]/40" />
              <div className="w-[1px] h-3 bg-gradient-to-b from-[#8B6F47] to-[#8B6F47]/40" />
              <div className="w-[1px] h-3 bg-gradient-to-b from-[#8B6F47] to-[#8B6F47]/40" />
            </div>

            {/* Central Double-Entry Ledger Core */}
            <div className="w-full bg-[#1A1613] border border-[#8B6F47]/60 rounded-xs p-2.5 sm:p-3 relative shadow-inner">
              <div className="flex items-center justify-between text-[9px] font-mono text-[#A89A88] mb-1">
                <span>CORE LEDGER SERVICE</span>
                <span className="text-[#8B6F47] font-semibold">DOUBLE-ENTRY</span>
              </div>
              <div className="flex items-center justify-between bg-[#14110E] p-2 rounded-xs border border-[#8B6F47]/20 font-mono text-[9px] text-[#C4B5A0]">
                <span>DEBIT_ACCT // CREDIT_ACCT</span>
                <span className="text-emerald-500/80">ATOMIC VERIFIED</span>
              </div>
            </div>

            {/* Reconciliation Footer */}
            <div className="flex items-center justify-between w-full text-[8px] font-mono text-[#8B6F47] pt-1 border-t border-[#8B6F47]/15">
              <span>BALANCE ISOLATION: ACTIVE</span>
              <span>SETTLEMENT AUDIT: REAL-TIME</span>
            </div>
          </div>
        )}

        {type === "payments" && (
          <div className="w-full max-w-sm flex flex-col gap-2.5">
            {/* Horizontal State Machine Flow */}
            <div className="flex items-center justify-between gap-1 w-full">
              {[
                { step: "01", name: "INITIATE" },
                { step: "02", name: "IDEMPOTENT" },
                { step: "03", name: "AUTH" },
                { step: "04", name: "SETTLE" },
              ].map((s, i) => (
                <React.Fragment key={s.step}>
                  <div className="flex-1 bg-[#1A1613] border border-[#8B6F47]/40 rounded-xs p-1.5 text-center">
                    <span className="text-[8px] font-mono text-[#8B6F47] block">{s.step}</span>
                    <span className="text-[9px] font-mono font-semibold text-[#E8DFD0] block">{s.name}</span>
                  </div>
                  {i < 3 && <span className="text-[#8B6F47] text-[10px] font-mono">→</span>}
                </React.Fragment>
              ))}
            </div>

            {/* Gateway Routing Pipeline */}
            <div className="bg-[#1C1815] border border-[#8B6F47]/30 rounded-xs p-2.5">
              <div className="flex items-center justify-between text-[9px] font-mono text-[#C4B5A0] mb-1.5">
                <span className="font-semibold text-[#E8DFD0]">ORCHESTRATION PIPELINE</span>
                <span className="text-[#8B6F47]">STATE MACHINE</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 font-mono text-[8px]">
                <div className="bg-[#14110E] p-1.5 border border-[#8B6F47]/20 rounded-xs text-[#A89A88]">
                  <span>RETRY POLICY</span>
                  <div className="text-emerald-500/80 font-semibold">EXPONENTIAL BACKOFF</div>
                </div>
                <div className="bg-[#14110E] p-1.5 border border-[#8B6F47]/20 rounded-xs text-[#A89A88]">
                  <span>WEBHOOK DISPATCH</span>
                  <div className="text-emerald-500/80 font-semibold">ACK CONFIRMED</div>
                </div>
              </div>
            </div>

            {/* Ledger Footnote */}
            <div className="flex items-center justify-between text-[8px] font-mono text-[#8B6F47] pt-1 border-t border-[#8B6F47]/15">
              <span>DEDUPLICATION: SHA-256 KEY</span>
              <span>AUDIT TRAIL: IMMUTABLE</span>
            </div>
          </div>
        )}

        {type === "analytics" && (
          <div className="w-full max-w-sm flex flex-col gap-2.5">
            {/* Metric Cubes */}
            <div className="grid grid-cols-3 gap-2 w-full">
              {[
                { title: "AGGREGATION", val: "REAL-TIME", sub: "EVENT STREAM" },
                { title: "VARIANCE", val: "0.00%", sub: "RECONCILED" },
                { title: "ROLLUPS", val: "HOURLY/DAILY", sub: "LEDGER DATA" },
              ].map((m) => (
                <div
                  key={m.title}
                  className="bg-[#1C1815] border border-[#8B6F47]/30 rounded-xs p-2 text-center"
                >
                  <div className="text-[8px] font-mono text-[#8B6F47]">{m.title}</div>
                  <div className="text-[10px] font-mono font-bold text-[#E8DFD0] mt-0.5">{m.val}</div>
                  <div className="text-[7px] font-mono text-[#A89A88]">{m.sub}</div>
                </div>
              ))}
            </div>

            {/* Telemetry Visual Graph Line */}
            <div className="bg-[#1A1613] border border-[#8B6F47]/40 rounded-xs p-2 relative h-16 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[8px] font-mono text-[#A89A88]">
                <span>TRANSACTION VOLUME & SETTLEMENT CURVE</span>
                <span className="text-emerald-500/80">NORMALIZED</span>
              </div>
              <svg className="w-full h-8 overflow-visible" viewBox="0 0 200 40">
                <path
                  d="M0 30 Q 30 15, 60 22 T 120 12 T 160 18 T 200 8"
                  fill="none"
                  stroke="#8B6F47"
                  strokeWidth="1.5"
                />
                <path
                  d="M0 30 Q 30 15, 60 22 T 120 12 T 160 18 T 200 8 L 200 40 L 0 40 Z"
                  fill="url(#gradAnalytics)"
                  opacity="0.2"
                />
                <defs>
                  <linearGradient id="gradAnalytics" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B6F47" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Reporting Meta */}
            <div className="flex items-center justify-between text-[8px] font-mono text-[#8B6F47] pt-1 border-t border-[#8B6F47]/15">
              <span>EXECUTIVE REPORTING: READY</span>
              <span>QUERY ENGINE: OPTIMIZED</span>
            </div>
          </div>
        )}

        {type === "intelligence" && (
          <div className="w-full max-w-sm flex flex-col gap-2.5">
            {/* AI Pattern Detection Architecture */}
            <div className="flex items-center justify-between gap-1 w-full">
              {[
                { stage: "RAW DATA", desc: "TRANSACTIONS" },
                { stage: "FEATURE VEC", desc: "STATISTICS" },
                { stage: "MODEL INFER", desc: "PATTERN NET" },
                { stage: "DECISION", desc: "CONFIDENCE" },
              ].map((st, i) => (
                <React.Fragment key={st.stage}>
                  <div className="flex-1 bg-[#1A1613] border border-[#8B6F47]/40 rounded-xs p-1.5 text-center">
                    <span className="text-[8px] font-mono font-bold text-[#E8DFD0] block">{st.stage}</span>
                    <span className="text-[7px] font-mono text-[#8B6F47] block mt-0.5">{st.desc}</span>
                  </div>
                  {i < 3 && <span className="text-[#8B6F47] text-[10px] font-mono">→</span>}
                </React.Fragment>
              ))}
            </div>

            {/* Detection Vector Matrix */}
            <div className="bg-[#1C1815] border border-[#8B6F47]/30 rounded-xs p-2.5">
              <div className="flex items-center justify-between text-[9px] font-mono text-[#C4B5A0] mb-1.5">
                <span className="font-semibold text-[#E8DFD0]">PATTERN EVALUATION MATRIX</span>
                <span className="text-[#8B6F47]">ANOMALY SCORING</span>
              </div>
              <div className="flex items-center justify-between bg-[#14110E] p-2 rounded-xs border border-[#8B6F47]/20 font-mono text-[8px]">
                <div className="text-[#A89A88]">
                  <span className="block">CLASSIFICATION: STRUCTURAL</span>
                  <span className="block text-[#8B6F47] mt-0.5">DRIFT MONITOR: ONLINE</span>
                </div>
                <div className="text-right">
                  <span className="text-emerald-500/80 font-bold">CONFIDENCE: 99.4%</span>
                  <span className="block text-[#A89A88] text-[7px] mt-0.5">EVALUATION METRIC</span>
                </div>
              </div>
            </div>

            {/* Neural Meta */}
            <div className="flex items-center justify-between text-[8px] font-mono text-[#8B6F47] pt-1 border-t border-[#8B6F47]/15">
              <span>INFERENCE PIPELINE: ACTIVE</span>
              <span>DECISION ENGINE: HUMAN-IN-THE-LOOP</span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Architectural Notation */}
      <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-[#8B6F47]/80 border-t border-[#8B6F47]/20 pt-2">
        <span>ARCHITECTURAL SCHEMATIC // VERIFIED</span>
        <span>FIG 4.X</span>
      </div>
    </div>
  );
};
