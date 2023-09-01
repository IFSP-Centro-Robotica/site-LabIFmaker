import { CourseMock } from "@/mocks/courses/courses";
import { CardComponentCourse } from "./card";

export const Courses = () => {
  return (
    <section className="w-full min-h-common flex flex-col gap-6">
      <div className="w-full flex items-center justify-center my-6">
        <h1 className="text-4xl font-montserrat font-bold text-primary">
          Cursos
        </h1>
      </div>
      <section className="w-full flex items-center justify-center flex-row gap-4 ">
        {CourseMock &&
          CourseMock.map((course) => (
            <CardComponentCourse props={course} key={course.name} />
          ))}
      </section>
    </section>
  );
};
