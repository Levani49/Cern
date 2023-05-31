import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import store from '../../../app/store';
import { ReactComponent as XMarkIcon } from '../../../assets/svg/xMarkIcon.svg';

type Props = { open: boolean; onClose: (e: boolean) => void };

export default function Example({ open, onClose }: Props): JSX.Element {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleLoadSnapshot = (): void => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleSaveSnapshot = (): void => {
    const state = store.getState();
    const stateJSON = JSON.stringify(state);
    const blob = new Blob([stateJSON], { type: 'application/json' });
    const timestamp = new Date().toISOString();
    const filename = `${timestamp}-tracer-snapshot.json`;
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
    onClose(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (): void => {
        const stateJSON = reader.result as string;
        const newState = JSON.parse(stateJSON);
        store.replaceReducer(() => newState);
      };
      reader.readAsText(file);
    }
    event.target.value = '';
    onClose(false);
  };

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
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <div className="flex w-full justify-center">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-lg text-center text-gray-500  text-gray-900"
                        >
                          Snapshot
                        </Dialog.Title>
                        <XMarkIcon
                          className="h-6 ml-auto cursor-pointer"
                          onClick={(): void => onClose(false)}
                        />
                      </div>
                      <div className="mt-8 flex pb-2 gap-6">
                        <div className="flex flex-col gap-4 flex-1 justify-between">
                          <div className="flex flex-col gap-4 items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                              />
                            </svg>
                            <p className="text-sm text-gray-500 text-center">
                              Save the current state of your application as a file to preserve data,
                              settings, and progress. This file can be used later to restore the
                              application exactly as it was.
                            </p>
                          </div>
                          <button
                            className="px-4 py-2 rounded-sm w-full bg-green"
                            onClick={handleSaveSnapshot}
                          >
                            Export
                          </button>
                        </div>
                        <div className="flex flex-col gap-4 flex-1 justify-between">
                          <div className="flex flex-col gap-4 items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                              />
                            </svg>
                            <p className="text-sm text-gray-500 text-center">
                              Load a previously saved file to restore your application to its
                              previous state, including all data, settings, and progress. This
                              allows you to pick up where you left off or continue from a specific
                              point.
                            </p>
                          </div>
                          <button
                            className="px-4 py-2 rounded-sm bg-green w-full"
                            onClick={handleLoadSnapshot}
                          >
                            Import
                          </button>
                        </div>
                        <input
                          onChange={handleFileChange}
                          ref={inputRef}
                          type="file"
                          hidden
                          accept=".json"
                        />
                      </div>
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
