import impressora3dEnderImage1 from "@/assets/equipamentos/Impressora-3D-Creality-Ender-3-1.jpg";
import impressora3dEnderImage2 from "@/assets/equipamentos/Impressora-3D-Creality-Ender-3-2.png";
import impressora3dEnderImage3 from "@/assets/equipamentos/Impressora-3D-Creality-Ender-3-3.jpg";
import impressora3dEnderProImage1 from "@/assets/equipamentos/Impressora-3D-Creality-Ender-3-Pro-1.jpg";
import impressora3dEnderProImage2 from "@/assets/equipamentos/Impressora-3D-Creality-Ender-3-Pro-2.jpg";
import impressora3dEnderProImage3 from "@/assets/equipamentos/Impressora-3D-Creality-Ender-3-Pro-3.jpg";
import impressoraFlsunImage1 from "@/assets/equipamentos/Impressora-flsun-1.jpg";
import impressoraFlsunImage2 from "@/assets/equipamentos/Impressora-flsun-2.jpg";
import impressoraFlsunImage3 from "@/assets/equipamentos/Impressora-flsun-3.jpg";
import mesaDigitalizadoraImage1 from "@/assets/equipamentos/Mesa-digitalizadora-1.webp";
import mesaDigitalizadoraImage2 from "@/assets/equipamentos/Mesa-digitalizadora-2.webp";
import maquinaLaser from "@/assets/equipamentos/Maquina-Laser.png";
import arduino from "@/assets/equipamentos/arduino.png";
import { StaticImageData } from "next/image";

interface ISlideImage {
  src: StaticImageData;
  alt: string;
}

interface IHandbook {
  title: string;
  link: string;
}

export interface IEquipamentFields {
  title: string;
  slug: string;
  image: {
    src: StaticImageData;
    alt: string;
    className?: string;
  };
  slideImage: ISlideImage[];
  description: string;
  content?: {
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
      title: string;
      extensions: string;
    };
    recommendedMaterialsTobeUsed?: {
      title: string;
      recommendedMaterialsTobeUsed: string;
    };
    website?: {
      title: "Para mais informações, visite o site da fabricante: ";
      website: string;
    };
    handbook?: {
      title: "Ou acesse o manual deste equipamento: ";
      handbook: IHandbook[];
    };
  };
}

