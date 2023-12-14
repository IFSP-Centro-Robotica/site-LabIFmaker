export interface InterfaceCoursesMock {
  name: string;
  description: string;
  link: string;
  moodleLink: string;
  linkIsEmbed?: boolean
}

export const CourseMock: InterfaceCoursesMock[] = [
  {
    name: "Introdução a modelagem e impressão 3D MOOC",
    description:
      `O curso de Desenho 3D e Impressão 3D abrange práticas pedagógicas para professores relacionadas ao desenho e à impressão em três dimensões. 
      Estruturado em dois módulos distintos, o primeiro módulo (Desenho 3D) utiliza o software intuitivo Tinkercad para introduzir os conceitos do desenho tridimensional. 
      Nesse segmento, os participantes serão instruídos nas formas elementares e completarão dois projetos práticos com aplicações viáveis em ambiente educacional.
      O segundo módulo trata da Impressão 3D, composto por seis aulas abrangentes e demonstrativas, centradas nas funcionalidades do software Ultimaker Cura. 
      Esse programa é especializado no processo de fatiamento de desenhos 3D para prepará-los visando à impressão física.
      Ao concluir o curso através da plataforma Moodle, os professores terão o certificado atestando a conclusão curso.`,
    link: "https://www.youtube.com/embed/c9FiyuOm2qo?si=kC3Yyh5CQjS9mUdV",
    moodleLink: "https://youtu.be/c9FiyuOm2qo?si=IBYKWH040_CYVnWU",
    linkIsEmbed: true
  },
];
