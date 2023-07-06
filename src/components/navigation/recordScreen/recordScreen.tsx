import { useEffect, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder-2";

import { ReactComponent as PlayIcon } from "@assets/svg/play.svg";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import {
  selectScreenRecording,
  setScreenRecording
} from "@features/global/globalsSlice";

import Button from "@components/button/Button.component";
import NavIcon from "@components/navigation/navIcon/navIcon";
import TransitionModal from "@components/transition-modal/transition.modal";

import useEscapeKeydown from "@hooks/useEscapeKeydown/useEscapeKeydown.hook";

export default function RecordScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const recording = useAppSelector(selectScreenRecording);
  const [showResults, setShowResults] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [recordAudio, setRecordAudio] = useState(true);

  const { status, startRecording, stopRecording, mediaBlobUrl, clearBlobUrl } =
    useReactMediaRecorder({
      screen: true,
      audio: recordAudio
    });

  useEscapeKeydown(() => {
    setShowResults(false);
    setShowOptions(false);
  });

  useEffect(() => {
    if (recording === "stop") {
      setShowResults(true);
      stopRecording();
      dispatch(setScreenRecording("idle"));
    }
  }, [recording, dispatch, stopRecording]);

  const handleStartRecording = (): void => {
    setShowOptions(false);
    startRecording();
    dispatch(setScreenRecording("recording"));
  };

  const handleShowOptions = (): void => {
    setShowOptions(true);
  };

  const handleSaveVideo = (): void => {
    if (mediaBlobUrl) {
      const link = document.createElement("a");
      link.href = mediaBlobUrl;
      const timestamp = new Date().toISOString();
      const filename = `tracer-recorded-video-${timestamp}.webm`;
      link.download = filename;
      link.click();
      setShowResults(false);
    }
  };

  const handleDiscardVideo = (): void => {
    clearBlobUrl();
    setShowResults(false);
  };

  const onModalCloseHandler = (): void => {
    handleDiscardVideo();
  };

  return (
    <div className="relative">
      {status !== "recording" && (
        <NavIcon
          Icon={PlayIcon}
          className=""
          title="start video recoring"
          onClick={handleShowOptions}
        />
      )}

      <TransitionModal
        title="Recorded Video"
        open={showResults}
        onClose={onModalCloseHandler}
        className="flex items-center justify-center"
      >
        <div className="mt-5 flex flex-col gap-4 p-4">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video src={mediaBlobUrl as string | undefined} controls autoPlay loop />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Button onClick={handleSaveVideo}>Save</Button>
            <Button onClick={handleDiscardVideo}>Discard</Button>
          </div>
        </div>
      </TransitionModal>

      <TransitionModal
        title="Record Video"
        open={showOptions}
        onClose={(): void => setShowOptions(false)}
        className="flex items-center justify-center"
        style={{ width: "320px" }}
      >
        <div className="mt-5 flex flex-col items-center justify-center gap-4 p-4">
          <div className="flex items-center justify-center gap-2">
            <label htmlFor="sound">Record audio</label>
            <input
              id="sound"
              type="checkbox"
              checked={recordAudio}
              className="accent-accent2 dark:accent-accent1"
              onChange={(): void => setRecordAudio((prev) => !prev)}
            />
          </div>
          <Button className="w-full" onClick={handleStartRecording}>
            Start
          </Button>
        </div>
      </TransitionModal>
    </div>
  );
}
