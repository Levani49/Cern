import { twMerge } from "tailwind-merge";

import type { SVGIcon } from "#/types/app.types";

export interface SvgIconProps {
  Icon: SVGIcon;
  className?: string;
}

export default function SvgIcon({ Icon, className }: SvgIconProps) {
  const componentClasses = twMerge("icon transition-all svg-icon", className);

  return <Icon className={componentClasses} data-testid="svg-icon" />;
}
