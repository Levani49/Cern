import { useAppSelector } from "@store/hooks";

import { selectMenuBar } from "@features/global/globalsSlice";

import AboutMenu from "@components/navigation/about/AboutMenu.component";
import CameraViewMenu from "@components/navigation/cameraView/CameraViewMenu.component";
import DroneMenu from "@components/navigation/drone/DroneMenu.component";
import EventsMenu from "@components/navigation/events/EventsMenu.component";
import FullScreenMenu from "@components/navigation/fullscreen/FullScreenMenu.component";
import GeometryMenu from "@components/navigation/geometry/GeometryMenu.component";
import GeometryCutsMenu from "@components/navigation/geometryCuts/GeometryCutsMenu.component";
import Link from "@components/navigation/link/link.component";
import NavigationBar from "@components/navigation/navigationBar/navigationToggler";
import NavTitle from "@components/navigation/navTitle/navTitle.component";
import OpacirtyMenu from "@components/navigation/opacity/OpacityMenu.component";
import Settings from "@components/navigation/settings/settings";
import ShowMenuBar from "@components/navigation/showMenuBar/showMenuBar";
import ThemeToggler from "@components/navigation/theme/ThemeToggler.component";
import WireframeMenu from "@components/navigation/wireframe/WireframeMenu.component";

import { isMobile } from "@utils/isMobile.utils";

export default function Navigation(): JSX.Element {
  const showMenuBar = useAppSelector(selectMenuBar);

  return (
    <div className="fixed top-0 z-50 flex w-full flex-auto select-none flex-col items-center justify-center">
      {showMenuBar && (
        <nav className="flex w-auto items-center gap-2  rounded-sm bg-customGray py-2 pl-4 pr-4">
          <NavTitle />
          <NavigationBar />
          <GeometryMenu />
          <EventsMenu />
          <DroneMenu />
          <CameraViewMenu />
          <GeometryCutsMenu />
          <OpacirtyMenu />
          <WireframeMenu />
          <Settings />
          {!isMobile() && (
            <>
              <ThemeToggler />
              <FullScreenMenu />
              <Link />
              <AboutMenu />
            </>
          )}
        </nav>
      )}
      <ShowMenuBar />
    </div>
  );
}
