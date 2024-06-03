import { FooterComponent } from "@/components/global/Footer";
import { HeaderComponent } from "@/components/global/Header";
import { Project } from "@/components/pages/projetos/project";

export default function Projects() {
  return (
    <main>
      <HeaderComponent />
      <Project />
      <FooterComponent />
    </main>
  );
}
