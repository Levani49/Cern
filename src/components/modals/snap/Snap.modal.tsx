import { saveAs } from "file-saver";

import { useEffect, useRef } from "react";

import Icons from "#/utils/icons";
import store from "#/store//store";
import {
  selectCameraEffect,
  triggerCameraEffect,
} from "#/store/features/cameraSlice";
import { useAppDispatch, useAppSelector } from "#/store/hooks";
import Button from "#/components/Button.component";
import TransitionModal from "#/components/Transition.modal";
import useEscapeKeydown from "#/hooks/useEscapeKeydown.hook";

import SnapCard from "./SnapCard.component";

type Props = { open: boolean; onClose: (e: boolean) => void };

const SnapTexts = {
  download: `Save the current state of your application as a file to preserve data, settings, and
              progress. This file can be used later to restore the application exactly as it was.`,
  upload: `Load a previously saved file to restore your application to its previous state,
              including all data, settings, and progress. This allows you to pick up where you left
              off or continue from a specific point.`,
};

export default function SnapModal({ open, onClose }: Props) {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const triggerEffect = useAppSelector(selectCameraEffect);

  useEffect(() => {
    if (triggerEffect === "success") {
      const state = store.getState();
      const stateJSON = JSON.stringify(state);
      const blob = new Blob([stateJSON], { type: "application/json" });
      const timestamp = new Date().toLocaleString();
      const filename = `tracer-core-snapshot${timestamp}.snap`;
      saveAs(blob, filename);
      dispatch(triggerCameraEffect("idle"));
    }
  }, [triggerEffect, dispatch]);

  useEscapeKeydown(() => onClose(false));

  const handleLoadSnapshot = (): void => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleSaveSnapshot = (): void => {
    onClose(false);
    dispatch(triggerCameraEffect("pending"));
  };

  const handleFileChange = (): void => {
    if (!inputRef.current) {
      return;
    }

    const file = inputRef.current.files?.[0];
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
    inputRef.current.value = "";
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];

      if (inputRef.current) {
        const fileList = new DataTransfer();
        fileList.items.add(file);

        Object.defineProperty(inputRef.current, "files", {
          value: fileList.files,
          writable: true,
        });

        handleFileChange();
      }
    }
  };

  return (
    <TransitionModal open={open} onClose={onClose} title="Snapshot">
      <div className="mt-5 flex flex-col gap-6 pb-2 sm:flex-row">
        <SnapCard Icon={Icons.DownloadFileIcon} text={SnapTexts.download}>
          <Button className="w-full" onClick={handleSaveSnapshot}>
            Export
          </Button>
        </SnapCard>
        <SnapCard
          Icon={Icons.UploadFileIcon}
          text={SnapTexts.upload}
          onDragOver={handleDrop}
          onDrop={handleDrop}
        >
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
