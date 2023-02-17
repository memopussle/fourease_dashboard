import { ResponsiveLine } from "@nivo/line";
import { eatLineData } from "../../data/eatLineData";
import { AxisConfig } from "../../Model";
import React from "react";

const EatLineChart = (): JSX.Element => {
  return (
    <ResponsiveLine
      data={eatLineData}
      margin={{ top: 40, right: 110, bottom: 80, left: 60 }}
      xScale={{ type: "point" }}
      colors={["url(#gradient)"]}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="linear"
      axisTop={null}
      axisRight={null}
      axisBottom={
        {
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Healthy Diet Level",
          legendOffset: 50,
          legendPosition: "middle",
        } as AxisConfig
      }
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[]}
      enableGridX={false}
      enableGridY={false}
    />
  );
};

export default EatLineChart;
