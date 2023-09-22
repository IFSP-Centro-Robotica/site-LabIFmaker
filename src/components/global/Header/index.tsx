"use client";

import LogoIF from "@/assets/IfLogo.png";
import Image from "next/image";
import Link from "next/link";
import { MenuPhoneComponent } from "../MenuPhone";
import Icons from "@/assets/labifmakerlogosmall.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Home,
  Hammer,
  Image as ImageIcon,
  GraduationCap,
  Users2,
  Bot,
  ExternalLink,
} from "lucide-react";

const paths = [
  {
    name: "Inicio",
    path: "/",
    icon: () => <Home />,
    title: "Pagina inicial",
  },
  {
    name: "Equipamentos",
    path: "/equipamentos",
    icon: () => <Hammer />,
    title: "Pagina de equipamentos",
  },
  {
    name: "Galeria",
    path: "/galeria",
    icon: () => <ImageIcon />,
    title: "Galeria",
  },
  {
    name: "Cursos",
    path: "/cursos",
    icon: () => <GraduationCap />,
    title: "Pagine de cursos",
  },
  {
    name: "Projetos",
    path: "/projetos",
    icon: () => <Bot />,
    title: "Pagina de projetos",
  },
  {
    name: "Equipe",
    path: "/equipe",
    icon: () => <Users2 />,
    title: "Pagina de equipe",
  },
];

const linksStyle =
  "w-full  transition-all hover:bg-zinc-200 hover:rounded font-montserrat font-bold p-2 flex items-center justify-start flex-col";

export const HeaderComponent = () => {
  return (
    <div className="w-full bg-primary flex sm:flex-row flex-col justify-center items-center  px-4 pt-2 pb-2 gap-6">
      <div className="lg:w-1/2 w-full flex flex-row lg:justify-center justify-between lg:p-0 px-6">
        <Link href="/">
          <Image src={LogoIF} alt="logo" className="w-auto h-12" />
        </Link>
        <MenuPhoneComponent />
      </div>
      {/* <div className="sm:w-1/2 w-full flex-row items-center sm:justify-end justify-center gap-4 sm:mr-4 flex-wrap lg:flex hidden">
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
      </div> */}
      <div className="sm:w-1/2 w-full flex-row items-center sm:justify-center justify-center gap-4 sm:mr-4 flex-wrap lg:flex hidden z-50">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-primary-light-100 hover:bg-primary-light-100 font-montserrat font-semibold text-lg text-white">
                Navegação
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className={`row-span-6`}>
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-xl bg-zinc-500"
                        href="/"
                      >
                        <Image
                          alt="Logo labif"
                          src={Icons}
                          className="h-24 w-24"
                        />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Laboratorio maker
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Navegue em nosso site clicando nos links ao lado
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {paths.map((item, index) => (
                    <div
                      className="w-full flex flex-col"
                      key={`nav-link-map-${index}`}
                    >
                      <Link
                        href={item.path}
                        title={item.title}
                        className={linksStyle}
                      >
                        <div className="w-full flex flex-row gap-6">
                          <item.icon />
                          {item.name}
                        </div>
                      </Link>
                      {index != paths.length && (
                        <span className="w-full h-[1px]  border-b border-zinc-400 my-1"></span>
                      )}
                    </div>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-primary-light-100 hover:bg-primary-light-100 font-montserrat font-semibold text-lg text-white">
                Outros
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  <h1 className={linksStyle}>Documentação</h1>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdGAPut5VFQ6uNyNjfLxX-LiTJvQuL3a4ciRPAOb66dJcvBlQ/viewform?usp=sf_link"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink
                  className={
                    navigationMenuTriggerStyle() +
                    " bg-primary-light-100 hover:bg-primary-light-100 font-montserrat font-semibold text-lg text-white flex flex-row gap-2"
                  }
                >
                  <ExternalLink />
                  Agendamento
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};
