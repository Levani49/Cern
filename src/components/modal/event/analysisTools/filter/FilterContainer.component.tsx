import { ReactChildren } from "@type/app.types";

import { ReactComponent as RefreshIcon } from "@assets/svg/refresh.svg";

interface Props {
  title: string;
  children: ReactChildren;
  resetButtonTitle: string;

  onFieldsReset: () => void;
}

export default function FilterContainer({
  title,
  children,
  resetButtonTitle,
  onFieldsReset
}: Props): JSX.Element {
  return (
    <div className="flex flex-col">
      <div className="flex w-full items-center justify-between">
        <h3 className="text-sm text-textColor">{title}</h3>
        <button title={resetButtonTitle}>
          <RefreshIcon className="icon h-4 w-4" onClick={onFieldsReset} />
        </button>
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}
