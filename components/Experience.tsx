import React from "react";
import { Icons } from "./Icons";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";

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

const projects = [
  {
    title: "Dental Office Website",
    desc: "Website for a local dental office with SEO strategies implemented to boost online presence.",
    responsibilies: [
      "Website for a local dental office with SEO strategies implemented to boost online presence.",
      "Implemented server-side rendering (SSR) and lazy loading to optimize load times, significantly enhancing user experience and Core Web Vitals.",
      "Applied SEO best practices with structured data and optimized metadata, increasing visibility and search engine rankings.",
      "Prioritized code modularity and maintainability with TypeScript, facilitating scalability and efficient future development.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "USPS API",
      "reCAPTCHA v3",
    ],
    picUrl: "/images/dental-page.png",
    date: "August 2024 - Octorber 2024",
  },
];

const Experience = () => {
  return (
    <div className="mx-auto flex max-h-[300vh] w-full max-w-5xl flex-col justify-center pb-10 font-leagueSpartan sm:flex-row">
      <div className="sticky top-0 hidden h-min w-full flex-col items-center px-6 pt-24 sm:flex sm:w-2/5 sm:items-baseline">
        <h3 className="text-4xl font-bold">Nguyen Nguyen</h3>
        <h3 className="text-2xl font-semibold">Software Engineer</h3>
        <h4 className="flex items-end gap-1 text-xl leading-none">
          <Icons.MapPinIcon />
          Los Angeles, CA
        </h4>
      </div>
      <div className="flex w-full flex-col sm:w-3/5">
        <section id="work-experience" className="relative h-auto">
          <div className="sticky top-0 -mt-8 mb-6 rounded-xl bg-transparent px-6 pt-16 backdrop-blur sm:mt-0 sm:pt-24">
            <h2 className="rounded-xl text-3xl backdrop-blur">
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
        <section id="projects" className="relative h-auto">
          <div className="sticky top-0 mb-6 mt-4 rounded-xl bg-transparent px-6 pt-16 backdrop-blur sm:pt-20">
            <h2 className="rounded-xl text-3xl backdrop-blur">Projects</h2>
          </div>
          <div className="h-auto space-y-2 px-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                date={project.date}
                desc={project.desc}
                picUrl={project.picUrl}
                responsibilities={project.responsibilies}
                techStack={project.techStack}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
