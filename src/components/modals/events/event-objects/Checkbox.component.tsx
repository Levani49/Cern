import { useState } from "react";

interface Props {
  title: string;
  className?: string;
}

/**
 *
 * @param root0
 * @param root0.title
 * @param root0.className
 */
export default function Checkbox({ title, className }: Props): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <label
      className={`relative inline-flex items-center cursor-pointer ${className}`}
    >
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={checked}
        onChange={(): void => setChecked((prev) => !prev)}
      />
      <div
        className={`${
          checked ? "bg-green" : "bg-transparentGray"
        } w-8 h-4 rounded-full peer bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0.085rem] peer-checked:after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[0.85rem] after:w-[0.85rem] after:transition-all border-gray-600 peer-checked:bg-blue-600`}
      ></div>
      <span className="ml-2 text-xs text-light">{title}</span>
    </label>
  );
}
