import { useMutation, useQuery, useQueryClient } from "react-query";
import { City } from "../accuWeather/types";
import { addFavorite, getFavorites, removeFavorite } from "./favorites";

export const useFavorites = () => {
  const { data: favorites = [], isLoading } = useQuery(
    "favorites",
    getFavorites,
    {
      staleTime: Infinity,
    }
  );

  return { favorites, isLoading };
};

export function useAddFavorite() {
  // Using Optimistic Update for more responsiveness
  const queryClient = useQueryClient();

  const addMutation = useMutation(addFavorite, {
    onMutate: async (city) => {
      await queryClient.cancelQueries("favorites");
      queryClient.setQueryData<City[]>("favorites", (old) => [
        ...(old || []),
        city,
      ]);
    },
    onSettled: () => {
      queryClient.invalidateQueries("favorites");
    },
  });

  return addMutation;
}

export function useRemoveFavorite() {
  const queryClient = useQueryClient();

  const removeMutation = useMutation(removeFavorite, {
    onMutate: async (key) => {
      await queryClient.cancelQueries("favorites");
      queryClient.setQueryData<City[]>("favorites", (old) =>
        (old || []).filter((e) => e.key !== key)
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries("favorites");
    },
  });

  return removeMutation;
}
