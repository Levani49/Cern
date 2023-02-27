import { ReactComponent as MenuLogo } from "../../assets/svg/menu.svg";
import { ReactComponent as WireframeIcon } from "../../assets/svg/wireframe.svg";

import MenuIcon from "./MenuIcon.component";
import DroneMenu from "./DroneMenu.component";
import CameraViewMenu from "./CameraViewMenu.component";
import GeometryCutsMenu from "./GeometryCutsMenu.component";
import OpacirtyMenu from "./OpacirtyMenu.component";
import SettingsMenu from "./SettingsMenu.component";
import AboutMenu from "./AboutMenu.component";
import StatsMenu from "./StatsMenu.component";
import AxisMenu from "./AxisMenu.component";
import GridMenu from "./GridMenu.component";
import FullScreenMenu from "./FullScreenMenu.component";
import EventsMenu from "./EventsMenu.component";

/**
 * Renders a Navigation component that displays the app's navigation menu.
 *
 * @function
 * @name Navigation
 * @returns {JSX.Element} - A JSX element representing the Navigation component.
 */
export default function Navigation(): JSX.Element {
  return (
    <div className="flex flex-auto justify-center items-center fixed top-0 w-full select-none z-50 ">
      <nav className="flex items-center gap-2 w-auto overflow-x-auto rounded-sm bg-dark pt-2 pb-2 pl-4 pr-4">
        <div className="uppercase font-medium text-light cursor-pointer">
          <h1 className="tracking-widest text-lg select-none">
            <span className="text-blue">t</span>core
          </h1>
        </div>
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
        <SettingsMenu />
        <FullScreenMenu />
        <AboutMenu />
      </nav>
    </div>
  );
}
