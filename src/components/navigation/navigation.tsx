import Tools from "@/components/navigation/tools/tools";

import { useAppSelector } from "@store/hooks";

import { selectMenuBar } from "@features/global/globalsSlice";

import AboutMenu from "@components/navigation/about/AboutMenu.component";
import CameraViewMenu from "@components/navigation/cameraView/CameraViewMenu.component";
import DroneMenu from "@components/navigation/drone/DroneMenu.component";
import EventsMenu from "@components/navigation/events/EventsMenu.component";
import FullScreenMenu from "@components/navigation/fullscreen/FullScreenMenu.component";
import GeometryMenu from "@components/navigation/geometry/GeometryMenu.component";
import GeometryCutsMenu from "@components/navigation/geometryCuts/GeometryCutsMenu.component";
import NavigationBar from "@components/navigation/navigationBar/navigationToggler";
import NavTitle from "@components/navigation/navTitle/navTitle.component";
import OpacirtyMenu from "@components/navigation/opacity/OpacityMenu.component";
import Report from "@components/navigation/report/report";
import Settings from "@components/navigation/settings/settings";
import ShowMenuBar from "@components/navigation/showMenuBar/showMenuBar";
import ThemeToggler from "@components/navigation/theme/ThemeToggler.component";

export default function Navigation(): JSX.Element {
  const showMenuBar = useAppSelector(selectMenuBar);

  return (
    <>
      {showMenuBar && (
        <header className="fixed bottom-0 left-1/2 z-50 flex flex-auto -translate-x-1/2 transform  select-none flex-col items-center justify-center sm:bottom-auto sm:top-0">
          <nav className=" flex  w-full  items-center justify-center gap-2 rounded-sm  bg-dark1 py-2 pl-4 pr-4 sm:w-auto">
            <NavTitle />
            <NavigationBar />
            <GeometryMenu />
            <EventsMenu />
            <DroneMenu />
            <CameraViewMenu />
            <GeometryCutsMenu />
            <OpacirtyMenu />
            <Tools />
            <Settings />
            <Report />
            <div className="hidden items-center gap-2 sm:flex">
              <ThemeToggler />
              <FullScreenMenu />
              <AboutMenu />
            </div>
          </nav>
        </header>
      )}
      <ShowMenuBar />
    </>
  );
}
