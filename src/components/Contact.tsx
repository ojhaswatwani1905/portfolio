"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Send,
  Mail,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";
import { LinkedinIcon, GithubIcon, TwitterIcon } from "./SocialIcons";
import { PROFILE } from "@/data/portfolioData";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "FinTech & Digital Banking Platforms",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = "Please provide your full name.";
    }

    if (!formData.email.trim()) {
      errs.email = "Please provide your corporate or personal email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      errs.message = "Please include a project or role brief.";
    } else if (formData.message.trim().length < 15) {
      errs.message = "Message should be at least 15 characters.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Label */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-6 h-[1px] bg-[#8B6F47]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#8B6F47] font-semibold">
            Engagement & Advisory
          </span>
          <span className="w-12 h-[1px] bg-[#E0D7C6]" />
        </div>

        {/* Paper Sheet Container for Contact */}
        <div className="paper-sheet p-5 sm:p-12 md:p-14 bg-white rounded-xs border border-[#E0D7C6] shadow-sm relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* LEFT: Heading & Narrative */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#161616] leading-[1.08] sm:leading-[1.05]">
                LET'S BUILD <br />
                <span className="italic font-serif text-[#8B6F47]">
                  WHAT'S NEXT.
                </span>
              </h2>

              <p className="text-xs sm:text-base text-[#4A433A] leading-relaxed font-sans max-w-lg">
                Open to opportunities across FinTech, banking technology, trading platforms and enterprise financial systems.
              </p>

              {/* Direct channels callout */}
              <div className="pt-2">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-[#161616] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-[#29251F] transition-all border border-[#161616]"
                >
                  <span>LET'S CONNECT</span>
                  <ArrowUpRight className="w-4 h-4 text-[#EDE5D7]" />
                </a>
              </div>

              {/* Social Channels Row */}
              <div className="pt-5 sm:pt-6 border-t border-[#F0E8DC]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#7A7268] font-bold block mb-3">
                  PROFESSIONAL CHANNELS
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={PROFILE.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#D5C9B4] flex items-center justify-center text-[#29251F] hover:bg-[#161616] hover:text-white transition-all shadow-2xs"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={PROFILE.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#D5C9B4] flex items-center justify-center text-[#29251F] hover:bg-[#161616] hover:text-white transition-all shadow-2xs"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={PROFILE.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#D5C9B4] flex items-center justify-center text-[#29251F] hover:bg-[#161616] hover:text-white transition-all shadow-2xs"
                    aria-label="Twitter / X Profile"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={PROFILE.socials.email}
                    className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#D5C9B4] flex items-center justify-center text-[#29251F] hover:bg-[#161616] hover:text-white transition-all shadow-2xs"
                    aria-label="Send direct email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>

                  <span className="text-[11px] sm:text-xs font-mono text-[#8B6F47] ml-1 sm:ml-2 font-semibold truncate">
                    contact@ojhaswatwani.com
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT: Validated Interactive Consultation Form */}
            <div className="lg:col-span-6">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-5 sm:p-8 bg-[#FAF7F2] border border-[#D5C9B4] rounded-xs text-center space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#EDE5D7] border border-[#8B6F47]/40 text-[#8B6F47] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#161616]">
                      Message Prepared Successfully
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A433A] max-w-sm mx-auto font-sans leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. Your consultation brief has been recorded. For direct correspondence with Ojhas Watwani, dispatch email to:
                    </p>
                    <div className="p-3 bg-white border border-[#E0D7C6] rounded-xs font-mono text-xs text-[#8B6F47] inline-block font-semibold">
                      {PROFILE.email}
                    </div>
                    <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                      <a
                        href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(
                          `Inquiry: ${formData.projectType}`
                        )}&body=${encodeURIComponent(
                          `Name: ${formData.name}\nEmail: ${formData.email}\nDomain: ${formData.projectType}\n\nBrief:\n${formData.message}`
                        )}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#161616] text-[#FAF7F2] text-xs font-mono font-semibold uppercase tracking-wider rounded-full hover:bg-[#29251F]"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#8B6F47]" />
                        <span>Open in Email App</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            projectType: "FinTech & Digital Banking Platforms",
                            message: "",
                          });
                        }}
                        className="text-xs uppercase font-mono tracking-wider text-[#645D53] hover:text-[#161616] underline underline-offset-4"
                      >
                        Prepare another brief
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="p-5 sm:p-8 bg-[#FAF7F2] border border-[#E0D7C6] rounded-xs space-y-4 shadow-xs"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-[#E0D7C6]">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B6F47]">
                        DIRECT CONSULTATION BRIEF
                      </span>
                      <span className="text-[10px] text-[#7A7268] font-mono uppercase">
                        CONFIDENTIAL
                      </span>
                    </div>

                    {/* Full Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#29251F] mb-1">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. David Sterling"
                        className={`w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border ${
                          errors.name ? "border-red-500" : "border-[#D5C9B4]"
                        } rounded-xs text-[#161616] focus:outline-none focus:border-[#8B6F47] transition-colors`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#29251F] mb-1">
                        Corporate / Contact Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. david.sterling@globalbank.com"
                        className={`w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border ${
                          errors.email ? "border-red-500" : "border-[#D5C9B4]"
                        } rounded-xs text-[#161616] focus:outline-none focus:border-[#8B6F47] transition-colors`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#29251F] mb-1">
                        Domain / System Focus
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({ ...formData, projectType: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-[#D5C9B4] rounded-xs text-[#161616] focus:outline-none focus:border-[#8B6F47] transition-colors"
                      >
                        <option value="FinTech & Digital Banking Platforms">
                          FinTech & Digital Banking Platforms
                        </option>
                        <option value="Trading Platforms & Market Data">
                          Trading Platforms & Market Data
                        </option>
                        <option value="Crypto & Digital Asset Platforms">
                          Crypto & Digital Asset Platforms
                        </option>
                        <option value="Real-Time Platform Architecture">
                          Real-Time Platform Architecture
                        </option>
                        <option value="Senior Technology Consulting">
                          Senior Technology Consulting
                        </option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#29251F] mb-1">
                        Project / Role Brief <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Provide details regarding the architectural mandate, tech stack, or platform scope..."
                        className={`w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border ${
                          errors.message ? "border-red-500" : "border-[#D5C9B4]"
                        } rounded-xs text-[#161616] focus:outline-none focus:border-[#8B6F47] transition-colors`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-[#161616] text-[#FAF7F2] text-xs uppercase font-mono tracking-wider font-bold rounded-xs hover:bg-[#29251F] transition-all flex items-center justify-center gap-2 disabled:opacity-75 shadow-xs"
                    >
                      {isSubmitting ? (
                        <span>Preparing Brief...</span>
                      ) : (
                        <>
                          <span>Prepare Consultation Brief</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
