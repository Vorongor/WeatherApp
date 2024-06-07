"use client";
import React, { useState } from "react";
import Button from "../components/button";
import LineChart, { LineChartProps } from "../components/chart";
import { getNextFiveDays } from "../../lib/func/get-date";
import ArrowLeftIcon from "@/icons/arrow-left";
import clsx from "clsx";
import { useAppSelector } from "@/lib/store/store";

export interface ChartBlockProps {}

export default function ChartBlock({}: ChartBlockProps) {
  const [chartState, setChartState] = useState(false);
  // const [values, setValues] = useState<number[]>([1, 2, 3, 4, 5]);

  const forecast = useAppSelector((state) => state.forecast.forecast);

  const chartData: LineChartProps = {
    labels: getNextFiveDays().map((item) => item.date),
    values: forecast.map((day) =>
      Math.max(...day.map((item) => item.main.temp_max))
    ),
    color: "#FF6B09",
  };

  const buttonText = chartState ? "Hide Chart" : "Show Chart";

  function togleState(): void {
    setChartState(!chartState);
  }

  return (
    <div
      className={clsx(
        "relative mt-8 mb-8 transition-[height] ease-in duration-500 overflow-hidden",
        !chartState && "h-[60px]",
        chartState && "h-[auto]"
      )}
    >
      <div className="absolute left-1/2 top-2 translate-y-2/4 z-10 w-[110px] h-[28px]">
        <Button clickFunc={togleState}>
          <span className="flex gap-[10px] justify-center items-center duration-300">
            <span className="text-sm underline text-[#FF6B09]">
              {buttonText}
            </span>
            <span
              className={clsx(
                "transition-all ease-in duration-300 overflow-hidden",
                !chartState && "rotate-180"
              )}
            >
              <ArrowLeftIcon />
            </span>
          </span>
        </Button>
      </div>
      {
        <div
          className={clsx(
            "relative px-4 py-16 container mx-auto w-[1248px] h-auto rounded-[34px] bg-[#102136CC] flex flex-col justify-center items-center gap-8 transition-all ease-in  overflow-hidden",
            !chartState &&
              "opacity-0 h-[60px] transition-all ease-in  overflow-hidden",
            chartState && "opacity-1"
          )}
        >
          <LineChart {...chartData} />
        </div>
      }
    </div>
  );
}
