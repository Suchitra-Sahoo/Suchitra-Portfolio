"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import curious from "@/assets/images/curious.jpeg";
import iit from "@/assets/images/iit.jpg"

const experiences = [
  {
    company: "Curious Business Solution Pvt. Ltd.",
    role: "Full Stack Developer Intern",
    duration: "Jul 2024 - Aug 2025",
    location: "Karnataka, India",
    details: [
      "Enhanced user interface of Inspiration App, mentor-mentee connection platform.",
      "Collaborated on the development of the Curious Community developer forum, resolving 25+ front-end bugs and streamlining user navigation.",
      "Coordinated with 20+ members across 3 teams (Enhancement, Bug Fixing, L&D) to improve performance and ensure reliability of the platform."
    ],
  },
  {
    company: "Indian Institute of Technology (IIT Delhi)",
    role: "Developer Intern",
    duration: "Oct 2024 - Jan 2025",
    location: "New Delhi, India",
    details: [
      "Contributed in development of the main website for candidate hiring, integrating 5+ psychological tests to evaluate candidate traits effectively.",
      "Collaborated with the design team, supported in data collection, and actively participated in team meetings."
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="pb-16 lg:py-24 bg-black">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="My Professional Journey"
          description="Here’s a snapshot of my internships and professional contributions."
        />

        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
              <div className="lg:grid lg:grid-cols-1 lg:gap-16 mb-4">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-pink-300 to-pink-500 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{exp.company}</span>
                    <span>&bull;</span>
                    <span>{exp.duration}</span>
                  </div>
                  <h3 className="font-sans text-2xl mt-2 md:mt-5 md:text-4xl">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-gray-200 mt-1">{exp.location}</p>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {exp.details.map((detail, i) => (
                      <li
                        className="flex gap-2 text-sm md:text-base text-gray-200"
                        key={i}
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
