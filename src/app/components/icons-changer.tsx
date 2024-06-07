import CloudyIcon from "@/icons/001-cloudy";
import SunIcon from "@/icons/002-sun";
import WindIcon from "@/icons/003-wind";
import SnowIcon from "@/icons/006-snow";
import WeatherIcon from "@/icons/007-weather";
import CloudsAndSunIcon from "@/icons/010-clouds-and-sun";
import React from "react";

export interface IconsChangerProps {
  state: string;
}

export default function IconsChanger({ state }: IconsChangerProps) {
  function handleChanger(state: string) {
    switch (state) {
      case "Clouds":
        return <CloudyIcon />;
      case "Clear":
        return <SunIcon />;
      case "Thunderstorm":
        return <WindIcon />;
      case "Drizzle":
        return <CloudsAndSunIcon />;
      case "Rain":
        return <SnowIcon />;
      case "Snow":
        return <SnowIcon />;
      default:
        return <WeatherIcon />;
    }
  }
  return <>{handleChanger(state)}</>;
}
