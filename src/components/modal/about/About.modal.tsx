import type { Employee } from "@type/app.types";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import { selectAboutModalState, showAboutModal } from "@features/modal/modalSlice";

import TransitionModal from "@components/transition-modal/transition.modal";

import { TEMP_INFO } from "@constants/TEMP_STATIC_DATA";

import Slot from "./Slot.component";

export default function AboutModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectAboutModalState);

  const closeModalHandler = (e: boolean): void => {
    dispatch(showAboutModal(e));
  };

  return (
    <TransitionModal
      title="Meet Our Team"
      className="sm:max-w-3xl"
      open={show}
      onClose={closeModalHandler}
    >
      <div className="flex w-full flex-col gap-2 p-1">
        <h3 className="text-center text-lg font-bold">Tracer Core</h3>
        <h6 className="text-center text-xs font-bold text-gray-500">Version: @latest</h6>
        <div className="mt-2 flex justify-center gap-2">
          {TEMP_INFO.managers.map((employee: Employee) => {
            const { id, ...rest } = employee;
            return <Slot className="w-[200px]" key={id} {...rest} />;
          })}
        </div>
        <div className="grid grid-cols-3 gap-1 sm:grid-cols-4">
          {TEMP_INFO.developers.map((employee: Employee) => {
            const { id, ...rest } = employee;
            return <Slot key={id} {...rest} />;
          })}
        </div>
        <div className="mt-2 flex flex-col items-center gap-2 text-xs">
          <div className="flex">
            <span className="text-gray-300">Read more about us</span>
            <a href="http://cadcam.ge/" className="ml-1 text-green underline">
              @Nuclear Engineering Center
            </a>
          </div>
          <div className="flex">
            <span className="text-gray-300">Our university</span>
            <a href="https://gtu.ge/Eng/" className="ml-1 text-green underline">
              @Georgian Technical University
            </a>
          </div>

          <div className="flex">
            <span className="text-gray-300">In collaboration with</span>
            <a href="https://cern.ch/" className="ml-[2px] text-green underline">
              @CERN
            </a>
          </div>
        </div>
      </div>
    </TransitionModal>
  );
}
