import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

interface Props {
  show: boolean;
  title: string;
  onClose: () => void;
}

/**
 * SettingsTitle component that displays a title and toggle button.
 *
 * @param {Props} props - The props of the component.
 * @param {boolean} props.show - Whether the toggle button should display the "minus" icon or the "plus" icon.
 * @param {string} props.title - The title of the component.
 * @param {() => void} props.onClose - A callback function that is called when the title is clicked.
 * @returns {JSX.Element} ReactElement
 */
export default function SettingsTitle({ show, title, onClose }: Props): JSX.Element {
  return (
    <div onClick={onClose} role="presentation" className="flex cursor-pointer justify-between items-center p-1">
      <span className="select-none">{title}</span>
      {show ? <MinusIcon className="w-5 h-5 cursor-pointer" /> : <PlusIcon className="w-5 h-5 cursor-pointer" />}
    </div>
  );
}
