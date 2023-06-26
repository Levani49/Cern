import { useAppDispatch, useAppSelector } from "@store/hooks";

import {
  selectSettingsModalState,
  showSettingsModal
} from "@features/modal/modalSlice";

import Modal from "../Modal.component";
import OptionsBox from "./OptionsBox.component";
import Slider from "./Slider.component";

export default function SettingsModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectSettingsModalState);

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
