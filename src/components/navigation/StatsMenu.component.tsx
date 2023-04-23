import { useIntl } from 'react-intl';

import { ReactComponent as ChartBarIcon } from '../../assets/svg/chartBarIcon.svg';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectStats, showRendererStats } from '../../features/global/globalsSlice';

import MenuIcon from './MenuIcon.component';

export default function StatsMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const showRendererStatsMenu = useAppSelector(selectStats);

  const intl = useIntl();
  const title = intl.formatMessage({ id: 'navigation.stats.title' });
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
      title={title}
    />
  );
}
