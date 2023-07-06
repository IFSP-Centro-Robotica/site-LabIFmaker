"use client";
import { IEquipamentFields } from "@/mocks/equipaments/equipament";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import "swiper/css/pagination";
import Image from "next/image";

interface IProps {
  data: IEquipamentFields;
}

export const SlideComponent = ({ data }: IProps) => {
  return (
    data && (
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Keyboard, Pagination]}
        className="mySwiper"
      >
        {data.slideImage.map((slide, index) => (
          <>
            <SwiperSlide key={index}>
              <Image src={slide.src} alt={slide.alt} />
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    )
  );
};
