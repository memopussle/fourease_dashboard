import {
  Box,Flex
} from "@chakra-ui/react";
import React from "react";

const SideBar: React.FC = () => {
  return (
    <>
      <Flex minH="100vh" direction="row">
          <Box flex={1} display={["none", "block"]}>
                
          <Box pb={12} style={{ cursor: "pointer" }}>
            Dashboard
          </Box>
          <Box pb={12} style={{ cursor: "pointer" }}>
            Daily Check-in
          </Box>
          <Box pb={12} style={{ cursor: "pointer" }}>
            Energy
          </Box>
          <Box pb={12} style={{ cursor: "pointer" }}>
            Emotion
          </Box>
          <Box pb={12} style={{ cursor: "pointer" }}>
            Productivity
          </Box>
          <Box pb={12} style={{ cursor: "pointer" }}>
            Overall Well-being
          </Box>
        </Box>

      </Flex>
    </>
  );
};

export default SideBar;