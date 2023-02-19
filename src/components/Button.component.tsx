import type { ReactChildren } from "../app/app.types";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactChildren;
}

/**
 *
 * @param root0
 * @param root0.children
 */
export default function Button({ children, ...props }: Props): JSX.Element {
  return (
    <button className="p-1 border-2 border-transparent hover:border-gray-600 rounded transition-all z-50" {...props}>
      {children}
    </button>
  );
}
