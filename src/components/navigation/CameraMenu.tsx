import Icons from "#/utils/icons";
import { useAppDispatch } from "#/store/hooks";
import NavIcon from "#/components/navigation/NavIcon";
import useCamera from "#/hooks/useCamera";
import useDrone from "#/hooks/useDrone";
import useEscapeKeydown from "#/hooks/useEscapeKeydown";

export default function CameraMenu() {
  const dispatch = useAppDispatch();
  const { cameraType, setCameraType } = useCamera();
  const { currentMode } = useDrone();

  useEscapeKeydown(() => {
    if (cameraType === "orthographic") {
      dispatch(setCameraType("perspective"));
    }
  });

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
      Icon={Icons.VideoCameraIcon}
      active={cameraType === "orthographic"}
      onClick={onClickHandler}
      title="Switch Between 2D and 3D Perspectives"
    />
  );
}
