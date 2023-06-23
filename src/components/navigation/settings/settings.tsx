import AboutMenu from "@/components/navigation/about/AboutMenu.component";
import ThemeToggler from "@/components/navigation/theme/ThemeToggler.component";
import { isDesktop } from "@/utils/isDesktop.utils";
import { supportsScreenRecording } from "@/utils/supportsScreenRecording.utils";

import { ReactComponent as SettingsIcon } from "@assets/svg/settings.svg";

import AxisMenu from "@components/navigation/axis/AxisMenu.component";
import MenuDropdown from "@components/navigation/dropdown/MenuDropdown.component";
import GridMenu from "@components/navigation/grid/GridMenu.component";
import NavIcon from "@components/navigation/navIcon/navIcon";
import RecordScreen from "@components/navigation/recordScreen/recordScreen";
import Screenshot from "@components/navigation/screenshot/screenshot";
import SnapMenu from "@components/navigation/snap/SnapMenu.component";
import StatsMenu from "@components/navigation/stats/StatsMenu.component";

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
            <AboutMenu />
          </>
        )}
      </MenuDropdown>
    </div>
  );
}
