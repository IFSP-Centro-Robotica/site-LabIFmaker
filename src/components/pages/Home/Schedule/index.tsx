"use client";

import { motion } from "framer-motion";

export const ScheduleHome = () => {
  return (
    <section className="w-full h-[500px] bg-zinc-300 mt-8 flex items-center justify-center">
      <div className="w-[95%] flex flex-col items-center justify-center gap-4">
        <motion.h1
          initial={{
            opacity: 0,
            transform: "translateX(-100px)",
          }}
          whileInView={{
            opacity: 1,
            transform: "translateX(0px)",
          }}
          transition={{ duration: 1 }}
          className="text-black font-montserrat font-bold md:text-4xl text-3xl max-w-4xl text-center"
        >
          Tem alguma <span className="text-primary">dúvida</span> ou{" "}
          <span className="text-primary">quer agendar</span> um horário para
          visitar nosso laboratório?
        </motion.h1>
        <motion.h2
          initial={{
            opacity: 0,
            transform: "translateX(100px)",
          }}
          whileInView={{
            opacity: 1,
            transform: "translateX(0px)",
          }}
          transition={{ duration: 1 }}
          className="text-black font-montserrat text-xl max-w-4xl text-center"
        >
          Então basta entrar em contato através do formulário abaixo.
        </motion.h2>
        <motion.a
          initial={{
            opacity: 0,
            transform: "translateY(100px)",
          }}
          whileInView={{
            opacity: 1,
            transform: "translateY(0px)",
          }}
          transition={{ duration: 1 }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSdGAPut5VFQ6uNyNjfLxX-LiTJvQuL3a4ciRPAOb66dJcvBlQ/viewform?usp=sf_link"
          target="_blank"
          className="text-2xl bg-primary text-white p-4 rounded font-montserrat font-bold shadow-2xl transition-colors hover:bg-primary-light-100 mt-6"
        >
          Formulario
        </motion.a>
      </div>
    </section>
  );
};
