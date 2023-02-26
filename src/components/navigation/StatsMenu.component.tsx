import { ChartBarIcon } from "@heroicons/react/24/solid";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectRendererStatsState,
  showRendererStats,
} from "../../features/rendererSlice";

import MenuIcon from "./MenuIcon.component";

/**
 *
 */
export default function StatsMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const showRendererStatsMenu = useAppSelector(selectRendererStatsState);

  /**
   *
   */
  const toggleRendererStatsMenu = (): void => {
    dispatch(showRendererStats(!showRendererStatsMenu));
  };

  return (
    <MenuIcon
      Icon={ChartBarIcon}
      active={showRendererStatsMenu}
      onClick={toggleRendererStatsMenu}
    />
  );
}
