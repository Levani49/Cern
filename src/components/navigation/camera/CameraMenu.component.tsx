import { ReactComponent as VideoCameraIcon } from '../../../assets/svg/videoCameraIcon.svg';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectCameraType, setCameraType } from '../../../features/camera/cameraSlice';

import NavIcon from '../navIcon/navIcon.component';

export default function CameraMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const cameraType = useAppSelector(selectCameraType);

  const onClickHandler = (): void => {
    cameraType === 'perspective'
      ? dispatch(setCameraType('orthographic'))
      : dispatch(setCameraType('perspective'));
  };

  return (
    <NavIcon
      Icon={VideoCameraIcon}
      active={cameraType === 'orthographic'}
      onClick={onClickHandler}
      title="Switch Between 2D and 3D Perspectives"
    />
  );
}
