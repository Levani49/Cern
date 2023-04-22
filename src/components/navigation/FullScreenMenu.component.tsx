import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline';

import MenuIcon from './MenuIcon.component';
import { useAppSelector } from '../../app/hooks';
import { selectDroneState } from '../../features/camera/cameraSlice';

export default function FullScreenMenu(): JSX.Element {
  const [active, setActive] = useState<boolean>(false);
  const intl = useIntl();
  const droneMode = useAppSelector(selectDroneState);

  useEffect(() => {
    const exitFullScreen = (): void => {
      if (!document.fullscreenElement) {
        setActive(false);
      }
    };

    document.addEventListener('fullscreenchange', exitFullScreen);
    return () => document.removeEventListener('fullscreenchange', exitFullScreen);
  }, []);

  const title = intl.formatMessage({ id: 'navigation.fullscreen.title' });

  const handleFullScreen = (): void => {
    const element = document.getElementById('fullscreen') as HTMLDivElement;

    if (!document.fullscreenElement) {
      element.requestFullscreen();
      setActive(true);
    } else {
      document.exitFullscreen();
      setActive(false);
    }
  };

  return (
    <MenuIcon
      active={active}
      Icon={ArrowsPointingOutIcon}
      title={title}
      onClick={handleFullScreen}
      disabled={droneMode === 'fly'}
    />
  );
}
