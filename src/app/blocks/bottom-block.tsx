"use client";

import SunriseIcon from "@/icons/008-sunrise";
import SunsetIcon from "@/icons/009-sunset";
import { convertUnixTimeToTime, getCurrentDateTime } from "@/lib/func/get-time";
import { WeatherData } from "@/lib/store/features/types";
import { useAppSelector } from "@/lib/store/store";
import React from "react";
// import Clock from "react-live-clock";
import Timer from "../components/timer";

export default function BottomBlock() {
  const currentDay: WeatherData = useAppSelector((state) => state.curDay);

  const { day, suf, weekday, month } = getCurrentDateTime();

  return (
    <div className="relative left-0 bottom-0 w-[624px] h-[264px] p-5  border border-1 bg-[#10213699]  border-[#27384A] rounded-3xl flex justify-center items-start flex-col gap-5 text-[#ffffff]">
      <h5 className=" text-8xl font-light leading-108 tracking-wide text-center">
        {day}
        <sup>{suf}</sup> {weekday}
      </h5>
      <div className="flex items-baseline gap-24 w-full">
        <p className="flex gap-6">
          <span className="relative after:content[''] after:ml-5 after:border after:w-px after:h-full after:bg-gray-500">
            {month}
          </span>
          <span>
            {/* <Clock
              format={"h:mm:ssa"}
              style={{ fontSize: "1.5em" }}
              ticking={true}
            /> */}
            <Timer />
          </span>
        </p>
        <div className="flex gap-10">
          <p className="flex gap-3 relative items-center after:content[''] after:ml-5 after:border after:w-px after:h-full after:bg-gray-500">
            <SunriseIcon />
            {convertUnixTimeToTime(currentDay.sys.sunrise)}
          </p>
          <p className="flex gap-3 relative items-center">
            <SunsetIcon />
            {convertUnixTimeToTime(currentDay.sys.sunset)}
          </p>
        </div>
      </div>
    </div>
  );
}
