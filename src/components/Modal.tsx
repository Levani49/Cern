import { useRef } from "react";
import { createPortal } from "react-dom";
import Draggable from "react-draggable";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface Props {
  show: boolean;
  title: string;
  children: React.ReactElement | React.ReactElement[];
  onCloseHandler: () => void;
}

/**
 
A modal component that can be displayed with a title and content, and be closed either by clicking a close icon or pressing the escape key.
The modal is also draggable by its title.
 
 * @param {object} props - The properties for the component.
 * @param {boolean} props.show - Determines whether the modal should be displayed or not.
 * @param {string} props.title - The title for the modal.
 * @param {React.ReactElement | React.ReactElement[]} props.children - The content for the modal.
 * @param props.onCloseHandler
 * @returns {JSX.Element} ReactElement
 */
export default function Modal({ show, title, onCloseHandler, children }: Props): JSX.Element {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  if (!show) return <></>;

  return createPortal(
    <Draggable nodeRef={nodeRef} bounds="parent" handle=".handle">
      <div ref={nodeRef} className="modal text-white z-50">
        <div className="w-full">
          {/* do not remove class 'handle' since it's used by draggable element, which means that drag events will only trigger on elements which will have <<handle>> class */}
          <div className="handle shadow-md p-2 flex justify-between items-center cursor-move">
            <h4 className="uppercase font-medium text-base pl-2">{title}</h4>
            <XMarkIcon className="h-8 w-8 cursor-pointer pr-2 z-[2000]" onPointerDown={onCloseHandler} />
          </div>
          <div className="modal-body p-2">{children}</div>
        </div>
      </div>
    </Draggable>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById("modal")!,
  );
}
