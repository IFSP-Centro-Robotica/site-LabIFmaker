import { IResourcesFields } from "@/mocks/equipaments/resources";

export const ResourceItens = ({resourcesFields}:{resourcesFields:IResourcesFields[]}) => {
  return (
    <>
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
    </>
  );
};
