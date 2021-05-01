import { Heading } from "@chakra-ui/react";
import React from "react";
import { DailyForecast } from "../../api/accuWeather/types";
import WeatherCard from "./WeatherCard";

export type ForecastCardProps = DailyForecast;

export const ForecastCard: React.FC<ForecastCardProps> = ({
  day,
  conditions,
  temperature,
}) => {
  return (
    <WeatherCard conditions={conditions} temperature={temperature}>
      <Heading
        as="h1"
        fontSize="lg"
        fontFamily="mont"
        textTransform="uppercase"
      >
        {day}
      </Heading>
    </WeatherCard>
  );
};

export default ForecastCard;
