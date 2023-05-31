interface Props {
  name: string;
  src: string;
  role: string;
}

export default function Slot({ name, role }: Props): JSX.Element {
  return (
    <div className="cursor-pointer flex gap-2 items-center">
      <a className="text-sm text-blue dark:text-green underline" href="https://cern.ch">
        {name}
      </a>{' '}
      -<h3 className="text-xs">{role}</h3>
    </div>
  );
}
