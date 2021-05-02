import { Conditions } from "../../types/weather";
import { toConditions, toDays } from "./transformer";
import {
  City,
  cityAutoCompleteParams,
  CurrentWeather,
  DailyForecast,
} from "./types";

const HOST = "https://e287d1a2-73ed-4bf5-a4b3-ee68cc81d428.mock.pstmn.io";
// const HOST = "http://dataservice.accuweather.com";
const KEY = "GcRVOicPJ6FWsFKI8WvtMSjCQRbeFsDO";

function buildUrl(path: string, params: any = {}) {
  const url = new URL(`${HOST}${path}`);
  url.search = new URLSearchParams({ ...params, apikey: KEY }).toString();
  return url.toString();
}

export async function cityAutoComplete({ queryKey }: cityAutoCompleteParams) {
  const [, { text }] = queryKey;

  const path = "/locations/v1/cities/autocomplete";
  const params = { q: text };
  const url = buildUrl(path, params);

  const resp = await (await fetch(url.toString())).json();

  const cities: City[] = resp.map((e: any) => ({
    name: e.LocalizedName,
    country: e.Country.ID,
    key: e.Key,
  }));

  return cities;
}

export async function getForecast(key: string) {
  const path = `/forecasts/v1/daily/5day/${key}`;
  const url = buildUrl(path);

  const resp = await (await fetch(url.toString())).json();

  const forecast: DailyForecast[] = resp.DailyForecasts.map((e: any) => ({
    day: toDays[new Date(e.Date).getDay()],
    conditions: toConditions(e.Day.Icon) || Conditions.UNKNOWN,
    temperature: [
      e.Temperature.Maximum.Value,
      Math.round((e.Temperature.Maximum.Value - 32) / 1.8),
    ],
  }));

  return forecast;
}

export async function getCurrentWeather(key: string) {
  const path = `/currentconditions/v1/${key}`;
  const url = buildUrl(path);

  const resp = await (await fetch(url.toString())).json();

  const weather: CurrentWeather = {
    date: new Date(resp[0].LocalObservationDateTime),
    temperature: [
      resp[0].Temperature.Imperial.Value,
      Math.round(resp[0].Temperature.Metric.Value),
    ],
    conditions: toConditions(resp[0].WeatherIcon),
  };

  return weather;
}
