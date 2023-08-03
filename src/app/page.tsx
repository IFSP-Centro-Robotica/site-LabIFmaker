import { FooterComponent } from "@/components/global/Footer";
import { HeaderComponent } from "@/components/global/Header";
import { AboutHome } from "@/components/pages/Home/About";
import { Map } from "@/components/pages/Home/Map";
import { OpeningHome } from "@/components/pages/Home/Opening";
import { ScheduleHome } from "@/components/pages/Home/Schedule";
import { SliderHome } from "@/components/pages/Home/Slider";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeaderComponent />
      <OpeningHome />
      <SliderHome />
      <AboutHome />
      <Map/>
      <ScheduleHome />
      <FooterComponent />
    </main>
  );
}
