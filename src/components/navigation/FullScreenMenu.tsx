import { useEffect } from "react";
import { toast } from "react-hot-toast";

import Icons from "#/utils/icons";
import { supportsFullscreen } from "#/utils/supportsFullscreen";
import { selectIsFullscreen, setFullscreen } from "#/store/features/globalsSlice";
import { useAppDispatch, useAppSelector } from "#/store/hooks";
import NavIcon from "#/components/navigation/NavIcon";
import useDrone from "#/hooks/useDrone.hook";

export default function FullScreenMenu() {
  const dispatch = useAppDispatch();
  const isFullscreen = useAppSelector(selectIsFullscreen);

  const { currentMode } = useDrone();

  useEffect(() => {
    const exitFullScreen = (): void => {
      if (!document.fullscreenElement) {
        dispatch(setFullscreen(false));
      }
    };

    document.addEventListener("fullscreenchange", exitFullScreen);
    return () => document.removeEventListener("fullscreenchange", exitFullScreen);
  }, [dispatch]);

  const handleFullScreen = (): void => {
    if (!supportsFullscreen()) {
      toast.error("Your device doest' support fullscreen");
      return;
    }

    const element = document.getElementById("fullscreen") as HTMLDivElement;

    if (!document.fullscreenElement) {
      element.requestFullscreen();
      dispatch(setFullscreen(true));
    } else {
      document.exitFullscreen();
      dispatch(setFullscreen(false));
    }
  };

  return (
    <NavIcon
      active={isFullscreen}
      Icon={Icons.ArrowsPointingOutIcon}
      title="Fullscreen Mode"
      onClick={handleFullScreen}
      disabled={currentMode === "fly"}
    />
  );
}
