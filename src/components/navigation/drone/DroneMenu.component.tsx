import type { DroneTypes, SVGIcon } from "@type/app.types";

import { ReactComponent as CircleIcon } from "@assets/svg/circle.svg";
import { ReactComponent as DroneIcon } from "@assets/svg/drone.svg";
import { ReactComponent as FilmIcon } from "@assets/svg/film.svg";
import { ReactComponent as FlyIcon } from "@assets/svg/fly.svg";
import { ReactComponent as HelixIcon } from "@assets/svg/helix.svg";
import { ReactComponent as RocketIcon } from "@assets/svg/rocket.svg";
import { ReactComponent as DollyZoomIcon } from "@assets/svg/zoom.svg";

import { useAppDispatch } from "@store/hooks";

import { setParticleAnimationState } from "@features/global/globalsSlice";

import useDrone from "@hooks/useDrone/useDrone.hook";
import useEscapeKeydown from "@hooks/useEscapeKeydown/useEscapeKeydown.hook";

import { isMobile } from "@utils/isMobile.utils";

import MenuDropdown from "../dropdown/MenuDropdown.component";
import NavIcon from "../navIcon/navIcon";

interface MenuItem {
  Icon: SVGIcon;
  mode: DroneTypes;
  title: string;
}

export default function DroneMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const { currentMode, setDroneMode, setFlyModalState } = useDrone();

  useEscapeKeydown(() => dispatch(setDroneMode("idle")));

  const isActive = currentMode !== "idle";

  const handleModeChange = (mode: DroneTypes): void => {
    if (currentMode === mode) {
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
    { Icon: FilmIcon, mode: "z0", title: "Cinema mode" },
    { Icon: FlyIcon, mode: "fly", title: "Fly mode" }
  ];

  const isMobileDevice = isMobile();

  const innerHtml = menuItems.map((item: MenuItem) => {
    const isActive = currentMode !== "idle";

    if (isMobileDevice) {
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
          active={isActive && currentMode === item.mode}
          key={item.mode}
          Icon={item.Icon}
          title={item.title}
          onClick={(): void => handleModeChange(item.mode)}
        />
      );
    }
  });

  return (
    <div className="group relative inline-flex">
      <NavIcon
        title="Camera modes"
        onClick={(): void => handleModeChange("idle")}
        Icon={DroneIcon}
        iconClass={`${isActive ? "text-red-500 animate-pulse" : ""}`}
      />
      <MenuDropdown>{innerHtml}</MenuDropdown>
    </div>
  );
}
