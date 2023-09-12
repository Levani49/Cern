import Icons from "#/utils/icons";
import { selectAxis, showAxis } from "#/store/features/globalsSlice";
import { useAppDispatch, useAppSelector } from "#/store/hooks";
import NavIcon from "#/components/navigation/NavIcon";

export default function AxisMenu() {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectAxis);

  const toggler = (): void => {
    show ? dispatch(showAxis(false)) : dispatch(showAxis(true));
  };

  return (
    <NavIcon
      Icon={Icons.AxisIcon}
      active={show}
      onClick={toggler}
      title="Toggle Axis Display"
    />
  );
}
