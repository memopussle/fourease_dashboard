import { useState, useMemo, useCallback } from "react";
import { extendTheme, useMediaQuery } from "@chakra-ui/react";
import { createContext } from "react";
import { css } from "@emotion/react";
import { Colors, Mode } from "./Model";

export const ModeContext = createContext<{
  mode: Mode;
  toggleMode: () => void;
  smallDevice: boolean;
}>({
  mode: "light",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleMode: () => {},
  smallDevice: false,
});

export const tokens = (mode: string) => ({
  colors: {
    ...(mode === "dark"
      ? {
          blackAccent: {
            100: "#1f1e1d",
            200: "#1a1918",
            300: "#090707",
            400: "#000000",
          },
          whiteAccent: {
            100: "#575757",
            200: "#b3b3b3",
            300: "#f1f0f0",
            400: "#ffffff",
          },
          grayAccent: {
            100: "#827f7f",
          },
          orangeAccent: {
            200: "#ad4c2e",
            300: "#ac4c2e",
            400: "#bd533e",
            100: "#ad3611",
          },
          yellowAccent: {
            100: "#e7c38f",
            200: "#c99652",
            300: "#bf7e28",
          },
        }
      : {
          blackAccent: {
            400: "#1f1e1d",
            300: "#1a1918",
            200: "#090707",
            100: "#000000",
          },
          whiteAccent: {
            400: "#575757",
            300: "#b3b3b3",
            100: "#ffffff",
            200: "#f1f0f0",
          },

          orangeAccent: {
            400: "#ad3611",
            300: "#ad4c2e",
            200: "#ac4c2e",
            100: "#bd533e",
          },
          yellowAccent: {
            300: "#e7c38f",
            200: "#c99652",
            100: "#bf7e28",
          },
        }),
  },
});

export const SideBarShadow = (mode: Mode) =>
  css`
    box-shadow: ${mode === "light"
      ? "0.2rem 0.5rem 0.5rem rgba(0, 0, 0, 0.06)"
      : "1rem 1rem 1rem rgba(0, 0, 0, 0.09)"};
    border-radius: 1.5rem;
    background-image: ${mode === "dark"
      ? "linear-gradient(100deg,rgba(0, 0, 0, 0.06),rgba(25, 25, 25))"
      : ""};
    height: auto;
  `;

export const CustomBoxShadow = (mode: Mode) => css`
  box-shadow: ${mode === "light"
    ? "-0.2rem 0rem 0.3rem rgba(0, 0, 0, 0.1)"
    : "-1rem 1rem 2rem rgba(0, 0, 0, 0.4)"};
  border-radius: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background-image: ${mode === "dark"
    ? "linear-gradient(10deg,rgba(0, 0, 0, 0.06),rgba(25,25,25))"
    : ""};
`;

export const subTextStyle = (mode: Mode, colors: Colors) => css`
  color: ${mode === "light"
    ? colors.blackAccent[300]
    : colors.whiteAccent[100]};
`;

const themeSettings = (mode: Mode) => {
  const { colors } = tokens(mode);
  return {
    styles: {
      ...(mode === "dark"
        ? {
            global: {
              "html, body": {
                bg: colors.blackAccent[200],
                color: colors.whiteAccent[200],
              },
              "*:focus": {
                color: colors.whiteAccent[400],
              },
            },
          }
        : {
            global: {
              "html,body": {
                bg: colors.whiteAccent[100],
                color: colors.whiteAccent[100],
              },
              "*:focus": {
                fontWeight: "bold",
              },
              "p, svg": {
                color: colors.blackAccent[100],
              },
            },
          }),
    },
  };
};

export const useMode = () => {
  const [mode, setMode] = useState<Mode>("dark");
  const themeSettingsResult = themeSettings(mode);
  const theme = useMemo(() => extendTheme(themeSettingsResult), [mode]);
  const toggleMode = useCallback(() => {
    setMode(mode === "light" ? "dark" : "light");
  }, [mode]);
  const [smallDevice] = useMediaQuery("(max-width: 70rem)");

  return { theme, mode, toggleMode, smallDevice };
};
