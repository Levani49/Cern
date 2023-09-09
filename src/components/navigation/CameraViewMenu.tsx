import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";

import Icons from "#/utils/icons";
import {
  setBackView,
  setBottomView,
  setFrontView,
  setIsoView,
  setLeftCameraView,
  setRightView,
  setStopCameraView,
  setTopView,
} from "#/store/features/cameraSlice";
import { useAppDispatch } from "#/store/hooks";
import CameraMenu from "#/components/navigation/CameraMenu";
import NavIcon from "#/components/navigation/NavIcon";
import useDrone from "#/hooks/useDrone.hook";
import useEscapeKeydown from "#/hooks/useEscapeKeydown.hook";

import MenuDropdown from "./MenuDropdown";

export default function CameraViewMenu() {
  const dispatch = useAppDispatch();
  const { currentMode, setDroneMode } = useDrone();

  const handleModeChange = (handler: ActionCreatorWithoutPayload): void => {
    if (currentMode !== "idle") {
      dispatch(setDroneMode("idle"));
    }

    dispatch(handler());
  };

  useEscapeKeydown((): void => {
    dispatch(setStopCameraView());
  });

  const menuItems = [
    {
      Icon: Icons.TopViewIcon,
      action: setTopView,
      title: "Top view",
      mode: "top",
    },
    {
      Icon: Icons.LeftSideBox,
      action: setLeftCameraView,
      title: "Left view",
      mode: "left",
    },
    {
      Icon: Icons.IsoBox,
      action: setIsoView,
      title: "Iso view",
      mode: "default",
    },
    {
      Icon: Icons.FrontSideBox,
      action: setFrontView,
      title: "Front view",
      mode: "front",
    },
    {
      Icon: Icons.RightIcon,
      action: setRightView,
      title: "Right view",
      mode: "right",
    },
    {
      Icon: Icons.BackViewIcon,
      action: setBackView,
      title: "Back view",
      mode: "back",
    },
    {
      Icon: Icons.BottomViewIcon,
      action: setBottomView,
      title: "Bottom view",
      mode: "bottom",
    },
  ];

  const innerHtml = menuItems.map((item) => {
    return (
      <NavIcon
        key={item.title}
        Icon={item.Icon}
        title={item.title}
        onClick={(): void => handleModeChange(item.action)}
      />
    );
  });

  return (
    <div className="group relative inline-flex">
      <NavIcon Icon={Icons.EyeIcon} title="View options" />
      <MenuDropdown>
        {innerHtml}
        <CameraMenu />
      </MenuDropdown>
    </div>
  );
}
