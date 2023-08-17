import { Phone, Github } from "lucide-react";
import { ImgHTMLAttributes, ReactNode } from "react";
import imageJoao from "@/assets/equipe/joao.jpg";
import { StaticImageData } from "next/image";

export interface InterfaceEquipeMock {
  name: string;
  curriculumLatte: string;
  linkedin: string;
  image: StaticImageData;
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
    image: imageJoao,
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
    name: "João Pedro Martins de Oliveira Medeiros",
    curriculumLatte: "http://lattes.cnpq.br/5228128646264132",
    linkedin: "http://linkedin.com/in/joão-pedro-martins-de-oliveira-969712272",
    image: imageJoao,
    moreInformation: {
      formation: "Cursando tecnico em informatica",
      function: "Desenvolvedor web",
      contact: [
        {
          name: "Telefone",
          Icon: <Phone size={sizeIcon} className={styleIcon} />,
          value: "(15) 99773-0257",
        },
        {
          name: "Github",
          Icon: <Github size={sizeIcon} className={styleIcon} />,
          value: "https://github.com/Martins-pedro23",
          isLink: true,
          mask: "Link",
        },
      ],
    },
  },
];
