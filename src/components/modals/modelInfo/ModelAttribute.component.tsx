interface Props {
  title: string;
  value: string | number | undefined | null;
}

export default function ModelAttribute({ title, value }: Props): JSX.Element {
  return (
    <div className="flex gap-1 items-center justify-between px-2 py-[0.25rem]">
      <span className="uppercase text-xs">{title}</span>
      <span className="uppercase text-xs text-blue dark:text-green">{value}</span>
    </div>
  );
}
