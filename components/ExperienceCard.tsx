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
    <Card className="bg-white/10 dark:bg-black/10">
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
              className="rounded-full border border-white/70 bg-white/50 px-2"
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
