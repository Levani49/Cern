import { useEffect } from "react";

import { selectIsFullscreen, setFullscreen } from "@/features/global/globalsSlice";
import useDrone from "@/hooks/useDrone/useDrone.hook";

import { ReactComponent as ArrowsPointingOutIcon } from "@assets/svg/arrowsPointingOut.svg";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import { supportsFullscreen } from "@utils/supportsFullscreen.utils";

import NavIcon from "../navIcon/navIcon";

export default function FullScreenMenu(): JSX.Element {
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
  }, []);

  const handleFullScreen = (): void => {
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
    <>
      {supportsFullscreen() && (
        <NavIcon
          active={isFullscreen}
          Icon={ArrowsPointingOutIcon}
          title="Fullscreen Mode"
          onClick={handleFullScreen}
          disabled={currentMode === "fly"}
        />
      )}
    </>
  );
}
