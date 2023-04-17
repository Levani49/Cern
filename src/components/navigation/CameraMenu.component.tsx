import { useIntl } from 'react-intl';

import { VideoCameraIcon } from '@heroicons/react/24/outline';

import MenuIcon from './MenuIcon.component';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectCameraType,
  setCameraType,
} from '../../features/camera/cameraSlice';

export default function CameraMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const cameraType = useAppSelector(selectCameraType);

  const intl = useIntl();
  const title = intl.formatMessage({ id: 'navigation.camera.title' });

  const onClickHandler = (): void => {
    cameraType === 'perspective'
      ? dispatch(setCameraType('orthographic'))
      : dispatch(setCameraType('perspective'));
  };

  return (
    <MenuIcon
      Icon={VideoCameraIcon}
      active={cameraType === 'orthographic'}
      onClick={onClickHandler}
      title={title}
    />
  );
}
