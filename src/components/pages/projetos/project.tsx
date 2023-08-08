import { ProjectMock } from "@/mocks/projects/projects";
import { CardComponentProjects } from "./card";

export const Project = () => {
  return (
    <section className="w-full min-h-common flex flex-col">
      <div className="w-full flex items-center justify-center my-6">
        <h1 className="text-4xl font-montserrat font-bold text-primary">
          Projetos
        </h1>
      </div>
      {ProjectMock &&
        ProjectMock.map((project) => (
          <CardComponentProjects props={project} key={project.name} />
        ))}
    </section>
  );
};
