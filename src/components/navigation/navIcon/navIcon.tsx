import type { SVGIcon } from "../../../types/app.types";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  Icon: SVGIcon;
  iconColor?: string;
  disabled?: boolean;
  active?: boolean;
}

export default function NavIcon({
  Icon,
  className,
  active,
  iconColor,
  ...other
}: Props): JSX.Element {
  return (
    <button
      className={`p-1 border-2 border-transparent hover:border-[#dfe6e926] rounded transition-all z-50 ${className}`}
      {...other}
    >
      <Icon
        className={`icon ${active && "text-blue dark:text-green"} transition-all ${iconColor}`}
      />
    </button>
  );
}
