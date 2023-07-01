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
      className={`w-full cursor-pointer select-none rounded-md border bg-transparentDark py-[4px] uppercase hover:border-light
      ${!active && "border-transparent"}  
      ${active && "border-light"} `}
    >
      {title}
    </button>
  );
}
