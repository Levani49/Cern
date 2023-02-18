import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { selectShowSettingsStatus, closeSettingsModal } from "../../../../features/settingsSlice";

import Modal from "../../Modal";
import Slider from "./Slider.component";
import OptionsBox from "./OptionsBox.component";
import SettingsDropdown from "./SettingsDropdown.component";
import SettingsTitle from "./SettingsTitle.component";

/**
 * Settings component that displays different settings options in a modal.
 *
 * @param {Props} props - The props of the component.
 * @param {boolean} props.show - Whether the modal should be displayed or not.
 * @param {Function} props.onClose - The callback function to close the modal.
 * @returns {JSX.Element} ReactElement
 */
export default function SettingsModal(): JSX.Element {
  const [dropDown, setDropDown] = useState<boolean>(true);
  const show = useAppSelector(selectShowSettingsStatus);
  const dispatch = useAppDispatch();

  /**
   *
   */
  const closeModalHandler = (): void => {
    dispatch(closeSettingsModal());
  };

  /**
   * Scene menu toggle handler
   *
   * @returns {void}
   */
  const toggleHandler = (): void => setDropDown(!dropDown);

  return (
    <Modal title="settings" show={show} onCloseHandler={closeModalHandler}>
      <div className="w-full shadow-md rounded p-1">
        <SettingsTitle title="Scene" show={dropDown} onClose={toggleHandler} />
        <SettingsDropdown show={dropDown}>
          <OptionsBox />
          <Slider title="Brightness" />
          <Slider title="Contast" />
          <Slider title="Camera speed" />
        </SettingsDropdown>
      </div>
    </Modal>
  );
}
