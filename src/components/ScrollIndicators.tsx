"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const SECTIONS = [
  { id: "home", label: "01", name: "PROFILE" },
  { id: "about", label: "02", name: "SYSTEMS" },
  { id: "expertise", label: "03", name: "DOMAINS" },
  { id: "experience", label: "04", name: "EXP" },
  { id: "projects", label: "05", name: "WORK" },
  { id: "skills", label: "06", name: "STACK" },
  { id: "contact", label: "07", name: "ENGAGE" },
];

export const ScrollIndicators: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = id === "home" ? 0 : el.offsetTop - 70;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Thin Horizontal Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#8B6F47] origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Right Edge Editorial Vertical Section Tracker */}
      <div className="hidden 2xl:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col items-end gap-3 z-30 select-none">
        <div className="text-[9px] uppercase font-mono tracking-widest text-[#8B6F47]/70 mb-1 font-semibold">
          INDEX
        </div>

        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              type="button"
              onClick={() => jumpTo(sec.id)}
              className="group flex items-center gap-2 text-right focus:outline-none py-1"
            >
              <span
                className={`text-[10px] font-mono tracking-wider transition-all duration-200 ${
                  isActive
                    ? "text-[#161616] font-bold scale-110"
                    : "text-[#7A7268]/70 hover:text-[#161616]"
                }`}
              >
                {sec.label}
              </span>
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-4 h-[2px] bg-[#8B6F47]"
                    : "w-1.5 h-[1.5px] bg-[#D5C9B4] group-hover:w-3 group-hover:bg-[#8B6F47]"
                }`}
              />
            </button>
          );
        })}
      </div>
    </>
  );
};
