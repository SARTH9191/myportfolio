"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Github, ExternalLink, Network, Award, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData, Project } from "@/data/portfolioData";

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "ai" | "fullstack">("all");
  const [showEduTrackArchitecture, setShowEduTrackArchitecture] = useState(false);

  // Grouping tags to filter:
  // "ai" filter matches projects with "FastAPI", "LangChain", "LangGraph", "AI Assistant", "Generative AI"
  // "fullstack" filter matches projects with "Next.js 15", "TypeScript", "React", "Node.js", "Express"
  const isAiProject = (project: Project) => {
    return project.tags.some(tag => 
      ["FastAPI", "LangChain", "LangGraph", "AI Assistant", "Generative AI", "Python"].includes(tag)
    );
  };

  const isFullStackProject = (project: Project) => {
    return project.tags.some(tag => 
      ["Next.js 15", "TypeScript", "React", "Node.js", "Express", "MongoDB", "SQL"].includes(tag)
    );
  };

  const filteredProjects = portfolioData.projects.filter(project => {
    if (filter === "all") return true;
    if (filter === "ai") return isAiProject(project);
    if (filter === "fullstack") return isFullStackProject(project);
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-bg-secondary/10">
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-accent/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">My Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary">Featured Projects</h3>
          <div className="h-1 bg-accent mx-auto mt-4 rounded-full w-[60px]" />
        </div>

        {/* Filters Panel */}
        <div className="flex justify-center items-center gap-4 mb-12">
          {[
            { id: "all", label: "All Projects" },
            { id: "ai", label: "AI & Agents" },
            { id: "fullstack", label: "Full-Stack" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as "all" | "ai" | "fullstack")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border cursor-pointer ${
                filter === tab.id
                  ? "bg-accent border-accent text-bg-primary shadow-premium"
                  : "bg-bg-secondary border-border-color text-text-secondary hover:text-accent hover:border-accent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isEduTrack = project.title === "EduTrack";
              const isSmartFarming = project.title === "Smart Farming";

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={project.title}
                  className="premium-card rounded-2xl overflow-hidden flex flex-col justify-between hover:border-accent group relative h-full bg-bg-secondary"
                >
                  <div className="space-y-6">
                    {/* Project Image Panel */}
                    <div className="relative h-52 w-full bg-bg-tertiary overflow-hidden border-b border-border-color">
                      {isEduTrack ? (
                        /* EduTrack Specific Double-Image Preview */
                        <div className="relative w-full h-full">
                          <Image
                            src={showEduTrackArchitecture ? project.architectureImage! : project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-all duration-500"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                          {/* Overlay Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/70 via-transparent to-transparent" />
                          
                          {/* Toggle Diagram Button */}
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setShowEduTrackArchitecture(!showEduTrackArchitecture);
                            }}
                            className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-xs font-bold text-accent border border-accent/20 cursor-pointer shadow-premium hover:bg-accent hover:text-bg-primary transition-all duration-300"
                          >
                            <Network size={14} />
                            <span>{showEduTrackArchitecture ? "Show UI Preview" : "Show Architecture"}</span>
                          </button>
                        </div>
                      ) : (
                        /* Standard Project Image */
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-103"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/70 via-transparent to-transparent" />
                        </div>
                      )}

                      {/* Badges */}
                      {isSmartFarming && (
                        <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full bg-accent/90 backdrop-blur-md text-bg-primary text-[10px] font-bold tracking-wider uppercase">
                          <Award size={12} />
                          <span>Patent Filed</span>
                        </div>
                      )}
                      
                      {isEduTrack && (
                        <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full bg-accent/90 backdrop-blur-md text-bg-primary text-[10px] font-bold tracking-wider uppercase">
                          <Layers size={12} />
                          <span>Research & System Design</span>
                        </div>
                      )}
                    </div>

                    {/* Details Panel */}
                    <div className="px-6 space-y-3">
                      <h4 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-200">
                        {project.title}
                      </h4>
                      <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                      
                      {/* Technical Detail for Expanded Context */}
                      {isEduTrack && showEduTrackArchitecture && (
                        <p className="text-xs text-accent bg-accent/5 p-2.5 rounded-lg border border-accent/10 mt-2">
                          <strong>Architecture Node:</strong> Includes UI Gateway, FastAPI controller node, SQLite metrics DB, and LangChain assistant.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Footer tags & links */}
                  <div className="px-6 pb-6 pt-4 space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md bg-bg-tertiary border border-border-color/60 text-text-muted text-[11px] font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4 pt-2 border-t border-border-color/60">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 text-xs font-bold text-text-secondary hover:text-accent transition-colors duration-200"
                        >
                          <Github size={16} />
                          <span>Code repository</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 text-xs font-bold text-text-secondary hover:text-accent transition-colors duration-200"
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
