import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Notify } from "notiflix";
import { ForeCastResponse, WeatherData } from "./types";
import { AppDispatch, RootState } from "../store";

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5";

export const AsyncThunkConfig = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
}>();

export const getDay: any = createAsyncThunk(
  "getWeather/loc",
  async (par: { lat: number; lon: number; API: string }, thunkAPI) => {
    try {
      const response = await axios.get(
        `weather?lat=${par.lat}&lon=${par.lon}&appid=${par.API}&units=metric`
      );
      Notify.success("Succsesfully got your location");
      return response.data as AxiosResponse<WeatherData>;
    } catch (error) {
      const errorMessage = (error as Error).message;
      throw new Error(errorMessage);
    }
  }
);
export const getForcat: any = createAsyncThunk(
  "getWeatherForcast/loc",
  async (par: { lat: number; lon: number; API: string }, thunkAPI) => {
    try {
      const response = await axios.get(
        `forecast?lat=${par.lat}&lon=${par.lon}&appid=${par.API}&units=metric`
      );
      Notify.success("Succsesfully got your location");
      return response.data as AxiosResponse<ForeCastResponse>;
    } catch (error) {
      const errorMessage = (error as Error).message;
      throw new Error(errorMessage);
    }
  }
);

export const getDayByCity: any = createAsyncThunk(
  "getWeather/city",
  async (par: { city: string; API: string }, thunkAPI) => {
    try {
      const response = await axios.get(
        `weather?q=${par.city}&appid=${par.API}&units=metric`
      );
      Notify.success("Succsesfully got your location");
      return response.data as AxiosResponse<WeatherData>;
    } catch (error) {
      const errorMessage = error as Error;
      Notify.failure(`Current city: ${par.city} not found!`);
      throw new Error(errorMessage.message);
    }
  }
);

export const getForcastByCity: any = createAsyncThunk(
  "getForcast/city",
  async (par: { city: string; API: string }, thunkAPI) => {
    try {
      const response = await axios.get(
        `forecast?q=${par.city}&appid=${par.API}&units=metric`
      );
      Notify.success("Succsesfully got your location");
      return response.data.list as AxiosResponse<ForeCastResponse>;
    } catch (error) {
      const errorMessage = error as Error;
      Notify.failure(`Current city: ${par.city} not found!`);
      throw new Error(errorMessage.message);
    }
  }
);
