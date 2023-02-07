import React from "react";
import {  ModeContext, useMode, SideBarShadow} from "./useMode";
import { ChakraProvider, Grid, GridItem} from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { Dashboard, CheckIn, Energy, Productivity, Emotion, TopBar, SideBar } from "./scenes/global/links";


const App = (): JSX.Element => {
  const { theme, mode, toggleMode,smallDevice } = useMode();

  return (
    <ModeContext.Provider value={{ mode, toggleMode, smallDevice }}>
      <ChakraProvider theme={theme}>
        <Grid
          templateAreas={`"nav header"
                  "nav dashboard"`}
          gridTemplateRows={"0.1fr 2fr"}
          gridTemplateColumns={"0.2fr 1fr"}
          gap="8"
          pr="8"
        >
          <GridItem area={"header"} pt="4">
            <TopBar />
          </GridItem>
          <GridItem
            area={"nav"}
            pl="8"
            pt="4"
            pr="8"
            css={SideBarShadow(mode)}
          >
            <SideBar />
          </GridItem>
          <GridItem area={"dashboard"}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/checkin" element={<CheckIn />} />
              <Route path="/energy" element={<Energy />} />
              <Route path="/emotion" element={<Emotion />} />
              <Route path="/productivity" element={<Productivity />} />
              <Route path="/wellbeing" element={<Energy />} />
            </Routes>
          </GridItem>
        </Grid>
      </ChakraProvider>
    </ModeContext.Provider>
  );
};
export default App;
