import { twMerge } from "tailwind-merge";

import type { SVGIcon } from "@type/app.types";

export interface SvgIconProps {
  Icon: SVGIcon;
  className?: string;
}

export default function SvgIcon({ Icon, className }: SvgIconProps): JSX.Element {
  const componentClasses = twMerge("icon transition-all svg-icon", className);

  return <Icon className={componentClasses} data-testid="svg-icon" />;
}
