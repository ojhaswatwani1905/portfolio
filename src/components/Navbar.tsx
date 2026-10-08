"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, FileText } from "lucide-react";
import { PROFILE } from "@/data/portfolioData";

interface NavbarProps {
  onOpenResume?: () => void;
  onOpenContact?: () => void;
}

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = href === "#home" ? 0 : (target as HTMLElement).offsetTop - 75;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[#F4EFE5]/95 backdrop-blur-md border-b border-[#E0D7C6] shadow-xs"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="group flex items-center gap-3 text-left focus:outline-none"
            aria-label="Ojhas Watwani Portfolio"
          >
            <div className="w-9 h-9 rounded-full bg-[#161616] text-[#F4EFE5] flex items-center justify-center font-serif text-sm tracking-wider font-semibold border border-[#8B6F47]/40 shadow-xs group-hover:bg-[#29251F] transition-all">
              OW
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-[#161616] leading-none group-hover:text-[#8B6F47] transition-colors">
                {PROFILE.name}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#645D53] font-semibold mt-1">
                {PROFILE.title}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#EDE5D7]/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-[#E0D7C6] shadow-2xs">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-3 py-1 text-xs uppercase tracking-wider font-medium transition-all ${
                    isActive
                      ? "text-[#161616] font-semibold"
                      : "text-[#645D53] hover:text-[#161616]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#8B6F47]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            {onOpenResume && (
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs uppercase tracking-wider text-[#29251F] border border-[#D5C9B4] rounded-full hover:bg-[#EDE5D7] hover:border-[#8B6F47] transition-all font-medium"
              >
                <FileText className="w-3.5 h-3.5 text-[#8B6F47]" />
                <span>Resume</span>
              </button>
            )}

            <a
              href="#contact"
              onClick={(e) => {
                if (onOpenContact) {
                  e.preventDefault();
                  onOpenContact();
                } else {
                  handleLinkClick(e, "#contact");
                }
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#161616] text-[#F4EFE5] text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-[#29251F] hover:shadow-md transition-all border border-[#29251F]"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#EDE5D7]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#161616] bg-[#EDE5D7] rounded-full border border-[#E0D7C6] hover:bg-[#E4D9C8] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-[#161616]/40 backdrop-blur-xs md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] max-w-[85vw] z-50 bg-[#FAF7F2] border-l border-[#E0D7C6] shadow-2xl p-5 sm:p-6 flex flex-col justify-between md:hidden overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E0D7C6]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#161616] text-[#F4EFE5] flex items-center justify-center font-serif text-xs font-semibold">
                      OW
                    </div>
                    <span className="font-serif font-bold text-sm tracking-tight text-[#161616]">
                      {PROFILE.name}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-[#EDE5D7] text-[#161616]"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-5 flex flex-col gap-1.5">
                  {NAV_LINKS.map((link) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className={`flex items-center justify-between px-3.5 py-3 rounded-xs text-xs uppercase tracking-wider font-semibold transition-all min-h-[44px] ${
                          isActive
                            ? "bg-[#EDE5D7] text-[#161616]"
                            : "text-[#645D53] hover:text-[#161616] hover:bg-[#F4EFE5]"
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive && <span className="w-2 h-2 rounded-full bg-[#8B6F47]" />}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="pt-5 border-t border-[#E0D7C6] flex flex-col gap-2.5 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenResume) onOpenResume();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 min-h-[44px] text-xs uppercase tracking-wider font-semibold text-[#29251F] border border-[#D5C9B4] rounded-full bg-[#EDE5D7]"
                >
                  <FileText className="w-4 h-4 text-[#8B6F47]" />
                  <span>View Resume</span>
                </button>

                <a
                  href="#contact"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (onOpenContact) {
                      e.preventDefault();
                      onOpenContact();
                    } else {
                      handleLinkClick(e, "#contact");
                    }
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 min-h-[44px] bg-[#161616] text-[#F4EFE5] text-xs uppercase tracking-wider font-semibold rounded-full"
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight className="w-4 h-4 text-[#EDE5D7]" />
                </a>

                <p className="text-[10px] text-center text-[#7A7268] font-mono mt-1 uppercase">
                  {PROFILE.positioning}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
