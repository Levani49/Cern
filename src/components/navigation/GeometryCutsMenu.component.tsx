import { ReactComponent as ScissorIcon } from "../../assets/svg/scissor.svg";
import { ReactComponent as LeftWallIcon } from "../../assets/svg/left-wall.svg";
import { ReactComponent as RightWallIcon } from "../../assets/svg/right-wall.svg";
import { ReactComponent as StairsIcon } from "../../assets/svg/stairs.svg";
import { ReactComponent as GeometryCoreIcon } from "../../assets/svg/geometry-core.svg";

import MenuIcon from "./MenuIcon.component";
import MenuDropdown from "./MenuDropdown.component";

/**
 * Renders a GeometryCutsMenu component that displays a dropdown menu of geometry cut options.
 *
 * @function
 * @name GeometryCutsMenu
 * @returns {JSX.Element} - A JSX element representing the GeometryCutsMenu component.
 */
export default function GeometryCutsMenu(): JSX.Element {
  return (
    <div className="inline-flex group">
      <MenuIcon Icon={ScissorIcon} />
      <MenuDropdown>
        <MenuIcon Icon={LeftWallIcon} />
        <MenuIcon Icon={RightWallIcon} />
        <MenuIcon Icon={StairsIcon} />
        <MenuIcon Icon={GeometryCoreIcon} />
        <MenuIcon Icon={ScissorIcon} />
      </MenuDropdown>
    </div>
  );
}
