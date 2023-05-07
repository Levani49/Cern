import { ButtonProps } from './button.types';

/**
 * Renders a button component with hover and transition effects.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to display inside the button.
 * @returns {JSX.Element} A React component for the button.
 */
export default function Button({ children, ...props }: ButtonProps): JSX.Element {
  return (
    <button
      className="p-1 border-2 border-transparent hover:border-[#dfe6e926] rounded transition-all z-50"
      {...props}
    >
      {children}
    </button>
  );
}
