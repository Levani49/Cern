import { twMerge } from "tailwind-merge";

interface Props {
  name: string;
  src: string;
  contact: string;
  role: string;
  className?: string;
}

export default function Slot({
  name,
  className,
  contact,
  src,
  role
}: Props): JSX.Element {
  const componentClasses = twMerge(
    "flex w-[150px] h-[145px] justify-between flex-col items-center gap-1 rounded bg-transparent px-1 py-2 transition-all ease-in-out ",
    className
  );

  return (
    <div role="presentation" className={componentClasses}>
      <div className="h-8 w-8 overflow-hidden rounded-full">
        <img className="h-full w-full object-cover" src={src} alt="Personal" />
      </div>
      <h3 className="text-center text-xs font-bold text-blue dark:text-green">
        {name}
      </h3>
      <span className="w-full text-center text-xs text-gray-500">{role}</span>
      <div className="flex cursor-pointer items-center gap-2 rounded bg-transparentDark p-2 text-xs transition-all hover:bg-transparentGray">
        <a
          href={contact}
          target="_blank"
          className="text-xs text-gray-300"
          rel="noreferrer"
        >
          Contact
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          className="bi bi-linkedin"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />{" "}
        </svg>
      </div>
    </div>
  );
}
