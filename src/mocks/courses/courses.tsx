export interface InterfaceCoursesMock {
  name: string;
  description: string;
  link: string;
  moodleLink: string;
}

export const CourseMock: InterfaceCoursesMock[] = [
  {
    name: "Curso de informatica presencial",
    description:
      "Este curso aborda um dos principais temas sobre a tecnologia no mercado atualmente...",
    link: "https://www.youtube.com/watch?v=Dj9qJsJTsjQ",
    moodleLink: "https://moodle.itp.ifsp.edu.br/login/index.php",
  },
];
