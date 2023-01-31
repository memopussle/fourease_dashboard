import React from "react";
import { ModeContext, useMode } from "./useMode";
import { ChakraProvider, Grid, GridItem} from "@chakra-ui/react";
import TopBar from "./scenes/global/bar/TopBar";
import SideBar from "./scenes/global/bar/SideBar";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./scenes/global/links";
import CheckIn from "./scenes/global/checkIn/CheckIn";
import Energy from "./scenes/global/energy/Energy";
import Productivity from "./scenes/global/productivity/Productivity";
import Emotion from "./scenes/global/emotion/Emotion";

const App = () => {
  const { theme, mode, toggleMode,smallDevice } = useMode();

  return (
    <ModeContext.Provider value={{ mode, toggleMode, smallDevice }}>
      <ChakraProvider theme={theme}>
        <Grid
          templateAreas={`"nav header"
                  "nav dashboard"
                  "nav dashboard"`}
          gridTemplateRows={"0.1fr 0.2fr 1fr"}
          gridTemplateColumns={"0.2fr 1fr"}
          gap="12"
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
            boxShadow={mode === "dark" ? "dark-lg" : "lg"}
            h= "auto"
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
