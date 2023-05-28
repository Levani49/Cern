import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ReactComponent as MenuLogo } from '../../assets/svg/menu.svg';
import { selectGeometryMenu, setGeometryMenu } from '../../features/global/globalsSlice';

import MenuIcon from './MenuIcon.component';

export default function GeometryMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const showGeometryMenu = useAppSelector(selectGeometryMenu);

  const handleClick = (): void => {
    dispatch(setGeometryMenu(!showGeometryMenu));
  };

  return (
    <MenuIcon
      Icon={MenuLogo}
      title="Geometry menu"
      onClick={handleClick}
      active={showGeometryMenu}
    />
  );
}
