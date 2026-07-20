"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Award, Zap } from "lucide-react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

// Counter Animation Subcomponent
function Counter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, motionValue, value]);

  return (
    <div className="text-center p-6 bg-bg-secondary/50 border border-border-color rounded-2xl shadow-premium">
      <div className="text-3xl sm:text-4xl font-extrabold text-accent mb-2 flex items-center justify-center">
        <motion.span ref={ref}>{rounded}</motion.span>
        <span>+</span>
      </div>
      <p className="text-xs sm:text-sm font-semibold text-text-secondary">{label}</p>
    </div>
  );
}

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-bg-secondary/10">
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-accent/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">My Milestones</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary">Key Achievements</h3>
          <div className="h-1 bg-accent mx-auto mt-4 rounded-full w-[60px]" />
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {portfolioData.counters.map((counter, index) => (
            <Counter
              key={index}
              value={counter.value}
              label={counter.label}
            />
          ))}
        </div>

        {/* Gallery Title */}
        <div className="flex items-center gap-2 mb-8 border-b border-border-color/60 pb-4">
          <Zap size={20} className="text-accent" />
          <h4 className="text-xl font-bold text-text-primary">Achievement Gallery</h4>
        </div>

        {/* Grid Photos Showcase */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioData.achievementsPhotos.map((photo, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              whileHover={{ y: -6 }}
              className="premium-card rounded-2xl overflow-hidden group cursor-pointer bg-bg-secondary"
            >
              {/* Photo Box */}
              <div className="relative h-64 w-full bg-bg-tertiary overflow-hidden border-b border-border-color/60">
                <Image
                  src={photo.filePath}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-1.5 text-accent mb-1.5">
                    <Award size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Leadership & Innovation</span>
                  </div>
                  <h5 className="text-sm font-bold text-text-primary">
                    {photo.title}
                  </h5>
                </div>
              </div>

              {/* Caption Box (visible always on small screens, nice hover indicator) */}
              <div className="p-5 flex items-center justify-between">
                <span className="text-xs font-bold text-text-primary line-clamp-1 group-hover:text-accent transition-colors duration-200">
                  {photo.title}
                </span>
                <span className="text-[10px] font-bold text-accent uppercase bg-accent/5 px-2 py-0.5 rounded">
                  View Photo
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
