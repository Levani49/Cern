import { lazy, Suspense } from "react";

import Icons from "#/utils/icons";
import { supportsScreenRecording } from "#/utils/supportsScreenRecording";
import AboutMenu from "#/components/navigation/AboutMenu";
import FullScreenMenu from "#/components/navigation/FullScreenMenu";
import Link from "#/components/navigation/Link.component";
import MenuDropdown from "#/components/navigation/MenuDropdown";
import NavIcon from "#/components/navigation/NavIcon";
import Screenshot from "#/components/navigation/Screenshot";
import SnapMenu from "#/components/navigation/SnapMenu";
import ThemeToggler from "#/components/navigation/ThemeToggler";

const RecordScreen = lazy(() => import("#/components/navigation/RecordScreen"));

export default function Tools() {
  return (
    <div className="group relative inline-flex">
      <NavIcon Icon={Icons.HorizontalLines} title="Tools" />
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
