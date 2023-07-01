import { twMerge } from "tailwind-merge";

interface Props {
  checked: boolean;
  onClick: () => void;
  className?: string;
  id: string;
}

export default function Checkbox({
  id,
  checked,
  onClick,
  className
}: Props): JSX.Element {
  const componentClasses = twMerge(
    "relative inline-flex cursor-pointer items-cente",
    className
  );

  return (
    <label className={componentClasses}>
      <input
        id={id}
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={onClick}
      />
      <div
        className={`${
          checked ? "bg-blue dark:bg-green" : "bg-transparentGray"
        } peer-checked:bg-blue-600 peer h-4 w-8 rounded-full border-gray-600  after:absolute after:top-[0.085rem] after:h-[0.85rem] after:w-[0.85rem] after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:left-[4px] peer-checked:after:translate-x-full peer-checked:after:border-white`}
      ></div>
    </label>
  );
}
