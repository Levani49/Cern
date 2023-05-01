interface Props {
  checked: boolean;
  onClick: () => void;
  title: string;
  className?: string;
}

export default function Checkbox({ checked, onClick, title, className }: Props): JSX.Element {
  return (
    <label className={`relative inline-flex items-center cursor-pointer ${className}`}>
      <input type="checkbox" className="sr-only peer" checked={checked} onChange={onClick} />
      <div
        className={`${
          checked ? 'bg-blue dark:bg-green' : 'bg-transparentGray'
        } w-8 h-4 rounded-full peer bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0.085rem] peer-checked:after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[0.85rem] after:w-[0.85rem] after:transition-all border-gray-600 peer-checked:bg-blue-600`}
      ></div>
      <span className="ml-2 text-xs text-light">{title}</span>
    </label>
  );
}
