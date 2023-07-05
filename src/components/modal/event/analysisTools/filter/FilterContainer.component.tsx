import { ReactChildren } from "@type/app.types";

import { ReactComponent as MinusCircleIcon } from "@assets/svg/refresh.svg";

interface Props {
  title: string;
  children: ReactChildren;
  onFieldsReset: () => void;
}

export default function FilterContainer({
  title,
  children,
  onFieldsReset
}: Props): JSX.Element {
  return (
    <div className="flex flex-col">
      <div className="flex w-full items-center justify-between">
        <h3 className="text-sm text-[#8c92a4]">{title}</h3>
        <MinusCircleIcon
          className="icon h-4 w-4"
          title="reset"
          onClick={onFieldsReset}
        />
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}
