import type { SVGIcon } from "../../app/app.types";
import Button from "../Button.component";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  Icon: SVGIcon;
}

/**
 * A button component with an SVG icon
 *
 * @param {Props} props - The properties for the component
 * @param {SVGIcon} props.Icon - The SVG icon component to be rendered in the button
 * @param {React.HTMLAttributes<HTMLButtonElement>} [props.other] - Additional HTML attributes to be passed to the button element
 * @returns {JSX.Element} A React component that displays a button with an SVG icon
 */
export default function MenuIcon({ Icon, ...other }: Props): JSX.Element {
  return (
    <Button {...other}>
      <Icon className={"icon transition-all"} />
    </Button>
  );
}
