interface Props {
  title: string;
  value: string | number | undefined | null;
}

export default function ModelAttribute({ title, value }: Props) {
  return (
    <div className="flex items-center justify-between rounded bg-dark1 px-2 py-3">
      <span className="select-none text-xs capitalize">{title}</span>
      <span className="select-none text-xs capitalize text-accent2 dark:text-accent1">
        {value}
      </span>
    </div>
  );
}
