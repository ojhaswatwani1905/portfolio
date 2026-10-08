"use client";

import { ArrowUp, Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon, TwitterIcon } from "./SocialIcons";
import { PROFILE } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#EDE5D7] border-t border-[#E0D7C6] pt-12 pb-10 sm:pt-16 sm:pb-12 text-[#29251F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-8 sm:pb-12 border-b border-[#D5C9B4]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#161616] text-[#F4EFE5] flex items-center justify-center font-serif text-sm font-semibold border border-[#8B6F47]/40 shadow-xs">
                OW
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-tight text-[#161616] block">
                  {PROFILE.name}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#645D53] font-semibold">
                  {PROFILE.title}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#544D42] max-w-sm font-sans leading-relaxed">
              Designing and building scalable financial systems, digital banking platforms,
              trading systems, and real-time platforms.
            </p>

            <div className="text-xs font-mono text-[#8B6F47] font-semibold">
              {PROFILE.positioning}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <span className="text-xs uppercase font-mono font-bold tracking-wider text-[#8B6F47] block mb-3">
              NAVIGATION INDEX
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#544D42] hover:text-[#161616] uppercase tracking-wider transition-colors py-1 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Top Button */}
          <div className="md:col-span-3 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs uppercase font-mono font-bold tracking-wider text-[#8B6F47] block mb-3">
                DIRECT CHANNELS
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white border border-[#D5C9B4] flex items-center justify-center text-[#29251F] hover:bg-[#161616] hover:text-white transition-all shadow-2xs"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white border border-[#D5C9B4] flex items-center justify-center text-[#29251F] hover:bg-[#161616] hover:text-white transition-all shadow-2xs"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={PROFILE.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white border border-[#D5C9B4] flex items-center justify-center text-[#29251F] hover:bg-[#161616] hover:text-white transition-all shadow-2xs"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={PROFILE.socials.email}
                  className="w-8 h-8 rounded-full bg-white border border-[#D5C9B4] flex items-center justify-center text-[#29251F] hover:bg-[#161616] hover:text-white transition-all shadow-2xs"
                  aria-label="Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="mt-6 md:mt-8 flex justify-start md:justify-end">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#D5C9B4] rounded-full text-xs font-semibold uppercase tracking-wider text-[#29251F] hover:bg-[#161616] hover:text-white transition-all"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-[#8B6F47]" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A7268] gap-3">
          <p>© 2026 Ojhas Watwani. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>SENIOR TECHNOLOGY CONSULTANT</span>
            <span>•</span>
            <span>10+ YEARS EXPERIENCE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
