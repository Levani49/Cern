type Props = {
  name: string;
  src: string;
  contact: string;
  role: string;
  className?: string;
};

export default function Slot({ src, name, role, contact }: Props) {
  return (
    <div className="h-8 w-8 overflow-hidden rounded-full transition-all hover:scale-150 hover:cursor-pointer">
      <a href={contact} target="_blank" rel="noreferrer" title={`${name} : ${role}`}>
        <img className="h-full w-full object-cover" src={src} alt="Personal" />
      </a>
    </div>
  );
}
