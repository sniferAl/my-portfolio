import { ProjectCard } from "./ProjectCard";

type Project = {
  title: string;
  description: string;
  imageUrl?: string;
  link: string;
};

type ProjectsGridProps = {
  projects: Project[];
};

export const ProjectsGrid = ({ projects }: ProjectsGridProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {projects.map((project) => (
      <ProjectCard key={project.title} {...project} />
    ))}
  </div>
);
