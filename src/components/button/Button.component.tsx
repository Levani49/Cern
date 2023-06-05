import type { ReactChildren } from "../../types/app.types";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactChildren;
  disabled?: boolean;
  className?: string;
}

export default function Button({ children, className, ...props }: ButtonProps): JSX.Element {
  return (
    <button
      className={`px-4 py-2 outline-none rounded bg-green hover:bg-transparentDark transition-all ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
