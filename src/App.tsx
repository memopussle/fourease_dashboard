import React from "react";
import { ModeContext, useMode } from "./useMode";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import TopBar from "./scenes/global/bar/TopBar";
import SideBar from "./scenes/global/bar/SideBar";

const App = () => {
  const { theme, mode, toggleMode } = useMode();

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      <ChakraProvider theme={theme}>
        <Grid
          h="100vh"
          templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
          gridTemplateRows={"0.2fr 1fr 1fr"}
          gridTemplateColumns={"0.2fr 1fr"}
          gap="1"
          pl="12"
          pr="12"
          pt="4"
        >
          <GridItem area={"header"}>
            <TopBar />
          </GridItem>
          <GridItem area={"nav"}><SideBar /></GridItem>
          <GridItem area={"main"}>Main</GridItem>
          <GridItem area={"footer"}>Footer</GridItem>
        </Grid>
      </ChakraProvider>
    </ModeContext.Provider>
  );
};
export default App;
