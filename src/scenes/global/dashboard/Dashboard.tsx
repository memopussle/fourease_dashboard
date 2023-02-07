import React, { useContext } from "react";
import { SimpleGrid, GridItem, Text, Progress} from "@chakra-ui/react";
import {  ModeContext, CustomBoxShadow, tokens } from "../../../useMode";

const Dashboard = () => {
  const { mode } = useContext(ModeContext);
  const { colors } = tokens(mode);
  return (
    <SimpleGrid columns={[1, 1, 2, 2, 4]} gap={8}>
      <GridItem h="40" css={CustomBoxShadow(mode)} p="8">
        <Text fontSize="2xl">Energy</Text>
        <Progress
          colorScheme="orange"
          size="sm"
          value={80}
          bg={colors.whiteAccent[100]}
        />
      </GridItem>
      <GridItem h="40" css={CustomBoxShadow(mode)} p="8">
        <Text fontSize="2xl">Emotion</Text>
        <Progress
          colorScheme="orange"
          size="sm"
          value={10}
          bg={colors.whiteAccent[100]}
        />
      </GridItem>
      <GridItem h="40" css={CustomBoxShadow(mode)} p="8">
        <Text fontSize="2xl">Productivity</Text>
        <Progress
          colorScheme="orange"
          size="sm"
          value={20}
          bg ={colors.whiteAccent[100]}
        />
      </GridItem>
      <GridItem h="40" css={CustomBoxShadow(mode)} p="8">
        <Text fontSize="2xl">Well-being</Text>
        <Progress
          colorScheme="orange"
          size="sm"
          value={50}
          bg={colors.whiteAccent[100]}
        />
      </GridItem>
    </SimpleGrid>
  );
};

export default Dashboard;