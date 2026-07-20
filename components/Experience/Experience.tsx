"use client";

import React from "react";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/2 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">My Journey</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary">Professional Experience</h3>
          <div className="h-1 bg-accent mx-auto mt-4 rounded-full w-[60px]" />
        </div>

        {/* Vertical Timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l border-border-color pl-6 sm:pl-8 space-y-12 ml-4 sm:ml-6"
        >
          {portfolioData.experience.map((exp, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline dot / icon */}
              <span className="absolute -left-[43px] sm:-left-[51px] top-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-border-color bg-bg-primary text-accent shadow-premium z-10">
                <Briefcase size={16} />
              </span>

              {/* Experience Card */}
              <div className="premium-card rounded-2xl p-6 sm:p-8 space-y-4 hover:border-accent">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-xl font-bold text-text-primary">{exp.role}</h4>
                    <span className="text-sm font-semibold text-accent">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-text-muted text-xs font-semibold">
                    <Calendar size={14} className="text-accent" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-2.5 pt-2">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start text-sm text-text-secondary leading-relaxed">
                      <ChevronRight size={16} className="text-accent shrink-0 mt-0.5 mr-2" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
