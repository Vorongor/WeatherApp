import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "@/lib/store/features/location-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import curDayReducer from "@/lib/store/features/wether-res";
import forecastReducer from "@/lib/store/features/forcast-res";

export const store = configureStore({
  reducer: {
    loc: locationReducer,
    curDay: curDayReducer,
    forecast: forecastReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["your/action/type"],
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],

        ignoredPaths: ["items.dates"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
