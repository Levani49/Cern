interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  active: boolean;
}

export default function AnalysisTool({ title, active, ...rest }: Props): JSX.Element {
  return (
    <button
      {...rest}
      className={`border ${
        !active && 'border-transparent'
      } w-full py-[4px] rounded-md cursor-pointer uppercase ${
        active && 'border-light'
      } hover:border-light`}
    >
      {title}
    </button>
  );
}
