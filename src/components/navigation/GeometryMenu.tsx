import Icons from "#/utils/icons";
import {
  selectGeometryMenu,
  setGeometryMenuVisibility,
} from "#/store/features/treeSlice";
import { useAppDispatch, useAppSelector } from "#/store/hooks";
import NavIcon from "#/components/navigation/NavIcon";

export default function GeometryMenu() {
  const dispatch = useAppDispatch();
  const showGeometryMenu = useAppSelector(selectGeometryMenu);

  const handleClick = (): void => {
    dispatch(setGeometryMenuVisibility(!showGeometryMenu));
  };

  return (
    <NavIcon
      Icon={Icons.GeometryMenuLogo}
      title="Geometry menu"
      onClick={handleClick}
      active={showGeometryMenu}
    />
  );
}
