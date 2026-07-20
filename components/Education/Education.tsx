"use client";

import React from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function Education() {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-bg-secondary/20">
      {/* Decorative Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-accent/2 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Qualifications</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary">Education History</h3>
          <div className="h-1 bg-accent mx-auto mt-4 rounded-full w-[60px]" />
        </div>

        {/* Card Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="premium-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-accent group"
            >
              <div className="space-y-4">
                {/* Header icon */}
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-bg-primary transition-colors duration-300">
                  <GraduationCap size={24} />
                </div>

                {/* Degree / Institution */}
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors duration-200">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-semibold text-text-secondary">
                    {edu.institution}
                  </p>
                </div>

                {/* Details */}
                <p className="text-sm text-text-muted leading-relaxed">
                  {edu.details}
                </p>
              </div>

              {/* Footer Meta Details */}
              <div className="mt-8 pt-4 border-t border-border-color/60 flex items-center justify-between">
                <div className="flex items-center gap-1 text-text-muted text-xs font-semibold">
                  <Calendar size={14} className="text-accent" />
                  <span>{edu.duration}</span>
                </div>
                
                {edu.grade && (
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold">
                    <Award size={12} />
                    <span>{edu.grade}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
