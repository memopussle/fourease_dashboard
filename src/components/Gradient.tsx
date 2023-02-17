import React, { useContext } from "react";
import { ModeContext, tokens } from "../useMode";

const Gradient = (): JSX.Element => {
  const { mode } = useContext(ModeContext);
  const { colors } = tokens(mode);
  const gradProps = {
    gradientUnits: "userSpaceOnUse",
    x1: -10,
    y1: 50,
    x2: 50,
    y2: 400,
  };

  return (
    <svg style={{ width: 0, height: 0 }}>
      <defs>
        <linearGradient id="gradient" {...gradProps}>
          <stop offset={"30%"} stopColor={colors.orangeAccent[200]} />
          <stop
            offset={"100%"}
            stopColor={
              mode === "dark"
                ? colors.blackAccent[200]
                : colors.whiteAccent[100]
            }
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Gradient;
