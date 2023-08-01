"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import "swiper/css/pagination";
import Image from "next/image";
import banner1 from "@/assets/slidesHome/banner1.png";
import banner2 from "@/assets/slidesHome/banner2.png";

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
          <SwiperSlide>
            <Image src={banner1} alt="um banner" className="object-cover"></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={banner2} alt="um banner" className="object-cover" ></Image>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
