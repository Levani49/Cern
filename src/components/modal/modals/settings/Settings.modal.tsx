import { useState } from "react";

import Modal from "../../Modal";
import Slider from "./Slider.component";
import OptionsBox from "./OptionsBox.component";
import SettingsDropdown from "./SettingsDropdown.component";
import SettingsTitle from "./SettingsTitle.component";

interface Props {
  show: boolean;
  onClose: () => void;
}

/**
 * Settings component that displays different settings options in a modal.
 *
 * @param {Props} props - The props of the component.
 * @param {boolean} props.show - Whether the modal should be displayed or not.
 * @param {Function} props.onClose - The callback function to close the modal.
 * @returns {JSX.Element} ReactElement
 */
export default function SettingsModal({ show, onClose }: Props): JSX.Element {
  const [dropDown, setDropDown] = useState<boolean>(true);

  /**
   * Scene menu toggle handler
   *
   * @returns {void}
   */
  const toggleHandler = (): void => setDropDown(!dropDown);

  return (
    <Modal title="settings" show={show} onClose={onClose}>
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
