import { lazy, Suspense } from "react";

import { ReactComponent as HorizontalLines } from "@assets/svg/horizontalLines.svg";

import AboutMenu from "@components/navigation/about/AboutMenu.component";
import MenuDropdown from "@components/navigation/dropdown/MenuDropdown.component";
import FullScreenMenu from "@components/navigation/fullscreen/FullScreenMenu.component";
import Link from "@components/navigation/link/link.component";
import NavIcon from "@components/navigation/navIcon/navIcon";
import Screenshot from "@components/navigation/screenshot/screenshot";
import SnapMenu from "@components/navigation/snap/SnapMenu.component";
import ThemeToggler from "@components/navigation/theme/ThemeToggler.component";

import { supportsScreenRecording } from "@utils/supportsScreenRecording.utils";

const RecordScreen = lazy(
  () => import("@components/navigation/recordScreen/recordScreen")
);

export default function Tools(): JSX.Element {
  return (
    <div className="group relative inline-flex">
      <NavIcon Icon={HorizontalLines} title="Tools" />
      <MenuDropdown className="flex-col sm:flex-row">
        <div className="flex items-center justify-center pt-1 sm:hidden">
          <ThemeToggler />
        </div>
        <Suspense fallback={null}>
          <SnapMenu />
          <Screenshot />
          {supportsScreenRecording() && <RecordScreen />}
        </Suspense>
        <div className="sm:hidden">
          <FullScreenMenu />
          <AboutMenu />
        </div>
        <Link />
      </MenuDropdown>
    </div>
  );
}
