import React from "react";

import { ReactChildren } from "@type/app.types";

interface Props {
  text: string;
  Icon: React.FC;
  children: ReactChildren;
}

export default function SnapCard({ text, Icon, children }: Props): JSX.Element {
  return (
    <div className="flex flex-1 flex-col justify-between gap-4">
      <div className="flex h-full cursor-pointer flex-col items-center gap-4 rounded p-2 transition-all hover:bg-transparentDark">
        <Icon />
        <p className="text-center text-sm text-gray-300">{text}</p>
      </div>
      {children}
    </div>
  );
}
