"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Education } from "@/sections/Education";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <div data-aos="fade-up">
        <HeroSection />
      </div>

      {/* Education */}
      <div data-aos="fade-up" data-aos-delay="100">
        <Education />
      </div>

      {/* Experience */}
      <div data-aos="fade-up" data-aos-delay="150">
        <ExperienceSection />
      </div>

      {/* Projects */}
      <div data-aos="zoom-in" data-aos-delay="200">
        <ProjectsSection />
      </div>

      {/* Tape Section */}
      <div data-aos="fade-up" data-aos-delay="250">
        <TapeSection />
      </div>

      {/* About */}
      <div data-aos="fade-up" data-aos-delay="300">
        <AboutSection />
      </div>

      {/* Contact */}
      <div data-aos="fade-up" data-aos-delay="350">
        <ContactSection />
      </div>

      {/* Footer (ensure no overlapping and visible) */}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
