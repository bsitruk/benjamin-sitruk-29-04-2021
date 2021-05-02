import { VStack } from "@chakra-ui/layout";
import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import Sun from "../../assets/img/sun.png";
import Clouds from "../../assets/img/clouds.png";
import Rain from "../../assets/img/rain.png";
import Snow from "../../assets/img/snow.png";
import Night from "../../assets/img/night.png";
import Unknown from "../../assets/img/unknown.png";
import { Conditions } from "../../types/weather";
import { DailyForecast } from "../../api/accuWeather/types";
import { useUnit, useUnitValue } from "../../features/unit/hooks";

const ICON = {
  [Conditions.CLEAR]: Sun,
  [Conditions.CLOUDS]: Clouds,
  [Conditions.RAIN]: Rain,
  [Conditions.SNOW]: Snow,
  [Conditions.NIGHT]: Night,
  [Conditions.UNKNOWN]: Unknown,
};

export type WeatherCardProps = Pick<
  DailyForecast,
  "temperature" | "conditions"
>;

export const WeatherCard: React.FC<WeatherCardProps> = ({
  conditions,
  temperature,
  children,
}) => {
  const [tempF, tempC] = temperature;
  const { unit } = useUnit();
  const displayedTemp = useUnitValue(tempF, tempC);

  let gradient, highColor, lowColor;
  if (tempC >= 12) {
    highColor = (1 - (tempC - 12) / 28) * 240;
    lowColor = highColor - 150;
    gradient = `linear(to-t, rgb(255,${highColor},0), rgb(255,${lowColor},0))`;
  } else {
    highColor = (1 - (tempC + 20) / 50) * 255;
    lowColor = highColor - 150;
    gradient = `linear(to-t, rgb(0,${highColor},255), rgb(0,${lowColor},255))`;
  }

  return (
    <VStack
      bgGradient={gradient}
      color="white"
      borderRadius="lg"
      py={4}
      px={8}
      spacing={4}
    >
      <Box textAlign="center">{children}</Box>
      <Image src={ICON[conditions]} alt="Weather Icon" boxSize="14" />
      <Box textAlign="center">
        <Heading
          as="h1"
          fontSize="xl"
          fontFamily="fira"
          fontWeight="200"
          mb={2}
        >
          {displayedTemp} °{unit}
        </Heading>
        <Heading
          as="h3"
          size="md"
          fontFamily="fira"
          textTransform="uppercase"
          fontWeight="200"
        >
          {conditions}
        </Heading>
      </Box>
    </VStack>
  );
};

export default WeatherCard;
