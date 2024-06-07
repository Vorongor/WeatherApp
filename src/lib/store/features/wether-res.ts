import {
  ActionReducerMapBuilder,
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";
import { getDay, getDayByCity } from "./operations";
import { AxiosResponse } from "axios";
import { WeatherData } from "./types";

const initialState: WeatherData = {
  coord: {
    lon: 30.5167,
    lat: 50.4333,
  },
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04d",
    },
  ],
  base: "stations",
  main: {
    temp: 10.92,
    feels_like: 9.37,
    temp_min: 10.92,
    temp_max: 10.92,
    pressure: 1024,
    humidity: 50,
    sea_level: 1024,
    grnd_level: 1008,
  },
  visibility: 10000,
  wind: {
    speed: 4.09,
    deg: 137,
    gust: 6.01,
  },
  clouds: {
    all: 98,
  },
  dt: 1709287094,
  sys: {
    type: 2,
    id: 2036058,
    country: "UA",
    sunrise: 1709268091,
    sunset: 1709307557,
  },
  timezone: 7200,
  id: 703448,
  name: "Kyiv",
  cod: 200,
};

export const curDaySlice = createSlice({
  name: "curDay",
  initialState,
  reducers: {},
  extraReducers(builder: ActionReducerMapBuilder<WeatherData>) {
    builder
      .addCase(
        getDay.fulfilled as any,
        (state: WeatherData, action: PayloadAction<WeatherData>) => {
          state.coord = action.payload.coord;
          state.weather = action.payload.weather;
          state.base = action.payload.base;
          state.main = action.payload.main;
          state.visibility = action.payload.visibility;
          state.wind = action.payload.wind;
          state.clouds = action.payload.clouds;
          state.dt = action.payload.dt;
          state.sys = action.payload.sys;
          state.timezone = action.payload.timezone;
          state.id = action.payload.id;
          state.name = action.payload.name;
          state.cod = action.payload.cod;
        }
      )
      .addCase(
        getDayByCity.fulfilled as any,
        (state: WeatherData, action: PayloadAction<WeatherData>) => {
          state.coord = action.payload.coord;
          state.weather = action.payload.weather;
          state.base = action.payload.base;
          state.main = action.payload.main;
          state.visibility = action.payload.visibility;
          state.wind = action.payload.wind;
          state.clouds = action.payload.clouds;
          state.dt = action.payload.dt;
          state.sys = action.payload.sys;
          state.timezone = action.payload.timezone;
          state.id = action.payload.id;
          state.name = action.payload.name;
          state.cod = action.payload.cod;
        }
      );
  },
});

export default curDaySlice.reducer;
