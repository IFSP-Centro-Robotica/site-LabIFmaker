import { Phone, Github, Mail } from "lucide-react";
import { ImgHTMLAttributes, ReactNode } from "react";
import { StaticImageData } from "next/image";
import imageJoao from "@/assets/equipe/joao.jpg";
import imageJosi from "@/assets/equipe/josi.jpeg";
import imageGustavo from "@/assets/equipe/gustavo.jpeg";
import imageMarcio from "@/assets/equipe/marcio.jpeg";
import imageVitor from "@/assets/equipe/vitor.jpeg";
import imageCarlos from "@/assets/equipe/carlos.webp";
import imageWilton from "@/assets/equipe/wilton.webp";

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

const styleIcon = "text-primary";

const sizeIcon = 25;

export const EquipeMock: InterfaceEquipeMock[] = [
  {
    name: "Carlos H. S. Santos.",
    curriculumLatte: "http://lattes.cnpq.br/2704773293662530",
    linkedin:
      "https://www.linkedin.com/in/carlos-henrique-da-silva-santos-01424215/",
    image: imageCarlos,
    moreInformation: {
      formation: "Dr. Engenharia Elétrica (2010) Unicamp.",
      function: "Coordenador Associado.",
    },
  },
  {
    name: "Wilton Moreira Ferraz Junior.",
    curriculumLatte: "http://lattes.cnpq.br/4328187599187471",
    linkedin: "www.linkedin.com/in/wilton-moreira-ferraz-junior-62b35b28",
    image: imageWilton,
    moreInformation: {
      formation:
        "Mestre em Ciência da Computação pela Universidade Federal de São Carlos (2015).",
      function:
        "Professor EBTT, Coordenador de Estágios da área de Informática, Responsável pelo LABIF MAKER do IFSP Campus Itapetininga.",
    },
  },
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
    curriculumLatte: "http://lattes.cnpq.br/0388691536843398",
    linkedin: "https://www.linkedin.com/in/m%C3%A1rcio-felipe-445818289",
    image: imageMarcio,
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

  {
    name: "Vitor Gabriel de Aquino ",
    curriculumLatte: "http://lattes.cnpq.br/5228128646264132",
    linkedin: "https://www.linkedin.com/in/vitor-aquino-516a05286/",
    image: imageVitor,
    moreInformation: {
      formation: "Cursando Técnico de Informática",
      function: "Desenvolver da plataforma Hello2code",
      contact: [
        {
          name: "GitHub",
          Icon: <Github size={sizeIcon} className={styleIcon} />,
          value: "https://github.com/Vitor-G-Aquino",
          isLink: true,
          mask: "Link",
        },
      ],
    },
  },
];
