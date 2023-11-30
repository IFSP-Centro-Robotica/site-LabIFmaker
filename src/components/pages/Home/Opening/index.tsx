"use client";

import LabIfLogo from "@/assets/LabIfLogo.png";
import OpeningImage from "@/assets/OpeningFundo.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { HeaderHome } from "../HeaderHome";

export const OpeningHome = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="w-full sm:h-[800px] h-[500px] overflow-hidden bg-zinc-900 relative flex items-center justify-center">
      <HeaderHome />
      <Image
        src={OpeningImage}
        alt="Papel de parede meio apagado com lápis e desenhos"
        className="object-cover sm:h-full h-[450px] opacity-30 absolute top-0 left-0"
      />

      <motion.div
        className="z-10 w-full h-full flex items-center justify-center"
        style={{
          y: backgroundY,
        }}
      >
        <Image
          src={LabIfLogo}
          alt="Logo LabIF sobre o papel de parede"
          className="z-10 h-auto sm:w-[80%]  w-[90%]"
          ref={ref}
        />
      </motion.div>
    </div>
  );
};
