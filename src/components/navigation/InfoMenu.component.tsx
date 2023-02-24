import { ReactComponent as InfoIcon } from "../../assets/svg/info.svg";

import { closeInfoModal, openInfoModal, selectInfoSettingsStatus } from "../../features/infoSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import MenuIcon from "./MenuIcon.component";
import InfoModal from "../modals/Info.modal";

/**
 * Renders an InfoMenu component that displays an icon for opening a modal with more information.
 *
 * @function
 * @name InfoMenu
 * @returns {JSX.Element} - A JSX element representing the InfoMenu component.
 */
export default function InfoMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectInfoSettingsStatus);

  /**
   * Toggles the visibility of the info modal.
   *
   * @function
   * @name toggleModal
   * @returns {void}
   */
  const toggleModal = (): void => {
    show ? dispatch(closeInfoModal()) : dispatch(openInfoModal());
  };

  return (
    <>
      <MenuIcon Icon={InfoIcon} onClick={toggleModal} />
      <InfoModal />
    </>
  );
}
