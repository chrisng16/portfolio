import React from "react";
import { Icons } from "./Icons";
import ExperienceCard from "./ExperienceCard";

const responsibilitiesJob1: Array<string> = [
  "Developed custom web applications by analyzing client requirements and creating system architectures.",
  "Integrated third party APIs, optimizing for performance and functionality.",
  "Maintained database configurations and performed basic networking and implementation tasks for client projects.",
  "Created and maintained comprehensive technical documentation to support development processes and client solutions.",
];
const techJob1: Array<string> = [
  "JavaScript",
  "TypeScript",
  "Next.js",
  "TailwindCSS",
];
const responsibilitiesJob2: Array<string> = [
  "Supervised daily operations, ensuring smooth communication between front and back-of-house teams.",
  "Resolved customer and operational issues efficiently, maintaining high customer satisfaction.",
  "Managed team operations, implementing time management and collaborative strategies for improved performance.",
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col sm:flex-row justify-center max-h-[300vh] font-leagueSpartan w-full mx-auto max-w-5xl pb-10"
    >
      <div className="sticky h-min top-0 hidden sm:flex flex-col pt-24 px-6 w-full sm:w-2/5 items-center sm:items-baseline ">
        <h3 className="text-4xl font-bold">Nguyen Nguyen</h3>
        <h3 className="text-2xl font-semibold">Software Engineer</h3>
        <h4 className="text-xl leading-none flex gap-1 items-end">
          <Icons.MapPinIcon />
          Los Angeles, CA
        </h4>
      </div>
      <div className="flex flex-col w-full sm:w-3/5">
        <section id="work-experience" className="h-auto relative">
          <div className="px-6 sticky top-0 pt-16 sm:pt-24 mb-6 bg-transparent rounded-xl backdrop-blur">
            <h2 className="text-3xl backdrop-blur rounded-xl">
              Work Experience
            </h2>
          </div>
          <div className="h-full space-y-2 px-6">
            <ExperienceCard
              date={"December 2023 - Present"}
              title={"Founder / Full-Stack Developer"}
              company={"nSquare.dev"}
              responsibilities={responsibilitiesJob1}
              techStack={techJob1}
            />
            <ExperienceCard
              date={"July 2020 - August 2024"}
              title={"Front-House Manager / Server"}
              company={"Thien Long Vietnamese Restaurant"}
              responsibilities={responsibilitiesJob2}
            />
          </div>
        </section>
        <section id="projects" className="h-auto relative">
          <div className="px-6 sticky top-0 pt-16 sm:pt-24 mb-6 bg-transparent rounded-xl backdrop-blur">
            <h2 className="text-3xl backdrop-blur rounded-xl">Projects</h2>
          </div>
          <div className="h-auto space-y-2 px-6">
            <ExperienceCard
              date={"December 2023 - Present"}
              title={"Founder / Full-Stack Developer"}
              company={"nSquare.dev"}
              responsibilities={responsibilitiesJob1}
              techStack={techJob1}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
