import { useAppDispatch, useAppSelector } from "@store/hooks";

import { selectAboutModalState, showAboutModal } from "@features/modal/modalSlice";

import TransitionModal from "@components/transition-modal/transition.modal";

import useEscapeKeydown from "@hooks/useEscapeKeydown/useEscapeKeydown.hook";

import { TEMP_INFO } from "@constants/TEMP_STATIC_DATA";

export default function AboutModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectAboutModalState);

  useEscapeKeydown(() => dispatch(showAboutModal(false)));

  const closeModalHandler = (e: boolean): void => {
    dispatch(showAboutModal(e));
  };

  return (
    <TransitionModal
      title="Tracer Core 6.0 / 2023"
      className="sm:max-w-xl"
      open={show}
      onClose={closeModalHandler}
    >
      <div className="flex h-full w-full flex-col justify-between p-1">
        <div className="flex flex-col gap-6">
          <h1 className="mt-4 text-center text-lg">Nuclear Engineering Center</h1>
          <p className="text-center text-xs text-gray-400">
            <span className=" font-extrabold text-accent2 dark:text-accent1">
              Nuclear Engineering Center
            </span>{" "}
            collaborates with <span className="font-medium text-accent2">CERN</span>,
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

        <h2 className="mt-6 text-center">Developers</h2>

        <div className="mt-2 flex flex-col items-center justify-center gap-1 text-xs">
          {TEMP_INFO.employees.map((employee) => {
            return (
              <div
                key={employee.id}
                className="relative grid grid-cols-[200px,200px] items-center gap-[7px] "
              >
                <h4 className="pr-1 text-right font-light">{employee.name}</h4>
                <p>{employee.role}</p>
              </div>
            );
          })}
        </div>

        <p className="mt-6 flex justify-center text-xs">
          Three.js version
          <span className="ml-1 text-accent2 dark:text-accent1">r154</span>
        </p>

        <div className="mt-6 flex flex-col items-center gap-2 text-xs">
          <a
            href="http://cadcam.ge/team/"
            className="hover:bg-green ml-1 rounded bg-black p-4 font-medium text-white transition-colors hover:bg-highlight1"
            target="_blank"
            rel="noreferrer"
          >
            Read more about us
          </a>
        </div>
      </div>
    </TransitionModal>
  );
}
