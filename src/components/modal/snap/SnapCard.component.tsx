import React from "react";
import { ReactChildren } from "../../../types/app.types";

interface Props {
  text: string;
  Icon: React.FC;
  children: ReactChildren;
}

export default function SnapCard({ text, Icon, children }: Props): JSX.Element {
  return (
    <div className="flex flex-col gap-4 flex-1 justify-between">
      <div className="flex flex-col gap-4 items-center hover:bg-transparentDark rounded p-2 transition-all cursor-pointer h-full">
        <Icon />
        <p className="text-sm text-gray-300 text-center">{text}</p>
      </div>
      {children}
    </div>
  );
}
