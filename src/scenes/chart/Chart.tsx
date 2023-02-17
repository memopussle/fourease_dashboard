import React, { useContext } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { CustomBoxShadow, ModeContext } from "../../useMode";
import {
  TotalLineChart,
  BarChart,
  CalendarChart,
  PieChart,
  HalfCalendarChart,
  EatLineChart,
} from "../links";

const Chart = (): JSX.Element => {
  const { smallDevice, mode } = useContext(ModeContext);
  return (
    <Grid
      gap={8}
      templateRows="repeat(30,1fr)"
      templateColumns="repeat(6, 1fr)"
    >
      <GridItem
        css={CustomBoxShadow(mode)}
        rowSpan={15}
        colSpan={smallDevice ? 6 : 4}
      >
        <TotalLineChart />
      </GridItem>
      <GridItem
        rowSpan={15}
        colSpan={smallDevice ? 6 : 2}
        p="8"
        css={CustomBoxShadow(mode)}
      >
        <BarChart />
      </GridItem>
      <GridItem
        css={CustomBoxShadow(mode)}
        rowSpan={16}
        colSpan={smallDevice ? 6 : 2}
      >
        <PieChart />
      </GridItem>
      <GridItem
        css={CustomBoxShadow(mode)}
        rowSpan={8}
        colSpan={smallDevice ? 6 : 4}
      >
        {smallDevice ? <HalfCalendarChart /> : <CalendarChart />}
      </GridItem>
      <GridItem
        css={CustomBoxShadow(mode)}
        rowSpan={8}
        colSpan={smallDevice ? 6 : 4}
      >
        <EatLineChart />
      </GridItem>
    </Grid>
  );
};

export default Chart;
