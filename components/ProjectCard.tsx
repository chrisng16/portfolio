import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

type PropsType = {
  title: string;
  desc: string;
  responsibilities: Array<string>;
  techStack: Array<string>;
  picUrl: string;
  date?: string;
};

const ProjectCard = ({
  title,
  desc,
  responsibilities,
  techStack,
  picUrl,
  date,
}: PropsType) => {
  return (
    <Card>
      <CardHeader className="pb-0">
        <div className="flex justify-between">
          <CardTitle>{title}</CardTitle>
          <CardTitle className="text-right">{date}</CardTitle>
        </div>

        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={picUrl}
          alt="Projects: Dental Website"
          width={1600}
          height={900}
          className="rounded-xl my-4 mx-auto w-4/5"
        />
        <div>
          <ul className="list-disc mx-4">
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      {techStack && (
        <CardFooter className="gap-2 flex flex-wrap">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="rounded-full border bg-black/10 dark:bg-white/10 py-2 px-4 font-mono flex items-center leading-none text-xs"
            >
              <span>{tech}</span>
            </div>
          ))}
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;
