import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectAboutModalState, showAboutModal } from '../../../features/modal/modalSlice';

import Modal from '../Modal.component';
import Slot from './Slot.component';

import { TEMP_INFO } from '../../../constants/TEMP_STATIC_DATA';
import type { Employee } from '../../../types/app.types';

export default function AboutModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectAboutModalState);

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
