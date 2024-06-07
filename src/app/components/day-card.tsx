"use client";

import CloudyIcon from "@/icons/001-cloudy";
import React from "react";
import Button from "./button";
import { WeatherData, WeatherForecast } from "@/lib/store/features/types";
import { getCurrentDateTime } from "@/lib/func/get-time";
import IconsChanger from "./icons-changer";
import { useAppSelector } from "@/lib/store/store";

export interface DayCardProps {
  togleInfo: (list: WeatherForecast[]) => void;
  dayForecast: WeatherForecast[];
}

export default function DayCard({ togleInfo, dayForecast }: DayCardProps) {
  const data = {
    weekDay: getCurrentDateTime(dayForecast[0].dt),
    minTemp: Math.min(...dayForecast.map((item) => item.main.temp_min)),
    maxTemp: Math.max(...dayForecast.map((item) => item.main.temp_max)),
  };

  const currentDay: WeatherData = useAppSelector((state) => state.curDay);
  const { weather } = currentDay;

  return (
    <div className=" w-[181px] h-[227px] flex flex-col justify-center items-center gap-2">
      <p className="text-[#767D85] text-lg">{data.weekDay.fullWeekday}</p>
      <p className="text-[#ffffff] text-2xl">
        {data.weekDay.day} {data.weekDay.month}
      </p>
      {currentDay ? <IconsChanger state={weather[0].main} /> : <CloudyIcon />}
      <table className="text-[#767D85]">
        <tbody>
          <tr>
            <td className="px-5 w-10 h-2 text-center border-[#27384A] border-r text-lg">
              min
            </td>
            <td className="px-5 w-10 h-2 text-center text-lg">max</td>
          </tr>
          <tr>
            <td className="px-5 w-10 h-2 text-center text-[#FF6B09] border-[#27384A] border-r text-2xl">
              {Math.round(data.minTemp)}°
            </td>
            <td className="px-5 w-10 h-2 text-center text-[#FF6B09] text-2xl">
              {Math.round(data.maxTemp)}°
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => togleInfo(dayForecast)}>
        <span className="text-[#ffffff] text-sm underline opacity-40 transition-all ease-in duration-300 hover:scale-150">
          more info
        </span>
      </button>
    </div>
  );
}
