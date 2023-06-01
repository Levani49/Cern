import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectAboutModalState, showAboutModal } from "../../../features/modal/modalSlice";

// import Modal from "../Modal.component";
import Slot from "./Slot.component";

import { TEMP_INFO } from "../../../constants/TEMP_STATIC_DATA";
import type { Employee } from "../../../types/app.types";
import TransitionModal from "../../transition-modal/transition.modal";

export default function AboutModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectAboutModalState);

  const closeModalHandler = (e: boolean): void => {
    dispatch(showAboutModal(e));
  };

  return (
    <TransitionModal title="About" open={show} onClose={closeModalHandler}>
      <div className="w-full rounded p-1 ">
        <div className="flex flex-col gap-2 justifycenter w-full items-center">
          {TEMP_INFO.map((employee: Employee) => {
            const { id, ...rest } = employee;
            return <Slot key={id} {...rest} />;
          })}
        </div>
      </div>
    </TransitionModal>
  );
}
