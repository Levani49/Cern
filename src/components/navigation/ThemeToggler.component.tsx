import { useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectTheme, setDarkMode } from '../../features/global/globalsSlice';

/**
 *
 */
export default function ThemeToggler(): JSX.Element {
  const dispatch = useAppDispatch();
  const prefersDarkMode = useAppSelector(selectTheme);
  const [isSun, setIsSun] = useState(!prefersDarkMode);

  /**
   *
   */
  const handleClick = (): void => {
    setIsSun((prevState) => !prevState);
    dispatch(setDarkMode(!prefersDarkMode));
  };

  return (
    <button className="focus:outline-none" onClick={handleClick} title="Theme switcher">
      {isSun ? <MoonIcon className="icon" /> : <SunIcon className="icon" />}
    </button>
  );
}
