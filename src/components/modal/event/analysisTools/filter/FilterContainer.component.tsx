import { ReactChildren } from '../../../../../types/app.types';

interface Props {
  title: string;
  children: ReactChildren;
}

export default function FilterContainer({ title, children }: Props): JSX.Element {
  return (
    <div className="flex flex-col">
      <h3 className="text-light text-sm">{title}</h3>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}
