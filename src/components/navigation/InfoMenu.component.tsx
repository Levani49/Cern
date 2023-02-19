import { ReactComponent as InfoIcon } from "../../assets/svg/info.svg";

import { closeInfoModal, openInfoModal, selectInfoSettingsStatus } from "../../features/infoSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import MenuIcon from "./MenuIcon.component";
import InfoModal from "../modals/Info.modal";

/**
 *
 */
export default function InfoMenu(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectInfoSettingsStatus);

  /**
   *
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
