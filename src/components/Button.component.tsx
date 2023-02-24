import type { ReactChildren } from "../app/app.types";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactChildren;
}

/**
 * Renders a button component with hover and transition effects.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to display inside the button.
 * @returns {JSX.Element} A React component for the button.
 */
export default function Button({ children, ...props }: Props): JSX.Element {
  return (
    <button className="p-1 border-2 border-transparent hover:border-gray-600 rounded transition-all z-50" {...props}>
      {children}
    </button>
  );
}
