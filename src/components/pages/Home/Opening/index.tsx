import OpeningImage from "@/assets/OpeningFundo.png";
import Image from "next/image";
import LabIfLogo from "@/assets/LabIfLogo.png";

export const OpeningHome = () => {
  return (
    <div className="w-full h-[700px] overflow-hidden bg-zinc-900 relative flex items-center justify-center">
      <Image
        src={OpeningImage}
        alt="fundo"
        className="w-full h-full opacity-30 absolute top-0 left-0"
      />

      <Image src={LabIfLogo} alt="logo labif" className="z-10 h-auto w-[80%]" />
    </div>
  );
};
