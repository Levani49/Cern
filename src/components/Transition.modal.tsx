import { twMerge } from "tailwind-merge";

import { Dialog, Transition } from "@headlessui/react";
import { CSSProperties, Fragment, useRef } from "react";

import Icons from "#/utils/icons";

type Props = {
  open: boolean;
  title: string;
  className?: string;
  children: React.ReactNode;
  style?: CSSProperties;
  onClose?: (e: boolean) => void;
};

export default function TransitionModal({
  open,
  className,
  title,
  children,
  onClose,
  style,
}: Props) {
  const cancelButtonRef = useRef(null);

  const componentClasses = twMerge(
    "relative transform overflow-hidden rounded-lg bg-dark1 text-left shadow-xl transition-all sm:w-full sm:max-w-2xl",
    className
  );

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={(): void => {
          /* empty */
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className=" fixed inset-0 bg-dark2 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className=" flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className={componentClasses} style={style}>
                <div className="w-full bg-dark1 px-4 pb-4 pt-5 text-white sm:p-4 sm:pb-2">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 w-full sm:mt-0 sm:text-left">
                      <div className="flex w-full items-center justify-center">
                        <Dialog.Title
                          as="h3"
                          className=" text-center text-lg leading-6 text-white"
                        >
                          {title}
                        </Dialog.Title>
                        {onClose && (
                          <div className="ml-auto rounded bg-black p-1 transition-all hover:bg-highlight1">
                            <Icons.XMarkIcon
                              className="h-6 cursor-pointer"
                              onClick={(): void => onClose(false)}
                            />
                          </div>
                        )}
                      </div>
                      {children}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
