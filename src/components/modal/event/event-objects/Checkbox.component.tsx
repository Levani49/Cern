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
  return (
    <label
      className={`relative inline-flex cursor-pointer items-center ${className}`}
    >
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
        } peer-checked:bg-blue-600 peer h-4 w-8 rounded-full border-gray-600 bg-gray-700 after:absolute after:top-[0.085rem] after:h-[0.85rem] after:w-[0.85rem] after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:left-[4px] peer-checked:after:translate-x-full peer-checked:after:border-white`}
      ></div>
    </label>
  );
}
