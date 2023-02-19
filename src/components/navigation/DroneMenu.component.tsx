import { useMemo } from "react";

import { ReactComponent as DroneIcon } from "../../assets/svg/drone.svg";
import { ReactComponent as FlyIcon } from "../../assets/svg/fly.svg";
import { ReactComponent as CircleIcon } from "../../assets/svg/circle.svg";
import { ReactComponent as HelixIcon } from "../../assets/svg/helix.svg";
import { ReactComponent as DollyZoomIcon } from "../../assets/svg/zoom.svg";
import { ReactComponent as RocketIcon } from "../../assets/svg/rocket.svg";
import { ReactComponent as FilmIcon } from "../../assets/svg/film.svg";

import MenuIcon from "./MenuIcon.component";
import MenuDropdown from "./MenuDropdown.component";

import { droneMode, selectDroneState } from "../../features/droneSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import type { SVGIcon, DroneTypes } from "../../app/app.types";
import SvgIcon from "../SvgIcon.component";
import Button from "../Button.component";

interface MenuItem {
  Icon: SVGIcon;
  mode: DroneTypes;
}

/**
 * Provides Different drone modes
 *
 * @returns {JSX.Element} ReactElement
 */
export default function DroneMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentMode = useAppSelector(selectDroneState);
  const currentModeMemoized = useMemo(() => currentMode, [currentMode]);
  const isActive = currentModeMemoized !== "idle";

  /**
   *
   * @param mode
   */
  const handleModeChange = (mode: DroneTypes): void => {
    if (currentModeMemoized === mode) {
      dispatch(droneMode("idle"));
    } else {
      dispatch(droneMode(mode));
    }
  };

  const menuItems: MenuItem[] = [
    { Icon: CircleIcon, mode: "circle" },
    { Icon: HelixIcon, mode: "helix" },
    { Icon: DollyZoomIcon, mode: "zoom" },
    { Icon: RocketIcon, mode: "rocket" },
    { Icon: FlyIcon, mode: "fly" },
    { Icon: FilmIcon, mode: "z0" },
  ];

  return (
    <div className="inline-flex group">
      <Button>
        <SvgIcon className={`${isActive ? "text-red-500 animate-pulse" : ""}`} Icon={DroneIcon} />
      </Button>
      <MenuDropdown>
        {menuItems.map((item: MenuItem) => (
          <MenuIcon key={item.mode} Icon={item.Icon} onClick={(): void => handleModeChange(item.mode)} />
        ))}
      </MenuDropdown>
    </div>
  );
}
