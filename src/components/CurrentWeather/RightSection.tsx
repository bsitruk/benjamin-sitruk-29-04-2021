import { Box, VStack, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { CurrentWeather } from "../../api/accuWeather/types";
import { useUnit, useUnitValue } from "../../features/unit/hooks";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

type RightSectionProps = {
  weather: CurrentWeather;
};
export const RightSection: React.FC<RightSectionProps> = ({ weather }) => {
  const { unit } = useUnit();
  const displayedTemp = useUnitValue(
    weather.temperature[0],
    weather.temperature[1]
  );

  return (
    <VStack spacing={6} alignSelf={["flex-end", "flex-start"]}>
      <WeatherIcon conditions={weather.conditions} />
      <Box textAlign="right">
        <Heading fontFamily="Montserrat" size="xl" letterSpacing={2}>
          {displayedTemp}°{unit}
        </Heading>
        <Text fontWeight="bold">{weather.conditions}</Text>
      </Box>
    </VStack>
  );
};

export default RightSection;
