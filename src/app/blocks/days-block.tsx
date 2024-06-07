"use client";

import React, { useEffect, useState } from "react";
import DayCard from "../components/day-card";
import clsx from "clsx";
import { AppDispatch, useAppSelector } from "@/lib/store/store";
import { useDispatch } from "react-redux";
import { getForcastByCity } from "@/lib/store/features/operations";
import { WeatherForecast } from "@/lib/store/features/types";
import HourSwiper from "../components/hour-swiper";

export interface DaysBlockProps {}

export default function DaysBlock({}: DaysBlockProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [showInfo, setShowInfo] = useState<WeatherForecast[] | null>(null);

  const city = useAppSelector((state) => state.curDay.name);

  async function loadForeCast(city: string) {
    const API = "88844cf48cee64210e6fc18e7624c982";
    if (city) {
      await dispatch(getForcastByCity({ city, API }));
    } else {
      await dispatch(getForcastByCity("Kyiv", API));
    }
  }

  useEffect(() => {
    loadForeCast(city);
  }, [city]);

  const forecast = useAppSelector((state) => state.forecast.forecast);
  const cityName = useAppSelector((state) => state.curDay.name);
  const countryName = useAppSelector((state) => state.curDay.sys.country);

  function togleInfo(list: WeatherForecast[]) {
    if (list === showInfo) {
      setShowInfo(null);
    } else {
      setShowInfo(list);
    }
  }
  return (
    <div
      className={clsx(
        "relative px-4 py-6 container mt-[60px] mx-auto w-[1248px] rounded-[34px] bg-[#102136CC] flex flex-col justify-center items-center gap-8 transition-all ease-in duration-300 ",
        !showInfo && "h-[307px]",
        showInfo && "h-[556px]"
      )}
    >
      <h2 className="absolute left-1/2 top-[-60px] translate-y-2/4 z-10 text-[#ffffff] text-3xl">
        {cityName}, {countryName}
      </h2>
      <div className="flex justify-center items-center gap-4 overscroll-x-auto">
        {forecast.map((item, index) => {
          return (
            <DayCard key={index} togleInfo={togleInfo} dayForecast={item} />
          );
        })}
      </div>
      {
        <div
          className={clsx(
            "flex flex-row gap-3 transition-all ease-in duration-300  overflow-hidden",
            !showInfo && "opasity-0",
            showInfo && "opasity-1"
          )}
        >
          {showInfo && <HourSwiper list={showInfo} />}
        </div>
      }
    </div>
  );
}
