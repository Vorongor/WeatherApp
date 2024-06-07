import {
  createSlice,
  PayloadAction,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import { getDay, getDayByCity } from "./operations";
import { WeatherData, WeatherForecast, WeatherState } from "./types";

export interface ValueTypes {
  location: LocationType;
  savedLocation: string[];
  current: string;
  singleMode: boolean;
}

export interface InitialStateTypes {
  values: ValueTypes;
}

export interface LocationType {
  latitude: number | null;
  longitude: number | null;
}

const initialState = {
  values: {
    location: { latitude: null, longitude: null },
    savedLocation: [],
    current: "Kyiv",
    singleMode: true,
  } as ValueTypes,
} as InitialStateTypes;

export const locationSlice = createSlice({
  name: "loc",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<LocationType>) => {
      state.values.location = action.payload;
    },
    setMode: (state, action: PayloadAction<boolean>) => {
      state.values.singleMode = action.payload;
    },

    chooseCity: (state, action: PayloadAction<string>) => {
      state.values.current = action.payload;
    },
    deleteCity: (state, action) => {
      const deletedCity = action.payload;
      state.values.savedLocation = state.values.savedLocation.filter(
        (item) => item !== deletedCity
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(
        getDayByCity.fulfilled as any,
        (state, action: PayloadAction<WeatherData>) => {
          const newLable = action.payload.name;
          if (!state.values.savedLocation.includes(newLable)) {
            state.values.savedLocation.push(newLable);
          }
        }
      )
      .addCase(
        getDay.fulfilled as any,
        (state, action: PayloadAction<WeatherData>) => {
          const newLable = action.payload.name;
          if (!state.values.savedLocation.includes(newLable)) {
            state.values.savedLocation.push(newLable);
          }
        }
      );
  },
});

export const { setLocation, chooseCity, deleteCity, setMode } =
  locationSlice.actions;
export default locationSlice.reducer;
