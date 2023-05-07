import { useState } from 'react';
import { useIntl } from 'react-intl';

import { ReactComponent as MoonIcon } from '../../assets/svg/moon.svg';
import { ReactComponent as SunIcon } from '../../assets/svg/sun.svg';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectTheme, setDarkMode } from '../../features/global/globalsSlice';

export default function ThemeToggler(): JSX.Element {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const [isDarkMode, setIsDarkMode] = useState(theme);

  const intl = useIntl();
  const title = intl.formatMessage({ id: 'navigation.theme.title' });

  const handleThemeSwitch = (): void => {
    setIsDarkMode((prevState) => !prevState);
    dispatch(setDarkMode(!theme));
  };

  isDarkMode
    ? (document.body.style.background = 'rgb(28, 28, 28)')
    : (document.body.style.background = 'rgb(171, 171, 171)');

  return (
    <button className="focus:outline-none" onClick={handleThemeSwitch} title={title}>
      {isDarkMode ? <SunIcon className="icon" /> : <MoonIcon className="icon" />}
    </button>
  );
}
