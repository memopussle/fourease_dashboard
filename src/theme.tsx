import { extendTheme } from "@chakra-ui/react";
import { createContext } from "react";

// 2. Call `extendTheme` and pass your custom values
export const colorPallete = {
  light: {
    primary: {
      100: "#f3e8f3",
      200: "#e3cfe3",
      300: "#d3b5d3",
      400: "#c39bc3",
      500: "#b382b3",
      600: "#a369a3",
      700: "#934f93",
      800: "#833786",
      900: "#731f72",
    },
    secondary: {
      100: "#f8f3e8",
      200: "#f0e3cf",
      300: "#e8d3b5",
      400: "#e0c39b",
      500: "#d8b382",
      600: "#d0a369",
      700: "#c8934f",
      800: "#c08337",
      900: "#b8731f",
    },
  },
  dark: {
    primary: {
      100: "#0c131c",
      200: "#1c263d",
      300: "#2c3a5e",
      400: "#3c4e7f",
      500: "#4c62a0",
      600: "#5c76c1",
      700: "#6c8ad2",
      800: "#7c9ee3",
      900: "#8cb2f4",
    },
    secondary: {
      100: "#131c0c",
      200: "#263d1c",
      300: "#3a5e2c",
      400: "#4e7f3c",
      500: "#62a04c",
      600: "#76c15c",
      700: "#8ad26c",
      800: "#9ee37c",
      900: "#b2f48c",
    },
  },
};
export const theme = extendTheme(colorPallete);

export const ThemeContext = createContext(theme);