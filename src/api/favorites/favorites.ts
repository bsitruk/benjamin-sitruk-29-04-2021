import { City } from "../accuWeather/types";

const KEY = "favorites";

export async function getFavorites(): Promise<City[]> {
  const favorites = JSON.parse(localStorage.getItem(KEY) || "[]");
  return favorites;
}

export async function addFavorite(city: City) {
  const favorites = await getFavorites();
  favorites.push(city);
  localStorage.setItem(KEY, JSON.stringify(favorites));
}

export async function removeFavorite(keyToRemove: string) {
  const favorites = await getFavorites();
  const newFavorites = favorites.filter((e) => e.key !== keyToRemove);
  localStorage.setItem(KEY, JSON.stringify(newFavorites));
}
