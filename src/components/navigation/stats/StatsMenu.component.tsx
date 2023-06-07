import { ReactComponent as ChartBarIcon } from "../../../assets/svg/chartBarIcon.svg";
import {
  selectStats,
  showRendererStats
} from "../../../features/global/globalsSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import NavIcon from "../navIcon/navIcon";

export default function StatsMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const showRendererStatsMenu = useAppSelector(selectStats);

  const toggleRendererStatsMenu = (): void => {
    dispatch(showRendererStats(!showRendererStatsMenu));
  };

  return (
    <NavIcon
      Icon={ChartBarIcon}
      active={showRendererStatsMenu}
      onClick={toggleRendererStatsMenu}
      title="Application Performance Stats"
    />
  );
}
