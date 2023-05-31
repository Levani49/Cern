import { ReactComponent as GlobeEuropeAfricaIcon } from '../../../assets/svg/globeIcon.svg';

import { selectGrid, showGrid } from '../../../features/global/globalsSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

import NavIcon from '../navIcon/navIcon.component';

export default function GridMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const active = useAppSelector(selectGrid);

  const handleToggle = (): void => {
    active ? dispatch(showGrid(false)) : dispatch(showGrid(true));
  };

  return (
    <NavIcon
      Icon={GlobeEuropeAfricaIcon}
      active={active}
      onClick={handleToggle}
      title="Toggle Ground Display"
    />
  );
}
