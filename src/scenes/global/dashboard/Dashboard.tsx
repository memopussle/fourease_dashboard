import React, { useContext } from "react";
import { SimpleGrid, GridItem, Text } from "@chakra-ui/react";
import {  ModeContext, CustomBoxShadow } from "../../../useMode";

const Dashboard = () => {
   const {mode} = useContext(ModeContext);
  return (
    <SimpleGrid columns={[1, 1, 2, 2, 4]} gap={12}>
      <GridItem h="40" css={CustomBoxShadow(mode)}>
        <Text fontSize="xl">Energy</Text>
      </GridItem>
      <GridItem h="40" css={CustomBoxShadow(mode)}>
        <Text fontSize="xl">Energy</Text>
      </GridItem>
      <GridItem h="40" css={CustomBoxShadow(mode)}>
        <Text fontSize="xl">Energy</Text>
      </GridItem>
      <GridItem h="40" css={CustomBoxShadow(mode)}>
        <Text fontSize="xl">Energy</Text>
      </GridItem>
    </SimpleGrid>
  );
};

export default Dashboard;