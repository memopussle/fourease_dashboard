import React,{useContext} from "react";
import { Box, Button} from "@chakra-ui/react";
import { ModeContext } from "../../useMode";
import { tokens } from "../../useMode";

const Topbar = () => {
    const { mode, toggleMode } = useContext(ModeContext);
    const colors = tokens(mode);
return (
  <Box bg={colors.redAccent[100]}>
    <Button onClick={toggleMode}>Toggle mode</Button>
  </Box>
);
};

export default Topbar;