import { useState, useMemo, useCallback } from "react";
import {  extendTheme } from "@chakra-ui/react";
import { createContext } from "react";

export const ModeContext = createContext<{
  mode: "dark" | "light";
  toggleMode: () => void;
}>({
  mode: "light",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleMode: () => {},
});

export const tokens = (mode: string) => ({
  ...(mode === "dark"
    ? {
        blackAccent: {
          100: "#1a1918",
          200: "#090707",
        },
        whiteAccent: {
          200: "#ffffff",
          100: "#cccccc",
        },
        orangeAccent: {
          100: "#ac4c2e",
          200: "#bd533e",
        },
        yellowAccent: {
          100: "#e7c38f",
          200: "#c99652",
        },
      }
    : {
        blackAccent: {
          100: "#090707",
          200: "#1a1918",
        },
        whiteAccent: {
          100: "#ffffff",
          200: "#cccccc",
        },
        orangeAccent: {
          200: "#ac4c2e",
          100: "#bd533e",
        },
        yellowAccent: {
          200: "#e7c38f",
          100: "#c99652",
        },
      }),
});

const themeSettings = (mode: string) => {
  const colors = tokens(mode);
  return {
    styles: {
      ...(mode === "dark"
        ? {
            global: {
              "html, body": {
                bg: colors.blackAccent[100],
                color: colors.whiteAccent[100],
              },
              button: {
                color: colors.whiteAccent[100],
              },
              "*": {
                color: colors.whiteAccent[100],
              },
              "*:focus": {
                color: colors.whiteAccent[200],
              },
            },
          }
        : {
            global: {
              "html,body": {
                bg: colors.whiteAccent[100],
                color: colors.whiteAccent[100],
              },
              button: {
                color: colors.blackAccent[100],
              },
              "*": {
                color: colors.blackAccent[100],
              },
            },
          }),
    },
  };
};


export const useMode = () => {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const theme = useMemo(() => extendTheme(themeSettings(mode)), [mode]);
  const toggleMode = useCallback(() => {
    setMode(mode === "light" ? "dark" : "light");
  }, [mode]);
  return { theme, mode, toggleMode };
};
