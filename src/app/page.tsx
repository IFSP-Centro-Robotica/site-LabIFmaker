import { HeaderComponent } from "@/components/global/Header";
import { AboutHome } from "@/components/pages/Home/About";
import { OpeningHome } from "@/components/pages/Home/Opening";
import { ScheduleHome } from "@/components/pages/Home/Schedule";
import { SliderHome } from "@/components/pages/Home/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-x-hidden ">
      <HeaderComponent />
      <OpeningHome />
      <SliderHome />
      <AboutHome />
      <ScheduleHome />
    </main>
  );
}
