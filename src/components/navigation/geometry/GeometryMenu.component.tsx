// import { selectGeometryMenu, setGeometryMenu } from "@features/global/globalsSlice";
import { selectGeometryMenu, setGeometryMenuVisibility } from "@/features/tree/treeSlice";

import { ReactComponent as MenuLogo } from "@assets/svg/menu.svg";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import NavIcon from "../navIcon/navIcon";

export default function GeometryMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const showGeometryMenu = useAppSelector(selectGeometryMenu);

  const handleClick = (): void => {
    dispatch(setGeometryMenuVisibility(!showGeometryMenu));
  };

  return (
    <NavIcon
      Icon={MenuLogo}
      title="Geometry menu"
      onClick={handleClick}
      active={showGeometryMenu}
    />
  );
}
