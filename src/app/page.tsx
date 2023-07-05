import { HeaderComponent } from "@/components/global/Header";
import { OpeningHome } from "@/components/pages/Home/Opening";
import { SliderHome } from "@/components/pages/Home/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-x-hidden ">
      <HeaderComponent />
      <OpeningHome />
      <SliderHome />
    </main>
  );
}
