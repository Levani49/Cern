interface Props {
  name: string;
  src: string;
  contact: string;
  role: string;
  className?: string;
}

export default function Slot({ src, contact }: Props): JSX.Element {
  return (
    <div className="h-12 w-12 overflow-hidden rounded-full transition-all hover:scale-150 hover:cursor-pointer">
      <a href={contact} target="_blank" rel="noreferrer">
        <img className="h-full w-full object-cover" src={src} alt="Personal" />
      </a>
    </div>
  );
}
