import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ReactComponent as XMarkIcon } from '../../assets/svg/xMarkIcon.svg';

interface Props {
  open: boolean;
  title: string;
  children: JSX.Element | JSX.Element[];
  onClose: (e: boolean) => void;
}

export default function TestModal({ open, title, children, onClose }: Props): JSX.Element {
  const cancelButtonRef = useRef(null);

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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                <div className="bg-gray px-4 pb-4 pt-5 sm:p-4 sm:pb-2 text-white">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 sm:mt-0 sm:text-left w-full">
                      <div className="flex justify-center w-full">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-lg text-center text-gray-500  text-gray-900"
                        >
                          {title}
                        </Dialog.Title>
                        <XMarkIcon
                          className="h-6 ml-auto cursor-pointer"
                          onClick={(): void => onClose(false)}
                        />
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
