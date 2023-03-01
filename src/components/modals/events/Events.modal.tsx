import { useMemo } from "react";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectCurrentEventAnalysisTool,
  selectEventsModalState,
  showEventsModal,
} from "../../../features/modalsSlice";

import Modal from "../Modal";
import AnalysisTools from "./analysisTools/AnalysisTools.component";
import EventsResultsToggler from "./event-objects/EventsResultsToggler.component";
import FileActions from "./fileActions/FileActions.component";
import InfoTool from "./analysisTools/info/InfoTool.component";
import AlgorithmTool from "./analysisTools/algorithm/AlgorithmTool.component";
import FilterTool from "./analysisTools/filter/FilterTool.component";

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

  const currentAnalysisTool = useAppSelector(selectCurrentEventAnalysisTool);

  const memoizedAnalysisTool = useMemo(() => {
    return currentAnalysisTool;
  }, [currentAnalysisTool]);

  /**
   *
   */
  const closeModalHandler = (): void => {
    dispatch(showEventsModal(false));
  };

  /**
   *
   */
  const renderCurrentTool = (): JSX.Element => {
    switch (memoizedAnalysisTool) {
      case "info":
        return (
          <InfoTool
            show={true}
            eventName="Event E 05/50"
            num="1659078"
            lumiBlocks="65"
            runNumber="206497"
            date="2012-07-06"
            time="03:38:35"
          />
        );
      case "algorithm":
        return <AlgorithmTool />;
      case "filter":
        return <FilterTool />;
      default:
        return <></>;
    }
  };

  const currentTool = renderCurrentTool();

  return (
    <Modal title="Events" show={show} onCloseHandler={closeModalHandler}>
      <div className="flex flex-col gap-6 p-2 rounded  items-centers shadow ">
        <FileActions />
        <EventsResultsToggler />
        <AnalysisTools />
      </div>
      {currentTool}
    </Modal>
  );
}