export const equipamentFields: IEquipamentFields[] = [
  {
    title: "Arduino",
    slug: "arduino",
    image: {
      alt: "Arduino",
      src: arduino,
    },
    slideImage: [
      {
        alt: "Arduino",
        src: arduino,
      },
      {
        alt: "Arduino",
        src: arduino,
      },
    ],
    description: `O Arduino é uma plataforma de prototipagem eletrônica de
                    código aberto amplamente utilizada por entusiastas,
                    hobistas, estudantes e profissionais da área de eletrônica e
                    programação.`,
    content: {
      brand: {
        title: "Marca: ",
        brand: "Arduino",
      },
      handbook: {
        title: "Ou acesse o manual deste equipamento: ",
        handbook: [
          {
            link: "http://www.arduino.cc/en/Guide/HomePage",
            title: "Manual do Arduino",
          },
          {
            link: "http://www.arduino.cc/en/Reference/HomePage",
            title: "Referência do Arduino",
          },
        ],
      },
      website: {
        title: "Para mais informações, visite o site da fabricante: ",
        website: "https://www.arduino.cc/",
      },
    },
  },
  {
    title: "Maquina Laser 60x90cm",
    slug: "maquina-laser-60x90cm",
    image: {
      alt: "Maquina Laser 60X90cm",
      src: maquinaLaser,
    },
    slideImage: [
      {
        alt: "Maquina Laser 60X90cm",
        src: maquinaLaser,
      },
    ],
    description: `A Máquina Laser CO² é um equipamento de alta tecnologia, capaz de
                  cortar e gravar materiais, como: acrílico, madeira, entre outros.
                  A máquina usa desenhos vetoriais para realizar a gravura.`,
    content: {
      brand: {
        title: "Marca: ",
        brand: "Delta CNC",
      },
      handbook: {
        title: "Ou acesse o manual deste equipamento: ",
        handbook: [
          {
            link: "https://www.deltacnc.com.br/fichastecnicas/Ficha%20T%c3%a9cnica%20Laser%20L9060%20com%20C%c3%a2mera.pdf",
            title: "Manual Maquina Laser",
          },
        ],
      },
      softwares: {
        title: "Softwares para utilização: ",
        softwares:
          "Inskscape e softwares de desenho vetorial (Corel, Illustrator), juntamente com o software RDWorks para o controle da máquina.",
      },
      recommendedMaterialsTobeUsed: {
        title: "Matérias-primas recomendados para utilizar no equipamento: ",
        recommendedMaterialsTobeUsed:
          "Somente para grvação: Acrílico, madeira, couro, vidro, pedra, aço. Recorte: Acrílico até 12mm, MDF 9mm, compensado leve 10 mm, tecido, papéis e espuma",
      },
      extensions: {
        title: "Extenções de arquivos suportados pelo equipamento: ",
        extensions: "gcode, svg, pdf, dxf e todos os tipos de imagem.",
      },
      website: {
        title: "Para mais informações, visite o site da fabricante: ",
        website: "https://www.deltacnc.com.br/",
      },
    },
  },
  {
    title: "Impressora 3D ender 3 pro",
    slug: "impressora-3d-ender-3-pro",
    image: {
      alt: "Impressora 3D ender 3 pro",
      src: impressora3dEnderProImage1,
    },
    slideImage: [
      {
        alt: "Impressora 3D ender 3 pro",
        src: impressora3dEnderProImage1,
      },
      {
        alt: "Impressora 3D ender 3 pro",
        src: impressora3dEnderProImage2,
      },
      {
        alt: "Impressora 3D ender 3 pro",
        src: impressora3dEnderProImage3,
      },
    ],
    description: `A Ender 3 Pro é uma impressora 3D de código aberto, com uma
                    vasta gama demateriais para impressão. É uma impressora 3D
                    com uma área de impressão
                    de 220x220x250mm e uma velocidade de até 180mm/s.`,
    content: {
      brand: {
        title: "Marca: ",
        brand: "Creality",
      },
      softwares: {
        title: "Softwares para utilização: ",
        softwares: "Autodesk Fusion, ThinkerCad, SolidWorks",
      },
      extensions: {
        title: "Extenções de arquivos suportadas: ",
        extensions: "STL, OBJ, G-Code",
      },
      recommendedMaterialsTobeUsed: {
        title: "Filementos recomendados: ",
        recommendedMaterialsTobeUsed: "TPU, PLA, PLA Wood, ABS, PETG e HIPS",
      },
      handbook: {
        title: "Ou acesse o manual deste equipamento: ",
        handbook: [
          {
            link: "https://img.staticdj.com/f52e9e3f21fa6a519f3a577d7ed5a3c2.pdf?spm=..page_1995881.download_support_1.1",
            title: "Manual Impressora 3D Ender 3 Pro",
          },
        ],
      },
      website: {
        title: "Para mais informações, visite o site da fabricante: ",
        website: "https://www.creality.com/products/ender-3-pro-3d-printer",
      },
    },
  },
  {
    title: "Impressora 3D ender 3",
    slug: "impressora-3d-ender-3",
    image: {
      alt: "Impressora 3D ender 3",
      src: impressora3dEnderImage1,
    },
    slideImage: [
      {
        alt: "Impressora 3D ender 3",
        src: impressora3dEnderImage1,
      },
      {
        alt: "Impressora 3D ender 3",
        src: impressora3dEnderImage2,
      },
      {
        alt: "Impressora 3D ender 3",
        src: impressora3dEnderImage3,
      },
    ],
    description: `A Ender 3 é uma impressora 3D de código aberto, com uma vasta
                    gama demateriais para impressão. É uma impressora 3D com uma
                    área de impressão de 220x220x250mm e uma velocidade de até
                    180mm/s.`,
    content: {
      brand: {
        title: "Marca: ",
        brand: "Creality",
      },
      softwares: {
        title: "Softwares para utilização: ",
        softwares: "Autodesk Fusion, ThinkerCad, SolidWorks",
      },
      extensions: {
        title: "Extenções de arquivos suportadas: ",
        extensions: "STL, OBJ, G-Code",
      },
      recommendedMaterialsTobeUsed: {
        title: "Filementos recomendados: ",
        recommendedMaterialsTobeUsed: "TPU, PLA, PLA Wood, ABS, PETG e HIPS",
      },
      handbook: {
        title: "Ou acesse o manual deste equipamento: ",
        handbook: [
          {
            link: "https://img.staticdj.com/176a642244a56d133e30883492628d47.pdf?spm=..page_1995737.download_support_1.1&spm_prev=..product_ce00868d-efe2-4fa8-9168-240e7c3b3cd1.nav_link_store_1.1",
            title: "Manual Impressora 3D Ender 3",
          },
        ],
      },
      website: {
        title: "Para mais informações, visite o site da fabricante: ",
        website: "https://www.creality.com/products/ender-3-3d-printer",
      },
    },
  },
  {
    title: "Impressora 3D Flsun QQ-S",
    slug: "impressora-3d-flsun-qq-s",
    image: {
      alt: "Impressora 3D Flsun QQ-S",
      src: impressoraFlsunImage1,
    },
    slideImage: [
      {
        alt: "Impressora 3D Flsun QQ-S",
        src: impressoraFlsunImage1,
      },
      {
        alt: "Impressora 3D Flsun QQ-S",
        src: impressoraFlsunImage2,
      },
      {
        alt: "Impressora 3D Flsun QQ-S",
        src: impressoraFlsunImage3,
      },
    ],
    description: `A Flsun é uma impressora 3D de baixo custo, com uma vasta
                    gama demateriais para impressão. É uma impressora 3D com uma
                    área de impressão de 450x770x200mm e uma velocidade de até
                    300mm/s.`,
    content: {
      brand: {
        title: "Marca: ",
        brand: "Flsun",
      },
      softwares: {
        title: "Softwares para utilização: ",
        softwares: "Autodesk Fusion, ThinkerCad, SolidWorks",
      },
      extensions: {
        title: "Extenções de arquivos suportadas: ",
        extensions: "STL, OBJ, G-Code",
      },
      recommendedMaterialsTobeUsed: {
        title: "Filementos recomendados: ",
        recommendedMaterialsTobeUsed: "PLA, ABS, flexible, HIPS, wood, PVA",
      },
      handbook: {
        title: "Ou acesse o manual deste equipamento: ",
        handbook: [
          {
            link: "https://www.manualslib.com/manual/2455810/Flsun-Qq.html#product-QQ-S",
            title: "Manual Impressora 3D Ender 3",
          },
        ],
      },
      website: {
        title: "Para mais informações, visite o site da fabricante: ",
        website: "https://flsun3d.com/",
      },
    },
  },
  {
    title: "Mesa Wacom Cintiq 24hd",
    slug: "mesa-digitalizadora-wacom-cintiq-24hd",
    image: {
      alt: "Mesa digitalizadora Wacom Cintiq 24hd",
      src: mesaDigitalizadoraImage1,
    },
    slideImage: [
      {
        alt: "Mesa digitalizadora Wacom Cintiq 24hd",
        src: mesaDigitalizadoraImage1,
      },
      {
        alt: "Mesa digitalizadora Wacom Cintiq 24hd",
        src: mesaDigitalizadoraImage2,
      },
    ],
    description: `A mesa digitalizadora Wacom Cintiq 24hd possui uma tela touch
                    de 24 polegadas e uma resolução de 1920x1200 pixels.
                    A mesa digitalizadora possui uma caneta com 2048 níveis de
                    pressão.`,
    content: {
      brand: {
        title: "Marca: ",
        brand: "Wacom",
      },
      softwares: {
        title: "Softwares para utilização: ",
        softwares: "Adobe Photoshop, InkScape, Gimp dentre outros softwares de desenho e edição de imagem.",
      },
      extensions: {
        title: "Extenções de arquivos suportadas: ",
        extensions: "PNG, JPG, JPEG, SVG, PDF",
      },
      handbook: {
        title: "Ou acesse o manual deste equipamento: ",
        handbook: [
          {
            link: "http://101.wacom.com/UserHelp/pt/About_Cintiq24.htm",
            title: "Manual Mesa Digitalizadora",
          },
        ],
      },
      website: {
        title: "Para mais informações, visite o site da fabricante: ",
        website: "https://www.wacom.com/en-br",
      },
    },
  },
];
