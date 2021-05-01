import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: (props: any) => ({
    ":root": {
      "--app-title-color": "#718096",
    },
    body: {
      bg: mode("gray.100", "gray.800")(props),
    },
  }),
};

const layerStyles = {
  base: {
    bg: "white",
    ".chakra-ui-dark &": { bg: "gray.700" },
  },
  title: {
    color: "var(--app-title-color)",
    letterSpacing: "wider",
    mb: 2,
  },
};

const textStyles = {
  title: {
    textTransform: "uppercase",
    fontFamily: "fira",
    fontSize: ["x-large", "xx-large"],
    fontWeight: "thin",
  },
};

const theme = extendTheme({
  styles,
  layerStyles,
  textStyles,
  fonts: {
    fira: "Fira Sans, sans-serif",
    mont: "Montserrat, sans-serif",
  },
});

export default theme;
