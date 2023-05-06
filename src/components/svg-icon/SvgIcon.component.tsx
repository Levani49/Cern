import { SvgIconProps } from './svgIcon.types';

/**
 *A component that displays an SVG icon.
 *
 *@param {SvgIconProps} props - The props object containing the Icon and optional className.
 *@returns {JSX.Element} A JSX Element representing the SVG icon.
 */
export default function SvgIcon({ Icon, className }: SvgIconProps): JSX.Element {
  return <Icon className={`icon transition-all ${className}`} data-testid="svg-icon" />;
}
