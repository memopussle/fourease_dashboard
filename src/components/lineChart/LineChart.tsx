import { ResponsiveLine } from "@nivo/line";
import { lineData } from "../../data/lineData";
import React from "react";
import { AxisConfig } from "../../Model";
import Gradient from "../Gradient";


const LineChart = (): JSX.Element => {

  return (
    <>
      <Gradient />
      <ResponsiveLine
        data={lineData}
        colors={["url(#gradient)"]}
        margin={{ top: 50, right: 50, bottom: 50, left: 80 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        enableArea={true}
        enableGridX={false}
        enablePoints={false}
        lineWidth={1.5}
        enableGridY={false}
        areaOpacity={0.5}
        curve="basis"
        axisBottom={
          {
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: 36,
            legendPosition: "middle",
          } as AxisConfig
        }
        axisLeft={
          {
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "score",
            legendOffset: -40,
            legendPosition: "middle",
          } as AxisConfig
        }
      />
    </>
  );
};

export default LineChart;
