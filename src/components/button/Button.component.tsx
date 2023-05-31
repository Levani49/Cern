import type { ReactChildren } from '../../types/app.types';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactChildren;
  disabled?: boolean;
}

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
