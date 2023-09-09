import Icons from "#/utils/icons";
import { selectUtilsModal, setUtilsModal } from "#/store/features/globalsSlice";
import { useAppDispatch, useAppSelector } from "#/store/hooks";
import SettingsMod from "#/components/modals/settings/Settings";
import NavIcon from "#/components/navigation/NavIcon";

export default function Utils() {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectUtilsModal);

  const handleShow = (): void => {
    dispatch(setUtilsModal(!show));
  };

  return (
    <>
      <NavIcon Icon={Icons.SettingsIcon} title="Settings" onClick={handleShow} />
      {show && <SettingsMod />}
    </>
  );
}
