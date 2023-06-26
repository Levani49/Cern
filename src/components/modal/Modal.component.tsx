import { useRef } from "react";
import { createPortal } from "react-dom";
import Draggable from "react-draggable";

import { twMerge } from "tailwind-merge";

import type { ReactChildren } from "@type/app.types";

import { ReactComponent as XMarkIcon } from "@assets/svg/xMarkIcon.svg";

interface Props {
  show: boolean;
  title: string;
  children: ReactChildren;
  onCloseHandler: () => void;
  className?: string;
}

export default function Modal({
  show,
  title,
  onCloseHandler,
  children,
  className
}: Props): JSX.Element {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  const c = twMerge("c-full", className);

  if (!show) return <></>;

  return createPortal(
    <Draggable nodeRef={nodeRef} bounds="parent" handle=".handle">
      <div ref={nodeRef} className="modal z-50 min-w-[200px] rounded text-white">
        <div className={c}>
          {/* do not remove class 'handle' since it's used by draggable element, which means that drag events will only trigger on elements which will have <<handle>> class */}
          <div className="handle sticky top-0 z-[2000] flex cursor-move items-center justify-between bg-transparentDark p-1 shadow-md dark:bg-customGray">
            <h4 className="select-none pl-2 text-xs uppercase">{title}</h4>
            <XMarkIcon
              className="z-[2000] h-8 w-8 cursor-pointer pr-2"
              onPointerDown={onCloseHandler}
            />
          </div>
          <div className="bg-transparentBackground p-2 dark:bg-customGray">
            {children}
          </div>
        </div>
      </div>
    </Draggable>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById("modal")!
  );
}
