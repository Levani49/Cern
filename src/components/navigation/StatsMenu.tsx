import Icons from "#/utils/icons";
import { selectStats, showRendererStats } from "#/store/features/globalsSlice";
import { useAppDispatch, useAppSelector } from "#/store/hooks";
import NavIcon from "#/components/navigation/NavIcon";

export default function StatsMenu() {
  const dispatch = useAppDispatch();
  const showRendererStatsMenu = useAppSelector(selectStats);

  const toggleRendererStatsMenu = (): void => {
    dispatch(showRendererStats(!showRendererStatsMenu));
  };

  return (
    <NavIcon
      className="hidden sm:block"
      Icon={Icons.ChartBarIcon}
      active={showRendererStatsMenu}
      onClick={toggleRendererStatsMenu}
      title="Application Performance Stats"
    />
  );
}
