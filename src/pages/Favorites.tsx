import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { RouteComponentProps, useNavigate } from "@reach/router";
import React from "react";
import { useMultipleWeather } from "../api/accuWeather/hooks";
import { City } from "../api/accuWeather/types";
import { useFavorites } from "../api/favorites/hooks";
import { useAppDispatch } from "../app/hooks";
import DailyCard from "../components/WeatherCard/DailyCard";
import { setCity } from "../features/selectedCitySlice";

type FavoritesProps = RouteComponentProps;

export const Favorites: React.FC<FavoritesProps> = () => {
  const { favorites, isLoading } = useFavorites();
  const weathers = useMultipleWeather(favorites.map((f) => f.key));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function showForecast(city: City) {
    dispatch(setCity(city));
    navigate("/");
  }

  let ContentNode: React.ReactNode;
  if (!isLoading && favorites.length === 0) {
    ContentNode = (
      <Text fontFamily="mont">
        You can add favorite cities in the Home page !
      </Text>
    );
  } else {
    ContentNode =
      weathers.length === 0 ? (
        <Spinner />
      ) : (
        <SimpleGrid columns={[2, null, 5]} spacing={10}>
          {weathers.map((weather, i) => (
            <Box
              key={favorites[i].key}
              cursor="pointer"
              onClick={() => showForecast(favorites[i])}
            >
              <DailyCard
                {...weather}
                city={favorites[i].name}
                country={favorites[i].country}
              />
            </Box>
          ))}
        </SimpleGrid>
      );
  }

  return (
    <>
      <Text as="h1" layerStyle="title" textStyle="title">
        Favorites
      </Text>
      {ContentNode}
    </>
  );
};

export default Favorites;
