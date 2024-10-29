import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const ExperienceCard = ({
  date,
  title,
  company,
  responsibilities,
  techStack,
  location = "San Jose, CA",
}: {
  date: string;
  title: string;
  company: string;
  responsibilities: Array<string>;
  techStack?: Array<string>;
  location?: string;
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between gap-4">
          <CardTitle className="text-left">{title}</CardTitle>
          <CardTitle className="text-right">{date}</CardTitle>
        </div>
        <div className="flex justify-between gap-4">
          <CardDescription className="text-left">{company}</CardDescription>
          <CardDescription className="text-right">{location}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="mx-4 list-disc">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
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
    </Card>
  );
};

export default ExperienceCard;
