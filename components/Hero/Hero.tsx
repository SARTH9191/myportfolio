"use client";

import React, { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const [currentDesignation, setCurrentDesignation] = useState("");
  const [designationIndex, setDesignationIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Typewriter effect for designations
  useEffect(() => {
    const list = portfolioData.personal.designations;
    const currentFullText = list[designationIndex];

    let typingSpeed = 100;
    if (isDeleting) {
      typingSpeed = 50;
    }

    const type = () => {
      if (!isDeleting && charIndex < currentFullText.length) {
        setCurrentDesignation(currentFullText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentDesignation(currentFullText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === currentFullText.length) {
        // Wait before starting to delete
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setDesignationIndex(prev => (prev + 1) % list.length);
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, designationIndex]);

  // Particle background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        // Brown/cream translucent colors
        const colors = [
          "rgba(154, 111, 78, 0.15)", // Accent
          "rgba(229, 169, 125, 0.1)",  // Light Accent
          "rgba(92, 74, 69, 0.08)"     // Muted text
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > width) this.x = 0;
        else if (this.x < 0) this.x = width;

        if (this.y > height) this.y = 0;
        else if (this.y < 0) this.y = height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    const particlesArray: Particle[] = [];
    const particleCount = 60;
    for (let i = 0; i < particleCount; i++) {
      particlesArray.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect particles with faint lines
      ctx.strokeStyle = "rgba(154, 111, 78, 0.03)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i + 1; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }

      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20,
        delay: 1 + custom * 0.1
      }
    })
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Canvas Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Tagline Badge */}
          <motion.div
            variants={itemVariants}
            className="px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-semibold uppercase tracking-wider mb-6"
          >
            {portfolioData.personal.tagline}
          </motion.div>

          {/* Name Reveal */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-text-primary mb-4"
          >
            Hi, I&apos;m <span className="text-accent relative inline-block">Sarthak Pawar</span>
          </motion.h1>

          {/* Designations Typewriter */}
          <motion.div
            variants={itemVariants}
            className="text-lg md:text-2xl font-medium text-text-secondary h-8 md:h-10 mb-8 flex items-center"
          >
            <span className="mr-1">I am a</span>
            <span className="text-accent border-r-2 border-accent cursor-blink pr-1 font-semibold">
              {currentDesignation}
            </span>
          </motion.div>

          {/* Introduction paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-text-secondary max-w-2xl text-base md:text-lg leading-relaxed mb-10 text-center"
          >
            {portfolioData.personal.introduction}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent hover:bg-accent-hover text-bg-primary font-bold text-sm shadow-premium transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </a>

            <a
              href={portfolioData.personal.resumeUrl}
              download
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl border border-border-color bg-bg-secondary hover:bg-bg-tertiary text-text-secondary font-bold text-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Social Icons bouncing sequence */}
          <div className="flex items-center gap-6">
            <motion.a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              custom={1}
              variants={socialIconVariants}
              whileHover={{ y: -4, scale: 1.1 }}
              className="p-3 rounded-full border border-border-color bg-bg-secondary hover:bg-bg-tertiary text-text-secondary hover:text-accent shadow-premium transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </motion.a>

            <motion.a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              custom={2}
              variants={socialIconVariants}
              whileHover={{ y: -4, scale: 1.1 }}
              className="p-3 rounded-full border border-border-color bg-bg-secondary hover:bg-bg-tertiary text-text-secondary hover:text-accent shadow-premium transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </motion.a>

            <motion.a
              href={`mailto:${portfolioData.personal.email}`}
              custom={3}
              variants={socialIconVariants}
              whileHover={{ y: -4, scale: 1.1 }}
              className="p-3 rounded-full border border-border-color bg-bg-secondary hover:bg-bg-tertiary text-text-secondary hover:text-accent shadow-premium transition-all duration-200"
              aria-label="Email Me"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-xs text-text-muted font-medium uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-1.5 h-1.5 rounded-full bg-accent"
        />
      </motion.div>
    </section>
  );
}
