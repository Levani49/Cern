import { useState } from "react";

interface Props {
  title: string;
  className?: string;
}

/**
 * Slider component that displays a form with a title and a range input.
 *
 * @param {Props} props - The props of the component.
 * @param {string} props.title - The title of the slider.
 * @returns {JSX.Element} ReactElement
 */
export default function Slider({ title, className }: Props): JSX.Element {
  const [state, setState] = useState<number>(0);

  return (
    <form className={`shadow-md rounded p-1 border-solid ${className} mt-2`}>
      <h4 className="block select-none font-light text-xs text-light">
        {title}
      </h4>
      <input
        type="range"
        value={state}
        onChange={(e): void => setState(+e.target.value)}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-blue dark:accent-green bg-transparentLight dark:bg-gray-700"
      />
    </form>
  );
}
