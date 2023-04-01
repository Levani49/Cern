import type { ReactChildren } from "../../types/app.types";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactChildren;
}

/**
 * Renders a MenuDropdown component that displays a dropdown menu.
 *
 * @function
 * @name MenuDropdown
 * @param {object} props - The properties to be passed to the component.
 * @param {ReactNode} props.children - The child elements to be displayed in the dropdown menu.
 * @param {string} props.className - The class name to be applied to the dropdown menu container.
 * @returns {JSX.Element} - A JSX element representing the MenuDropdown component.
 */
export default function MenuDropdown({
  children,
  className,
}: Props): JSX.Element {
  return (
    <div
      className={`mt-8 hidden group-hover:flex group-active:flex flex-col w-auto h-auto absolute bg-transparentDark border dark:bg-gray border-gray-600 rounded ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
}
