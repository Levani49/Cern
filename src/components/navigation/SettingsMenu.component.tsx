import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { openSettingsModal, closeSettingsModal, selectShowSettingsStatus } from "../../features/settingsSlice";

import MenuIcon from "./MenuIcon.component";
import SettingsModal from "../modals/Settings.modal";

import { ReactComponent as RoadIcon } from "../../assets/svg/road.svg";

/**
 *
 */
export default function SettingsMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectShowSettingsStatus);

  /**
   *
   */
  const toggleModal = (): void => {
    show ? dispatch(closeSettingsModal()) : dispatch(openSettingsModal());
  };

  return (
    <>
      <MenuIcon Icon={RoadIcon} onClick={toggleModal} />
      <SettingsModal />
    </>
  );
}
