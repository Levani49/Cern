interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

/**
 * A button component with an SVG icon
 *
 * @param {Props} props - The properties for the component
 * @param {React.FunctionComponent<React.SVGProps<SVGSVGElement>>} props.Icon - The SVG icon component to be rendered in the button
 * @param {React.HTMLAttributes<HTMLButtonElement>} [props.other] - Additional HTML attributes to be passed to the button element
 * @returns {JSX.Element} A React component that displays a button with an SVG icon
 */
export default function MenuIcon({ Icon, ...other }: Props): JSX.Element {
  return (
    <button {...other} className="p-1 border-2 border-transparent hover:border-gray-600 rounded transition-all z-50">
      <Icon className="icon transition-all" />
    </button>
  );
}
