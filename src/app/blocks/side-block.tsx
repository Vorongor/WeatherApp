"use client";
import CloudyIcon from "@/icons/001-cloudy";
import { useAppSelector } from "@/lib/store/store";
import React from "react";
import IconsChanger from "../components/icons-changer";
import { WeatherData } from "@/lib/store/features/types";

export default function SideBlock() {
  const currentDay: WeatherData = useAppSelector((state) => state.curDay);
  const { weather, name, sys, main } = currentDay;

  return (
    <>
      <div className="mr-0 ml-auto end-0 w-[411px] h-[289px]   border border-1 bg-[#102136]  border-[#27384A] rounded-l-3xl flex justify-center items-center flex-col">
        {currentDay ? <IconsChanger state={weather[0].main} /> : <CloudyIcon />}
        <p className="text-[#767D85]">
          <span>{name || "Kyiv"}</span>, {sys.country || "UA"}
        </p>
        <p className="text-[#ffffff] text-8xl ">{Math.floor(main.temp)}</p>
        <div className="mt-6 flex flex-row  gap-12 text-[#767D85]">
          <table>
            <tbody>
              <tr>
                <td className="px-5 w-10 h-2 text-center border-[#27384A] border-r">
                  min
                </td>
                <td className="px-5 w-10 h-2 text-center">max</td>
              </tr>
              <tr>
                <td className="px-5 w-10 h-2 text-center text-[#ffffff] border-[#27384A] border-r">
                  {Math.floor(main.temp_min)}
                </td>
                <td className="px-5 w-10 h-2 text-center text-[#ffffff]">
                  {Math.floor(main.temp_max)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
