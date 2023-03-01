interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  active: boolean;
}

/**
 *
 * @param root0
 * @param root0.title
 * @param root0.active
 */
export default function AnalysisTool({
  title,
  active,
  ...rest
}: Props): JSX.Element {
  return (
    <button
      {...rest}
      className={`border ${
        !active && "border-transparent"
      } py-2 px-4 cursor-pointer uppercase ${
        active && "border-light"
      } hover:border-light`}
    >
      {title}
    </button>
  );
}
