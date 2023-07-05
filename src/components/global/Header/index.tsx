import LogoIF from "@/assets/IfLogo.png";
import Image from "next/image";

const buttonsStyle =
  "p-2 hover:bg-primary-light-100 transition-colors text-white rounded font-montserrat font-bold";

export const HeaderComponent = () => {
  return (
    <div className="w-screen bg-primary flex flex-row justify-between pt-2 pb-2">
      <div className="ml-4">
        <button>
          <Image src={LogoIF} alt="logo" className="w-auto h-12" />
        </button>
      </div>
      <div className="w-1/2 flex flex-row items-center justify-end gap-4 mr-4">
        <button className={buttonsStyle}>Home</button>
        <button className={buttonsStyle}>Equipamentos</button>
        <button className={buttonsStyle}>Galeria</button>
        <button className={buttonsStyle}>Agendamento</button>
      </div>
    </div>
  );
};
