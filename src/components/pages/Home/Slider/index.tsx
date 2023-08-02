"use client";

import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import bannerSmall1 from "@/assets/slidesHome/banner-small1.png";
import bannerSmall2 from "@/assets/slidesHome/banner-small2.png";
import banner1 from "@/assets/slidesHome/banner1.png";
import banner2 from "@/assets/slidesHome/banner2.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

export const SliderHome = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  
  return (
    <div className="w-screen  overflow-x-hidden flex items-center justify-center bg-zin-300">
      <div className="w-[95%] pb-12 pt-12 border-spacing-1 ">
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Navigation, Keyboard, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="hidden">
            <Image
              src={width > 768 ? banner1 : bannerSmall1}
              alt="um banner"
              className="object-cover hidden"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={width > 768 ? banner2 : bannerSmall2}
              alt="um banner"
              className="object-cover"
            ></Image>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
