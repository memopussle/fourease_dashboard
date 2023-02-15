export interface Data {
  text: string;
  subText: number;
  comparison: number | undefined;
}

export type AxisConfig = {
  orient: "bottom" | "left";
  tickSize: number;
  tickPadding: number;
  tickRotation: number;
  legendOffset: number;
  legendPosition: "middle";
};
