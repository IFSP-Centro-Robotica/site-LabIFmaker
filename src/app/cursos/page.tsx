import { FooterComponent } from "@/components/global/Footer";
import { HeaderComponent } from "@/components/global/Header";
import { Courses } from "@/components/pages/cursos/cursos";

export default function Course() {
  return (
    <section>
      <HeaderComponent />
      <Courses />
      <FooterComponent isMt />
    </section>
  );
}
