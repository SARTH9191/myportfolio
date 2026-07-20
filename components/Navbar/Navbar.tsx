"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  // Load theme on mount
  useEffect(() => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-premium py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Initials */}
          <a href="#" className="flex items-center group relative font-bold text-xl tracking-wider">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent text-bg-primary font-extrabold mr-2 relative overflow-hidden"
            >
              {portfolioData.personal.logoInitials}
              <motion.div 
                className="absolute inset-0 bg-accent-hover opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
            </motion.div>
            
            {/* Hover name reveal */}
            <span className="hidden sm:inline-block relative overflow-hidden h-6 text-text-primary">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                Sarthak Pawar
              </span>
              <span className="absolute left-0 top-full inline-block text-accent transition-transform duration-300 group-hover:-translate-y-full">
                AI & Web Dev
              </span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-accent transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions: Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg border border-border-color bg-bg-secondary hover:bg-bg-tertiary transition-colors duration-200 text-text-secondary cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="#contact"
              className="hidden lg:flex items-center space-x-1 px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-bg-primary font-semibold text-sm transition-colors duration-200"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight size={16} />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg border border-border-color bg-bg-secondary hover:bg-bg-tertiary transition-colors duration-200 text-text-secondary md:hidden cursor-pointer"
              aria-label="Open Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left"
        />
      </motion.header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg-primary pt-24 px-6 md:hidden flex flex-col space-y-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-text-primary hover:text-accent transition-colors duration-200 border-b border-border-color py-2"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 py-4 rounded-xl bg-accent hover:bg-accent-hover text-bg-primary font-bold text-lg transition-colors duration-200"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight size={20} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
