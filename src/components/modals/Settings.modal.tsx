import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectShowSettingsStatus, closeSettingsModal } from "../../features/settingsSlice";

import Modal from "../Modal";
import Slider from "../settings/Slider.component";
import OptionsBox from "../settings/OptionsBox.component";
import AnimateHeight from "../AnimateHeight.component";

/**
 * Settings component that displays different settings options in a modal.
 *
 * @returns {JSX.Element} ReactElement
 */
export default function SettingsModal(): JSX.Element {
  const show = useAppSelector(selectShowSettingsStatus);
  const dispatch = useAppDispatch();

  /**
   * @function
   * handles to close modal
   */
  const closeModalHandler = (): void => {
    dispatch(closeSettingsModal());
  };

  return (
    <Modal title="settings" show={show} onCloseHandler={closeModalHandler}>
      <div className="w-full shadow-md rounded p-1">
        <AnimateHeight title="Scene">
          <OptionsBox />
          <Slider title="Brightness" />
          <Slider title="Contast" />
          <Slider title="Camera speed" />
        </AnimateHeight>
      </div>
    </Modal>
  );
}
