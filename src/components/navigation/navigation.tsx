import GeometryCutsMenu from './geometryCuts/GeometryCutsMenu.component';
import FullScreenMenu from './fullscreen/FullScreenMenu.component';
import CameraViewMenu from './cameraView/CameraViewMenu.component';
import OpacirtyMenu from './opacity/OpacityMenu.component';
import ThemeToggler from './theme/ThemeToggler.component';
import EventsMenu from './events/EventsMenu.component';
import DroneMenu from './drone/DroneMenu.component';
import AboutMenu from './about/AboutMenu.component';
import StatsMenu from './stats/StatsMenu.component';
import AxisMenu from './axis/AxisMenu.component';
import GridMenu from './grid/GridMenu.component';
import WireframeMenu from './wireframe/WireframeMenu.component';
import CameraMenu from './camera/CameraMenu.component';
import GeometryMenu from './geometry/GeometryMenu.component';
import SnapMenu from './snap/SnapMenu.component';
import NavTitle from './navTitle/navTitle.component';

export default function Navigation(): JSX.Element {
  return (
    <div className="flex flex-auto justify-center items-center fixed top-0 w-full select-none z-50 select-none">
      <nav className="flex items-center gap-2 w-auto overflow-x-auto rounded-sm bg-gray py-2 pl-4 pr-4">
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
