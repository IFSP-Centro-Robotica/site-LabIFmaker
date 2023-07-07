import { SliderGaleria } from "./Slider/slider";

export const LastPhotosGaleria = () => {
    return (
        <section className="w-screen h-[700px] mt-5">
            <h1 className="font-montserrat font-semibold text-primary-light-100 text-4xl text-center">Últimas fotos</h1>
            <SliderGaleria />
        </section>
    );
}