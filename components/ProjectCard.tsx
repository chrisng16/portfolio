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
import Link from "next/link";

type PropsType = {
  title: string;
  desc: string;
  responsibilities: Array<string>;
  techStack: Array<string>;
  picUrl: string;
  date?: string;
  url: string;
};

const ProjectCard = ({
  title,
  desc,
  responsibilities,
  techStack,
  picUrl,
  date,
  url,
}: PropsType) => {
  return (
    <Card>
      <Link href={url} target="_blank">
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
            className="mx-auto my-4 w-4/5 rounded"
          />
          <div>
            <ul className="mx-4 list-disc">
              {responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </CardContent>
        {techStack && (
          <CardFooter className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center rounded-full border bg-black/10 px-4 py-2 font-mono text-xs leading-none dark:bg-white/10"
              >
                <span>{tech}</span>
              </div>
            ))}
          </CardFooter>
        )}
      </Link>
    </Card>
  );
};

export default ProjectCard;
