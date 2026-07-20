"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, FileText, ExternalLink, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function Certifications() {
  const [activeTab, setActiveTab] = useState<"all" | "patent" | "tech" | "academic">("all");

  // Filter certificates based on type
  const filteredCertificates = portfolioData.certificates.filter((cert) => {
    if (activeTab === "all") return true;
    if (activeTab === "patent") return cert.isPatent;
    if (activeTab === "tech") return cert.type === "certificate" && !cert.isPatent;
    if (activeTab === "academic") return cert.type === "academic";
    return true;
  });

  // Show all patent certificates prominently
  const patentCertificates = portfolioData.certificates.filter(c => c.isPatent);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-bg-secondary/5">
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-accent/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Credentials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary">Certifications & Intellectual Property</h3>
          <div className="h-1 bg-accent mx-auto mt-4 rounded-full w-[60px]" />
        </div>

        {/* Featured Patent Section (Always Prominent at Top) */}
        {patentCertificates.length > 0 && (
          <div className="mb-16 space-y-8">
            <div className="text-center">
              <h4 className="text-lg sm:text-xl font-bold text-text-primary">Patents & Intellectual Property</h4>
              <p className="text-sm text-text-secondary mt-1">Highlighted filings and certificate previews</p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {patentCertificates.map((patentCert) => (
                <motion.div
                  key={patentCert.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-bg-secondary border border-accent/20 rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-shadow duration-300 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-2 text-accent bg-accent/10 px-3.5 py-1.5 rounded-full w-fit">
                      <Cpu size={16} />
                      <span className="text-xs font-bold uppercase tracking-wider">Intellectual Property</span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-2xl sm:text-3xl font-extrabold text-text-primary">
                        {patentCert.title}
                      </h4>
                      <p className="text-sm font-semibold text-accent">
                        Filed with the {patentCert.issuer}
                      </p>
                    </div>

                    <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                      A highlighted patent filing from the credentials section.
                    </p>

                    <a
                      href={patentCert.filePath}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-hover text-bg-primary font-bold text-sm transition-colors duration-200"
                    >
                      <span>View Patent Certificate</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  <div className="lg:col-span-5 flex justify-center">
                    <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden shadow-premium-lg border border-border-color/60 bg-bg-tertiary group">
                      <Image
                        src={patentCert.filePath}
                        alt={patentCert.title}
                        fill
                        className="object-contain p-2 bg-white transition-transform duration-500 group-hover:scale-103"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Filters for remaining certificates */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
          {[
            { id: "all", label: "All Credentials" },
            { id: "tech", label: "Technical Certificates" },
            { id: "academic", label: "Academic Records" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as "all" | "patent" | "tech" | "academic")}
              className={`px-4.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border cursor-pointer ${
                activeTab === tab.id
                  ? "bg-accent border-accent text-bg-primary"
                  : "bg-bg-secondary border-border-color text-text-secondary hover:text-accent hover:border-accent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Carousel/Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCertificates.filter(c => !c.isPatent).map((cert) => {
              const isImage = cert.filePath.endsWith(".jpeg") || cert.filePath.endsWith(".png") || cert.filePath.endsWith(".jpg");

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={cert.title}
                  className="premium-card rounded-2xl p-6 flex flex-col justify-between hover:border-accent group bg-bg-secondary"
                >
                  <div className="space-y-4">
                    {/* Icon Panel */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                        {cert.type === "academic" ? <FileText size={20} /> : <Award size={20} />}
                      </div>
                      
                      <span className="text-[10px] uppercase font-bold tracking-wider text-text-muted px-2.5 py-0.5 rounded-md bg-bg-tertiary">
                        {cert.type === "academic" ? "Transcript" : "Certificate"}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="space-y-1">
                      <h5 className="text-base font-bold text-text-primary group-hover:text-accent transition-colors duration-200 line-clamp-2">
                        {cert.title}
                      </h5>
                      <p className="text-xs font-semibold text-text-muted">
                        {cert.issuer}
                      </p>
                    </div>

                    {/* Image Preview if applicable */}
                    {isImage && (
                      <div className="relative h-32 w-full rounded-lg overflow-hidden border border-border-color/40 bg-white">
                        <Image
                          src={cert.filePath}
                          alt={cert.title}
                          fill
                          className="object-contain p-1.5"
                          sizes="(max-width: 768px) 100vw, 25vw"
                        />
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-border-color/60 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-accent">
                      {isImage ? "IMAGE PREVIEW" : "PDF DOCUMENT"}
                    </span>
                    <a
                      href={cert.filePath}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-bold text-text-secondary hover:text-accent transition-colors"
                    >
                      <span>Open Link</span>
                      <ExternalLink size={12} />
                    </a>
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
