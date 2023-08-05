interface Equipe {
  name: string;
  curriculumLatte: string;
  linkedin: string;
  moreInformation: {
    formation: string;
    function: string;
    socialMedias?: [
      {
        name: string;
        link: string;
      },
    ];
    contact?: [
      {
        name: string;
        value?: string;
      },
    ];
  };
}

export const equipeMock: Equipe[] = [
  {
    name: "Gustavo Rafael Cardilho",
    curriculumLatte: "http://lattes.cnpq.br/0000000000000000",
    linkedin: "https://www.linkedin.com/in/gustavo-rafael-cardilho-000000000/",
    moreInformation: {
      formation: "Graduando em Engenharia de Computação",
      function: "Presidente",
      contact: [
        {
          name: "Telefone",
          value: "(00) 00000-0000",
        },
      ],
      
    },
  },
];
