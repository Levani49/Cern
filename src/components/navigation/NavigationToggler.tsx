import Icons from "#/utils/icons";
import { selectMenuBar, setMenuBar } from "#/store/features/globalsSlice";
import { useAppDispatch, useAppSelector } from "#/store/hooks";
import NavIcon from "#/components/navigation/NavIcon";

export default function NavigationBar() {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectMenuBar);

  const handleClick = (): void => {
    dispatch(setMenuBar(false));
  };

  return (
    <NavIcon
      Icon={Icons.MenuLogo}
      active={show}
      onClick={handleClick}
      title="Toggle navigation bar"
    />
  );
}
