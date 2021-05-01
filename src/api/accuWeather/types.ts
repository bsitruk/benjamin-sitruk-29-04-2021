import { Conditions, Days } from "../../types/weather";

export type cityAutoCompleteParams = {
  queryKey: [string, { text: string }];
};

export type City = {
  name: string;
  country: string;
  key: string;
};

export type DailyForecast = {
  day: Days;
  temperature: [number, number]; // F, C
  conditions: Conditions;
};

export type CurrentWeather = {
  temperature: [number, number]; // F, C
  conditions: Conditions;
};
