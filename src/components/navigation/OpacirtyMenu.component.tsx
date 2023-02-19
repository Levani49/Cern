import { ReactComponent as WaterDropIcon } from "../../assets/svg/water-drop.svg";

import MenuDropdown from "./MenuDropdown.component";
import MenuIcon from "./MenuIcon.component";

/**
 * Provides functionality which controls opacity of geometries
 *
 * @returns {JSX.Element} ReactElemet
 */
export default function OpacirtyMenu(): JSX.Element {
  return (
    <div className="inline-flex group">
      <MenuIcon Icon={WaterDropIcon} />
      <MenuDropdown className="ml-[-50px] mt-8">
        <div className="w-auto flex justify-center items-center h-6 p-1">
          <input
            type="range"
            value="50"
            className="w-auto h-[3px] rounded-lg appearance-none cursor-pointer range-sm bg-gray-700"
          />
        </div>
      </MenuDropdown>
    </div>
  );
}
