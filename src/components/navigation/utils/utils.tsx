import { ReactComponent as UtilsIcon } from "@assets/svg/utils.svg";

import AxisMenu from "@components/navigation/axis/AxisMenu.component";
import MenuDropdown from "@components/navigation/dropdown/MenuDropdown.component";
import GridMenu from "@components/navigation/grid/GridMenu.component";
import NavIcon from "@components/navigation/navIcon/navIcon";
import Screenshot from "@components/navigation/screenshot/screenshot";
import SnapMenu from "@components/navigation/snap/SnapMenu.component";
import StatsMenu from "@components/navigation/stats/StatsMenu.component";

export default function Utils(): JSX.Element {
  return (
    <div className="group inline-flex">
      <NavIcon Icon={UtilsIcon} title="Camera Perspectives" />
      <MenuDropdown>
        <StatsMenu />
        <AxisMenu />
        <GridMenu />
        <SnapMenu />
        <Screenshot />
      </MenuDropdown>
    </div>
  );
}
