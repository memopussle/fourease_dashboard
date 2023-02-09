import { Flex, Box, Text, Spacer, Progress, GridItem } from "@chakra-ui/react";
import { ModeContext, tokens, subTextStyle, CustomBoxShadow } from "../../useMode";
import { ChevronUpIcon, ChevronDownIcon} from "@chakra-ui/icons";
import React, { useContext } from "react";
import { Data } from "../../Model";

const DashboardItem = ({text, subText, comparison}: Data) => {
    const { mode } = useContext(ModeContext);
    const { colors } = tokens(mode);
    
    return (
      <GridItem h="48" css={CustomBoxShadow(mode)} p="8">
        <Flex>
          <Box w="60">
            <Text fontSize="2xl">{text}</Text>
            <Progress
              colorScheme="orange"
              size="sm"
              value={subText}
              bg={colors.whiteAccent[200]}
              mt="8"
            />
          </Box>
          <Spacer />
                <Text fontSize="sm" css={subTextStyle(mode, colors)} pl="8">
            
            {comparison! < 0 ? <ChevronDownIcon /> : <ChevronUpIcon />}
            {comparison}% than yesterday
          </Text>
        </Flex>
      </GridItem>
    );
};

export default DashboardItem;