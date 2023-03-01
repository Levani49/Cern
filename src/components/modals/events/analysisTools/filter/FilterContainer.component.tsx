import { ReactChildren } from "../../../../../app/app.types";

interface Props {
  title: string;
  children: ReactChildren;
}

/**
 *
 * @param root0
 * @param root0.title
 * @param root0.children
 */
export default function FilterContainer({
  title,
  children,
}: Props): JSX.Element {
  return (
    <div className="flex flex-col">
      <h3 className="text-light text-sm">{title}</h3>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}
