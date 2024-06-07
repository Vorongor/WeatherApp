import {
  createSlice,
  PayloadAction,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import { WeatherForecast, WeatherState } from "./types";
import { getForcastByCity } from "./operations";
import { groupForecastByDay } from "@/lib/func/group-forecast";

const initialState: WeatherState = {
  forecast: [],
  loading: false,
  error: null,
};

const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {},
  extraReducers(builder: ActionReducerMapBuilder<WeatherState>) {
    builder.addCase(
      getForcastByCity.fulfilled as any,
      (state, action: PayloadAction<WeatherForecast[]>) => {
        const arr: WeatherForecast[][] = groupForecastByDay(action.payload);
        const test = arr.pop();
        state.forecast = arr;
      }
    );
  },
});

export const {} = forecastSlice.actions;

export default forecastSlice.reducer;
