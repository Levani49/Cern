import { ReactComponent as SettingsIcon } from "@assets/svg/settings.svg";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import { selectUtilsModal, setUtilsModal } from "@features/global/globalsSlice";

import SettingsModal from "@components/modal/settings/settings.modal";
import NavIcon from "@components/navigation/navIcon/navIcon";

export default function Utils(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectUtilsModal);

  const handleShow = (): void => {
    dispatch(setUtilsModal(!show));
  };

  return (
    <>
      <NavIcon Icon={SettingsIcon} title="Settings" onClick={handleShow} />
      {show && <SettingsModal />}
    </>
  );
}
