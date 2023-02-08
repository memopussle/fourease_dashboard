import React, { useContext } from "react";
import { SimpleGrid, GridItem, Text, Progress, Box} from "@chakra-ui/react";
import { ModeContext, CustomBoxShadow, tokens } from "../../useMode";
import { ChevronUpIcon } from "@chakra-ui/icons";

const Dashboard = () => {
  const { mode } = useContext(ModeContext);
  const { colors } = tokens(mode);
  return (
    <SimpleGrid columns={[1, 1, 2, 2, 4]} gap={8}>
      <GridItem h="48" css={CustomBoxShadow(mode)} p="8">
        
            <Text fontSize="2xl">Energy</Text>
            <Progress
              colorScheme="orange"
              size="sm"
              value={80}
              bg={colors.whiteAccent[200]}
              mt="8"
        />
        
            <Text
              color={
                mode === "dark"
                  ? colors.whiteAccent[100]
                  : colors.blackAccent[300]
              }
            >
              <ChevronUpIcon /> 8% than yesterday
            </Text>
      
      </GridItem>
      <GridItem h="48" css={CustomBoxShadow(mode)} p="8">
        <Text fontSize="2xl">Emotion</Text>
        <Progress
          colorScheme="orange"
          size="sm"
          value={10}
          bg={colors.whiteAccent[200]}
        />
      </GridItem>
      <GridItem h="48" css={CustomBoxShadow(mode)} p="8">
        <Text fontSize="2xl">Productivity</Text>
        <Progress
          colorScheme="orange"
          size="sm"
          value={20}
          bg={colors.whiteAccent[200]}
        />
      </GridItem>
      <GridItem h="48" css={CustomBoxShadow(mode)} p="8">
        <Text fontSize="2xl">Well-being</Text>
        <Progress
          colorScheme="orange"
          size="sm"
          value={50}
          bg={colors.whiteAccent[200]}
        />
      </GridItem>
    </SimpleGrid>
  );
};

export default Dashboard;
