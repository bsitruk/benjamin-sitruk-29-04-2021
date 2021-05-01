import { Box, VStack, Text } from "@chakra-ui/react";
import type { RouteComponentProps } from "@reach/router";
import React from "react";
import CityInput from "../components/CityInput";
import Forecast from "../components/Forecast";

type HomeProps = RouteComponentProps;

export const Home: React.FC<HomeProps> = () => {
  return (
    <VStack spacing={8}>
      <CityInput />
      <Box w="full">
        <Text as="h1" layerStyle="title" textStyle="title">
          Weather
        </Text>
        <Box w="full">
          <Forecast />
        </Box>
      </Box>
    </VStack>
  );
};

export default Home;
