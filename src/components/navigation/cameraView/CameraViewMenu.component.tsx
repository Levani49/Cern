import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";

import { ReactComponent as EyeIcon } from "@assets/svg/eye.svg";
import { ReactComponent as FrontSideBox } from "@assets/svg/front-side-box.svg";
import { ReactComponent as IsoBox } from "@assets/svg/isoBox.svg";
import { ReactComponent as LeftSideBox } from "@assets/svg/left-side-box.svg";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import {
  selectCameraViewMode,
  setFrontView,
  setIsoView,
  setLeftCameraView
} from "@features/camera/cameraSlice";

import CameraMenu from "@components/navigation/camera/CameraMenu.component";

import useDrone from "@hooks/useDrone/useDrone.hook";

import MenuDropdown from "../dropdown/MenuDropdown.component";
import NavIcon from "../navIcon/navIcon";

export default function CameraViewMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const viewType = useAppSelector(selectCameraViewMode);
  const { currentMode } = useDrone();

  const handleModeChange = (handler: ActionCreatorWithoutPayload): void => {
    dispatch(handler());
  };

  const menuItems = [
    {
      Icon: IsoBox,
      action: setIsoView,
      title: "Iso view",
      mode: "default"
    },
    {
      Icon: LeftSideBox,
      action: setLeftCameraView,
      title: "Left view",
      mode: "left"
    },
    {
      Icon: FrontSideBox,
      action: setFrontView,
      title: "Front view",
      mode: "right"
    }
  ];

  const innerHtml = menuItems.map((item) => {
    return (
      <NavIcon
        active={viewType === item.mode}
        key={item.title}
        Icon={item.Icon}
        title={item.title}
        onClick={(): void => handleModeChange(item.action)}
        disabled={currentMode !== "idle"}
      />
    );
  });

  return (
    <div className="group inline-flex">
      <NavIcon Icon={EyeIcon} active title="View options" />
      <MenuDropdown>
        {innerHtml}
        <CameraMenu />
      </MenuDropdown>
    </div>
  );
}
