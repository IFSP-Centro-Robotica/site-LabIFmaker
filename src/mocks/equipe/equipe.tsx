import { ImgHTMLAttributes, ReactNode } from "react";

export interface InterfaceEquipeMock {
  name: string;
  curriculumLatte: string;
  linkedin: string;
  image: () => ReactNode;
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

const styleImage = "w-auto h-full rounded";

export const EquipeMock: InterfaceEquipeMock[] = [
  {
    name: "Gustavo Rafael Cardilho",
    curriculumLatte: "http://lattes.cnpq.br/0000000000000000",
    linkedin: "https://www.linkedin.com/in/gustavo-rafael-cardilho-000000000/",
    image: () => (
      <img
        src="https://via.placeholder.com/250"
        alt="Foto de perfil"
        className={styleImage}
      />
    ),
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
