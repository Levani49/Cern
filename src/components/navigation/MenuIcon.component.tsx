import type { SVGIcon } from "../../app/app.types";
import Button from "../Button.component";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  Icon: SVGIcon;
  disabled?: boolean;
  active?: boolean;
}

/**
 * Renders a MenuIcon component that displays an icon inside a button.
 *
 * @function
 * @name MenuIcon
 * @param {object} props - The properties to be passed to the component.
 * @param {boolean} props.active - Gives blue color to componenet if true
 * @param {JSX.Element} props.Icon - The icon to be displayed inside the button.
 * @param {...object} props.other - Any additional properties to be passed to the Button component.
 * @returns {JSX.Element} - A JSX element representing the MenuIcon component.
 */
export default function MenuIcon({
  Icon,
  active,
  ...other
}: Props): JSX.Element {
  return (
    <Button {...other}>
      <Icon className={`icon ${active && "text-blue"} transition-all`} />
    </Button>
  );
}
