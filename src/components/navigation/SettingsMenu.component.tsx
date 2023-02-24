import { ReactComponent as RoadIcon } from "../../assets/svg/road.svg";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { openSettingsModal, closeSettingsModal, selectShowSettingsStatus } from "../../features/settingsSlice";

import MenuIcon from "./MenuIcon.component";
import SettingsModal from "../modals/Settings.modal";

/**
 *
 */
export default function SettingsMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectShowSettingsStatus);

  /**
   * Toggles the visibility of the info modal.
   *
   * @function
   * @name toggleModal
   * @returns {void}
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
