import { ResponsiveLine } from "@nivo/line";
import { lineData } from "../../data/lineData";
import React, { useContext } from "react";
import { ModeContext, tokens } from "../../useMode";

const LineChart = (): JSX.Element => {
  const { mode } = useContext(ModeContext);
  const { colors } = tokens(mode);

  const gradProps = {
    gradientUnits: "userSpaceOnUse",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: 400,
  };

  return (
    <>
      <svg style={{ width: 0, height: 0 }}>
        <defs>
          <linearGradient id="someGradientId" {...gradProps}>
            <stop offset={"30%"} stopColor={colors.orangeAccent[100]} />
            <stop offset={"20%"} stopColor={colors.orangeAccent[100]} />
            <stop offset="100%" stopColor={colors.whiteAccent[100]} />
          </linearGradient>
        </defs>
      </svg>
      <div style={{ width: "100%", height: "100%" }}>
        <ResponsiveLine
          data={lineData}
          colors={["url(#someGradientId)"]}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
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
          curve="basis"
          axisBottom={
            {
              orient: "bottom",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendOffset: 36,
              legendPosition: "middle",
            } as any
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
            } as any
          }
        />
      </div>
    </>
  );
};

export default LineChart;
