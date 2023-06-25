import { useRef } from "react";

import { saveAs } from "file-saver";

import { ReactComponent as DownloadFileIcon } from "@assets/svg/downloadFileIcon.svg";
import { ReactComponent as UploadFileIcon } from "@assets/svg/uploadFileIcon.svg";

import { useAppDispatch } from "@store/hooks";
import store from "@store/store";

import { hydrateClippingPlanes, setSnapIsLoading } from "@features/model/modelSlice";

import Button from "@components/button/Button.component";
import TransitionModal from "@components/transition-modal/transition.modal";

import useEscapeKeydown from "@hooks/useEscapeKeydown/useEscapeKeydown.hook";

import SnapCard from "./SnapCard.component";

type Props = { open: boolean; onClose: (e: boolean) => void };

const SnapTexts = {
  download: `Save the current state of your application as a file to preserve data, settings, and
              progress. This file can be used later to restore the application exactly as it was.`,
  upload: `Load a previously saved file to restore your application to its previous state,
              including all data, settings, and progress. This allows you to pick up where you left
              off or continue from a specific point.`
};

export default function SnapModal({ open, onClose }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEscapeKeydown(() => onClose(false));

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
    const filename = `${timestamp}-tracer-snapshot.snap`;
    saveAs(blob, filename);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      dispatch(setSnapIsLoading(true));
      reader.onload = (): void => {
        const stateJSON = reader.result as string;
        const newState = JSON.parse(stateJSON);

        for (const [key] of Object.entries(newState)) {
          store.dispatch({ type: `${key}/rehydrate`, payload: newState });
        }

        dispatch(setSnapIsLoading(false));
        dispatch(hydrateClippingPlanes());
      };

      reader.readAsText(file);
    }
    event.target.value = "";
  };

  return (
    <TransitionModal open={open} onClose={onClose} title="Snapshot">
      <div className="mt-8 flex flex-col gap-6 pb-2 sm:flex-row">
        <SnapCard Icon={DownloadFileIcon} text={SnapTexts.download}>
          <Button className="w-full" onClick={handleSaveSnapshot}>
            Export
          </Button>
        </SnapCard>
        <SnapCard Icon={UploadFileIcon} text={SnapTexts.upload}>
          <Button className="w-full" onClick={handleLoadSnapshot}>
            Import
          </Button>
        </SnapCard>
        <input
          onChange={handleFileChange}
          ref={inputRef}
          type="file"
          hidden
          accept=".snap"
        />
      </div>
    </TransitionModal>
  );
}
