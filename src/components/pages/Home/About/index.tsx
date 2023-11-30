import background from "@/assets/OpeningFundo.webp";
import { motion } from "framer-motion";
import Image from "next/image";
import { Description } from "./Description";

export const AboutHome = () => {
  return (
    <section className="w-full xl:h-[900px] xl:flex-row h-auto flex flex-col gap-12 items-center justify-center xl:pt-4 pb-4 sm:pr-12 sm:pl-12 mt-4">
      <motion.div
        className="w-full h-full flex lg:items-start lg:justify-start items-center justify-center"
        initial={{
          opacity: 0,
          transform: "translateX(-100px)",
        }}
        whileInView={{
          opacity: 1,
          transform: "translateX(0px)",
        }}
        transition={{ duration: 1 }}
      >
        <Image
          src={background}
          alt="Imagem com lápis e desenhos"
          className="sm:w-full sm:h-[100%] w-[90%] h-auto object-cover rounded shadow-xl shadow-zinc-600"
        />
      </motion.div>
      <div className="w-full h-full rounded flex flex-col gap-12 xl:pr-0 xl:pl-0 pr-6 pl-6 justify-between">
        <Description />
      </div>
    </section>
  );
};
