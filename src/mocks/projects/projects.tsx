import { ReactNode } from "react";

export interface InterfaceProjectsMock{
    name: string;
    description: string;
    authors: string[];
    image: () => ReactNode
    status: "Ativo" | "Finalizado" 
}

const styleImage = "w-auto h-full rounded";

export const ProjectMock: InterfaceProjectsMock[] = [
    {
        name: "Site LabIF Maker",
        description: "Projeto realizado para o desenvolvimento da plataforma on-line do LabIF Maker",
        authors: ["João Pedro Martins"],
        image: () => (
            <img
              src="https://via.placeholder.com/250"
              alt="Foto de perfil"
              className={styleImage}
            />
          ),
        status: "Ativo"
    },
    {
        name: "Site LabIF Maker",
        description: "Projeto realizado para o desenvolvimento da plataforma on-line do LabIF Maker",
        authors: ["João Pedro Martins"],
        image: () => (
            <img
              src="https://via.placeholder.com/250"
              alt="Foto de perfil"
              className={styleImage}
            />
          ),
        status: "Ativo"
    },
    {
        name: "Site LabIF Maker",
        description: "Projeto realizado para o desenvolvimento da plataforma on-line do LabIF Maker",
        authors: ["João Pedro Martins"],
        image: () => (
            <img
              src="https://via.placeholder.com/250"
              alt="Foto de perfil"
              className={styleImage}
            />
          ),
        status: "Ativo"
    }
]