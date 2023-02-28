import { Flex, Box, Text, Spacer, Progress, GridItem } from "@chakra-ui/react";
import {
  ModeContext,
  tokens,
  subTextStyle,
  CustomBoxShadow,
} from "../../useMode";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import React, { useContext } from "react";
import { Data } from "../../Model";
import { Link } from "react-router-dom";

const DashboardItem = ({ text, subText, comparison, link }: Data) => {
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
            bg={
              mode === "dark"
                ? colors.blackAccent[100]
                : colors.whiteAccent[200]
            }
            mt="8"
            mb="4"
          />
          <Text fontSize="xs" css={subTextStyle(mode, colors)}>
            <Link to={link}>See more details</Link>
          </Text>
        </Box>

        <Spacer />
        <Text fontSize="xs" css={subTextStyle(mode, colors)} pl="8">
          {comparison !== null && comparison < 0 ? (
            <ChevronDownIcon />
          ) : (
            <ChevronUpIcon />
          )}
          {comparison}% than yesterday
        </Text>
      </Flex>
    </GridItem>
  );
};

export default DashboardItem;
