import { Heading } from "@chakra-ui/react";
import React from "react";
import { DailyForecast } from "../../api/accuWeather/types";
import WeatherCard from "./WeatherCard";

export type DailyCardProps = Pick<
  DailyForecast,
  "temperature" | "conditions"
> & {
  city: string;
  country: string;
};

export const DailyCard: React.FC<DailyCardProps> = ({
  conditions,
  temperature,
  city,
  country,
}) => {
  return (
    <WeatherCard conditions={conditions} temperature={temperature}>
      <Heading as="h1" fontSize="lg" fontFamily="mont">
        {city}
      </Heading>
      <Heading as="h3" size="sm" fontFamily="mont" fontWeight="400" mt={1}>
        {country}
      </Heading>
    </WeatherCard>
  );
};

export default DailyCard;
