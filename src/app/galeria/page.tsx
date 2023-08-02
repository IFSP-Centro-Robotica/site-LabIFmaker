import { FooterComponent } from "@/components/global/Footer";
import { HeaderComponent } from "@/components/global/Header";
import {LastPhotosGaleria} from "@/components/pages/Galeria/LastPhotosGaleria";
import { PhotosGaleria } from "@/components/pages/Galeria/PhotosGaleria";

export default function Galeria() {
    return (
        <main className="overflow-x-hidden ">
        <HeaderComponent />
        <div className="min-h-common w-full">
            {/* <LastPhotosGaleria /> */}
            <PhotosGaleria />
        </div>
        <FooterComponent />
        </main>
    );
}