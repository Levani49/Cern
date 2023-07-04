import { ReactComponent as PauseIcon } from "@assets/svg/pauseIcon.svg";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import {
  selectScreenRecording,
  setScreenRecording
} from "@features/global/globalsSlice";

import NavIcon from "@components/navigation/navIcon/navIcon";

export default function ScreenRecording(): JSX.Element {
  const dispatch = useAppDispatch();
  const recording = useAppSelector(selectScreenRecording);

  const handleDispatch = (): void => {
    dispatch(setScreenRecording("stop"));
  };

  return (
    <>
      {recording === "recording" && (
        <NavIcon
          className="fixed right-2 top-3"
          iconClass="text-red-500 animate-pulse h-7 w-7"
          Icon={PauseIcon}
          title="stop video recoring"
          onClick={handleDispatch}
        />
      )}
    </>
  );
}
