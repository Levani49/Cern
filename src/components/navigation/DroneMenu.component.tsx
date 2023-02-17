import { ReactComponent as DroneIcon } from "../../assets/svg/drone.svg";
import { ReactComponent as FlyIcon } from "../../assets/svg/fly.svg";
import { ReactComponent as CircleIcon } from "../../assets/svg/circle.svg";
import { ReactComponent as HelixIcon } from "../../assets/svg/helix.svg";
import { ReactComponent as DollyZoomIcon } from "../../assets/svg/zoom.svg";
import { ReactComponent as RocketIcon } from "../../assets/svg/rocket.svg";
import { ReactComponent as FilmIcon } from "../../assets/svg/film.svg";

import MenuIcon from "./MenuIcon.component";
import MenuDropdown from "./MenuDropdown.component";

/**
 * Provides Different drone modes
 *
 * @returns {JSX.Element} ReactElement
 */
export default function DroneMenu(): JSX.Element {
  return (
    <div className="relative group">
      <MenuIcon Icon={DroneIcon} />
      <MenuDropdown>
        <MenuIcon Icon={FlyIcon} />
        <MenuIcon Icon={CircleIcon} />
        <MenuIcon Icon={HelixIcon} />
        <MenuIcon Icon={DollyZoomIcon} />
        <MenuIcon Icon={RocketIcon} />
        <MenuIcon Icon={FilmIcon} />
      </MenuDropdown>
    </div>
  );
}
