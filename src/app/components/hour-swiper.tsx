import { WeatherForecast } from "@/lib/store/features/types";
import React from "react";
import HourCard from "./hour-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export interface HourSwiperProps {
  list: WeatherForecast[];
}

export default function HourSwiper({ list }: HourSwiperProps) {
  function getLength(list: WeatherForecast[]) {
    const num = list.length > 6 ? 6 : list.length;
    return num;
  }
  return (
    <div className="container flex justify-center">
      <Swiper
        cssMode={true}
        mousewheel={true}
        className="w-[1248px]"
        modules={[Navigation, A11y]}
        spaceBetween={1}
        slidesPerView={getLength(list)}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {list.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HourCard hourForecast={item} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
