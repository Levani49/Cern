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
   *
   */
  const toggleModal = (): void => {
    console.log("ok");
    show ? dispatch(closeSettingsModal()) : dispatch(openSettingsModal());
  };

  return (
    <>
      <MenuIcon Icon={RoadIcon} onClick={toggleModal} />
      <SettingsModal />
    </>
  );
}
