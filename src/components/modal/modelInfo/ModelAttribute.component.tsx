interface Props {
  title: string;
  value: string | number | undefined | null;
}

export default function ModelAttribute({ title, value }: Props): JSX.Element {
  return (
    <div className="flex items-center justify-between rounded bg-transparentDark px-2 py-3">
      <span className="select-none text-xs capitalize">{title}</span>
      <span className="select-none text-xs capitalize text-blue dark:text-green">
        {value}
      </span>
    </div>
  );
}
