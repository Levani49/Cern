import { useEffect, useState } from "react";

import { ReactComponent as ArrowsPointingOutIcon } from "@assets/svg/arrowsPointingOut.svg";

import { useAppSelector } from "@store/hooks";

import { selectDroneState } from "@features/camera/cameraSlice";

import NavIcon from "../navIcon/navIcon";

function isFullscreenSupported(): boolean {
  const bodyElement = document.documentElement as HTMLElement;

  return !!bodyElement.requestFullscreen;
}

export default function FullScreenMenu(): JSX.Element {
  const [active, setActive] = useState<boolean>(false);
  const droneMode = useAppSelector(selectDroneState);

  useEffect(() => {
    const exitFullScreen = (): void => {
      if (!document.fullscreenElement) {
        setActive(false);
      }
    };

    document.addEventListener("fullscreenchange", exitFullScreen);
    return () => document.removeEventListener("fullscreenchange", exitFullScreen);
  }, []);

  const handleFullScreen = (): void => {
    const element = document.getElementById("fullscreen") as HTMLDivElement;

    if (!document.fullscreenElement) {
      element.requestFullscreen();
      setActive(true);
    } else {
      document.exitFullscreen();
      setActive(false);
    }
  };

  if (!isFullscreenSupported()) {
    return <></>;
  }

  return (
    <NavIcon
      active={active}
      Icon={ArrowsPointingOutIcon}
      title="Fullscreen Mode"
      onClick={handleFullScreen}
      disabled={droneMode === "fly"}
    />
  );
}
