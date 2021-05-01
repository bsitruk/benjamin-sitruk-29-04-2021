import { wait } from "../../utils/wait";
import { City } from "../accuWeather/types";

const KEY = "favorites";

export async function getFavorites(): Promise<City[]> {
  await wait(500);
  const favorites = JSON.parse(localStorage.getItem(KEY) || "[]");
  return favorites;
}

export async function addFavorite(city: City) {
  await wait(500);
  const favorites = await getFavorites();
  favorites.push(city);
  localStorage.setItem(KEY, JSON.stringify(favorites));
}

export async function removeFavorite(keyToRemove: string) {
  await wait(500);
  const favorites = await getFavorites();
  const newFavorites = favorites.filter((e) => e.key !== keyToRemove);
  localStorage.setItem(KEY, JSON.stringify(newFavorites));
}
