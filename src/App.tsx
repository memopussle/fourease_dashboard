 import {  Button, useColorMode} from "@chakra-ui/react";
import React from "react";
import { colorPallete } from "./theme";


function App(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);
  return (
    <>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "light" : "dark"} mode
      </Button>
      <h1 style={{ color: colorPallete[colorMode].primary[300] }}>Hello World</h1>
    </>
  );
}
export default App;

