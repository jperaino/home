import React from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Project } from "@/app/data/projects";

export interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { name, description, link } = project;

  return (
    <a href={link}>
      <Card className={`p-3 space-y-2`}>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </Card>
    </a>
  );
};

export default ProjectCard;
