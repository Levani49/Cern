import RcSlider from "rc-slider";

import { selectTheme } from "#/store/features/globalsSlice";
import { useAppSelector } from "#/store/hooks";

import "rc-slider/assets/index.css";

type Props = {
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  onChange: ((value: number | number[]) => void) | undefined;
};

export default function Slider({ ...props }: Props) {
  const isdarkMode = useAppSelector(selectTheme);

  const color = isdarkMode ? "rgb(50, 207, 142)" : "rgb(110, 168, 254)";

  return (
    <RcSlider
      {...props}
      railStyle={{
        backgroundColor: "rgb(41,45,57)",
        height: "2px",
        marginTop: "1px",
      }}
      trackStyle={{
        backgroundColor: color,
        height: "2px",
        marginTop: "1px",
      }}
      handleStyle={{
        outline: "none",
        boxShadow: "none",
        border: "0",
        width: "8px",
        height: "16px",
        borderRadius: "2px",
        backgroundColor: color,
        opacity: "1",
      }}
    />
  );
}
