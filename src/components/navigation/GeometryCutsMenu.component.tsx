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
      <MenuIcon
        Icon={StairsIcon}
        title="Provides different type of cuts for geometry"
      />
      <MenuDropdown>
        <MenuIcon Icon={LeftWallIcon} title="1'st cut" />
        <MenuIcon Icon={RightWallIcon} title="2'st cut" />
        <MenuIcon Icon={StairsIcon} title="3'st cut" />
        <MenuIcon Icon={GeometryCoreIcon} title="full cut" />
        <MenuIcon Icon={ScissorIcon} title="Cutom cut" />
      </MenuDropdown>
    </div>
  );
}
