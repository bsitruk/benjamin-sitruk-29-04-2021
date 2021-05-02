import { Box, Flex, Heading, Spinner } from "@chakra-ui/react";
import React from "react";
import { useCurrentWeather } from "../../api/accuWeather/hooks";
import { City } from "../../api/accuWeather/types";
import { useFavorites } from "../../api/favorites/hooks";
import FavoriteButton from "../FavoriteButton";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import SoundPlayer from "./SoundPlayer";

type CurrentWeatherProps = {
  city: City;
};
export const CurrentWeather: React.FC<CurrentWeatherProps> = ({ city }) => {
  const { favorites } = useFavorites();
  const { weather, isLoading } = useCurrentWeather(city.key);

  let ContentNode: React.ReactNode;
  if (isLoading) {
    ContentNode = <Spinner />;
  } else if (!weather) {
    ContentNode = (
      <Heading fontFamily="Montserrat" size="lg">
        No data...
      </Heading>
    );
  } else {
    ContentNode = (
      <Box pos="relative" h="full">
        <Flex justifyContent="space-between" h="full">
          <LeftSection city={city} dt={weather.date} />
          <RightSection weather={weather} />
        </Flex>
        <Box pos="absolute" left={[0, "auto"]} right={["auto", 0]} bottom={0}>
          <FavoriteButton
            city={city}
            isFavorite={!!favorites.find((f) => f.key === city.key)}
          />
        </Box>
        <SoundPlayer conditions={weather.conditions} key={city.key} />
      </Box>
    );
  }

  return (
    <Box
      bgImage="url('https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80')"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="0px -100px"
      minH={400}
      pos="relative"
      fontFamily="Montserrat"
    >
      <Box
        pos="absolute"
        w="full"
        h="full"
        top={0}
        left={0}
        bgGradient="linear(135deg, #72EDF2 10%, #5151E5 100%)"
        opacity={0.8}
      />
      <Box pos="absolute" w="full" h="full" left={0} top={0} p={8}>
        {ContentNode}
      </Box>
    </Box>
  );
};

export default CurrentWeather;
