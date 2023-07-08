import RcSlider from "rc-slider";

import "rc-slider/assets/index.css";

interface Props {
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  onChange: ((value: number | number[]) => void) | undefined;
}

export default function Slider({ ...props }: Props): JSX.Element {
  return (
    <RcSlider
      {...props}
      railStyle={{
        backgroundColor: "rgb(41,45,57)",
        height: "2px",
        marginTop: "1px"
      }}
      trackStyle={{
        backgroundColor: "rgb(50, 207, 142)",
        height: "2px",
        marginTop: "1px"
      }}
      handleStyle={{
        outline: "none",
        boxShadow: "none",
        border: "0",
        width: "8px",
        height: "16px",
        borderRadius: "2px",
        backgroundColor: "rgb(50, 207, 142)",
        opacity: "1"
      }}
    />
  );
}
