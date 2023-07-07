"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "@/components/pages/Home/Slider/styles.css";
import "swiper/css/pagination";

export const SliderGaleria = () => {
  return (
    <div className="w-screen  overflow-x-hidden flex items-center justify-center bg-zin-300">
      <div className="w-[95%] h-[700px] pb-12 pt-12 border-spacing-1 ">
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Navigation, Keyboard, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};