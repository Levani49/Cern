import { useMemo } from 'react';
import { useIntl } from 'react-intl';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  selectCurrentEventAnalysisTool,
  selectEventsModalState,
  showEventsModal,
} from '../../../features/modal/modalSlice';

import Modal from '../Modal';
import AnalysisTools from './analysisTools/AnalysisTools.component';
import EventsResultsToggler from './event-objects/EventsResultsToggler.component';
import FileActions from './fileActions/FileActions.component';
import InfoTool from './analysisTools/info/InfoTool.component';
import AlgorithmTool from './analysisTools/algorithm/AlgorithmTool.component';
import FilterTool from './analysisTools/filter/FilterTool.component';
import { selectEventGeneralInfo } from '../../../features/event/eventSlice';

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
  const info = useAppSelector(selectEventGeneralInfo);

  const currentAnalysisTool = useAppSelector(selectCurrentEventAnalysisTool);

  const memoizedAnalysisTool = useMemo(() => {
    return currentAnalysisTool;
  }, [currentAnalysisTool]);

  const intl = useIntl();
  const title = intl.formatMessage({ id: 'modal.events.title' });

  const closeModalHandler = (): void => {
    dispatch(showEventsModal(false));
  };

  const renderCurrentTool = (): JSX.Element => {
    switch (memoizedAnalysisTool) {
      case 'info':
        return (
          <InfoTool
            show={true}
            eventName="E 05/50"
            num={info.eventNumber}
            lumiBlocks={info.lumiBlock}
            runNumber={info.runNumber}
            date={info.date}
            time={info.time}
          />
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
    <Modal title={title} show={show} onCloseHandler={closeModalHandler}>
      <div className="flex flex-col gap-6 p-2 rounded  items-centers shadow ">
        <FileActions />
        <EventsResultsToggler />
        <AnalysisTools />
      </div>
      {currentTool}
    </Modal>
  );
}
