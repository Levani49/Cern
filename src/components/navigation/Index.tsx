import { ReactComponent as MenuLogo } from "../../assets/svg/menu.svg";
import { ReactComponent as WireframeIcon } from "../../assets/svg/wireframe.svg";

import GeometryCutsMenu from "./GeometryCutsMenu.component";
import FullScreenMenu from "./FullScreenMenu.component";
import CameraViewMenu from "./CameraViewMenu.component";
import OpacirtyMenu from "./OpacirtyMenu.component";
import SettingsMenu from "./SettingsMenu.component";
import ThemeToggler from "./ThemeToggler.component";
import EventsMenu from "./EventsMenu.component";
import DroneMenu from "./DroneMenu.component";
import AboutMenu from "./AboutMenu.component";
import StatsMenu from "./StatsMenu.component";
import MenuIcon from "./MenuIcon.component";
import AxisMenu from "./AxisMenu.component";
import GridMenu from "./GridMenu.component";

/**
 * Renders a Navigation component that displays the app's navigation menu.
 *
 * @function
 * @name Navigation
 * @returns {JSX.Element} - A JSX element representing the Navigation component.
 */
export default function Navigation(): JSX.Element {
  return (
    <div className="flex flex-auto justify-center items-center fixed top-0 w-full select-none z-50 select-none">
      <nav className="flex items-center gap-2 w-auto overflow-x-auto rounded-sm bg-transparentDark dark:bg-gray py-2 pl-4 pr-4">
        <h1 className="text-light font-medium text-base">
          <span className="text-blue  dark:text-green text-lg">T</span>CORE
        </h1>
        <MenuIcon Icon={MenuLogo} title="Geometry menu" />
        <EventsMenu />
        <DroneMenu />
        <CameraViewMenu />
        <GeometryCutsMenu />
        <OpacirtyMenu />
        <MenuIcon Icon={WireframeIcon} title="Wireframe of geometry" />
        <StatsMenu />
        <AxisMenu />
        <GridMenu />
        <ThemeToggler />
        <SettingsMenu />
        <FullScreenMenu />
        <AboutMenu />
      </nav>
    </div>
  );
}
