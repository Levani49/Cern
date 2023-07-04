import type { Employee } from "@type/app.types";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import { selectAboutModalState, showAboutModal } from "@features/modal/modalSlice";

import TransitionModal from "@components/transition-modal/transition.modal";

import useEscapeKeydown from "@hooks/useEscapeKeydown/useEscapeKeydown.hook";

import { TEMP_INFO } from "@constants/TEMP_STATIC_DATA";

import Slot from "./Slot.component";

export default function AboutModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectAboutModalState);

  useEscapeKeydown(() => dispatch(showAboutModal(false)));

  const closeModalHandler = (e: boolean): void => {
    dispatch(showAboutModal(e));
  };

  return (
    <TransitionModal
      title="Meet Our Team"
      className="h-[100%] w-[100vw]"
      open={show}
      onClose={closeModalHandler}
    >
      <div className="flex h-full w-full flex-col justify-between gap-6 p-1">
        {/* <div className="hidden flex-col justify-center text-center sm:flex">
          <h1 className="text-center text-lg font-bold">Tracer Core</h1>
          <span className="items-center text-center text-[10px] font-bold text-gray-500">
            Version: @6.0.0
          </span>
        </div> */}

        <div className="flex flex-col gap-6">
          <h1 className="text-center text-lg">Nuclear Engineering Center</h1>
          <p className="text-center text-xs text-gray-400">
            <span className=" font-extrabold text-blue dark:text-green">
              Nuclear Engineering Center
            </span>{" "}
            collaborates with <span className="font-medium text-blue">CERN</span>,
            specializing in 3D modeling and applications. We create immersive 3D
            models for various CERN teams, visualizing complex concepts. From
            particle detectors to accelerator designs, our experts bring ideas to
            life. Through advanced 3D applications, we enhance collaboration and data
            analysis, supporting particle physics research. Join us at the
            intersection of nuclear engineering and particle physics, as we drive
            innovation alongside CERN. Experience the transformative potential of 3D
            technology in unraveling the mysteries of the universe and shaping the
            future of scientific exploration.
          </p>
        </div>

        <div className="grid grid-cols-6 place-items-center sm:grid-cols-11">
          {TEMP_INFO.employees.map((employee: Employee) => {
            const { id, ...rest } = employee;
            return <Slot key={id} {...rest} />;
          })}
        </div>

        <div className="mt-2 flex flex-col items-center gap-4 text-xs">
          <a
            href="http://cadcam.ge/team/"
            className="ml-1 rounded bg-transparentDark p-4 font-medium text-white transition-colors hover:bg-green"
            target="_blank"
            rel="noreferrer"
          >
            Read more about us
          </a>
          <p className="font-medium text-gray-500">All rights reserverd ®</p>
        </div>
      </div>
    </TransitionModal>
  );
}
