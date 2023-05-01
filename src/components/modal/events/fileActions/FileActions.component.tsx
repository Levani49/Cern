import { useIntl } from 'react-intl';

import { ReactComponent as ArrowUpTrayIcon } from '../../../../assets/svg/arrowUpTrayIcon.svg';
import { ReactComponent as ChevronLeftIcon } from '../../../../assets/svg/chervonLeftIcon.svg';
import { ReactComponent as ChevronRightIcon } from '../../../../assets/svg/chervonRightIcon.svg';
import { ReactComponent as FolderIcon } from '../../../../assets/svg/folderIcon.svg';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { selectEventNumber, setEventNumber } from '../../../../features/event/eventsSlice';

export default function FileActions(): JSX.Element {
  const dispatch = useAppDispatch();
  const eventNumber = useAppSelector(selectEventNumber);

  const intl = useIntl();
  const group = intl.formatMessage({ id: 'modal.events.groupName' });

  const loadPreviousEvent = (): void => {
    const index = eventNumber.eventIndex === 1 ? 50 : eventNumber.eventIndex - 1;

    dispatch(
      setEventNumber({
        ...eventNumber,
        eventIndex: index,
      }),
    );
  };
  const loadNextEvent = (): void => {
    const index = eventNumber.eventIndex === 50 ? 1 : eventNumber.eventIndex + 1;
    dispatch(
      setEventNumber({
        ...eventNumber,
        eventIndex: index,
      }),
    );
  };

  return (
    <div className="w-full flex justify-between px-2 items-center">
      <ArrowUpTrayIcon className="icon" />
      <div className="flex gap-2 items-center">
        <ChevronLeftIcon className="icon" onClick={loadPreviousEvent} />
        <span className="text-xs text-light font-medium select-none">
          {group} {eventNumber.eventGroup} {eventNumber.eventIndex.toString().padStart(2, '0')}/50
        </span>
        <ChevronRightIcon className="icon" onClick={loadNextEvent} />
      </div>
      <FolderIcon className="icon" />
    </div>
  );
}
