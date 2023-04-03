interface Props {
  title: string;
  value: string | number | undefined | null;
}

export default function ModelAttribute({ title, value }: Props): JSX.Element {
  return (
    <div className="flex gap-1 items-center justify-between p-2">
      <span className="uppercase text-sm">{title}</span>
      <span className="uppercase text-sm text-blue dark:text-green">{value}</span>
    </div>
  );
}
