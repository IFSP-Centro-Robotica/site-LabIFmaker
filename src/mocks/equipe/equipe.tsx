import { Phone, Github } from "lucide-react";
import { ImgHTMLAttributes, ReactNode } from "react";

export interface InterfaceEquipeMock {
  name: string;
  curriculumLatte: string;
  linkedin: string;
  image: () => ReactNode;
  moreInformation: {
    formation: string;
    function: string;
    socialMedias?: ISocialMedias[];
    contact?: IContact[];
  };
}

export interface IContact {
  name: string;
  Icon?: ReactNode;
  value?: string;
  isLink?: boolean;
  mask?: string;
}

export interface ISocialMedias {
  name: string;
  Icon?: ReactNode;
  link: string;
}

const styleImage = "w-auto h-full rounded";
const styleIcon = "text-primary";

const sizeIcon = 25;

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
          Icon: <Phone size={sizeIcon} className={styleIcon} />,
          value: "(00) 00000-0000",
        },
        {
          name: "Github",
          Icon: <Github size={sizeIcon} className={styleIcon} />,
          value: "https://github.com/Kyoudan",
          isLink: true,
          mask: "Link",
        },
      ],
    },
  },
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
          Icon: <Phone size={sizeIcon} className={styleIcon} />,
          value: "(00) 00000-0000",
        },
        {
          name: "Github",
          Icon: <Github size={sizeIcon} className={styleIcon} />,
          value: "https://github.com/Kyoudan",
          isLink: true,
          mask: "Link",
        },
      ],
    },
  },
];
