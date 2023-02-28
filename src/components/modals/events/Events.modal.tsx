import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectEventsModalState,
  showEventsModal,
} from "../../../features/modalsSlice";

import Modal from "../Modal";
import AnalysisTools from "./analysisTools/AnalysisTools.component";
import EventsResultsToggler from "./event-objects/EventsResultsToggler.component";
import FileActions from "./fileActions/FileActions.component";
import InfoTool from "./analysisTools/info/InfoTool.component";
import AlgorithmTool from "./analysisTools/algorithm/AlgorithmTool.component";

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
      <div className="p-2">
        <InfoTool
          show={false}
          eventName="Event E 05/50"
          num="1659078"
          lumiBlocks="65"
          runNumber="206497"
          date="2012-07-06"
          time="03:38:35"
        />
        <AlgorithmTool />
      </div>
    </Modal>
  );
}
