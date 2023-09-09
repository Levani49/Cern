import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";

import { ReactComponent as BackViewIcon } from "#/assets/svg/back-side.svg";
import { ReactComponent as BottomViewIcon } from "#/assets/svg/bottom-view.svg";
import { ReactComponent as EyeIcon } from "#/assets/svg/eye.svg";
import { ReactComponent as FrontSideBox } from "#/assets/svg/front-side-box.svg";
import { ReactComponent as IsoBox } from "#/assets/svg/isoBox.svg";
import { ReactComponent as LeftSideBox } from "#/assets/svg/left-side-box.svg";
import { ReactComponent as RightIcon } from "#/assets/svg/rightSide.svg";
import { ReactComponent as TopViewIcon } from "#/assets/svg/top-view.svg";
import { useAppDispatch } from "#/store/hooks";
import {
  setBackView,
  setBottomView,
  setFrontView,
  setIsoView,
  setLeftCameraView,
  setRightView,
  setStopCameraView,
  setTopView,
} from "#/features/camera/cameraSlice";
import CameraMenu from "#/components/navigation/camera/CameraMenu.component";
import WireframeMenu from "#/components/navigation/wireframe/WireframeMenu.component";
import useDrone from "#/hooks/useDrone/useDrone.hook";
import useEscapeKeydown from "#/hooks/useEscapeKeydown/useEscapeKeydown.hook";

import MenuDropdown from "../dropdown/MenuDropdown.component";
import NavIcon from "../navIcon/navIcon";

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
      Icon: TopViewIcon,
      action: setTopView,
      title: "Top view",
      mode: "top",
    },
    {
      Icon: LeftSideBox,
      action: setLeftCameraView,
      title: "Left view",
      mode: "left",
    },
    {
      Icon: IsoBox,
      action: setIsoView,
      title: "Iso view",
      mode: "default",
    },
    {
      Icon: FrontSideBox,
      action: setFrontView,
      title: "Front view",
      mode: "front",
    },
    {
      Icon: RightIcon,
      action: setRightView,
      title: "Right view",
      mode: "right",
    },
    {
      Icon: BackViewIcon,
      action: setBackView,
      title: "Back view",
      mode: "back",
    },
    {
      Icon: BottomViewIcon,
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
      <NavIcon Icon={EyeIcon} title="View options" />
      <MenuDropdown>
        {innerHtml}
        <CameraMenu />
        <WireframeMenu />
      </MenuDropdown>
    </div>
  );
}
