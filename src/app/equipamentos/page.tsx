import { FooterComponent } from "@/components/global/Footer";
import { HeaderComponent } from "@/components/global/Header";
import { ResourcesEquipamentos } from "@/components/pages/Equipamentos/resources";

export default function Equipmaentos() {
    return (
        <main className="overflow-x-hidden ">
            <HeaderComponent />
            <div className="min-h-common w-full">
                <ResourcesEquipamentos />
            </div>
            <FooterComponent />
        </main>
    );
}
