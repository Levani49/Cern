import { ReactComponent as AxisIcon } from '../../assets/svg/axis.svg';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectAxis, showAxis } from '../../features/global/globalsSlice';

import MenuIcon from './MenuIcon.component';

/**
 *
 */
export default function AxisMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectAxis);

  /**
   *
   */
  const toggler = (): void => {
    show ? dispatch(showAxis(false)) : dispatch(showAxis(true));
  };

  return <MenuIcon Icon={AxisIcon} active={show} onClick={toggler} title="Toggle Axis" />;
}
