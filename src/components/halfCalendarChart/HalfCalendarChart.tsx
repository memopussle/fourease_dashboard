import { ResponsiveTimeRange } from "@nivo/calendar";
import { calendarData } from "../../data/calendarData";
import React, { useContext } from "react";
import { ModeContext, tokens } from "../../useMode";

const HalfCalendarChart = () => {
  const { mode } = useContext(ModeContext);
  const { colors } = tokens(mode);
  return (
    <ResponsiveTimeRange
      data={calendarData}
      from="2023-01-01"
      to="2023-07-1"
      emptyColor={
        mode === "dark" ? colors.blackAccent[100] : colors.whiteAccent[200]
      }
      colors={
        mode === "dark"
          ? [
              colors.yellowAccent[100],
              colors.yellowAccent[300],
              colors.orangeAccent[400],
              colors.orangeAccent[100],
            ]
          : [
              colors.yellowAccent[300],
              colors.yellowAccent[100],
              colors.orangeAccent[100],
              colors.orangeAccent[400],
            ]
      }
      margin={{ top: 40, right: 20, bottom: 40, left: 60 }}
      dayBorderWidth={1.5}
      dayBorderColor={
        mode === "dark" ? colors.blackAccent[200] : colors.whiteAccent[100]
      }
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: "right-to-left",
        },
      ]}
    />
  );
};

export default HalfCalendarChart;
