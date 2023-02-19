import type { SVGIcon } from "../app/app.types";

interface Props {
  Icon: SVGIcon;
  className?: string;
}

/**
 *A component that displays an SVG icon.
 *
 *@param {Props} props - The props object containing the Icon and optional className.
 *@returns {JSX.Element} A JSX Element representing the SVG icon.
 */
export default function SvgIcon({ Icon, className }: Props): JSX.Element {
  return <Icon className={`icon transition-all ${className}`} />;
}
