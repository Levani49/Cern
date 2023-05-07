import { useState } from 'react';
import { useIntl } from 'react-intl';

import { ReactComponent as MoonIcon } from '../../assets/svg/moon.svg';
import { ReactComponent as SunIcon } from '../../assets/svg/sun.svg';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectTheme, setDarkMode } from '../../features/global/globalsSlice';

export default function ThemeToggler(): JSX.Element {
  const dispatch = useAppDispatch();
  const prefersDarkMode = useAppSelector(selectTheme);
  const [isSun, setIsSun] = useState(!prefersDarkMode);

  const intl = useIntl();
  const title = intl.formatMessage({ id: 'navigation.theme.title' });

  const handleClick = (): void => {
    setIsSun((prevState) => !prevState);
    dispatch(setDarkMode(!prefersDarkMode));
  };

  isSun
    ? (document.body.style.background = 'rgb(171, 171, 171)')
    : (document.body.style.background = 'rgb(28, 28, 28)');

  return (
    <button className="focus:outline-none" onClick={handleClick} title={title}>
      {isSun ? <MoonIcon className="icon" /> : <SunIcon className="icon" />}
    </button>
  );
}
