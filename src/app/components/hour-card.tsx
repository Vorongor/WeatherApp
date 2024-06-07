import CloudyIcon from "@/icons/001-cloudy";
import WindIcon from "@/icons/003-wind";
import HumidityIcon from "@/icons/004-humidity";
import BarometerIcon from "@/icons/005-barometer";
import { WeatherForecast } from "@/lib/store/features/types";
import React from "react";

export interface HourCardProps {
  hourForecast: WeatherForecast;
}

export default function HourCard({ hourForecast }: HourCardProps) {
  const { dt_txt, main, wind } = hourForecast;
  const { temp, grnd_level, humidity } = main;

  return (
    <div className="w-[152px] h-[217px] rounded-[25px] border border-[#ffffff5c] flex flex-col justify-center items-center text-[#ffffff5c] gap-2 hover:bg-[#ffffff30] transition-all ease-in duration-300">
      <p>{dt_txt.split(" ")[1]}</p>
      <span>
        <CloudyIcon />
      </span>
      <p className="text-[#FF6B09] text-2xl"> {Math.round(temp)}°</p>
      <ul>
        <li className="flex gap-2">
          <BarometerIcon /> {grnd_level} mm
        </li>
        <li className="flex gap-2">
          <HumidityIcon /> {humidity}%
        </li>
        <li className="flex gap-2">
          <WindIcon /> {wind.speed} m/s
        </li>
      </ul>
    </div>
  );
}
