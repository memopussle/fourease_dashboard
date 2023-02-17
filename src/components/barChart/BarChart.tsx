import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { barData } from "../../data/barData";
import Gradient from "../Gradient";

const BarChart = (): JSX.Element => {
  return (
    <>
      <Gradient />
      <ResponsiveBar
        data={barData}
        keys={["energy"]}
        indexBy="date"
        margin={{ top: 20, right: 10, bottom: 20, left: 45 }}
        padding={0.5}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={["url(#gradient)"]}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Energy",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        enableGridY={false}
        labelSkipWidth={9}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 0.5]],
        }}
        role="application"
        ariaLabel="Bar Chart"
      />
    </>
  );
};

export default BarChart;
