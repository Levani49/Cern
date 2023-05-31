import { useRef } from 'react';
import { createPortal } from 'react-dom';
import Draggable from 'react-draggable';

import { ReactComponent as XMarkIcon } from '../../assets/svg/xMarkIcon.svg';
import type { ReactChildren } from '../../types/app.types';

interface Props {
  show: boolean;
  title: string;
  children: ReactChildren;
  onCloseHandler: () => void;
}

export default function Modal({ show, title, onCloseHandler, children }: Props): JSX.Element {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  if (!show) return <></>;

  return createPortal(
    <Draggable nodeRef={nodeRef} bounds="parent" handle=".handle">
      <div ref={nodeRef} className="modal text-white z-50 rounded min-w-[200px]">
        <div className="w-full">
          {/* do not remove class 'handle' since it's used by draggable element, which means that drag events will only trigger on elements which will have <<handle>> class */}
          <div className="handle shadow-md p-1 flex justify-between items-center cursor-move sticky top-0 bg-transparentDark dark:bg-gray z-[2000]">
            <h4 className="uppercase text-xs pl-2 select-none">{title}</h4>
            <XMarkIcon
              className="h-8 w-8 cursor-pointer pr-2 z-[2000]"
              onPointerDown={onCloseHandler}
            />
          </div>
          <div className="p-2 bg-transparentBackground dark:bg-gray">{children}</div>
        </div>
      </div>
    </Draggable>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('modal')!,
  );
}
