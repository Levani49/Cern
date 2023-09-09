import { twMerge } from "tailwind-merge";

import type { ReactChildren } from "#/types/app.types";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactChildren;
  disabled?: boolean;
  className?: string;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  const componentClasses = twMerge(
    "rounded bg-highlight1 px-4 py-2 outline-none transition-all ease-in-out hover:bg-black",
    className
  );

  return (
    <button className={componentClasses} {...props}>
      {children}
    </button>
  );
}
