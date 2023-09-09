import Icons from "#/utils/icons";
import {
  selectScreenRecording,
  setScreenRecording,
} from "#/store/features/globalsSlice";
import { useAppDispatch, useAppSelector } from "#/store/hooks";
import NavIcon from "#/components/navigation/NavIcon";

export default function ScreenRecording() {
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
          Icon={Icons.PauseIcon}
          title="stop video recoring"
          onClick={handleDispatch}
        />
      )}
    </>
  );
}
