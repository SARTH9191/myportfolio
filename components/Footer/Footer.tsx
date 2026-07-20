"use client";

import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border-color bg-bg-secondary py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand and copyright */}
        <div className="text-center md:text-left space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="w-8 h-8 rounded-lg bg-accent text-bg-primary font-extrabold flex items-center justify-center text-sm">
              {portfolioData.personal.logoInitials}
            </span>
            <span className="font-bold text-text-primary text-base">
              {portfolioData.personal.fullName}
            </span>
          </div>
          <p className="text-xs text-text-muted">
            &copy; {currentYear} Sarthak Pawar. All rights reserved. Built with Next.js 15, Tailwind v4.0, and Framer Motion.
          </p>
        </div>

        {/* Middle: Social Handles */}
        <div className="flex items-center gap-6">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Right Side: Back to Top */}
        <button
          onClick={handleScrollToTop}
          className="p-3 rounded-xl border border-border-color bg-bg-primary hover:bg-bg-tertiary text-text-secondary hover:text-accent shadow-premium transition-all cursor-pointer group"
          aria-label="Back to top"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
