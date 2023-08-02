import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

const buttonsStyle =
  "p-2 hover:bg-primary-light-100 transition-colors text-primary rounded font-montserrat font-bold w-full hover:text-white border-primary border block text-center text-2xl";

export const MenuPhoneComponent = () => {
  return (
    <div className="lg:w-[45px] lg:hidden flex items-center justify-center z-50">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-primary-light-200 active:bg-primary-light-300 text-white">
              <Menu size={30} />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-full flex flex-col gap-4 p-5 border-primary border ">
              <NavigationMenuLink className="w-full">
                <Link className={buttonsStyle} href="/">
                  Inicio
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink className="w-full">
                <Link className={buttonsStyle} href="/equipamentos">
                  Equipamentos
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink className="w-full">
                <Link className={buttonsStyle} href="/galeria">
                  Galeria
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink className="w-full">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdGAPut5VFQ6uNyNjfLxX-LiTJvQuL3a4ciRPAOb66dJcvBlQ/viewform?usp=sf_link"
                  className={buttonsStyle}
                  target="_blank"
                >
                  Agendamento
                </a>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
