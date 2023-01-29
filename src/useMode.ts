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
          100: "#0f0a09",
          200: "#736f6e",
        },
        whiteAccent: {
          100: "#969696",
          200: "#e6e1e1",
        },
        redAccent: {
          100: "#b3382b",
          200: "#b81d0d",
        },
      }
    : {
        blackAccent: {
          200: "#0f0a09",
          100: "#736f6e",
        },
        whiteAccent: {
          200: "#969696",
          100: "#e6e1e1",
        },
        redAccent: {
          200: "#b3382b",
          100: "#ff6b5c",
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
              body: {
                bg: colors.blackAccent[100],
              },
            },
          }
        : {
            global: {
              body: {
                bg: colors.blackAccent[100],
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
