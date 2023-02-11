import React, { useContext } from "react";
import { Grid, GridItem, } from "@chakra-ui/react";
import { CustomBoxShadow, ModeContext } from "../../useMode";
import { LineChart, BarChart } from "../links";


const Chart = () => {
    const { smallDevice, mode } = useContext(ModeContext);
    return (
      <Grid
        gap={8}
        templateRows="repeat(15,1fr)"
        templateColumns="repeat(3, 1fr)"
      >
        <GridItem
          css={CustomBoxShadow(mode)}
          rowSpan={15}
          colSpan={smallDevice ? 3 : 2}
        >
          <LineChart />
        </GridItem>
        <GridItem
          rowSpan={15}
          colSpan={smallDevice ? 3 : 1}
          p="8"
          css={CustomBoxShadow(mode)}
        >
          <BarChart />
        </GridItem>
      </Grid>
    );
};

export default Chart;