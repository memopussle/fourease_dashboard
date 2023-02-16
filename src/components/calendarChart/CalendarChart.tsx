import React, { useContext } from "react";
import { ResponsiveCalendar } from "@nivo/calendar";
import { calendarData } from "../../data/calendarData";
import { ModeContext, tokens } from "../../useMode";

const CalendarChart = () => {
  const { mode } = useContext(ModeContext);
  const { colors } = tokens(mode);
  return (
    <ResponsiveCalendar
      data={calendarData}
      from="2023-03-01"
      to="2023-12-31"
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
      minValue="auto"
      margin={{ top: 30, right: 30, bottom: 30, left: 60 }}
      yearSpacing={60}
      monthBorderColor={
        mode === "dark" ? colors.blackAccent[200] : colors.whiteAccent[100]
      }
      dayBorderWidth={1.5}
      monthBorderWidth={1.5}
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

export default CalendarChart;
