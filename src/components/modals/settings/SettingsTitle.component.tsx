import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

interface Props {
  show: boolean;
  title: string;
  onClose: () => void;
}

/**
 * Renders a title bar for a settings section with a toggle icon to show/hide the settings content.
 *
 * @param {object} props - The component props.
 * @param {boolean} props.show - Whether the settings content is currently shown.
 * @param {string} props.title - The title of the settings section.
 * @param {Function} props.onClose - A function to call when the user clicks the title bar to close the section.
 * @returns {JSX.Element} A React component for the settings title bar.
 */
export default function SettingsTitle({
  show,
  title,
  onClose,
}: Props): JSX.Element {
  return (
    <div
      onClick={onClose}
      role="presentation"
      className="flex cursor-pointer justify-between items-center p-1"
    >
      <span className="select-none">{title}</span>
      {show ? (
        <MinusIcon className="w-5 h-5 cursor-pointer" />
      ) : (
        <PlusIcon className="w-5 h-5 cursor-pointer" />
      )}
    </div>
  );
}
