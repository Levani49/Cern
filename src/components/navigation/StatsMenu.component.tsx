import { ChartBarIcon } from "@heroicons/react/24/solid";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectRendererStatsShow,
  showRendererStats,
} from "../../features/rendererSlice";

import MenuIcon from "./MenuIcon.component";

/**
 *
 */
export default function StatsMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const showRendererStatsMenu = useAppSelector(selectRendererStatsShow);

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
