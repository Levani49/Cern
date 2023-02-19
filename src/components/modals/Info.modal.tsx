import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectInfoSettingsStatus, closeInfoModal } from "../../features/infoSlice";

import Modal from "../Modal";
import Slot from "../info/Slot.component";

import { TEMP_INFO } from "../../TEMP_STATIC_DATA";
import type { Employee } from "../../app/app.types";

/**
 * Settings component that displays different settings options in a modal.
 *
 * @param {Props} props - The props of the component.
 * @param {boolean} props.show - Whether the modal should be displayed or not.
 * @param {Function} props.onClose - The callback function to close the modal.
 * @returns {JSX.Element} ReactElement
 */
export default function InfoModal(): JSX.Element {
  const show = useAppSelector(selectInfoSettingsStatus);
  const dispatch = useAppDispatch();

  /**
   *
   */
  const closeModalHandler = (): void => {
    dispatch(closeInfoModal());
  };

  return (
    <Modal title="About" show={show} onCloseHandler={closeModalHandler}>
      <div className="w-full shadow-md rounded p-1 ">
        <div className="grid grid-cols-2 max-h-80 overflow-y-auto md:overflow-y-hidden md:max-h-auto md:grid-cols-3 gap-4 justify-between">
          {TEMP_INFO.map((employee: Employee) => {
            const { id, ...rest } = employee;
            return <Slot key={id} {...rest} />;
          })}
        </div>
      </div>
    </Modal>
  );
}
