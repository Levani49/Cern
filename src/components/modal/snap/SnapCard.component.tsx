import { HTMLAttributes } from "react";

import { ReactChildren } from "@type/app.types";

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
  Icon: React.FC;
  children: ReactChildren;
}

export default function SnapCard({
  text,
  Icon,
  children,
  ...rest
}: Props): JSX.Element {
  return (
    <div className="flex flex-1 flex-col justify-between gap-4" {...rest}>
      <div className="flex h-full  flex-col items-center gap-4 rounded p-2 transition-all">
        <Icon />
        <p className="text-center text-sm text-gray-300">{text}</p>
      </div>
      {children}
    </div>
  );
}
