interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  active: boolean;
}

export default function AnalysisTool({
  title,
  active,
  ...rest
}: Props): JSX.Element {
  return (
    <button
      {...rest}
      className={`select-none border ${
        !active && "border-transparent"
      } w-full cursor-pointer rounded-md py-[4px] uppercase ${
        active && "border-light"
      } hover:border-light`}
    >
      {title}
    </button>
  );
}
