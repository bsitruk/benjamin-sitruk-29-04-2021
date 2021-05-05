import { ChakraProvider, Container } from "@chakra-ui/react";
import "@fontsource/fira-sans";
import "@fontsource/fira-sans/200.css";
import "@fontsource/roboto";
import "@fontsource/montserrat";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/900.css";
import * as React from "react";
import { Router } from "@reach/router";
import NavBar from "../components/NavBar/NavBar";
import Home from "../pages/Home";
import theme from "../theme/theme";
import Favorites from "../pages/Favorites";

export const App = () => (
  <ChakraProvider theme={theme}>
    <NavBar />
    <Container mt={8} maxW="container.xl">
      <Router>
        <Home path="/" />
        <Favorites path="/favorites" />
      </Router>
    </Container>
  </ChakraProvider>
);
