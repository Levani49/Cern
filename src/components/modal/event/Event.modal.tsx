import { useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  selectCurrentEventAnalysisTool,
  selectEventsModalState,
  showEventsModal,
} from '../../../features/modal/modalSlice';
import { selectLoadedEvents } from '../../../features/event/eventSlice';

import Modal from '../Modal.component';
import FileActions from './fileActions/FileActions.component';
import InfoTool from './analysisTools/info/InfoTool.component';
import AnalysisTools from './analysisTools/AnalysisTools.component';
import FilterTool from './analysisTools/filter/FilterTool.component';
import AlgorithmTool from './analysisTools/algorithm/AlgorithmTool.component';
import EventsResultsToggler from './event-objects/EventsResultsToggler.component';

export default function EventsModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectEventsModalState);
  const loadedEvents = useAppSelector(selectLoadedEvents);

  const currentAnalysisTool = useAppSelector(selectCurrentEventAnalysisTool);

  const memoizedAnalysisTool = useMemo(() => {
    return currentAnalysisTool;
  }, [currentAnalysisTool]);

  const closeModalHandler = (): void => {
    dispatch(showEventsModal(false));
  };

  const renderCurrentTool = (): JSX.Element | JSX.Element[] => {
    switch (memoizedAnalysisTool) {
      case 'info':
        return (
          <div className="flex flex-col gap-1">
            {[...loadedEvents].reverse().map((event, index): JSX.Element => {
              return (
                <InfoTool
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
            <span className="text-right text-xs mr-3">Loaded events {loadedEvents.length}</span>
          </div>
        );
      case 'algorithm':
        return <AlgorithmTool />;
      case 'filter':
        return <FilterTool />;
      default:
        return <></>;
    }
  };

  const currentTool = renderCurrentTool();

  return (
    <Modal title="Events" show={show} onCloseHandler={closeModalHandler}>
      <div className="flex flex-col gap-6 rounded py-2 items-centers shadow">
        <FileActions />
        <EventsResultsToggler />
        <AnalysisTools />
      </div>
      {currentTool}
    </Modal>
  );
}
