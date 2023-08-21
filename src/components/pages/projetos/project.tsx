import { ProjectMock } from "@/mocks/projects/projects";
import { CardComponentProjects } from "./card";

export const Project = () => {
  return (
    <section className="w-full min-h-common flex flex-col gap-6">
      <div className="w-full flex items-center justify-center my-6">
        <h1 className="text-4xl font-montserrat font-bold text-primary">
          Projetos
        </h1>
      </div>
      <div className="lg:grid flex flex-col grid-cols-2 lg:gap-y-20 gap-4 mb-20">

        {ProjectMock &&
          ProjectMock.map((project) => (
          <CardComponentProjects props={project} key={project.name} />
          ))}
      </div>
    </section>
  );
};
