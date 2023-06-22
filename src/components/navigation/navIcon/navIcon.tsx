import type { SVGIcon } from "@type/app.types";

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
}: Props): JSX.Element {
  return (
    <button
      className={`z-50 rounded border-2 border-transparent p-1 transition-all hover:border-[#dfe6e926] ${className}`}
      {...other}
    >
      <Icon
        className={`icon ${
          active && "text-blue dark:text-green"
        } transition-all ${iconClass}`}
      />
    </button>
  );
}
