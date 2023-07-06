import LogoIF from "@/assets/IfLogo.png";
import Image from "next/image";
import Link from "next/link";

const buttonsStyle =
  "p-2 hover:bg-primary-light-100 transition-colors text-white rounded font-montserrat font-bold";

export const HeaderComponent = () => {
  return (
    <div className="w-screen bg-primary flex sm:flex-row flex-col items-center justify-between pt-2 pb-2 gap-6">
      <div className="ml-4">
        <Link href="/">
          <Image src={LogoIF} alt="logo" className="w-auto h-12" />
        </Link>
      </div>
      <div className="sm:w-1/2 w-full flex flex-row items-center sm:justify-end justify-center gap-4 sm:mr-4 flex-wrap">
        <Link href="/" className={buttonsStyle}>
          Home
        </Link>
        <Link href="/equipamentos" className={buttonsStyle}>
          Equipamentos
        </Link>
        <button className={buttonsStyle}>Galeria</button>
        <button className={buttonsStyle}>Agendamento</button>
      </div>
    </div>
  );
};
