import { equipamentFields } from "@/mocks/equipaments/equipament";
import { notFound, redirect } from "next/navigation";

interface IProps {
  slug: string;
}

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
    <section>
      <h1>InfoEquipamentosIndividual</h1>
      {equipament && (
        <div key={equipament.slug}>
          <h1>{equipament.title}</h1>
          <p>{equipament.description}</p>
        </div>
      )}
    </section>
  );
};
