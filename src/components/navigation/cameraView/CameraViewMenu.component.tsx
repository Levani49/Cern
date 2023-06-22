import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";

import { ReactComponent as BoxIcon } from "@assets/svg/box.svg";
import { ReactComponent as LeftSideBox } from "@assets/svg/left-side-box.svg";
import { ReactComponent as RightSideBox } from "@assets/svg/right-side-box.svg";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import {
  selectCameraViewMode,
  selectDroneState,
  setDefaultView,
  setLeftCameraView,
  setRightCameraView
} from "@features/camera/cameraSlice";

import CameraMenu from "@components/navigation/camera/CameraMenu.component";

import MenuDropdown from "../dropdown/MenuDropdown.component";
import NavIcon from "../navIcon/navIcon";

export default function CameraViewMenu(): JSX.Element {
  const dispatch = useAppDispatch();

  const droneType = useAppSelector(selectDroneState);
  const viewType = useAppSelector(selectCameraViewMode);

  let Icon;

  switch (viewType) {
    case "default":
      Icon = BoxIcon;
      break;
    case "left":
      Icon = LeftSideBox;
      break;
    default:
      Icon = RightSideBox;
  }

  const handleModeChange = (handler: ActionCreatorWithoutPayload): void => {
    dispatch(handler());
  };

  const menuItems = [
    { Icon: BoxIcon, action: setDefaultView, title: "Default view", mode: "default" },
    { Icon: LeftSideBox, action: setLeftCameraView, title: "Left view", mode: "left" },
    { Icon: RightSideBox, action: setRightCameraView, title: "Right view", mode: "right" }
  ];

  const innerHtml = menuItems.map((item) => {
    return (
      <NavIcon
        active={viewType === item.mode}
        key={item.title}
        Icon={item.Icon}
        title={item.title}
        onClick={(): void => handleModeChange(item.action)}
        disabled={droneType !== "idle"}
      />
    );
  });

  return (
    <div className="group inline-flex">
      <NavIcon Icon={Icon} active title="Camera Perspectives" />
      <MenuDropdown>
        {innerHtml}
        <CameraMenu />
      </MenuDropdown>
    </div>
  );
}
