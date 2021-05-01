import {
  Box,
  Flex,
  Heading,
  Icon,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import { useCurrentWeather } from "../api/accuWeather/hooks";
import { toDays } from "../api/accuWeather/transformer";
import { City } from "../api/accuWeather/types";
import { useFavorites } from "../api/favorites/hooks";
import { useUnit, useUnitValue } from "../features/unit/hooks";
import FavoriteButton from "./FavoriteButton";
import WeatherIcon from "./WeatherIcon/WeatherIcon";

export type CurrentWeatherProps = {
  city: City;
};
export const CurrentWeather: React.FC<CurrentWeatherProps> = ({ city }) => {
  const { favorites } = useFavorites();
  const { weather } = useCurrentWeather(city.key);
  const { unit } = useUnit();
  const displayedTemp = useUnitValue(
    weather?.temperature[0],
    weather?.temperature[1]
  );

  const now = new Date();
  const day = toDays[now.getDay()];
  const date = now.toDateString().slice(4);

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
        <Box pos="relative" h="full">
          <Flex justifyContent="space-between" h="full">
            <Box lineHeight={10}>
              <Heading fontFamily="Montserrat" size="lg">
                {day}
              </Heading>
              <Text>{date}</Text>
              <Text>
                <Icon as={MdLocationOn} boxSize={5} /> {city.name},{" "}
                {city.country}
              </Text>
            </Box>
            {!weather ? (
              <Spinner />
            ) : (
              <VStack spacing={6} alignSelf={["flex-end", "flex-start"]}>
                <WeatherIcon conditions={weather.conditions} />
                <Box textAlign="right">
                  <Heading fontFamily="Montserrat" size="xl" letterSpacing={2}>
                    {displayedTemp}°{unit}
                  </Heading>
                  <Text fontWeight="bold">{weather.conditions}</Text>
                </Box>
              </VStack>
            )}
          </Flex>
          <Box pos="absolute" left={[0, "auto"]} right={["auto", 0]} bottom={0}>
            <FavoriteButton
              city={city}
              isFavorite={!!favorites.find((f) => f.key === city.key)}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CurrentWeather;
