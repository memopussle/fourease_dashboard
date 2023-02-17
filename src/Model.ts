export interface Data {
  text: string;
  subText: number;
  comparison: number;
}

export type AxisConfig = {
  orient: "bottom" | "left";
  tickSize: number;
  tickPadding: number;
  tickRotation: number;
  legendOffset: number;
  legendPosition: "middle";
};
