import React from "react";
import { ModeContext, useMode, SideBarShadow } from "./useMode";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  Dashboard,
  CheckIn,
  Energy,
  Emotion,
  TopBar,
  SideBar,
  Chart,
  Exercise,
  Eat,
  LogIn,
} from "./scenes/links";

const App = (): JSX.Element => {
  const location = useLocation();
  const { theme, mode, toggleMode, smallDevice } = useMode();
  const path = [
    { path: "/", section: <Dashboard /> },
    { path: "/checkin", section: <CheckIn /> },
    { path: "/energy", section: <Energy /> },
    { path: "/emotion", section: <Emotion /> },
    { path: "/exercise", section: <Exercise /> },
    { path: "/eat", section: <Eat /> },
  ];
  return (
    <ModeContext.Provider value={{ mode, toggleMode, smallDevice }}>
      <ChakraProvider theme={theme}>
        {location.pathname === "/user/login" ? (
          <Routes>
            <Route path="/user/login" element={<LogIn />} />
          </Routes>
        ) : (
          <Grid
            templateAreas={`"nav header"
                          "nav dashboard"
                          "nav chart"
                    `}
            gridTemplateRows={"0.1fr 0.2fr 1fr"}
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
                {path.map(({ path, section }, i) => (
                  <Route key={i} path={path} element={section} />
                ))}
              </Routes>
            </GridItem>
            <GridItem area={"chart"}>
              <Routes>
                <Route path="/" element={<Chart />} />
              </Routes>
            </GridItem>
          </Grid>
        )}
      </ChakraProvider>
    </ModeContext.Provider>
  );
};
export default App;
