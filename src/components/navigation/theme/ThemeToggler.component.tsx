import { ReactComponent as MoonIcon } from "#/assets/svg/moon.svg";
import { ReactComponent as SunIcon } from "#/assets/svg/sun.svg";
import { useAppDispatch, useAppSelector } from "#/store/hooks";
import { selectTheme, setdarkMode } from "#/features/global/globalsSlice";

export default function ThemeToggler() {
  const dispatch = useAppDispatch();
  const isdarkMode = useAppSelector(selectTheme);

  const handleThemeSwitch = (): void => {
    dispatch(setdarkMode(!isdarkMode));
  };

  if (isdarkMode) {
    document.body.style.transition = "background-color 1s"; // Add transition property
    document.body.style.background = "black";
    document.body.classList.add("bgdark");
    document.body.classList.remove("bgLight");
  } else {
    document.body.style.transition = "background-color 1s"; // Add transition property
    document.body.style.background = "rgb(171, 171, 171)";
    document.body.classList.add("bgLight");
    document.body.classList.remove("bgdark");
  }

  return (
    <button
      className="flex items-center justify-center focus:outline-none"
      onClick={handleThemeSwitch}
      title="Switch Between Light and dark Modes"
    >
      {isdarkMode ? <SunIcon className="icon" /> : <MoonIcon className="icon" />}
    </button>
  );
}
