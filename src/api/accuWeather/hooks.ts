import { useQueries, useQuery } from "react-query";
import { getCurrentWeather, getForecast } from "./accuWeather";
import { CurrentWeather } from "./types";

export function useCurrentWeather(key: string) {
  const { data, isLoading } = useQuery(
    ["weather", { key }],
    () => getCurrentWeather(key),
    {
      enabled: !!key,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60,
    }
  );

  return { weather: data, isLoading };
}

export function useForecast(key: string) {
  const { data = [], isLoading } = useQuery(
    ["forecast", { key }],
    () => getForecast(key),
    {
      enabled: !!key,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60,
    }
  );

  return { forecast: data, isLoading };
}

export function useMultipleWeather(keys: string[]): CurrentWeather[] {
  const resp = useQueries(
    keys.map((key) => ({
      queryKey: ["weather", { key }],
      queryFn: () => getCurrentWeather(key),
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60,
    }))
  );

  return resp.map((r) => r.data as CurrentWeather).filter((r) => !!r);
}
