import React, { useContext } from "react";
import { ResponsivePie } from "@nivo/pie";
import { pieData } from "../../data/pieChart";
import { ModeContext, tokens } from "../../useMode";

const PieChart = (): JSX.Element => {
  const { mode } = useContext(ModeContext);
  const { colors } = tokens(mode);
  return (
    <>
      <ResponsivePie
        data={pieData}
        margin={{ top: 60, right: 40, bottom: 60, left: 40 }}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={[
          colors.yellowAccent[200],
          colors.yellowAccent[100],
          colors.orangeAccent[400],
          colors.orangeAccent[300],
          colors.orangeAccent[200],
          colors.orangeAccent[100],
        ]}
        borderWidth={0}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ theme: "background" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2.2]],
        }}
      />
    </>
  );
};

export default PieChart;
