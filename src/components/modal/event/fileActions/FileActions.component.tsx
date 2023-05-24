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
import { ChangeEvent, useState } from 'react';
import EventService from '../../../../services/event/event.service';

import Select, { StylesConfig } from 'react-select';

type HandleOptionChange = {
  value: string;
  label: string;
};

const groupSelectOptions = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
].map((group) => {
  const g = group.toUpperCase();

  return {
    value: g,
    label: `group ${g}`,
  };
});

const eventSelectOptions = Array.from({ length: 50 }, (_, index) => index + 1).map(
  (eventNumber) => {
    return {
      value: eventNumber,
      label: `Event #${eventNumber}`,
    };
  },
);

const customStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    color: 'black',
    fontSize: '10px',
    padding: '0',
    minHeight: '30px',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: '0px',
    paddingLeft: '2px',
    paddingRight: '2px',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'rgb(28, 28, 28)',
    padding: '0',
  }),
  option: (provided, state) => ({
    ...provided,
    borderRadius: '4px',
    fontSize: '12px',
    backgroundColor: state.isSelected
      ? 'rgb(64, 207, 142)'
      : state.isFocused
      ? 'lightgray'
      : 'transparent',
  }),
};

const eventService = new EventService();

export default function FileActions(): JSX.Element {
  const dispatch = useAppDispatch();
  const eventNumber = useAppSelector(selectEventNumber);
  const isLoading = useAppSelector(selectEventIsLoading);
  const [eventNum, setEventNum] = useState({ eventGroup: 'F', eventIndex: 5 });
  const [showGroupSelection, setShowGroupSelection] = useState(false);

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

  const handleGroupChange = (e: unknown): void => {
    const event = e as HandleOptionChange;
    setEventNum((prev) => ({ ...prev, eventGroup: event.value }));
  };

  const handleEventChange = (e: unknown): void => {
    const event = e as HandleOptionChange;
    setEventNum((prev) => ({ ...prev, eventIndex: +event.value }));
  };

  const handleLoad = (): void => {
    dispatch(setEventNumber(eventNum));
  };

  return (
    <>
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
        <FolderIcon className="icon" onClick={(): void => setShowGroupSelection((prev) => !prev)} />
      </div>
      <div className={`flex gap-2 ${showGroupSelection ? '' : 'hidden'}`}>
        <Select
          options={groupSelectOptions}
          defaultValue={groupSelectOptions[5]}
          styles={customStyles}
          onChange={handleGroupChange}
        />
        <Select
          options={eventSelectOptions}
          defaultValue={eventSelectOptions[4]}
          styles={customStyles}
          onChange={handleEventChange}
        />
        <button className="bg-green px-2 py-1 rounded uppercase text-xs" onClick={handleLoad}>
          Load
        </button>
      </div>
    </>
  );
}
