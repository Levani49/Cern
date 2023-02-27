import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectAboutModalState,
  showAboutModal,
} from "../../features/modalsSlice";

import Modal from "../Modal";
import Slot from "./about/Slot.component";

import { TEMP_INFO } from "../../TEMP_STATIC_DATA";
import type { Employee } from "../../app/app.types";

/**
 * Renders an InfoModal component that displays information about employees in a modal window.
 *
 * @function
 * @name InfoModal
 * @returns {JSX.Element} - A JSX element representing the InfoModal component.
 */
export default function AboutModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectAboutModalState);

  /**
   * @function
   * handles to close modal
   */
  const closeModalHandler = (): void => {
    dispatch(showAboutModal(false));
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
