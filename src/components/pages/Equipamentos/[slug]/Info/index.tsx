import { equipamentFields } from "@/mocks/equipaments/equipament";
import { notFound, redirect } from "next/navigation";
import { SlideComponent } from "./slide";
import { ContentComponent } from "./content";

interface IProps {
  slug: string;
}

export const styleTextStrong = "font-ubuntu text-xl text-zinc-700";
export const styledText =
  "pt-2 font-montserrat  text-xl text-black text-justify";
export const styledLinks =
  "font-montserrat  text-blue-700 text-black ";

const handleSearchEquipament = async (slug: string) => {
  try {
    const search = equipamentFields.find(
      (equipament) => equipament.slug === slug,
    );
    if (!search) throw new Error("Equipament not found");
    return search;
  } catch (err) {
    return notFound();
  }
};

export const InfoEquipamentosIndividual = async ({ slug }: IProps) => {
  const equipament = await handleSearchEquipament(slug);

  return (
    <section className="w-full min-h-[700px] flex flex-col">
      {equipament && (
        <>
          <div className="w-full flex items-center justify-center pt-4 pb-4 bg-zinc-100">
            <h1 className="font-ubuntu font-bold text-4xl text-zinc-700">
              {equipament.title}
            </h1>
          </div>
          <div className="w-full h-full flex flex-row gap-2 p-6 justify-center flex-wrap ">
            <div className="2xl:max-w-2xl xl:max-w-xl lg:max-w-lg max-w-full max-h-[600px]">
              <SlideComponent data={equipament} />
            </div>
            <div className="lg:w-1/2 w-full h-full flex flex-col gap-5 ">
              <h1 className="font-ubuntu font-bold text-4xl text-primary pb-2 border-b border-primary border-spacing-1 ">
                Informações uteis:
              </h1>
              <h1 className={styledText}>
                <strong className={styleTextStrong}>Equipamento: </strong>
                {equipament.title}
              </h1>
              <p className={styledText}>
                <strong className={styleTextStrong}>Descrição: </strong>
                {equipament.description}
              </p>
              <ContentComponent data={equipament} />
              <div className="w-full h-full flex justify-center items-end">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdGAPut5VFQ6uNyNjfLxX-LiTJvQuL3a4ciRPAOb66dJcvBlQ/viewform?usp=sf_link"
                  className="w-full bg-primary text-white rounded font-montserrat font-bold transition-colors hover:bg-primary-light-100 text-center p-3"
                  target="_blank"
                >
                  Agendar
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
