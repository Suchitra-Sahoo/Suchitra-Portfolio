"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import gtbit from "@/assets/images/gtbit.png";
import sps from "@/assets/images/sps.png";

const education = [
  {
    institution: "Guru Tegh Bahadur Institute of Technology (GTBIT)",
    degree: "B.Tech in Information Technology (CGPA:9.2)",
    duration: "2022 - 2026",
    location: "New Delhi, India",
    logo: gtbit,
    whiteBg: false,
  },
  {
    institution: "St. Paul’s School",
    degree: "Class X - 95.4% | Class XII - 95.8%",
    duration: "Completed in 2021",
    location: "New Delhi, India",
    logo: sps,
    whiteBg: true,
  },
];

export const Education = () => {
  return (
    <section id="education" className="pb-16 lg:py-24 bg-black">
      <div className="container">
        <SectionHeader
          eyebrow="Education"
          title="My Academic Background"
          description="A glimpse into my educational journey and achievements."
        />

        <div className="mt-10 md:mt-20 grid md:grid-cols-2 gap-10">
          {education.map((edu, idx) => (
            <Card
              key={idx}
              className="px-8 pt-10 pb-8 md:pt-12 md:px-10 lg:pt-14 lg:px-12 flex flex-col items-center text-center"
            >
              <div
                className={`${
                  edu.whiteBg
                    ? "bg-white rounded-full p-6 mb-6 shadow-lg flex items-center justify-center"
                    : "mb-6 flex items-center justify-center"
                }`}
              >
                <Image
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  className={`object-contain ${
                    edu.whiteBg ? "w-28 h-28" : "w-42 h-42"
                  }`}
                />
              </div>

              <div>
                <div className="bg-gradient-to-r from-pink-300 to-pink-500 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{edu.institution}</span>
                  <span>&bull;</span>
                  <span>{edu.duration}</span>
                </div>
                <h3 className="font-sans text-2xl mt-3 md:mt-5 md:text-3xl">
                  {edu.degree}
                </h3>
                <p className="text-sm text-gray-200 mt-2">{edu.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
