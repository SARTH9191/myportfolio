import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Education from "@/components/Education/Education";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Certifications from "@/components/Certifications/Certifications";
import Achievements from "@/components/Achievements/Achievements";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      {/* Dynamic Nav bar */}
      <Navbar />

      {/* Main sections layout */}
      <main>
        {/* Landing Hero */}
        <Hero />

        {/* About Info & flip cards */}
        <About />

        {/* Experience Timeline */}
        <Experience />

        {/* Education grid */}
        <Education />

        {/* Projects filter showcase */}
        <Projects />

        {/* Skills progress meters */}
        <Skills />

        {/* Certifications showcase */}
        <Certifications />

        {/* Milestone achievements & gallery */}
        <Achievements />

        {/* Contact Form panel */}
        <Contact />
      </main>

      {/* Footer credits and social hubs */}
      <Footer />
    </div>
  );
}
