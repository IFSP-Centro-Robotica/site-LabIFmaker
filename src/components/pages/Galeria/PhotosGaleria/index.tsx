import Image from "next/image"
import arduino from "@/assets/equipamentos/arduino.png"
import image1 from "@/assets/galeria/DSC00439-01.jpeg"
import image2 from "@/assets/galeria/DSC00440-01.jpeg"
import image3 from "@/assets/galeria/DSC00442-01.jpeg"
import image4 from "@/assets/galeria/DSC00444-01.jpeg"
import image5 from "@/assets/galeria/DSC00446-01.jpeg"
import image6 from "@/assets/galeria/DSC00447-01.jpeg"
import image7 from "@/assets/galeria/DSC00448-02.jpeg"
import image8 from "@/assets/galeria/DSC00450-01.jpeg"
import image9 from "@/assets/galeria/DSC00451-01.jpeg"
import image10 from "@/assets/galeria/DSC00452-01.jpeg"
import image11 from "@/assets/galeria/DSC00453-01.jpeg"
import image12 from "@/assets/galeria/DSC00454-01.jpeg"
import image13 from "@/assets/galeria/DSC00455-01.jpeg"
import image14 from "@/assets/galeria/DSC00456-01.jpeg"
import image15 from "@/assets/galeria/DSC00457-01.jpeg"
import image16 from "@/assets/galeria/DSC00458-01.jpeg"
import image17 from "@/assets/galeria/DSC00459-01.jpeg"
import image18 from "@/assets/galeria/DSC00462-01.jpeg"
import image19 from "@/assets/galeria/DSC00464-01.jpeg"
import image20 from "@/assets/galeria/DSC00465-02.jpeg"
import image21 from "@/assets/galeria/DSC00469-01.jpeg"
import image22 from "@/assets/galeria/DSC00470-01.jpeg"
import image23 from "@/assets/galeria/DSC00472-01.jpeg"
import image24 from "@/assets/galeria/DSC00473-01.jpeg"
import image25 from "@/assets/galeria/DSC00474-01.jpeg"
import image26 from "@/assets/galeria/DSC00475-01.jpeg"
import image27 from "@/assets/galeria/DSC00476-01.jpeg"
import image28 from "@/assets/galeria/DSC00487-01.jpeg"
import image29 from "@/assets/galeria/DSC00488-01.jpeg"

const PhotosStyle =  "lg:w-[30vw] w-[95vw] h-auto border rounded-md shadow-md hover:scale-105 ease-in-out duration-300"

export const PhotosGaleria = () => {
    return(
        <div className="flex w-full justify-center mt-7 flex-col gap-4">
            <h2 className="text-3xl font-montserrat font-medium text-center">Todas as fotos</h2>
            <div className="flex flex-wrap gap-5 m-5 justify-center p-2">
                <Image src={image1} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image2} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image3} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image4} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image5} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image6} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image7} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image8} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image9} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image10} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image11} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image12} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image13} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image14} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image15} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image16} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image17} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image18} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image19} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image20} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image21} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image22} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image23} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image24} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image25} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image26} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image27} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image28} alt="arduino" className={PhotosStyle}></Image>
                <Image src={image29} alt="arduino" className={PhotosStyle}></Image>
            </div>
        </div>
    )
}