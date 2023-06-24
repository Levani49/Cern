import { useState } from "react";

import { ReactComponent as EmailIcon } from "@assets/svg/emailIcon.svg";

interface Props {
  name: string;
  src: string;
  email: string;
  role: string;
  className?: string;
}

export default function Slot({
  name,
  className,
  email,
  src,
  role
}: Props): JSX.Element {
  const [copied, setCopied] = useState(false);

  const onCopy = (): void => {
    setCopied(true);
    navigator.clipboard.writeText(email);
  };

  return (
    <div
      role="presentation"
      className={`flex w-[150px] cursor-pointer flex-col items-center gap-1 rounded bg-transparent px-1 py-2 transition-all ease-in-out hover:bg-transparentDark ${className}`}
    >
      <div className="h-12 w-12 overflow-hidden rounded-full">
        <img className="h-full w-full object-cover" src={src} alt="Personal" />
      </div>
      <h3 className="text-center text-xs font-bold text-blue dark:text-green">
        {name}
      </h3>
      <span className="w-full text-center text-xs text-gray-500">{role}</span>
      <div className="flex items-center">
        <EmailIcon className="mt-[2px] h-3 w-3 text-blue dark:text-green" />
        <button onClick={onCopy} className="px-1 py-1 text-xs underline">
          {copied ? "Copied" : "Copy email"}
        </button>
      </div>
    </div>
  );
}
