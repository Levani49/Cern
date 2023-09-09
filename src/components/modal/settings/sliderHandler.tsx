import Slider from "#/components/slider/slider.component";

interface Props {
  title: string;
  value: number;
  step: number;
  min: number;
  max: number;
  defaultValue: number;
  onChange: (e: number | number[]) => void;
}

export default function SliderHandler({ value, title, ...rest }: Props) {
  const convertToPercentage = (value: number, min: number, max: number): number => {
    const range = max - min;
    const percentage = ((value - min) / range) * 100;
    return parseFloat(percentage.toFixed(0)); // Adjust the decimal places as needed
  };

  const percentageValue = convertToPercentage(value, rest.min, rest.max);

  return (
    <div className="flex flex-col items-center px-2">
      <h4 className="w-full select-none text-left ">{title}</h4>
      <div className="flex w-full items-center justify-between gap-6">
        <div className="w-[90%]">
          <Slider {...rest} />
        </div>
        <p className="w-10 select-none rounded  bg-gray2 px-1 py-1 text-center text-xs">
          {percentageValue}%
        </p>
      </div>
    </div>
  );
}
