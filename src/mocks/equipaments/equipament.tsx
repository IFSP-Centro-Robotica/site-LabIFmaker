import arduino from "@/assets/equipamentos/arduino.png";
import { StaticImageData } from "next/image";

interface IEquipamentFields {
  title: string;
  slug: string;
  image: {
    src: StaticImageData;
    alt: string;
    className?: string;
  };
  slideImage: StaticImageData[];
  description: string;
  content?: [
    {
      type?: {
        title: "Tipo: ";
        type: string;
      };
      brand?: {
        title: "Marca: ";
        brand: string;
      };
      softwares?: {
        title: "Softwares para utilização: ";
        softwares: string;
      };
      extensions?: {
        title: "Extenções de arquivos suportados pelo software proprietário deste equipamento: ";
        extensions: string;
      };
      recommendedMaterialsTobeUsed?: {
        title: "Matérias-primas recomendados para utilizar no equipamento: ";
        recommendedMaterialsTobeUsed: string;
      };
      website?: {
        title: "Para mais informações, visite o site do: ";
        website: string;
      };
      handbook?: {
        title: "Ou acesse o manual deste equipamento: ";
        handbook: string[];
      };
    },
  ];
}

export const equipamentFields: IEquipamentFields[] = [
  {
    title: "Arduino",
    slug: "arduino",
    image: {
      alt: "Arduino",
      src: arduino,
    },
    slideImage: [arduino],
    description: `O Arduino é uma plataforma de prototipagem eletrônica de
                    código aberto amplamente utilizada por entusiastas,
                    hobistas, estudantes e profissionais da área de eletrônica e
                    programação.`,
    content: [
      {
        brand: {
          title: "Marca: ",
          brand: "Arduino",
        },
      },
    ],
  },
];
