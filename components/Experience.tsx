import React from "react";
import { Icons } from "./Icons";

const Experience = () => {
  return (
    <div className="flex justify-center max-h-[300vh] font-leagueSpartan w-full mx-auto max-w-5xl ">
        
      <div className="sticky max-h-screen top-0 flex flex-col p-24 w-1/2">
        <h3 className="text-4xl font-bold">Nguyen Nguyen</h3>
        <h3 className="text-2xl font-semibold">Software Engineer</h3>
        <h4 className="text-xl leading-none flex gap-1 items-end">
          <Icons.MapPinIcon />
          Los Angeles, CA
        </h4>
      </div>
      <div className="flex flex-col w-1/2">
        <section id="work-experience" className="h-screen relative">
          <div className="sticky top-0 pt-24">
            <h2 className="text-3xl">Work Experience</h2>
            <div className="h-full"></div>
          </div>
        </section>
        <section id="projects" className="h-screen relative">
          <div className="sticky top-0 pt-24">
            <h2 className="text-3xl">Projects</h2>
            <div className="h-full"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
