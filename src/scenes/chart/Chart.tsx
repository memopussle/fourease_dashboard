import React, { useContext } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { CustomBoxShadow, ModeContext } from "../../useMode";


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
          p="8"
        >
          Chart 1
        </GridItem>
        <GridItem
          rowSpan={15}
          colSpan={smallDevice ? 3 : 1}
          p="8"
          css={CustomBoxShadow(mode)}
        >
          Chart 2
        </GridItem>
      </Grid>
    );
};

export default Chart;