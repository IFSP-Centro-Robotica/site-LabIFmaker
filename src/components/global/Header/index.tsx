"use client";

import LogoIF from "@/assets/IfLogo.png";
import Image from "next/image";
import Link from "next/link";
import { MenuPhoneComponent } from "../MenuPhone";

const buttonsStyle =
  "p-2 hover:bg-primary-light-100 transition-colors text-white rounded font-montserrat font-bold";

export const HeaderComponent = () => {
  return (
    <div className="w-full bg-primary flex sm:flex-row flex-col items-center justify-between pt-2 pb-2 gap-6">
      <div className="ml-4 lg:w-1/2 w-full flex flex-row justify-between lg:p-0 px-6">
        <Link href="/">
          <Image src={LogoIF} alt="logo" className="w-auto h-12" />
        </Link>
        <MenuPhoneComponent />
      </div>
      <div className="sm:w-1/2 w-full flex-row items-center sm:justify-end justify-center gap-4 sm:mr-4 flex-wrap lg:flex hidden">
        <Link href="/" className={buttonsStyle}>
          Inicio
        </Link>
        <Link href="/equipamentos" className={buttonsStyle}>
          Equipamentos
        </Link>
        <Link href="/galeria" className={buttonsStyle}>
          Galeria
        </Link>
        <Link href="/cursos" className={buttonsStyle}>
          Cursos
        </Link>
        <Link href="/projetos" className={buttonsStyle}>
          Projetos
        </Link>
        <Link href="/equipe" className={buttonsStyle}>
          Equipe
        </Link>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdGAPut5VFQ6uNyNjfLxX-LiTJvQuL3a4ciRPAOb66dJcvBlQ/viewform?usp=sf_link"
          className={buttonsStyle}
          target="_blank"
        >
          Agendamento
        </a>
      </div>
    </div>
  );
};
