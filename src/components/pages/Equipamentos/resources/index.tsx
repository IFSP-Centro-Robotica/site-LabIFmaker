"use client";

import { resourcesFields } from "@/mocks/equipaments/resources";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const ResourcesEquipamentos = () => {
  return (
    <section
      className={`bg-zinc-100 w-full flex items-center justify-center flex-col gap-4 p-8 relative overflow-hidden`}
    >
      <div className="w-full flex items-center justify-center ">
        <h1 className="bg-[#cbfcbb] text-primary pt-1 pb-1 pr-3 pl-3 mt-2 rounded-full text-xl font-ubuntu border border-spacing-1 border-primary tracking-tighter uppercase">
          Recursos
        </h1>
      </div>
      <div>
        <div className="w-full lg:grid hidden md:grid-cols-3 sm:grid-cols-2 grid-cols-1 flex-wrap sm:gap-4 gap-8  justify-around">
          {resourcesFields.map((resource) => (
              <div
                key={resource.description}
                className={`w-full flex xl:flex-row flex-col xl:text-start text-center gap-4 items-center hover:bg-primary-light/800 transition-colors rounded p-4 cursor-default sm:border-none border-b border-primary `}
              >
                <div className="h-30 w-10">
                  <resource.icon />
                </div>
                <p className="sm:text-2xl text-xl font-montserrat">
                  {resource.description}
                </p>
              </div>
          ))}
        </div>

        <div className="lg:hidden block transition-all">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="w-[90%] sm:text-2xl text-xl font-montserrat bg-primary p-2 rounded font-bold text-white px-4">
                Visualizar recursos disponiveis:
              </AccordionTrigger>
              <AccordionContent className=" flex flex-col">
                {resourcesFields.map((resource) => (
                    <div 
                      className=" flex flex-row gap-2 my-6 justify-start items-center"
                      key={resource.description}  
                    >
                      <div className="h-30 w-30">
                        <resource.icon />
                      </div>
                      <p className="sm:text-2xl text-xl font-montserrat">
                        {resource.description}
                      </p>
                    </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
