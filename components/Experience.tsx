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
    title: "Golden Valley Dental Care - Website",
    desc: "A user-friendly, performance-optimized website for Golden Valley Dental Care, highlighting Dr. Lawrence Nguyen's 30+ years of dental experience and services offered in Rocklin, CA, using Next.js for seamless navigation and accessibility.",
    responsibilities: [
      "Developed a responsive website for Golden Valley Dental Care using Next.js, ensuring seamless navigation, accessibility, and performance.",
      "Leveraged modern front-end technologies (e.g., React, Tailwind CSS) to design and implement a user-friendly interface.",
      "Optimized site performance through code splitting, lazy loading, and image optimization to improve load times and user experience.",
      "Collaborated with the client to integrate SEO best practices and enhance visibility for key dental services.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "USPS API",
      "reCAPTCHA v3",
    ],
    picUrl: "/images/gvdc.png",
    date: "January 2025",
    url: "https://goldenvalleydentalcare.us/",
  },
  {
    title: "Food Ordering App",
    desc: "Mobile-friendly restaurant app allowing users to browse menus, customize orders with add-ons, manage their cart, and make secure payments via Stripe.",
    responsibilities: [
      "Developed a scalable restaurant web application using Next.js and TypeScript, focusing on reusable components and modern front-end architecture.",
      "Designed dynamic menu system supporting complex customizations, enhancing user engagement and flexibility.",
      "Integrated Stripe API for secure payment processing, enabling seamless order transactions and improving business efficiency.",
      "Built robust backend functionality using Prisma and PostgreSQL.",
      "Applied responsive, mobile-first design with Tailwind CSS.",
    ],
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Stripe", "Auth.js"],
    picUrl: "/images/restaurant-app.png",
    date: "October 2024 - December 2024",
    url: "https://restaurant-app.nsquare.dev/",
  },
  {
    title: "San Jose Dental Boutique - Website",
    desc: "Website for a local dental office with SEO strategies implemented to boost online presence.",
    responsibilities: [
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
    date: "August 2024 - October 2024",
    url: "https://sjdb.nsquare.dev/",
  },
];

const Experience = () => {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col justify-center pb-10 font-leagueSpartan sm:flex-row">
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
          <div className="sticky top-0 -mt-8 mb-6 rounded bg-transparent px-6 pt-16 backdrop-blur sm:mt-0 sm:pt-24">
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
          <div className="sticky top-0 mb-6 mt-8 rounded bg-transparent px-6 pt-16 backdrop-blur sm:pt-24">
            <h2 className="rounded-xl text-3xl backdrop-blur">
              Work-related Projects
            </h2>
          </div>
          <div className="h-auto space-y-2 px-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                date={project.date}
                desc={project.desc}
                picUrl={project.picUrl}
                responsibilities={project.responsibilities}
                techStack={project.techStack}
                url={project.url}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
