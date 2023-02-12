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
      to="2023-07-12"
      emptyColor={
        mode === "dark" ? colors.blackAccent[100] : colors.whiteAccent[200]
      }
      colors={[
        colors.yellowAccent[100],
        colors.yellowAccent[200],
        colors.orangeAccent[300],
        colors.orangeAccent[200],
        colors.orangeAccent[100],
      ]}
      minValue="auto"
      margin={{ top: 20, right: 20, bottom: 20, left: 30 }}
      yearSpacing={60}
      monthBorderColor={
        mode === "dark" ? colors.blackAccent[200] : colors.whiteAccent[100]
      }
      dayBorderWidth={1}
      monthBorderWidth={1}
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