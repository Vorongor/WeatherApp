import { WeatherForecast } from "../store/features/types";

export const groupForecastByDay = (
  forecastData: WeatherForecast[]
): WeatherForecast[][] => {
  const groupedForecast: Record<string, WeatherForecast[]> = {};

  forecastData.forEach((item) => {
    const date = new Date(item.dt * 1000).toISOString().split("T")[0];

    if (!groupedForecast[date]) {
      groupedForecast[date] = [];
    }

    groupedForecast[date].push(item);
  });

  const result: WeatherForecast[][] = Object.values(groupedForecast);

  return result;
};
