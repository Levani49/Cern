import type { ReactChildren } from "@type/app.types";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactChildren;
  disabled?: boolean;
  className?: string;
}

export default function Button({ children, className, ...props }: ButtonProps): JSX.Element {
  return (
    <button
      className={`rounded bg-green px-4 py-2 outline-none transition-all ease-in-out hover:bg-transparentDark ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
