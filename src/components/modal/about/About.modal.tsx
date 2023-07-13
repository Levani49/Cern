import { useAppDispatch, useAppSelector } from "@store/hooks";

import { selectAboutModalState, showAboutModal } from "@features/modal/modalSlice";

import TransitionModal from "@components/transition-modal/transition.modal";

import useEscapeKeydown from "@hooks/useEscapeKeydown/useEscapeKeydown.hook";

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
      <div className="flex h-full w-full flex-col justify-between p-1">
        <div className="flex flex-col gap-6">
          <h1 className="text-center text-lg">Nuclear Engineering Center</h1>
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
        {/* <table className=" table-auto text-xs">
          <tbody>
            <tr>
              <td className="pr-1 text-end">Sharmazanashvili Alexander</td>
              <td>- Concept Creator, Project Manager</td>
            </tr>
            <tr>
              <td className="pr-1 text-end">Kverenchkhiladze Irakli</td>
              <td>- Chief Engineer</td>
            </tr>
            <tr>
              <td className="pr-1 text-end">Zurashvili Nino</td>
              <td>- Chief Engineer</td>
            </tr>
            <tr>
              <td className="pr-1 text-end">Kobakhidze Shota</td>
              <td>- Geometry Modeling</td>
            </tr>
          </tbody>
        </table> */}

        <div className="mt-2 flex flex-col items-center justify-center gap-1 text-xs">
          <div className="relative grid grid-cols-[200px,200px] items-center gap-[7px]">
            <h4 className="pr-1 text-right font-light">
              SHARMAZANASHVILI Alexander
            </h4>

            <p>Concept Creator, Project Manager</p>
          </div>
          <div className="relative grid grid-cols-[200px,200px] items-center gap-[7px] ">
            <h4 className="pr-1 text-right font-light">KVERENCHKHILADZE Irakli</h4>
            <p>Chief Engineer</p>
          </div>
          <div className="relative grid grid-cols-[200px,200px] items-center gap-[7px] ">
            <h4 className="pr-1 text-right font-light">ZURASHVILI Nino</h4>
            <p>Chief Engineer</p>
          </div>
          <div className="relative grid grid-cols-[200px,200px] items-center gap-[7px] ">
            <h4 className="pr-1 text-right font-light">KOBAKHIDZE Shota</h4>
            <p>Geometry Modeling</p>
          </div>
        </div>

        {/* <table className="mt-6 w-full caption-bottom align-top text-xs">
          <tbody>
            <tr>
              <th className="pr-1 text-right font-light">
                SHARMAZANASHVILI Alexander
              </th>
              <td> - Concept Creator, Project Manager</td>
            </tr>
            <tr>
              <th className="pr-1 text-right font-light">KVERENCHKHILADZE Irakli</th>
              <td> - Chief Engineer</td>
            </tr>
            <tr>
              <th className="pr-1 text-right font-light">ZURASHVILI Nino</th>
              <td> - Chief Engineer</td>
            </tr>
            <tr>
              <th className="pr-1 text-right font-light">KOBAKHIDZE Shota</th>
              <td> - Geometry Modeling</td>
            </tr>
          </tbody>
        </table> */}

        <div className="mt-6 flex flex-col items-center gap-2 text-xs">
          <a
            href="http://cadcam.ge/team/"
            className="hover:bg-green ml-1 rounded bg-black p-4 font-medium text-white transition-colors hover:bg-highlight1"
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
