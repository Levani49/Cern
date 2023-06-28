import { ReactComponent as MenuLogo } from "@assets/svg/menu.svg";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import { selectMenuBar, setMenuBar } from "@features/global/globalsSlice";

import NavIcon from "@components/navigation/navIcon/navIcon";

export default function NavigationBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectMenuBar);

  const handleClick = (): void => {
    dispatch(setMenuBar(false));
  };

  return (
    <NavIcon
      Icon={MenuLogo}
      active={show}
      onClick={handleClick}
      title="Toggle navigation bar"
    />
  );
}
