import { useState } from 'react';
import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline';

import MenuIcon from './MenuIcon.component';

export default function FullScreenMenu(): JSX.Element {
  const [active, setActive] = useState<boolean>(false);
  /**
   *
   */
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
      title="Enter in fullscreen"
      onClick={handleFullScreen}
    />
  );
}
