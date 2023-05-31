import { useRef } from 'react';

import store from '../../../app/store';
import TestModal from '../../test-modal/test.modal';

type Props = { open: boolean; onClose: (e: boolean) => void };

export default function SnapModal({ open, onClose }: Props): JSX.Element {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleLoadSnapshot = (): void => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleSaveSnapshot = (): void => {
    onClose(false);
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
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (): void => {
        const stateJSON = reader.result as string;
        const newState = JSON.parse(stateJSON);

        store.dispatch({ type: 'globals/rehydrate', payload: newState });
        store.dispatch({ type: 'renderer/rehydrate', payload: newState });
        store.dispatch({ type: 'camera/rehydrate', payload: newState });
        store.dispatch({ type: 'modal/rehydrate', payload: newState });
        store.dispatch({ type: 'tree/rehydrate', payload: newState });
        store.dispatch({ type: 'model/rehydrate', payload: newState });
        store.dispatch({ type: 'event/rehydrate', payload: newState });
      };
      reader.readAsText(file);
    }
    event.target.value = '';
  };

  return (
    <TestModal open={open} onClose={onClose} title="Snapshot">
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
              Save the current state of your application as a file to preserve data, settings, and
              progress. This file can be used later to restore the application exactly as it was.
            </p>
          </div>
          <button className="px-4 py-2 rounded-sm w-full bg-green" onClick={handleSaveSnapshot}>
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
              Load a previously saved file to restore your application to its previous state,
              including all data, settings, and progress. This allows you to pick up where you left
              off or continue from a specific point.
            </p>
          </div>
          <button className="px-4 py-2 rounded-sm bg-green w-full" onClick={handleLoadSnapshot}>
            Import
          </button>
        </div>
        <input onChange={handleFileChange} ref={inputRef} type="file" hidden accept=".json" />
      </div>
    </TestModal>
  );
}
