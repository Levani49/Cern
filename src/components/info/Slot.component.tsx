interface Props {
  name: string;
  src: string;
  role: string;
}

/**
 *
 * @param root0
 * @param root0.name
 * @param root0.src
 * @param root0.role
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

  // return <div className="flex justify-center items-center flex-col gap-1 bg-black p-2 rounded">
  //     <img
  //         loading="lazy"
  //         className="h-16 w-16 rounded-full"
  //         src={src}
  //         alt={`${name}`}
  //     />
  //     <h4 className="text-sm">{name}</h4>
  // </div>
}
