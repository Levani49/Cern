import { useState } from "react";

import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  className?: string;
}

export default function Slider({ title, className }: Props): JSX.Element {
  const [state, setState] = useState<number>(0);

  const componentClasses = twMerge(
    "rounded border-solid p-1 shadow-md mt-2",
    className
  );

  return (
    <form className={componentClasses}>
      <h4 className="block select-none text-xs font-light text-light">{title}</h4>
      <input
        type="range"
        value={state}
        onChange={(e): void => setState(+e.target.value)}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-transparentLight accent-blue dark:bg-gray-700 dark:accent-green"
      />
    </form>
  );
}
