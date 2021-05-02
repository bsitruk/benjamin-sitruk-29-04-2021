import { IconButton } from "@chakra-ui/react";
import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useQueryClient } from "react-query";
import { City } from "../api/accuWeather/types";
import { useAddFavorite, useRemoveFavorite } from "../api/favorites/hooks";

export type FavoriteButtonProps = {
  city: City;
  isFavorite: boolean;
};
export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  city,
  isFavorite,
}) => {
  const queryClient = useQueryClient();
  const addFavoriteMutation = useAddFavorite();
  const removeFavoriteMutation = useRemoveFavorite();

  async function toggleFavorite() {
    if (isFavorite) {
      await removeFavoriteMutation.mutateAsync(city.key);
    } else {
      console.log(city);
      await addFavoriteMutation.mutateAsync(city);
    }
    queryClient.invalidateQueries("favorites");
  }

  const IconEl = isFavorite ? <FaHeart /> : <FaRegHeart />;

  return (
    <IconButton
      aria-label="favorite"
      icon={IconEl}
      variant="ghost"
      fontSize="4xl"
      _focus={{ outline: "none" }}
      onClick={() => toggleFavorite()}
    />
  );
};

export default FavoriteButton;
