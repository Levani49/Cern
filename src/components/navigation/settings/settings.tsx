import { ReactComponent as SettingsIcon } from "@assets/svg/settings.svg";

import AboutMenu from "@components/navigation/about/AboutMenu.component";
import AxisMenu from "@components/navigation/axis/AxisMenu.component";
import MenuDropdown from "@components/navigation/dropdown/MenuDropdown.component";
import FullScreenMenu from "@components/navigation/fullscreen/FullScreenMenu.component";
import GridMenu from "@components/navigation/grid/GridMenu.component";
import NavIcon from "@components/navigation/navIcon/navIcon";
import StatsMenu from "@components/navigation/stats/StatsMenu.component";
import ThemeToggler from "@components/navigation/theme/ThemeToggler.component";

export default function Utils(): JSX.Element {
  return (
    <div className="group relative inline-flex">
      <NavIcon Icon={SettingsIcon} title="Settings" />
      <MenuDropdown className="flex-col sm:flex-row">
        <StatsMenu />
        <AxisMenu />
        <GridMenu />
        <div className="flex flex-col sm:hidden">
          <FullScreenMenu />
          <ThemeToggler />
          <AboutMenu />
        </div>
      </MenuDropdown>
    </div>
  );
}
