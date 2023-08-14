"use client";
import { resourcesFields } from "@/mocks/resources/resources";
import { ResourcesAccordion } from "./Accordion";
import { ResourceItens } from "./ResourceItens";

export const ResourcesEquipamentos = () => {
  return (
    <section
      className={`bg-zinc-100 w-full flex items-center justify-center flex-col gap-4 p-8 relative overflow-hidden`}
    >
      <div className="w-full flex items-center justify-center ">
        <h1 className="text-primary pt-1 pb-1 pr-5 pl-5 mt-2 rounded-full text-2xl font-ubuntu border border-spacing-1 border-primary tracking-tighter uppercase">
          Recursos
        </h1>
      </div>
      <div>
        <ResourceItens resourcesFields={resourcesFields} />

        <ResourcesAccordion resourcesFields={resourcesFields} />
      </div>
    </section>
  );
};
