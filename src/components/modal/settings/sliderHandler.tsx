import Slider from "@components/slider/slider.component";

interface Props {
  title: string;
  value: number;
  step: number;
  min: number;
  max: number;
  defaultValue: number;
  onChange: (e: number | number[]) => void;
}

export default function SliderHandler({
  value,
  title,
  ...rest
}: Props): JSX.Element {
  return (
    <div className="flex flex-col items-center px-2">
      <h4 className="w-full text-left">{title}</h4>
      <div className="flex w-full items-center justify-between gap-6">
        <div className="w-[90%]">
          <Slider {...rest} />
        </div>
        <p className="w-10 rounded bg-gray2 px-1 py-1 text-center text-xs">
          {value}
        </p>
      </div>
    </div>
  );
}
