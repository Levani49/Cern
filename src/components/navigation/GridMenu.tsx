import Icons from "#/utils/icons";
import { selectGrid, showGrid } from "#/store/features/globalsSlice";
import { useAppDispatch, useAppSelector } from "#/store/hooks";
import NavIcon from "#/components/navigation/NavIcon";

export default function GridMenu() {
  const dispatch = useAppDispatch();
  const active = useAppSelector(selectGrid);

  const handleToggle = (): void => {
    active ? dispatch(showGrid(false)) : dispatch(showGrid(true));
  };

  return (
    <NavIcon
      Icon={Icons.GlobeEuropeAfricaIcon}
      active={active}
      onClick={handleToggle}
      title="Toggle Ground Display"
    />
  );
}
