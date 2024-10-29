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
        <ul className="list-disc mx-4">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
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

export default ExperienceCard;
