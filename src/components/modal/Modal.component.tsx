import { twMerge } from "tailwind-merge";

import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import Draggable from "react-draggable";

import type { ReactChildren } from "#/types/app.types";
import { ReactComponent as CarretDown } from "#/assets/svg/carretDown.svg";
import { ReactComponent as XMarkIcon } from "#/assets/svg/xMarkIcon.svg";
import { useAppDispatch, useAppSelector } from "#/store/hooks";
import { selectModals, setModalsOrder } from "#/features/global/globalsSlice";

interface Props {
  show: boolean;
  title: string;
  children: ReactChildren;
  onCloseHandler: () => void;
  className?: string;
  id: string;
}

export default function Modal({
  show,
  title,
  onCloseHandler,
  children,
  className,
  id,
}: Props) {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const [drop, setDrop] = useState(true);
  const modals = useAppSelector(selectModals);

  const c = twMerge("w-full bg-gray1", className);

  if (!show) return <></>;

  const currentModal = modals.find((el) => el.id === id);

  const zIndex = currentModal ? currentModal.zIndex : 30;

  const handlePointerDown = (): void => {
    dispatch(setModalsOrder(id));
  };

  return createPortal(
    <Draggable nodeRef={nodeRef} bounds="parent" handle=".handle">
      <div
        role="presentation"
        ref={nodeRef}
        onPointerDown={handlePointerDown}
        className="modal  min-w-[227px] rounded-xl text-accent3"
        style={{
          zIndex: zIndex,
        }}
      >
        <div className={c}>
          {/* do not remove class 'handle' since it's used by draggable element, which means that drag events will only trigger on elements which will have <<handle>> class */}
          <div className="handle sticky top-0 z-[2000] flex cursor-grab items-center justify-between bg-dark1 px-3 py-2 shadow-md transition-colors hover:text-white dark:bg-gray1">
            <button
              className="flex h-5 w-5 items-center justify-center"
              onPointerDown={(): void => {
                setDrop(!drop);
              }}
            >
              <CarretDown
                className={`h-3 w-3 transform fill-accent3 transition hover:fill-white ${
                  drop ? "rotate-0" : "-rotate-90"
                }`}
              />
            </button>
            <h4 role="presentation" className="select-none text-xs capitalize">
              {title}
            </h4>
            <XMarkIcon
              className="z-[2000] h-6 w-6 cursor-pointer"
              onPointerDown={onCloseHandler}
            />
          </div>
          <div
            className={`overflow-y-hidden rounded-t-2xl bg-dark3  px-2 transition-all duration-700 dark:bg-dark1 ${
              drop ? "max-h-[400px] py-2" : "max-h-0 py-0"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </Draggable>,
    // eslint-disable-next-line #/typesscript-eslint/no-non-null-assertion
    document.getElementById("modal")!
  );
}
