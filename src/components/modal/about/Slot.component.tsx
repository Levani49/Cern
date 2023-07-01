interface Props {
  name: string;
  src: string;
  contact: string;
  role: string;
  className?: string;
}

export default function Slot({ src }: Props): JSX.Element {
  return (
    <div className="h-12 w-12 overflow-hidden rounded-full">
      <img className="h-full w-full object-cover" src={src} alt="Personal" />
    </div>
  );
}
