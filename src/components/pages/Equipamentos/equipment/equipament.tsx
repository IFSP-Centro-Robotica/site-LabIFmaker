import arduino from "@/assets/equipamentos/arduino.png";
import Image from "next/image";

const equipamentStyle = "rounded border border-spacing-1 border-zinc-500";

interface IEquipamentFields {
    title: string;
    image: () => JSX.Element;
    description: string;
    href: string;
}

export const equipamentFields: IEquipamentFields[] = [
    {
        title: "Arduino",
        image: () => (
            <Image src={arduino} alt="arduino" className={equipamentStyle} />
        ),
        description: `O Arduino é uma plataforma de prototipagem eletrônica de
                    código aberto amplamente utilizada por entusiastas,
                    hobistas, estudantes e profissionais da área de eletrônica e
                    programação.`,
        href: "/equipamentos/arduino",
    },
    {
        title: "Arduino",
        image: () => (
            <Image src={arduino} alt="arduino" className={equipamentStyle} />
        ),
        description: `O Arduino é uma plataforma de prototipagem eletrônica de
                    código aberto amplamente utilizada por entusiastas,
                    hobistas, estudantes e profissionais da área de eletrônica e
                    programação.`,
        href: "/equipamentos/arduino",
    },
    {
        title: "Arduino",
        image: () => (
            <Image src={arduino} alt="arduino" className={equipamentStyle} />
        ),
        description: `O Arduino é uma plataforma de prototipagem eletrônica de
                    código aberto amplamente utilizada por entusiastas,
                    hobistas, estudantes e profissionais da área de eletrônica e
                    programação.`,
        href: "/equipamentos/arduino",
    },
    {
        title: "Arduino",
        image: () => (
            <Image src={arduino} alt="arduino" className={equipamentStyle} />
        ),
        description: `O Arduino é uma plataforma de prototipagem eletrônica de
                    código aberto amplamente utilizada por entusiastas,
                    hobistas, estudantes e profissionais da área de eletrônica e
                    programação.`,
        href: "/equipamentos/arduino",
    },
    {
        title: "Arduino",
        image: () => (
            <Image src={arduino} alt="arduino" className={equipamentStyle} />
        ),
        description: `O Arduino é uma plataforma de prototipagem eletrônica de
                    código aberto amplamente utilizada por entusiastas,
                    hobistas, estudantes e profissionais da área de eletrônica e
                    programação.`,
        href: "/equipamentos/arduino",
    },
    {
        title: "Arduino",
        image: () => (
            <Image src={arduino} alt="arduino" className={equipamentStyle} />
        ),
        description: `O Arduino é uma plataforma de prototipagem eletrônica de
                    código aberto amplamente utilizada por entusiastas,
                    hobistas, estudantes e profissionais da área de eletrônica e
                    programação.`,
        href: "/equipamentos/arduino",
    },
];
