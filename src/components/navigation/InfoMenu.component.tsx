import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { closeInfoModal, openInfoModal, selectInfoSettingsStatus } from "../../features/infoSlice";

import MenuIcon from "./MenuIcon.component";
import InfoModal from "../modal/modals/info/Info.modal";
import { ReactComponent as InfoIcon } from "../../assets/svg/info.svg";

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
