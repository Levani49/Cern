import type { SVGIcon } from "@type/app.types";

export interface SvgIconProps {
  Icon: SVGIcon;
  className?: string;
}

export default function SvgIcon({
  Icon,
  className
}: SvgIconProps): JSX.Element {
  return (
    <Icon
      className={`icon transition-all ${className}`}
      data-testid="svg-icon"
    />
  );
}
