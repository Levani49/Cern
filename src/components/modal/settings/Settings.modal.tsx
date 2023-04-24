import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectSettingsModalState, showSettingsModal } from '../../../features/modal/modalSlice';

import Modal from '../Modal';
import Slider from './Slider.component';
import OptionsBox from './OptionsBox.component';

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
      <div className="w-full shadow-md rounded p-1">
        <OptionsBox />
        <Slider title="Brightness" />
        <Slider title="Contast" />
        <Slider title="Camera speed" />
      </div>
    </Modal>
  );
}