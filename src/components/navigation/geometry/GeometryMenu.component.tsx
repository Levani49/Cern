import { ReactComponent as GeometryMenuLogo } from "@assets/svg/share.svg";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import {
  selectGeometryMenu,
  setGeometryMenuVisibility
} from "@features/tree/treeSlice";

import NavIcon from "../navIcon/navIcon";

export default function GeometryMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const showGeometryMenu = useAppSelector(selectGeometryMenu);

  const handleClick = (): void => {
    dispatch(setGeometryMenuVisibility(!showGeometryMenu));
  };

  return (
    <NavIcon
      Icon={GeometryMenuLogo}
      title="Geometry menu"
      onClick={handleClick}
      active={showGeometryMenu}
    />
  );
}
