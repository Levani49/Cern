import { useRef } from "react";

import store from "../../../app/store";
import TransitionModal from "../../transition-modal/transition.modal";

import { ReactComponent as DownloadFileIcon } from "../../../assets/svg/downloadFileIcon.svg";
import { ReactComponent as UploadFileIcon } from "../../../assets/svg/uploadFileIcon.svg";

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
    const blob = new Blob([stateJSON], { type: "application/json" });
    const timestamp = new Date().toISOString();
    const filename = `${timestamp}-tracer-snapshot.json`;
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
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

        for (const [key] of Object.entries(newState)) {
          store.dispatch({ type: `${key}/rehydrate`, payload: newState });
        }
      };

      reader.readAsText(file);
    }
    event.target.value = "";
  };

  return (
    <TransitionModal open={open} onClose={onClose} title="Snapshot">
      <div className="mt-8 flex pb-2 gap-6">
        <div className="flex flex-col gap-4 flex-1 justify-between">
          <div className="flex flex-col gap-4 items-center hover:bg-transparentDark rounded p-2 transition-all cursor-pointer h-full">
            <DownloadFileIcon />
            <p className="text-sm text-gray-300 text-center">
              Save the current state of your application as a file to preserve data, settings, and
              progress. This file can be used later to restore the application exactly as it was.
            </p>
          </div>
          <button
            className="px-4 py-2 rounded-sm w-full bg-green hover:bg-transparentDark transition-all ease-in-out"
            onClick={handleSaveSnapshot}
          >
            Export
          </button>
        </div>
        <div className="flex flex-col gap-4 flex-1 justify-between ">
          <div className="flex flex-col gap-4 items-center hover:bg-transparentDark rounded p-2 transition-all cursor-pointer ">
            <UploadFileIcon />
            <p className="text-sm text-gray-300 text-center">
              Load a previously saved file to restore your application to its previous state,
              including all data, settings, and progress. This allows you to pick up where you left
              off or continue from a specific point.
            </p>
          </div>
          <button
            className="px-4 py-2 rounded-sm bg-green  hover:bg-transparentDark transition-all ease-in-out w-full"
            onClick={handleLoadSnapshot}
          >
            Import
          </button>
        </div>
        <input onChange={handleFileChange} ref={inputRef} type="file" hidden accept=".json" />
      </div>
    </TransitionModal>
  );
}
