import { FooterComponent } from "@/components/global/Footer";
import { HeaderComponent } from "@/components/global/Header";
import { Equipe } from "@/components/pages/Equipe/equipe";

export default function Team() {
  return (
    <section className="">
      <HeaderComponent />
      <Equipe />
      <FooterComponent isMt={true} />
    </section>
  );
}
