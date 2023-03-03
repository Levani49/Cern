import { GlobeEuropeAfricaIcon } from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectRendererGridState,
  showGrid,
} from "../../features/rendererSlice";
import MenuIcon from "./MenuIcon.component";

/**
 *
 */
export default function GridMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const active = useAppSelector(selectRendererGridState);

  /**
   *
   */
  const handleToggle = (): void => {
    active ? dispatch(showGrid(false)) : dispatch(showGrid(true));
  };

  return (
    <MenuIcon
      Icon={GlobeEuropeAfricaIcon}
      active={active}
      onClick={handleToggle}
      title="Toggles ground visibility"
    />
  );
}
