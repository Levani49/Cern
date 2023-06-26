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

  if (isDarkMode) {
    document.body.style.background = "rgb(28, 28, 28)";
    document.body.classList.add("bgDark");
    document.body.classList.remove("bgLight");
  } else {
    document.body.style.background = "rgb(171, 171, 171)";
    document.body.classList.add("bgLight");
    document.body.classList.remove("bgDark");
  }

  return (
    <button
      className="flex items-center justify-center focus:outline-none"
      onClick={handleThemeSwitch}
      title="Switch Between Light and Dark Modes"
    >
      {isDarkMode ? <SunIcon className="icon" /> : <MoonIcon className="icon" />}
    </button>
  );
}
