import { lazy, Suspense } from "react";

import FullScreenMenu from "@/components/navigation/fullscreen/FullScreenMenu.component";

import { ReactComponent as SettingsIcon } from "@assets/svg/settings.svg";

import AboutMenu from "@components/navigation/about/AboutMenu.component";
import AxisMenu from "@components/navigation/axis/AxisMenu.component";
import MenuDropdown from "@components/navigation/dropdown/MenuDropdown.component";
import GridMenu from "@components/navigation/grid/GridMenu.component";
import Link from "@components/navigation/link/link.component";
import NavIcon from "@components/navigation/navIcon/navIcon";
import SnapMenu from "@components/navigation/snap/SnapMenu.component";
import StatsMenu from "@components/navigation/stats/StatsMenu.component";
import ThemeToggler from "@components/navigation/theme/ThemeToggler.component";

import { supportsScreenRecording } from "@utils/supportsScreenRecording.utils";

const Screenshot = lazy(
  () => import("@components/navigation/screenshot/screenshot")
);

const RecordScreen = lazy(
  () => import("@components/navigation/recordScreen/recordScreen")
);

export default function Utils(): JSX.Element {
  return (
    <div className="group relative inline-flex">
      <NavIcon Icon={SettingsIcon} title="Settings" />
      <MenuDropdown className="flex-col sm:flex-row">
        <StatsMenu />
        <AxisMenu />
        <GridMenu />
        <SnapMenu />
        <Suspense fallback={null}>
          <Screenshot />
          {supportsScreenRecording() && <RecordScreen />}
        </Suspense>
        <div className="flex flex-col sm:hidden">
          <FullScreenMenu />
          <ThemeToggler />
          <Link />
          <AboutMenu />
        </div>
      </MenuDropdown>
    </div>
  );
}
