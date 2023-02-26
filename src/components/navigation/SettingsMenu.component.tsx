import { Cog8ToothIcon } from "@heroicons/react/24/outline";

import MenuIcon from "./MenuIcon.component";
import SettingsModal from "../modals/Settings.modal";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectSettingsModalState,
  showSettingsModal,
} from "../../features/modalsSlice";

/**
 *
 */
export default function SettingsMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectSettingsModalState);
  /**
   * Toggles the visibility of the info modal.
   *
   * @function
   * @name toggleModal
   * @returns {void}
   */
  const toggleModal = (): void => {
    show
      ? dispatch(showSettingsModal(false))
      : dispatch(showSettingsModal(true));
  };

  return (
    <>
      <MenuIcon Icon={Cog8ToothIcon} onClick={toggleModal} />
      <SettingsModal />
    </>
  );
}
