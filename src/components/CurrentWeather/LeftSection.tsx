import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import { toDays } from "../../api/accuWeather/transformer";
import { City } from "../../api/accuWeather/types";

export type LeftSectionProps = {
  dt: Date;
  city: City;
};
export const LeftSection: React.FC<LeftSectionProps> = ({ dt, city }) => {
  const day = toDays[dt.getDay()];
  const date = dt.toDateString().slice(4);

  return (
    <Box lineHeight={10}>
      <Heading fontFamily="Montserrat" size="lg">
        {day}
      </Heading>
      <Text>{date}</Text>
      <Text>
        <Icon as={MdLocationOn} boxSize={5} /> {city.name}, {city.country}
      </Text>
    </Box>
  );
};

export default LeftSection;
