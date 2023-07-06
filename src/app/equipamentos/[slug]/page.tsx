import { InfoEquipamentosIndividual } from "@/components/pages/Equipamentos/[slug]/Info";

export default function EquipamentIndividual({ params }: { params: { slug: string } }) {
  return (
    <main className="overflow-x-hidden ">
      <InfoEquipamentosIndividual slug={params.slug}  />
    </main>
  );
}
