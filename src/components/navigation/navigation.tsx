import { selectMenuBar } from "#/store/features/globalsSlice";
import { useAppSelector } from "#/store/hooks";
import AboutMenu from "#/components/navigation/AboutMenu";
import CameraViewMenu from "#/components/navigation/CameraViewMenu";
import DroneMenu from "#/components/navigation/DroneMenu";
import EventsMenu from "#/components/navigation/EventsMenu";
import FullScreenMenu from "#/components/navigation/FullScreenMenu";
import GeometryCutsMenu from "#/components/navigation/GeometryCutsMenu";
import GeometryMenu from "#/components/navigation/GeometryMenu";
import NavigationBar from "#/components/navigation/NavigationToggler";
import NavTitle from "#/components/navigation/NavTitle";
import OpacityMenu from "#/components/navigation/OpacityMenu";
import Report from "#/components/navigation/Report";
import Settings from "#/components/navigation/Settings";
import ShowMenuBar from "#/components/navigation/ShowMenuBar";
import ThemeToggler from "#/components/navigation/ThemeToggler";
import Tools from "#/components/navigation/Tools";

export default function Navigation() {
  const showMenuBar = useAppSelector(selectMenuBar);

  return (
    <>
      {showMenuBar && (
        <header className="fixed bottom-0 left-1/2 z-50 flex flex-auto -translate-x-1/2 transform  select-none flex-col items-center justify-center sm:bottom-auto sm:top-0">
          <nav className=" flex  w-full  items-center justify-center gap-2 rounded-sm  bg-dark1 py-2 pl-4 pr-4 sm:w-auto">
            <NavTitle />
            <NavigationBar />
            <GeometryMenu />
            <DroneMenu />
            <CameraViewMenu />
            <GeometryCutsMenu />
            <OpacityMenu />
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
