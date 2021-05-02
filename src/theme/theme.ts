import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: (props: any) => ({
    ":root": {
      "--app-title-color": "#718096",
      "--blackwhite": mode("black", "white")(props),
      "--whiteblack": mode("white", "black")(props),
      "--bg-color": mode(
        "var(--chakra-colors-gray-100)",
        "var(--chakra-colors-gray-800)"
      )(props),
    },
    body: {
      bg: "var(--bg-color)",
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
