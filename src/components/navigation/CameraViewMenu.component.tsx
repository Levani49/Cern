import { useIntl } from 'react-intl';
import { ReactComponent as BoxIcon } from '../../assets/svg/box.svg';
import { ReactComponent as LeftSideBox } from '../../assets/svg/left-side-box.svg';
import { ReactComponent as RightSideBox } from '../../assets/svg/right-side-box.svg';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectCameraViewMode,
  selectDroneState,
  setDefaultView,
  setLeftCameraView,
  setRightCameraView,
} from '../../features/camera/cameraSlice';

import MenuIcon from './MenuIcon.component';
import MenuDropdown from './MenuDropdown.component';

/**
 * Renders a CameraViewMenu component that displays a dropdown menu of camera view options.
 *
 * @function
 * @name CameraViewMenu
 * @returns {JSX.Element} - A JSX element representing the CameraViewMenu component.
 */
export default function CameraViewMenu(): JSX.Element {
  const dispatch = useAppDispatch();

  const { droneType, viewType } = useAppSelector((state) => ({
    droneType: selectDroneState(state),
    viewType: selectCameraViewMode(state),
  }));

  const intl = useIntl();
  const title = intl.formatMessage({ id: 'navigation.cameraViews.title' });

  const Icon =
    viewType === 'default'
      ? BoxIcon
      : viewType === 'left'
      ? LeftSideBox
      : viewType === 'right'
      ? RightSideBox
      : BoxIcon;

  const handlers = {
    default: setDefaultView,
    left: setLeftCameraView,
    right: setRightCameraView,
  };

  const innerHtml = Object.entries(handlers).map(([type, handler]) => {
    const onClickHandler = (): void => {
      dispatch(handler());
    };

    return (
      <MenuIcon
        key={type}
        Icon={
          type === 'default'
            ? BoxIcon
            : type === 'left'
            ? LeftSideBox
            : type === 'right'
            ? RightSideBox
            : BoxIcon
        }
        onClick={onClickHandler}
        disabled={droneType !== 'idle'}
      />
    );
  });

  return (
    <div className="inline-flex group">
      <MenuIcon Icon={Icon} active title={title} />
      <MenuDropdown>{innerHtml}</MenuDropdown>
    </div>
  );
}
