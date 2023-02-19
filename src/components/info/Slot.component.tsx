interface Props {
  name: string;
  src: string;
  role: string;
}

/**
 * A component representing a slot with information about a person.
 *
 *@param {Props} props - The props object containing the name, src and role.
 *@returns {JSX.Element} A JSX Element representing a slot with person information.
 */
export default function Slot({ name, src, role }: Props): JSX.Element {
  return (
    <div className=" w-[140px] h-[140px] rounded-lg transition-all cursor-pointer cardBackground">
      <div className="w-[140px] h-[140px] rounded-lg transition-all hover:scale-95 hover:cardShadow bg-[#1a1a1a]">
        <div className="flex justify-center items-center flex-col gap-1 p-2">
          <img loading="lazy" className="h-16 w-16 rounded-full" src={src} alt={`${name}`} />
          <h4 className="text-sm">{name}</h4>
          <h3 className="text-xs">{role}</h3>
        </div>
      </div>
    </div>
  );
}
