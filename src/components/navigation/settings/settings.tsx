import { ReactComponent as SettingsIcon } from "@assets/svg/settings.svg";

import AboutMenu from "@components/navigation/about/AboutMenu.component";
import AxisMenu from "@components/navigation/axis/AxisMenu.component";
import MenuDropdown from "@components/navigation/dropdown/MenuDropdown.component";
import GridMenu from "@components/navigation/grid/GridMenu.component";
import Link from "@components/navigation/link/link.component";
import NavIcon from "@components/navigation/navIcon/navIcon";
import RecordScreen from "@components/navigation/recordScreen/recordScreen";
import Screenshot from "@components/navigation/screenshot/screenshot";
import SnapMenu from "@components/navigation/snap/SnapMenu.component";
import StatsMenu from "@components/navigation/stats/StatsMenu.component";
import ThemeToggler from "@components/navigation/theme/ThemeToggler.component";

import { isDesktop } from "@utils/isDesktop.utils";
import { supportsScreenRecording } from "@utils/supportsScreenRecording.utils";

export default function Utils(): JSX.Element {
  return (
    <div className="group inline-flex">
      <NavIcon Icon={SettingsIcon} title="Settings" />
      <MenuDropdown>
        <StatsMenu />
        <AxisMenu />
        <GridMenu />
        <SnapMenu />
        <Screenshot />
        {supportsScreenRecording() && <RecordScreen />}

        {!isDesktop() && (
          <>
            <ThemeToggler />
            <Link />
            <AboutMenu />
          </>
        )}
      </MenuDropdown>
    </div>
  );
}
