import { GlobeEuropeAfricaIcon } from '@heroicons/react/24/outline';

import { selectGrid, showGrid } from '../../features/global/globalsSlice';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import MenuIcon from './MenuIcon.component';

export default function GridMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const active = useAppSelector(selectGrid);

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
