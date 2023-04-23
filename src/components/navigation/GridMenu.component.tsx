import { useIntl } from 'react-intl';

import { ReactComponent as GlobeEuropeAfricaIcon } from '../../assets/svg/globeIcon.svg';

import { selectGrid, showGrid } from '../../features/global/globalsSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import MenuIcon from './MenuIcon.component';

export default function GridMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const active = useAppSelector(selectGrid);

  const intl = useIntl();
  const title = intl.formatMessage({ id: 'navigation.ground.title' });

  /**
   *
   */
  const handleToggle = (): void => {
    active ? dispatch(showGrid(false)) : dispatch(showGrid(true));
  };

  return (
    <MenuIcon Icon={GlobeEuropeAfricaIcon} active={active} onClick={handleToggle} title={title} />
  );
}
