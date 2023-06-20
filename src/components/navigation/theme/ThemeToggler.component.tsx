import { ReactComponent as MoonIcon } from "@assets/svg/moon.svg";
import { ReactComponent as SunIcon } from "@assets/svg/sun.svg";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import { selectTheme, setDarkMode } from "@features/global/globalsSlice";

export default function ThemeToggler(): JSX.Element {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(selectTheme);

  const handleThemeSwitch = (): void => {
    dispatch(setDarkMode(!isDarkMode));
  };

  isDarkMode
    ? (document.body.style.background = "rgb(28, 28, 28)")
    : (document.body.style.background = "rgb(171, 171, 171)");

  return (
    <button
      className="focus:outline-none"
      onClick={handleThemeSwitch}
      title="Switch Between Light and Dark Modes"
    >
      {isDarkMode ? <SunIcon className="icon" /> : <MoonIcon className="icon" />}
    </button>
  );
}
