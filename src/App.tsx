
import React from "react";
import {  ModeContext, useMode} from "./useMode";
import { ChakraProvider } from "@chakra-ui/react";
import TopBar from "./scenes/global/TopBar";

const App = () => {
  const { theme, mode, toggleMode } = useMode();

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      <ChakraProvider theme={theme}>
        <TopBar />
      </ChakraProvider>
    </ModeContext.Provider>
  );
};
export default App;

