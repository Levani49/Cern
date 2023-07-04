import { twMerge } from "tailwind-merge";

import type { ReactChildren } from "@type/app.types";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactChildren;
}

export default function MenuDropdown({ children, className }: Props): JSX.Element {
  const defaultClasses = twMerge(
    "min-w-[34px] bottom-[34px]  absolute left-1/2 mt-[30px] hidden h-auto sm:w-auto sm:min-w-fit sm:bottom-auto -translate-x-1/2 transform flex-row rounded border border-gray-600 bg-dark group-hover:flex group-active:flex dark:bg-customGray z-50",
    className
  );

  return <div className={defaultClasses}>{children}</div>;
}
