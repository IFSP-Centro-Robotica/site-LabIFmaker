import LabIF from "@/assets/projetos/LabIFMaker.png";
import { StaticImageData } from "next/image";
export interface InterfaceProjectsMock {
  name: string;
  description: string;
  authors: string[];
  image: StaticImageData;
  status: "Ativo" | "Finalizado";
}

const styleImage = "w-auto h-full rounded";

export const ProjectMock: InterfaceProjectsMock[] = [
  {
    name: "Site LabIF Maker",
    description:
      "Projeto realizado para o desenvolvimento da plataforma on-line do LabIF Maker",
    authors: ["João Pedro Martins", "Gustavo Rafael Cardilho"],
    image: LabIF,
    status: "Ativo",
  },
  {
    name: "Práticas pedagógicas de desenho e impressão 3D",
    description: `Este projeto pretende elaborar videos que, incialmente, ensinem docentes e professores a utilizarem e
                  quipementos de desenho e impressão 3D. Para que estes possam trabalhar com seus alunos em praticas pedagogicas.`,
    authors: ["Josiane de Oliveira"],
    image: LabIF,
    status: "Ativo",
  },
];
