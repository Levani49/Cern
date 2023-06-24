import type { ReactChildren } from "@type/app.types";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactChildren;
}

export default function MenuDropdown({ children, className }: Props): JSX.Element {
  return (
    <div
      className={`absolute  left-1/2 mt-8 hidden h-auto  w-auto -translate-x-1/2 transform flex-row rounded border border-gray-600 bg-dark group-hover:flex group-active:flex dark:bg-customGray ${className} z-50`}
    >
      {children}
    </div>
  );
}
