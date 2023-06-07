import { ReactComponent as BoxIcon } from "../../../assets/svg/box.svg";
import { ReactComponent as LeftSideBox } from "../../../assets/svg/left-side-box.svg";
import { ReactComponent as RightSideBox } from "../../../assets/svg/right-side-box.svg";
import {
  selectCameraViewMode,
  selectDroneState,
  setDefaultView,
  setLeftCameraView,
  setRightCameraView
} from "../../../features/camera/cameraSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import MenuDropdown from "../dropdown/MenuDropdown.component";
import NavIcon from "../navIcon/navIcon";

export default function CameraViewMenu(): JSX.Element {
  const dispatch = useAppDispatch();

  const { droneType, viewType } = useAppSelector((state) => ({
    droneType: selectDroneState(state),
    viewType: selectCameraViewMode(state)
  }));

  const Icon =
    viewType === "default"
      ? BoxIcon
      : viewType === "left"
      ? LeftSideBox
      : viewType === "right"
      ? RightSideBox
      : BoxIcon;

  const handlers = {
    default: setDefaultView,
    left: setLeftCameraView,
    right: setRightCameraView
  };

  const innerHtml = Object.entries(handlers).map(([type, handler]) => {
    const onClickHandler = (): void => {
      dispatch(handler());
    };

    return (
      <NavIcon
        key={type}
        Icon={
          type === "default"
            ? BoxIcon
            : type === "left"
            ? LeftSideBox
            : type === "right"
            ? RightSideBox
            : BoxIcon
        }
        onClick={onClickHandler}
        disabled={droneType !== "idle"}
      />
    );
  });

  return (
    <div className="group inline-flex">
      <NavIcon Icon={Icon} active title="Camera Perspectives" />
      <MenuDropdown>{innerHtml}</MenuDropdown>
    </div>
  );
}
