import { ProjectsGrid } from "../components/seccions/projects/ProjectsGrid";

export const ProjectsContainer = () => {
  const projects = [
    {
      title: "Portfolio Personal",
      description: "Mi portafolio creado con Next.js y Tailwind.",
      imageUrl: "/project.png",
      link: "https://miportfolio.com",
    },
    {
      title: "App de Tareas",
      description: "Gestor de tareas con autenticación y base de datos.",
      imageUrl: "/project.png",
      link: "https://todoapp.com",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Proyectos</h2>
      <ProjectsGrid projects={projects} />
    </section>
  );
};
