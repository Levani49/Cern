import {
  selectSettingsModalState,
  showSettingsModal
} from "../../../features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Modal from "../Modal.component";
import OptionsBox from "./OptionsBox.component";
import Slider from "./Slider.component";

/**
 * Settings component that displays different settings options in a modal.
 *
 * @returns {JSX.Element} ReactElement
 */
export default function SettingsModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectSettingsModalState);

  /**
   * @function
   * handles to close modal
   */
  const closeModalHandler = (): void => {
    dispatch(showSettingsModal(false));
  };

  return (
    <Modal title="settings" show={show} onCloseHandler={closeModalHandler}>
      <div className="w-full rounded p-1 shadow-md">
        <OptionsBox />
        <Slider title="Brightness" />
        <Slider title="Contast" />
        <Slider title="Camera speed" />
      </div>
    </Modal>
  );
}
