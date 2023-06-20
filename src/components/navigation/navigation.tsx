import AboutMenu from "./about/AboutMenu.component";
import AxisMenu from "./axis/AxisMenu.component";
import CameraMenu from "./camera/CameraMenu.component";
import CameraViewMenu from "./cameraView/CameraViewMenu.component";
import DroneMenu from "./drone/DroneMenu.component";
import EventsMenu from "./events/EventsMenu.component";
import FullScreenMenu from "./fullscreen/FullScreenMenu.component";
import GeometryMenu from "./geometry/GeometryMenu.component";
import GeometryCutsMenu from "./geometryCuts/GeometryCutsMenu.component";
import GridMenu from "./grid/GridMenu.component";
import NavTitle from "./navTitle/navTitle.component";
import OpacirtyMenu from "./opacity/OpacityMenu.component";
import SnapMenu from "./snap/SnapMenu.component";
import StatsMenu from "./stats/StatsMenu.component";
import ThemeToggler from "./theme/ThemeToggler.component";
import WireframeMenu from "./wireframe/WireframeMenu.component";

export default function Navigation(): JSX.Element {
  return (
    <div className="fixed top-0 z-50 flex w-full flex-auto select-none select-none items-center justify-center">
      <nav className="flex w-auto items-center gap-2 overflow-x-auto rounded-sm bg-customGray py-2 pl-4 pr-4">
        <NavTitle />
        <GeometryMenu />
        <EventsMenu />
        <DroneMenu />
        <CameraViewMenu />
        <GeometryCutsMenu />
        <OpacirtyMenu />
        <WireframeMenu />
        <StatsMenu />
        <AxisMenu />
        <GridMenu />
        <CameraMenu />
        <ThemeToggler />
        <SnapMenu />
        <FullScreenMenu />
        <AboutMenu />
      </nav>
    </div>
  );
}
