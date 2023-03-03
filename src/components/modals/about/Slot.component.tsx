interface Props {
  name: string;
  src: string;
  role: string;
}

/**
 * Renders a Slot component that displays an image, name, and role.
 *
 * @function
 * @name Slot
 * @param {object} props - The properties to be passed to the component.
 * @param {string} props.name - The name to be displayed in the component.
 * @param {string} props.src - The image source URL to be displayed in the component.
 * @param {string} props.role - The role to be displayed in the component.
 * @returns {JSX.Element} - A JSX element representing the Slot component.
 */
export default function Slot({ name, src, role }: Props): JSX.Element {
  return (
    <div className=" w-[140px] h-[140px] rounded-lg cursor-pointer cardBackground">
      <div className="w-full h-full rounded-lg transition-all hover:scale-95 hover:cardShadow bg-[#1a1a1a]">
        <div className="flex justify-center items-center flex-col gap-1 p-2">
          <img
            loading="lazy"
            className="h-16 rounded-full"
            src={src}
            alt={`${name}`}
          />
          <h4 className="text-sm">{name}</h4>
          <h3 className="text-xs">{role}</h3>
        </div>
      </div>
    </div>
  );
}
