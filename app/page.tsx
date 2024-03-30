import ProjectCard from "@/components/core/ProjectCard";
import { projects } from "./data/projects";

export default function Home() {
  return (
    <>
      <div className="flex flex-col space-y-3">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </>
  );
}
