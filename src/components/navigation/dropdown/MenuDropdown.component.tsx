import type { ReactChildren } from "@type/app.types";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactChildren;
}

export default function MenuDropdown({ children, className }: Props): JSX.Element {
  return (
    <div
      className={`absolute mt-8 hidden h-auto w-auto flex-col rounded border border-gray-600 bg-transparentDark group-hover:flex group-active:flex dark:bg-customGray ${className}`}
    >
      {children}
    </div>
  );
}
