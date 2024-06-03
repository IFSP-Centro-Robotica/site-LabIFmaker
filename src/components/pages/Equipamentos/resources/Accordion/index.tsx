import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IResourcesFields } from "@/mocks/resources/resources";

export const ResourcesAccordion = ({
  resourcesFields,
}: {
  resourcesFields: IResourcesFields[];
}) => {
  return (
    <div className="lg:hidden block transition-all">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="w-[90%] sm:text-2xl text-xl font-montserrat bg-primary p-2 rounded font-bold text-white px-4">
            Visualizar recursos disponiveis:
          </AccordionTrigger>
          <AccordionContent className=" flex flex-col">
            {resourcesFields.map((resource) => (
              <div
                className=" w-full flex flex-row gap-2 my-6 justify-start items-center"
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
  );
};
