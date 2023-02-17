import { ReactComponent as BoxIcon } from "../../assets/svg/box.svg";
import { ReactComponent as LeftSideBox } from "../../assets/svg/left-side-box.svg";
import { ReactComponent as RightSideBox } from "../../assets/svg/right-side-box.svg";

import MenuIcon from "./MenuIcon.component";
import MenuDropdown from "./MenuDropdown.component";

/**
 * Provides different views of the scene
 *
 * @returns {JSX.Element} ReactElement
 */
export default function CameraViewMenu(): JSX.Element {
  return (
    <div className="relative group">
      <MenuIcon Icon={BoxIcon} />
      <MenuDropdown>
        <MenuIcon Icon={BoxIcon} />
        <MenuIcon Icon={LeftSideBox} />
        <MenuIcon Icon={RightSideBox} />
      </MenuDropdown>
    </div>
  );
}
