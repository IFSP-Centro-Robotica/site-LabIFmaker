import { FooterComponent } from "@/components/global/Footer";
import { HeaderComponent } from "@/components/global/Header";
import { InfoEquipamentosIndividual } from "@/components/pages/Equipamentos/[slug]/Info";

export default function EquipamentIndividual({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="overflow-x-hidden ">
      <HeaderComponent />
      <div className="min-h-common bg-zinc-100">
        <InfoEquipamentosIndividual slug={params.slug} />
      </div>
      <FooterComponent />
    </main>
  );
}
