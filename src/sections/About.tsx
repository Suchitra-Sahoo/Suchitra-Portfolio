"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolBoxItems";
import { MdJavascript } from "react-icons/md";
import { FaCss3, FaGithub, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const toolboxItems = [
  { title: "HTML", iconType: FaHtml5 },
  { title: "CSS", iconType: FaCss3 },
  { title: "JavaScript", iconType: MdJavascript },
  { title: "GIT/GITHUB", iconType: FaGithub },
  { title: "REACT", iconType: FaReact },
  { title: "MONGODB", iconType: DiMongodb },
  { title: "NODEJS", iconType: FaNode },
  { title: "NEXTJS", iconType: RiNextjsFill },
  { title: "TAILWINDCSS", iconType: RiTailwindCssFill },
  { title: "TYPESCRIPT", iconType: SiTypescript },
];

export const AboutSection = () => {
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about me, who I am, what I do and what inspires me!"
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader
              title="My Toolbox"
              description={
                <span className="whitespace-nowrap">
                  Explore the technologies and tools I use to craft exceptional
                  digital experiences.
                </span>
              }
            />

            <ToolboxItems
              items={toolboxItems}
              className=""
              itemsWrapperClassName="animate-move-left"
            />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="animate-move-right"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};
