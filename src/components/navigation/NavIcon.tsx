import { twMerge } from "tailwind-merge";

import type { SVGIcon } from "#/types/app.types";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  Icon: SVGIcon;
  iconClass?: string;
  disabled?: boolean;
  active?: boolean;
}

export default function NavIcon({
  Icon,
  className,
  active,
  iconClass,
  ...other
}: Props) {
  const componentClasses = twMerge(
    "z-50 rounded border-2 border-transparent p-1 transition-all hover:border-[#dfe6e926]",
    className
  );

  return (
    <button className={componentClasses} {...other}>
      <Icon
        className={`icon ${
          active && "text-accent2 dark:text-accent1"
        } transition-all ${iconClass}`}
      />
    </button>
  );
}
