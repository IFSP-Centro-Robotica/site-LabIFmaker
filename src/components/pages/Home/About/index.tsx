import Image from "next/image";
import background from "@/assets/OpeningFundo.png";
import { ArchiveRestore, Lightbulb, Wrench } from "lucide-react";

export const AboutHome = () => {
  return (
    <section className="w-full xl:h-[900px] xl:flex-row h-auto flex flex-col gap-12 items-center justify-center xl:pt-4 pb-4 sm:pr-12 sm:pl-12 mt-4">
      <div className="w-full h-full flex lg:items-start lg:justify-start items-center justify-center">
        <Image
          src={background}
          alt="Imagem com lápis e desenhos"
          className="sm:w-full sm:h-auto w-[90%] h-auto object-cover rounded shadow-xl shadow-zinc-600"
        />
      </div>
      <div className="w-full h-full rounded flex flex-col gap-12 xl:pr-0 xl:pl-0 pr-6 pl-6 justify-between">
        <div className="w-full flex flex-col gap-8">
          <h1 className="font-montserrat font-bold sm:text-6xl text-5xl">
            O que é o Lab
            <span className="text-primary">IF</span> Maker?
          </h1>
          <p className="font-montserrat text-xl text-justify">
            O LabIF Maker é um espaço de produção criativa, onde os alunos, os
            servidores e a comunidade externa podem desenvolver projetos de
            forma colaborativa, utilizando ferramentas de fabricação digital,
            como impressoras 3D, cortadoras a laser, entre outras. O espaço é
            aberto a todos, basta realizar o seu agendamento!
          </p>
        </div>
        <div className="w-full flex flex-col gap-12">
          <div className="w-full flex sm:flex-row flex-col sm:border-none border-b pb-8 border-spacing-1 border-black gap-4 items-center justify-center">
            <div className="rounded-[50%] border border-spacing-1 border-zinc-400 flex items-center justify-center p-4 hover:bg-zinc-200 transition-colors">
              <Lightbulb size={60} className="text-primary " />
            </div>
            <p className="font-montserrat text-xl text-justify">
              Explore sua imaginação e crie projetos incríveis com o LabIF
              Maker. Deixe sua criatividade fluir e transforme suas ideias em
              realidade.{" "}
            </p>
          </div>
          <div className="w-full flex sm:flex-row flex-col sm:border-none border-b pb-8 border-spacing-1 border-black gap-4 items-center justify-center">
            <div className="rounded-[50%] border border-spacing-1 border-zinc-400 flex items-center justify-center p-4 hover:bg-zinc-200 transition-colors">
              <ArchiveRestore size={60} className="text-primary " />
            </div>
            <p className="font-montserrat text-xl text-justify">
              O laboratório disponibiliza todos os materiais necessários para a
              produção dos projetos. após a conclusão do projeto, este poderá
              ser levado para casa.{" "}
            </p>
          </div>
          <div className="w-full flex sm:flex-row flex-col  pb-8 border-spacing-1 border-black gap-4 items-center justify-center">
            <div className="rounded-[50%] border border-spacing-1 border-zinc-400 flex items-center justify-center p-4 hover:bg-zinc-200 transition-colors">
              <Wrench size={60} className="text-primary " />
            </div>
            <p className="font-montserrat text-xl text-justify">
              O LabIF Maker disponibiliza equipamentos modernos e de alta
              qualidade para a produção dos projetos. Para que estes tenham a
              melhor qualidade possível!{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
