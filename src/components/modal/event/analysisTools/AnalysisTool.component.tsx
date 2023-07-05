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
      className={`hover:border-light w-full cursor-pointer select-none rounded-md border bg-gray1 py-[4px] capitalize text-accent3
      ${!active && "border-transparent"}  
      ${active && "border-light"} `}
    >
      {title}
    </button>
  );
}
