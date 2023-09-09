import type { DroneTypes, SVGIcon } from "#/types/app.types";
import Icons from "#/utils/icons";
import { isMobile } from "#/utils/isMobile";
import { useAppDispatch } from "#/store/hooks";
import NavIcon from "#/components/navigation/NavIcon";
import useDrone from "#/hooks/useDrone.hook";
import useEscapeKeydown from "#/hooks/useEscapeKeydown.hook";

import MenuDropdown from "./MenuDropdown";

type MenuItem = {
  Icon: SVGIcon;
  mode: DroneTypes;
  title: string;
};

export default function DroneMenu() {
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
    { Icon: Icons.CircleIcon, mode: "circle", title: "Circle mode" },
    { Icon: Icons.HelixIcon, mode: "helix", title: "Helix mode" },
    { Icon: Icons.RocketIcon, mode: "rocket", title: "Rocket mode" },
    { Icon: Icons.FilmIcon, mode: "z0", title: "Cinema mode" },
    { Icon: Icons.DollyZoomIcon, mode: "zoom", title: "Zoom mode" },
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
        Icon={Icons.DroneIcon}
        iconClass={`${isActive ? "text-red-500 animate-pulse" : ""}`}
      />
      <MenuDropdown>{innerHtml}</MenuDropdown>
    </div>
  );
}
