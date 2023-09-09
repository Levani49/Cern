import { useMemo } from "react";

import { selectLoadedEvents } from "#/store/features/eventSlice";
import {
  selectCurrentEventAnalysisTool,
  selectEventsModalState,
  showEventsModal,
} from "#/store/features/modalSlice";
import { useAppDispatch, useAppSelector } from "#/store/hooks";
import EventsResultsToggler from "#/components/modals/event/event-objects/EventsResultsToggler";
import FileActions from "#/components/modals/event/file-actions/FileActions";
import useEscapeKeydown from "#/hooks/useEscapeKeydown";

import Modal from "../Modal.component";
import AlgorithmTool from "./analysis-tools/algorithm/AlgorithmTool";
import AnalysisTools from "./analysis-tools/AnalysisTools";
import FilterTool from "./analysis-tools/filter/FilterTool";
import InfoTool from "./analysis-tools/Info/InfoTool";

export default function EventsModal() {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectEventsModalState);
  const loadedEvents = useAppSelector(selectLoadedEvents);

  const currentAnalysisTool = useAppSelector(selectCurrentEventAnalysisTool);

  const memoizedAnalysisTool = useMemo(() => {
    return currentAnalysisTool;
  }, [currentAnalysisTool]);

  useEscapeKeydown(() => dispatch(showEventsModal(false)));

  const closeModalHandler = (): void => {
    dispatch(showEventsModal(false));
  };

  const renderCurrentTool = () => {
    switch (memoizedAnalysisTool) {
      case "info":
        return (
          <div className="max-h-52 overflow-y-auto">
            {loadedEvents.map((event, index) => {
              return (
                <InfoTool
                  active={index === 0}
                  showEventDetails={index === 0}
                  key={index}
                  eventName={event.eventName}
                  num={event.eventNumber}
                  lumiBlocks={event.lumiBlock}
                  runNumber={event.runNumber}
                  date={event.date}
                  time={event.time}
                  loadedEvent={event.loadedEvent}
                />
              );
            })}
            <span className="mr-3 text-right text-xs">
              Loaded events {loadedEvents.length}
            </span>
          </div>
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
    <Modal id="events" title="Events" show={show} onCloseHandler={closeModalHandler}>
      <div className="py-2">
        <FileActions />
        <EventsResultsToggler />
        <AnalysisTools />
      </div>
      {currentTool}
    </Modal>
  );
}
