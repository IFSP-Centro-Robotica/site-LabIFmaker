"use client";

import { FooterComponent } from "@/components/global/Footer";
import { AboutHome } from "@/components/pages/Home/About";
import { Map } from "@/components/pages/Home/Map";
import { OpeningHome } from "@/components/pages/Home/Opening";
import { ScheduleHome } from "@/components/pages/Home/Schedule";
import { SliderHome } from "@/components/pages/Home/Slider";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div
        className="w-screen h-screen fixed bg-white opacity-80 z-40 pointer-events-none "
        initial={{ opacity: 1, display: "block" }}
        animate={{ opacity: 0 }}
        onAnimationEnd={() => {
          document.body.style.display = "none";
        }}
        transition={{ duration: 1.2 }}
      ></motion.div>

      <motion.div
        className="w-[1920px] h-screen fixed bg-primary-dark-200 z-50"
        initial={{
          right: "-1920px",
        }}
        animate={{
          right: "2000px",
        }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      <motion.div
        className="w-[1920px] h-screen fixed bg-primary z-50"
        initial={{
          right: "-2200px",
        }}
        animate={{
          right: "2000px",
        }}
        transition={{ duration: 0.8 }}
      ></motion.div>

      <motion.div
        className="w-[1920px] h-screen fixed bg-primary-light-200 z-50"
        initial={{
          right: "-2500px",
        }}
        animate={{
          right: "2000px",
        }}
        transition={{ duration: 1 }}
      ></motion.div>

      <main className="overflow-x-hidden">
        <OpeningHome />
        <SliderHome />
        <AboutHome />
        <Map />
        <ScheduleHome />
        <FooterComponent />
      </main>
    </>
  );
}
