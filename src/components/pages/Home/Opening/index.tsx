import OpeningImage from "@/assets/OpeningFundo.png";
import Image from "next/image";
import LabIfLogo from "@/assets/LabIfLogo.png";

export const OpeningHome = () => {
  return (
    <div className="w-full sm:h-[700px] h-[450px] overflow-hidden bg-zinc-900 relative flex items-center justify-center">
      <Image
        src={OpeningImage}
        alt="fundo"
        className="object-cover sm:h-full h-[450px] opacity-30 absolute top-0 left-0"
      />

      <Image src={LabIfLogo} alt="logo labif" className="z-10 h-auto sm:w-[80%]  w-[90%]" />
    </div>
  );
};
