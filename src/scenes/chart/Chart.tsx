import React, { useContext } from "react";
import { Grid, GridItem, } from "@chakra-ui/react";
import { CustomBoxShadow, ModeContext } from "../../useMode";
import { LineChart, BarChart, CalendarChart } from "../links";



const Chart = (): JSX.Element => {
    const { smallDevice, mode} = useContext(ModeContext);
    return (
      <Grid
        gap={8}
        templateRows="repeat(23,1fr)"
        templateColumns="repeat(6, 1fr)"
      >
        <GridItem
          css={CustomBoxShadow(mode)}
          rowSpan={15}
          colSpan={smallDevice ? 6 : 4}
        >
          <LineChart />
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
          rowSpan={8}
          colSpan={smallDevice ? 6 : 2}
        >
          Chart 3
        </GridItem>
        <GridItem
          css={CustomBoxShadow(mode)}
          rowSpan={8}
          colSpan={smallDevice ? 6 : 4}
        >
          <CalendarChart />
        </GridItem>
      </Grid>
    );
};

export default Chart;