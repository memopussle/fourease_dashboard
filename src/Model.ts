export interface Data {
  text: string;
  subText: number;
  comparison: number;
  link: string;
}

export type AxisConfig = {
  orient: "bottom" | "left";
  tickSize: number;
  tickPadding: number;
  tickRotation: number;
  legendOffset: number;
  legendPosition: "middle";
};

export type Mode = "dark" | "light";

type ColorHues = {
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
};

export type Colors = {
  blackAccent: ColorHues;
  whiteAccent: ColorHues;
};
