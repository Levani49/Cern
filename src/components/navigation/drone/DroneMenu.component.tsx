import { useMemo } from "react";

import { ReactComponent as DollyZoomIcon } from "../../../assets/svg/zoom.svg";
import { ReactComponent as CircleIcon } from "../../../assets/svg/circle.svg";
import { ReactComponent as RocketIcon } from "../../../assets/svg/rocket.svg";
import { ReactComponent as DroneIcon } from "../../../assets/svg/drone.svg";
import { ReactComponent as HelixIcon } from "../../../assets/svg/helix.svg";
import { ReactComponent as FilmIcon } from "../../../assets/svg/film.svg";
import { ReactComponent as FlyIcon } from "../../../assets/svg/fly.svg";

import {
  setDroneMode,
  selectDroneState,
  setFlyModalState,
} from "../../../features/camera/cameraSlice";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import type { SVGIcon, DroneTypes } from "../../../types/app.types";

import MenuDropdown from "../dropdown/MenuDropdown.component";
import NavIcon from "../navIcon/navIcon";
import { isDesktop } from "../../../utils/isDesktop.utils";
interface MenuItem {
  Icon: SVGIcon;
  mode: DroneTypes;
  title: string;
}

export default function DroneMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentMode = useAppSelector(selectDroneState);
  const currentModeMemoized = useMemo(() => currentMode, [currentMode]);

  const isActive = currentModeMemoized !== "idle";

  const handleModeChange = (mode: DroneTypes): void => {
    if (currentModeMemoized === mode) {
      dispatch(setDroneMode("idle"));
    } else {
      if (mode === "fly") {
        dispatch(setFlyModalState(true));
      }
      dispatch(setDroneMode(mode));
    }
  };

  const menuItems: MenuItem[] = [
    { Icon: CircleIcon, mode: "circle", title: "Circle mode" },
    { Icon: HelixIcon, mode: "helix", title: "Helix mode" },
    { Icon: RocketIcon, mode: "rocket", title: "Rocket mode" },
    { Icon: DollyZoomIcon, mode: "zoom", title: "Zoom mode" },
    { Icon: FlyIcon, mode: "fly", title: "Fly mode" },
    { Icon: FilmIcon, mode: "z0", title: "Cinema mode" },
  ];

  const desktop = isDesktop();

  const innerHtml = menuItems.map((item: MenuItem) => {
    if (!desktop) {
      if (item.mode !== "fly") {
        return (
          <NavIcon
            key={item.mode}
            Icon={item.Icon}
            title={item.title}
            onClick={(): void => handleModeChange(item.mode)}
          />
        );
      }
    } else {
      return (
        <NavIcon
          key={item.mode}
          Icon={item.Icon}
          title={item.title}
          onClick={(): void => handleModeChange(item.mode)}
        />
      );
    }
  });

  return (
    <div className="inline-flex group">
      <NavIcon
        title="Camera modes"
        onClick={(): void => handleModeChange("idle")}
        Icon={DroneIcon}
        iconColor={`${isActive ? "text-red-500 animate-pulse" : ""}`}
      />
      <MenuDropdown>{innerHtml}</MenuDropdown>
    </div>
  );
}
