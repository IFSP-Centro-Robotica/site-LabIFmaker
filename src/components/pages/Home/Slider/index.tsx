"use client";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import bannerSmall1 from "@/assets/slidesHome/banner-small1.png";
import bannerSmall2 from "@/assets/slidesHome/banner-small2.png";
import banner1 from "@/assets/slidesHome/banner1.png";
import banner2 from "@/assets/slidesHome/banner2.png";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

export const SliderHome = () => {
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
              src={banner1}
              alt="Banner com a logo do labif (versão para celular)"
              className="object-cover lg:block hidden"
            ></Image>
            <Image
              src={bannerSmall1}
              alt="Banner escrito: 'venha conhecer e deixe a criatividade fluir' (versão para celular)"
              className="object-cover lg:hidden block"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={banner2}
              alt="Banner com a logo do labif (versão para computador)"
              className="object-cover lg:block hidden"
            ></Image>
            <Image
              src={bannerSmall2}
              alt="Banner escrito: 'venha conhecer e deixe a criatividade fluir' (versão para computador)"
              className="object-cover lg:hidden block"
            ></Image>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
