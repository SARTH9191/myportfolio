"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Target, Eye, Sparkles, Award } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  const [missionFlipped, setMissionFlipped] = useState(false);
  const [visionFlipped, setVisionFlipped] = useState(false);

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-bg-secondary/30">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-accent/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs uppercase tracking-widest text-accent font-semibold mb-2"
          >
            Get to Know Me
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-text-primary"
          >
            About Me
          </motion.h3>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="h-1 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Floating Profile Image */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-72 h-80 sm:w-80 sm:h-96 group cursor-pointer"
            >
              {/* Outer Decorative Border Frame */}
              <div className="absolute inset-0 border-2 border-accent/20 rounded-2xl translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
              
              {/* Colored Backdrop */}
              <div className="absolute inset-0 bg-accent/5 rounded-2xl translate-x-2 translate-y-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />

              {/* Main Image Container */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden premium-card border border-border-color">
                <Image
                  src={portfolioData.personal.profilePhoto}
                  alt={portfolioData.personal.fullName}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Float Cards/Badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -left-6 top-12 glass px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-premium"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <Sparkles size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-accent tracking-wider">AI Developer</p>
                  <p className="text-xs font-semibold text-text-primary">Innovator</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1.5, ease: "easeInOut" }}
                className="absolute -right-6 bottom-12 glass px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-premium"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <Award size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-accent tracking-wider">Patents & Awards</p>
                  <p className="text-xs font-semibold text-text-primary">Hackathon Winner</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: About Info & Flip Cards */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h4 className="text-2xl font-bold text-text-primary leading-tight">
                Engineering AI systems that connect technology with societal needs.
              </h4>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                {portfolioData.personal.aboutMe}
              </p>
            </motion.div>

            {/* Mission & Vision Flip Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Mission Card */}
              <div 
                className="h-48 cursor-pointer perspective"
                onClick={() => setMissionFlipped(!missionFlipped)}
                onMouseEnter={() => setMissionFlipped(true)}
                onMouseLeave={() => setMissionFlipped(false)}
              >
                <div className={`relative w-full h-full duration-500 transform-style preserve-3d ${missionFlipped ? "rotate-y-180" : ""}`}>
                  {/* Front Side */}
                  <div className="absolute inset-0 backface-hidden rounded-xl border border-border-color bg-bg-secondary p-6 flex flex-col justify-between shadow-premium hover:border-accent transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                      <Target size={24} />
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-text-primary mb-1">Our Mission</h5>
                      <p className="text-xs text-accent font-semibold tracking-wider uppercase">Hover to reveal</p>
                    </div>
                  </div>
                  {/* Back Side */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl border border-accent bg-bg-secondary p-6 flex flex-col justify-center shadow-premium">
                    <h5 className="text-base font-bold text-accent mb-2 flex items-center gap-1.5">
                      <Target size={16} />
                      Mission
                    </h5>
                    <p className="text-sm text-text-secondary leading-relaxed font-medium">
                      {portfolioData.personal.mission}
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision Card */}
              <div 
                className="h-48 cursor-pointer perspective"
                onClick={() => setVisionFlipped(!visionFlipped)}
                onMouseEnter={() => setVisionFlipped(true)}
                onMouseLeave={() => setVisionFlipped(false)}
              >
                <div className={`relative w-full h-full duration-500 transform-style preserve-3d ${visionFlipped ? "rotate-y-180" : ""}`}>
                  {/* Front Side */}
                  <div className="absolute inset-0 backface-hidden rounded-xl border border-border-color bg-bg-secondary p-6 flex flex-col justify-between shadow-premium hover:border-accent transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                      <Eye size={24} />
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-text-primary mb-1">Our Vision</h5>
                      <p className="text-xs text-accent font-semibold tracking-wider uppercase">Hover to reveal</p>
                    </div>
                  </div>
                  {/* Back Side */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl border border-accent bg-bg-secondary p-6 flex flex-col justify-center shadow-premium">
                    <h5 className="text-base font-bold text-accent mb-2 flex items-center gap-1.5">
                      <Eye size={16} />
                      Vision
                    </h5>
                    <p className="text-sm text-text-secondary leading-relaxed font-medium">
                      {portfolioData.personal.vision}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global CSS Inject for 3D card flips */}
      <style jsx global>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .transform-style {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}
