interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  active: boolean;
}

export default function AnalysisTool({ title, active, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={`hover:border-light w-full cursor-pointer select-none rounded-md border bg-highlight1 py-[4px] capitalize text-textColor
      ${!active && "border-transparent"}  
      ${active && "border-light"} `}
    >
      {title}
    </button>
  );
}
