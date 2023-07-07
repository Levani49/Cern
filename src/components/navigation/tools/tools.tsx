import { lazy, Suspense } from "react";

import { ReactComponent as HorizontalLines } from "@assets/svg/horizontalLines.svg";

import MenuDropdown from "@components/navigation/dropdown/MenuDropdown.component";
import Link from "@components/navigation/link/link.component";
import NavIcon from "@components/navigation/navIcon/navIcon";
import SnapMenu from "@components/navigation/snap/SnapMenu.component";

import { supportsScreenRecording } from "@utils/supportsScreenRecording.utils";

const Screenshot = lazy(
  () => import("@components/navigation/screenshot/screenshot")
);

const RecordScreen = lazy(
  () => import("@components/navigation/recordScreen/recordScreen")
);

export default function Tools(): JSX.Element {
  return (
    <div className="group relative inline-flex">
      <NavIcon Icon={HorizontalLines} title="Tools" />
      <MenuDropdown className="flex-col sm:flex-row">
        <Suspense fallback={null}>
          <SnapMenu />
          <Screenshot />
          {supportsScreenRecording() && <RecordScreen />}
        </Suspense>
        <Link />
      </MenuDropdown>
    </div>
  );
}
