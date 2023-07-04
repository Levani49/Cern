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
      className={`w-full cursor-pointer select-none rounded-md border bg-[rgb(55,60,75)] py-[4px] capitalize text-[#8c92a4] hover:border-light
      ${!active && "border-transparent"}  
      ${active && "border-light"} `}
    >
      {title}
    </button>
  );
}
