import { ArchiveRestore, Lightbulb, Wrench } from "lucide-react";

export const Description = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-8">
        <h1 className="font-montserrat font-bold sm:text-6xl text-5xl">
          O que é o Lab
          <span className="text-primary">IF</span> Maker?
        </h1>
        <p className="font-montserrat text-xl text-justify hyphens-auto">
          O LabIF Maker é um espaço de produção criativa, onde os alunos, os
          servidores e a comunidade externa podem desenvolver projetos de forma
          colaborativa, utilizando ferramentas de fabricação digital, como
          impressoras 3D, cortadoras a laser, entre outras. O espaço é aberto a
          todos, basta realizar o seu agendamento!
        </p>
      </div>
      <div className="w-full flex flex-col gap-12">
        <div className="w-full flex sm:flex-row flex-col sm:border-none border-b pb-8 border-spacing-1 border-black gap-4 items-center justify-center">
          <div className="rounded-[50%] border border-spacing-1 border-zinc-400 flex items-center justify-center p-4 hover:bg-zinc-200 transition-colors">
            <Lightbulb size={60} className="text-primary " />
          </div>
          <p className="font-montserrat text-xl text-justify hyphens-auto">
            Explore sua imaginação e crie projetos incríveis com o LabIF Maker.
            Deixe sua criatividade fluir e transforme suas ideias em realidade.{" "}
          </p>
        </div>
        <div className="w-full flex sm:flex-row flex-col sm:border-none border-b pb-8 border-spacing-1 border-black gap-4 items-center justify-center">
          <div className="rounded-[50%] border border-spacing-1 border-zinc-400 flex items-center justify-center p-4 hover:bg-zinc-200 transition-colors">
            <ArchiveRestore size={60} className="text-primary " />
          </div>
          <p className="font-montserrat text-xl text-justify hyphens-auto">
            O laboratório disponibiliza todos os materiais ne&shy;ce&shy;ssários para a
            pro&shy;dução dos projetos. após a con&shy;clusão do projeto, este poderá ser
            levado para casa.{" "}
          </p>
        </div>
        <div className="w-full flex sm:flex-row flex-col  pb-8 border-spacing-1 border-black gap-4 items-center justify-center">
          <div className="rounded-[50%] border border-spacing-1 border-zinc-400 flex items-center justify-center p-4 hover:bg-zinc-200 transition-colors">
            <Wrench size={60} className="text-primary " />
          </div>
          <p className="font-montserrat text-xl text-justify hyphens-auto">
            O LabIF Maker dispo&shy;nibiliza equi&shy;pamen&shy;tos mo&shy;dernos e de alta
            qualidade para a produção dos projetos. Para que estes te&shy;nham a
            melhor qua&shy;lidade possível!{" "}
          </p>
        </div>
      </div>
    </>
  );
};
