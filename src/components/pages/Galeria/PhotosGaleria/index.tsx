import Image from "next/image"
import arduino from "@/assets/equipamentos/arduino.png"

export const PhotosGaleria = () => {
    return(
        <div className="flex w-full justify-center mt-7 flex-col gap-4">
            <h2 className="text-3xl font-montserrat font-medium text-center">Todas as fotos</h2>
            <div className="flex flex-wrap gap-5 m-5 justify-center p-2">
                <Image src={arduino} alt="arduino" className="max-w-[20vw] w-auto border rounded-md shadow-md hover:scale-105 ease-in-out duration-300"></Image>
                <Image src={arduino} alt="arduino" className="max-w-[20vw] w-auto border rounded-md shadow-md hover:scale-105 ease-in-out duration-300"></Image>
                <Image src={arduino} alt="arduino" className="max-w-[20vw] w-auto border rounded-md shadow-md hover:scale-105 ease-in-out duration-300"></Image>
                <Image src={arduino} alt="arduino" className="max-w-[20vw] w-auto border rounded-md shadow-md hover:scale-105 ease-in-out duration-300"></Image>
                <Image src={arduino} alt="arduino" className="max-w-[20vw] w-auto border rounded-md shadow-md hover:scale-105 ease-in-out duration-300"></Image>
            </div>
        </div>
    )
}