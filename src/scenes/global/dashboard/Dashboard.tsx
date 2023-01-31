import React, { useContext } from "react";
import { SimpleGrid, GridItem, Text } from "@chakra-ui/react";
import { ModeContext } from "../../../useMode";

const Dashboard = () => {
   const {mode} = useContext(ModeContext);
  return (
    <SimpleGrid columns={[1, 1, 2, 4]} gap={12}>
      <GridItem boxShadow={mode === "dark" ? "dark-lg" : "md"} h="40">
        <Text fontSize="xl">Energy</Text>
      </GridItem>
      <GridItem bg="blue.500" h="40" />
      <GridItem bg="blue.500" h="40" />
      <GridItem bg="blue.500" h="40" />
    </SimpleGrid>
  );
};

export default Dashboard;