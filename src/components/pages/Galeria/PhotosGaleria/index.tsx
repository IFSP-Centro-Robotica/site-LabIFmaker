"use client";
import Image from "next/image";
import { GaleryImages } from "@/mocks/galery/galery";

const PhotosStyle =
  "lg:w-[30vw] w-[95vw] h-auto border rounded-md shadow-md hover:scale-105 ease-in-out duration-300";

export const PhotosGaleria = () => {
  return (
    <div className="flex w-full justify-center mt-7 flex-col gap-4">
      <h2 className="text-3xl font-montserrat font-medium text-center">
        Todas as fotos
      </h2>
      <div className="flex flex-wrap gap-5 m-5 justify-center p-2">
        {GaleryImages.map((item) => (
          <Image
            src={item.url}
            alt={item.alt}
            key={item.alt}
            className={PhotosStyle}
          ></Image>
        ))}
      </div>
    </div>
  );
};
