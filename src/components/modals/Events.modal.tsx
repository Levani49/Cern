import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectEventsModalState,
  showEventsModal,
} from "../../features/modalsSlice";

import Modal from "../Modal";
import AnalysisTools from "./events/AnalysisTools.component";
import EventsResultsToggler from "./events/EventsResultsToggler.component";
import FileActions from "./events/FileActions.component";

/**
 * Renders an InfoModal component that displays information about employees in a modal window.
 *
 * @function
 * @name InfoModal
 * @returns {JSX.Element} - A JSX element representing the InfoModal component.
 */
export default function EventsModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectEventsModalState);

  /**
   * @function
   * handles to close modal
   */
  const closeModalHandler = (): void => {
    dispatch(showEventsModal(false));
  };

  return (
    <Modal title="Events" show={show} onCloseHandler={closeModalHandler}>
      <div className="flex flex-col gap-6 p-2 rounded  items-centers shadow ">
        <FileActions />
        <EventsResultsToggler />
        <AnalysisTools />
      </div>
    </Modal>
  );
}
