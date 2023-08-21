import { Phone, Github, Mail } from "lucide-react";
import { ImgHTMLAttributes, ReactNode } from "react";
import { StaticImageData } from "next/image";
import imageJoao from "@/assets/equipe/joao.jpg";
import imageJosi from "@/assets/equipe/josi.jpeg";
import imageGustavo from "@/assets/equipe/gustavo.jpeg";

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
    name: "Josiane de Oliveira",
    curriculumLatte: "http://lattes.cnpq.br/0070059264743405",
    linkedin: "https://www.linkedin.com/in/josiane-oliveira-7b95b71b9",
    image: imageJosi,
    moreInformation: {
      formation: " Pedagoga, cursando matemática.",
      function: "Práticas pedagógicas com desenho e impressão 3D.",
      contact: [
        {
          name: "Email",
          Icon: <Mail size={sizeIcon} className={styleIcon} />,
          value: " josianedeoliveira1307@gmail.com",
        },
      ],
    },
  },
  
  {
    name: "Márcio Felipe Ribeiro Vieira dos Santos",
    curriculumLatte: "http://lattes.cnpq.br/5228128646264132",
    linkedin: "http://linkedin.com/in/joão-pedro-martins-de-oliveira-969712272",
    image: imageJoao,
    moreInformation: {
      formation: "Cursando técnico em informatica",
      function: "Desenvolver um gerenciador de horta automatizado com Arduino.",
      contact: [
        {
          name: "Telefone",
          Icon: <Phone size={sizeIcon} className={styleIcon} />,
          value: "(15) 99757-1600",
        },
        {
          name: "E-mail",
          Icon: <Mail size={sizeIcon} className={styleIcon} />,
          value: "marcio.felipe@aluno.ifsp.edu.br",
        },
      ],
    },
  },
  {
    name: "Gustavo Rafael Cardilho",
    curriculumLatte: "https://lattes.cnpq.br/2488418666431997",
    linkedin: "https://www.linkedin.com/in/gustavo-rafael-cardilho-000000000/",
    image: imageGustavo,
    moreInformation: {
      formation: "Ensino médio",
      function: "Desenvolvedor web (comunidade externa)",
      contact: [
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
      formation: "Cursando técnico em informatica",
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
        
        {
          name: "Email",
          Icon: <Mail size={sizeIcon} className={styleIcon} />,
          value: "Martinsdeoliveira.pedro2@gmail.com",
        },
      ],
    },
  },
];
