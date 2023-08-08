import { StaticImageData } from "next/image";
import { Link } from "lucide-react";
import placeholder from "@/assets/placeholder.png"
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
    image: placeholder,
    status: "Ativo",
  },
];
