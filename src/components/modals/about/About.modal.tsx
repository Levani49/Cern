import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectAboutModalState, showAboutModal } from '../../../features/modals/modalsSlice';

import Modal from '../Modal';
import Slot from './Slot.component';

import { TEMP_INFO } from '../../../constants/TEMP_STATIC_DATA';
import type { Employee } from '../../../types/app.types';

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
        <div className="flex flex-col gap-2 justifycenter w-full items-center">
          {TEMP_INFO.map((employee: Employee) => {
            const { id, ...rest } = employee;
            return <Slot key={id} {...rest} />;
          })}
        </div>
      </div>
    </Modal>
  );
}
