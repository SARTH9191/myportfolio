"use client";

import React from "react";
import { Cpu, Layout, Terminal, Database, Code, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function Skills() {
  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case "ai & machine learning":
        return <Cpu size={20} />;
      case "frontend development":
        return <Layout size={20} />;
      case "backend development":
        return <Terminal size={20} />;
      case "databases":
        return <Database size={20} />;
      case "programming":
        return <Code size={20} />;
      default:
        return <ShieldAlert size={20} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-bg-secondary/15">
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-accent/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">My Toolkit</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary">Skills & Expertise</h3>
          <div className="h-1 bg-accent mx-auto mt-4 rounded-full w-[60px]" />
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioData.skills.map((category) => (
            <motion.div
              key={category.category}
              variants={cardVariants}
              className="premium-card rounded-2xl p-6 sm:p-8 space-y-6 hover:border-accent group bg-bg-secondary"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-bg-primary transition-colors duration-300">
                  {getCategoryIcon(category.category)}
                </div>
                <h4 className="text-lg font-bold text-text-primary">
                  {category.category}
                </h4>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5 group/skill relative">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                      <span className="text-text-secondary group-hover/skill:text-accent transition-colors duration-200">
                        {skill.name}
                      </span>
                      {/* Interactive percentage badge */}
                      <span className="text-accent bg-accent/5 px-2 py-0.5 rounded text-[11px] font-bold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-2 w-full bg-bg-tertiary rounded-full overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                        className="h-full bg-accent rounded-full relative"
                      >
                        {/* Glow indicator at the edge of bar */}
                        <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-white/30 blur-[1px]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
