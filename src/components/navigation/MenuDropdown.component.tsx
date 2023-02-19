import type { ReactChildren } from "../../app/app.types";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactChildren;
}

/**
 * Wrapper function for TOP navigation menu dropdown
 *
 * @param {Props} props - The properties for the component
 * @param {ReactChildren} props.children - The children elements to be rendered inside the dropdown
 * @param {string} [props.className] - The class name for custom styling
 * @returns {JSX.Element} A React component that displays a dropdown menu
 */
export default function MenuDropdown({ children, className }: Props): JSX.Element {
  return (
    <div
      className={`mt-8 hidden group-hover:flex group-active:flex flex-col w-auto h-auto absolute bg-dark border border-gray-600 rounded ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
}
