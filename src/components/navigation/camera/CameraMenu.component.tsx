import { ReactComponent as VideoCameraIcon } from "@assets/svg/videoCameraIcon.svg";

import { useAppDispatch } from "@store/hooks";

import useCamera from "@hooks/useCamera/useCamera.hook";
import useDrone from "@hooks/useDrone/useDrone.hook";

import NavIcon from "../navIcon/navIcon";

export default function CameraMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const { cameraType, setCameraType } = useCamera();
  const { currentMode } = useDrone();

  const onClickHandler = (): void => {
    if (currentMode !== "idle") {
      return;
    }
    cameraType === "perspective"
      ? dispatch(setCameraType("orthographic"))
      : dispatch(setCameraType("perspective"));
  };

  return (
    <NavIcon
      Icon={VideoCameraIcon}
      active={cameraType === "orthographic"}
      onClick={onClickHandler}
      title="Switch Between 2D and 3D Perspectives"
    />
  );
}
