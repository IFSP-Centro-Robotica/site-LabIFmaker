import { Zap } from "lucide-react";

interface IResourcesFields {
    icon: () => JSX.Element;
    description: string;
}

const iconsStyle = "text-primary";
const iconSize = 30;

export const resourcesFields: IResourcesFields[] = [
    {
        icon: () => <Zap className={iconsStyle} size={iconSize}/>,
        description: "Prototipagem de objetos utilizando CNC",
    },
    {
        icon: () => <Zap className={iconsStyle} size={iconSize}/>,
        description: "Impressão de protótipos 3D",
    },
    {
        icon: () => <Zap className={iconsStyle} size={iconSize}/>,
        description: "Soldagem em eletrônica e mecânica",
    },
    {
        icon: () => <Zap className={iconsStyle} size={iconSize}/>,
        description: "Gravação a laser",
    },
    {
        icon: () => <Zap className={iconsStyle} size={iconSize}/>,
        description: "Fabricação de PCI’s",
    },
    {
        icon: () => <Zap className={iconsStyle} size={iconSize}/>,
        description: "Preenchimento a laser",
    },
];
