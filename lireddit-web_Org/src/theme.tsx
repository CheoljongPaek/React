import {
  theme as chakraTheme,
  extendTheme,
  ThemeConfig,
} from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const overrides = {
  ...chakraTheme,
  fonts,
  breakpoints,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  colors: {
    bluegrey: {
      50: "#F0F4F8",
      100: "#D9E2EC",
      200: "#BCCCDC",
      300: "#9FB3C8",
      400: "#829AB1",
      500: "#627D98",
      600: "#486581",
      700: "#334E68",
      800: "#243B53",
      900: "#102A43",
    },
  },
  config,
};

// 3. extend the theme
const theme = extendTheme(overrides);

export default theme;
