import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CityLabel from "./city-label";

export interface LabelSliderProps {
  list: string[];
}

export default function LabelSlider({ list }: LabelSliderProps) {
  return (
    <div className="flex min-w-96 flex-row gap-2 px-3 py-2">
      <Swiper
        cssMode={true}
        mousewheel={true}
        className="w-full"
        modules={[Navigation, A11y]}
        spaceBetween={2}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
      >
        <ul>
          {list.map((item, index) => (
            <SwiperSlide key={index}>
              <li key={index}>
                <CityLabel city={item} />
              </li>
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </div>
  );
}
