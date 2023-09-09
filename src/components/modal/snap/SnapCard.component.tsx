import { HTMLAttributes } from "react";

import { ReactChildren } from "#/types/app.types";

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
  Icon: React.FC;
  children: ReactChildren;
}

export default function SnapCard({ text, Icon, children, ...rest }: Props) {
  return (
    <div className="flex flex-1 flex-col gap-5 rounded " {...rest}>
      <div className="mb-2 flex h-full flex-col items-center gap-4 rounded bg-dark2 px-2 py-6 transition-all">
        <Icon />
        <p className="text-center text-sm text-gray-300">{text}</p>
      </div>
      {children}
    </div>
  );
}
