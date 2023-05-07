import { useIntl } from 'react-intl';

import { ReactComponent as ArrowUpTrayIcon } from '../../../../assets/svg/arrowUpTrayIcon.svg';
import { ReactComponent as ChevronLeftIcon } from '../../../../assets/svg/chervonLeftIcon.svg';
import { ReactComponent as ChevronRightIcon } from '../../../../assets/svg/chervonRightIcon.svg';
import { ReactComponent as FolderIcon } from '../../../../assets/svg/folderIcon.svg';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import {
  selectEventIsLoading,
  selectEventNumber,
  setEventDetailsXML,
  setEventNumber,
} from '../../../../features/event/eventSlice';
import { ChangeEvent } from 'react';
import EventService from '../../../../services/event/event.service';

const eventService = new EventService();

export default function FileActions(): JSX.Element {
  const dispatch = useAppDispatch();
  const eventNumber = useAppSelector(selectEventNumber);
  const isLoading = useAppSelector(selectEventIsLoading);

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

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files) {
      const file = event.target.files[0];

      if (file && file.name.endsWith('.xml')) {
        const reader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>): void => {
          if (e.target) {
            const xmlContent = e.target.result as string;
            const parsedXmlData = eventService.parseXmlAsJSON(xmlContent);
            dispatch(setEventDetailsXML(parsedXmlData));
          }
        };

        reader.onerror = (): void => {
          console.error('Error reading file:', reader.error);
          // Handle the error, e.g., display an error message to the user
        };

        reader.readAsText(file);
        event.target.value = '';
      } else {
        console.error('Invalid file type. Please upload a .xml file.');
        // Display an error message to the user
      }
    }
  };

  return (
    <div className="w-full flex justify-between items-center">
      <input hidden type="file" accept=".xml" id="handleFileUpload" onChange={handleFileUpload} />
      <ArrowUpTrayIcon
        className="icon"
        onClick={(): void => document.getElementById('handleFileUpload')?.click()}
      />
      <div className="flex gap-2 items-center">
        <button disabled={isLoading} onClick={loadPreviousEvent}>
          <ChevronLeftIcon className="icon" />
        </button>
        <span className="text-xs text-light font-medium select-none">
          {group} {eventNumber.eventGroup} {eventNumber.eventIndex.toString().padStart(2, '0')}/50
        </span>
        <button disabled={isLoading} onClick={loadNextEvent}>
          <ChevronRightIcon className="icon" />
        </button>
      </div>
      <FolderIcon className="icon" />
    </div>
  );
}
