import { CourseMock } from "@/mocks/cursos/cursos";
import { CardComponentCourse } from "./card";

export const Courses = () => {
  return (
    <section className="w-full min-h-common flex flex-col gap-6">
      <div className="w-full flex items-center justify-center my-6">
        <h1 className="text-4xl font-montserrat font-bold text-primary">
          Cursos
        </h1>
      </div>
      {CourseMock &&
        CourseMock.map((course) => (
          <CardComponentCourse props={course} key={course.name} />
        ))}
    </section>
  );
};
