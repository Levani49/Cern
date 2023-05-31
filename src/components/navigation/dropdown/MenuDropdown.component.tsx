import type { ReactChildren } from '../../../types/app.types';

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactChildren;
}

export default function MenuDropdown({ children, className }: Props): JSX.Element {
  return (
    <div
      className={`mt-8 hidden group-hover:flex group-active:flex flex-col w-auto h-auto absolute bg-transparentDark border dark:bg-gray border-gray-600 rounded ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  );
}
