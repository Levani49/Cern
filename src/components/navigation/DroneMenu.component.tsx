import { useMemo } from "react";

import { ReactComponent as DollyZoomIcon } from "../../assets/svg/zoom.svg";
import { ReactComponent as CircleIcon } from "../../assets/svg/circle.svg";
import { ReactComponent as RocketIcon } from "../../assets/svg/rocket.svg";
import { ReactComponent as DroneIcon } from "../../assets/svg/drone.svg";
import { ReactComponent as HelixIcon } from "../../assets/svg/helix.svg";
import { ReactComponent as FilmIcon } from "../../assets/svg/film.svg";
import { ReactComponent as FlyIcon } from "../../assets/svg/fly.svg";

import MenuDropdown from "./MenuDropdown.component";
import MenuIcon from "./MenuIcon.component";
import SvgIcon from "../SvgIcon.component";
import Button from "../Button.component";

import {
  setDroneMode,
  selectDroneState,
  setFlyModalState,
} from "../../features/cameraSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import type { SVGIcon, DroneTypes } from "../../app/app.types";

interface MenuItem {
  Icon: SVGIcon;
  mode: DroneTypes;
}

/**
 * Renders a DroneMenu component that displays a dropdown menu of drone modes.
 *
 * @function
 * @name DroneMenu
 * @returns {JSX.Element} - A JSX element representing the DroneMenu component.
 */
export default function DroneMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentMode = useAppSelector(selectDroneState);
  const currentModeMemoized = useMemo(() => currentMode, [currentMode]);
  const isActive = currentModeMemoized !== "idle";

  /**
   
   * Event handler for changing the drone mode.
   *
   * @function
   * @name handleModeChange
   * @param {DroneTypes} mode - The drone mode to change to.
   * @returns {void}
   */
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
    { Icon: CircleIcon, mode: "circle" },
    { Icon: HelixIcon, mode: "helix" },
    { Icon: RocketIcon, mode: "rocket" },
    { Icon: DollyZoomIcon, mode: "zoom" },
    { Icon: FlyIcon, mode: "fly" },
    { Icon: FilmIcon, mode: "z0" },
  ];

  const innerHtml = menuItems.map((item: MenuItem) => (
    <MenuIcon
      key={item.mode}
      Icon={item.Icon}
      onClick={(): void => handleModeChange(item.mode)}
    />
  ));

  return (
    <div className="inline-flex group">
      <Button onClick={(): void => handleModeChange("idle")}>
        <SvgIcon
          className={`${isActive ? "text-red-500 animate-pulse" : ""}`}
          Icon={DroneIcon}
        />
      </Button>
      <MenuDropdown>{innerHtml}</MenuDropdown>
    </div>
  );
}
