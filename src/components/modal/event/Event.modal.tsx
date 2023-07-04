import { useMemo } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import { selectLoadedEvents } from "@features/event/eventSlice";
import { LoadedEvents } from "@features/event/eventSlice.types";
import {
  selectCurrentEventAnalysisTool,
  selectEventsModalState,
  showEventsModal
} from "@features/modal/modalSlice";

import useEscapeKeydown from "@hooks/useEscapeKeydown/useEscapeKeydown.hook";

import Modal from "../Modal.component";
import AlgorithmTool from "./analysisTools/algorithm/AlgorithmTool.component";
import AnalysisTools from "./analysisTools/AnalysisTools.component";
import FilterTool from "./analysisTools/filter/FilterTool.component";
import InfoTool from "./analysisTools/info/InfoTool.component";
import EventsResultsToggler from "./event-objects/EventsResultsToggler.component";
import FileActions from "./fileActions/FileActions.component";

export default function EventsModal(): JSX.Element {
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

  const filteredEvents = loadedEvents.reduce(
    (accumulator: LoadedEvents[], event) => {
      if (!accumulator.some((obj) => obj.eventName === event.eventName)) {
        accumulator.push(event);
      }
      return accumulator;
    },
    []
  );

  const renderCurrentTool = (): JSX.Element | JSX.Element[] => {
    switch (memoizedAnalysisTool) {
      case "info":
        return (
          <div className="flex flex-col gap-1">
            {filteredEvents.map((event, index): JSX.Element => {
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
    <Modal title="Events" show={show} onCloseHandler={closeModalHandler}>
      <div className="items-centers flex flex-col gap-6 py-2 ">
        <FileActions />
        <EventsResultsToggler />
        <AnalysisTools />
      </div>
      {currentTool}
    </Modal>
  );
}
