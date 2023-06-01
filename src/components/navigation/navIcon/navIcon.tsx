import type { SVGIcon } from "../../../types/app.types";

import Button from "../../button/Button.component";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  Icon: SVGIcon;
  disabled?: boolean;
  active?: boolean;
}

export default function NavIcon({ Icon, active, ...other }: Props): JSX.Element {
  return (
    <Button {...other}>
      <Icon className={`icon ${active && "text-blue dark:text-green"} transition-all`} />
    </Button>
  );
}
