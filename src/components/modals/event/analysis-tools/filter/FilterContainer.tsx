import Icons from "#/utils/icons";

type Props = {
  title: string;
  children: React.ReactNode;
  resetButtonTitle: string;

  onFieldsReset: () => void;
};

export default function FilterContainer({
  title,
  children,
  resetButtonTitle,
  onFieldsReset,
}: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex w-full items-center justify-between">
        <h3 className="text-sm text-textColor">{title}</h3>
        <button title={resetButtonTitle}>
          <Icons.RefreshIcon className="icon h-4 w-4" onClick={onFieldsReset} />
        </button>
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}
