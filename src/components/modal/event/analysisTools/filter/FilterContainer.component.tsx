import { ReactChildren } from "@type/app.types";

interface Props {
  title: string;
  children: ReactChildren;
}

export default function FilterContainer({ title, children }: Props): JSX.Element {
  return (
    <div className="flex flex-col">
      <h3 className="text-sm text-[#8c92a4]">{title}</h3>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}
