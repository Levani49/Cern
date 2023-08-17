import { useEffect, useState } from "react";

import { twMerge } from "tailwind-merge";

import type { ReactChildren } from "@type/app.types";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactChildren;
  isVisible?: boolean;
}

export default function MenuDropdown({
  children,
  isVisible,
  className
}: Props): JSX.Element {
  const [visibility, setVisibility] = useState<
    "hidden group-hover:hidden" | undefined
  >(undefined);
  useEffect(() => {
    setVisibility("hidden group-hover:hidden");

    setTimeout(() => {
      setVisibility(undefined);
    }, 1000);
  }, [isVisible]);

  const defaultClasses = twMerge(
    "min-w-[34px] bottom-[34px] absolute left-1/2 mt-8 hidden h-auto sm:w-auto sm:min-w-fit sm:bottom-auto -translate-x-1/2 transform flex-row rounded border border-gray-600 bg-dark1 group-hover:flex dark:bg-dark1 z-50",
    className,
    visibility
  );

  return <ul className={defaultClasses}>{children}</ul>;
}
