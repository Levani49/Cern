import { ChangeEvent, useEffect, useState } from "react";
import Select, { StylesConfig } from "react-select";

import { ReactComponent as ArrowUpTrayIcon } from "@assets/svg/arrowUpTrayIcon.svg";
import { ReactComponent as ChevronLeftIcon } from "@assets/svg/chervonLeftIcon.svg";
import { ReactComponent as ChevronRightIcon } from "@assets/svg/chervonRightIcon.svg";
import { ReactComponent as FolderIcon } from "@assets/svg/folderIcon.svg";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import {
  selectEventIsLoading,
  selectEventNumber,
  setEventDetailsXML,
  setEventNumber
} from "@features/event/eventSlice";

import EventService from "@services/event/event.service";

import { eventFileIsValid } from "@utils/eventFileIsValid.utils";

type HandleOptionChange = {
  value: string;
  label: string;
};

const groupSelectOptions = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r"
].map((group) => {
  const g = group.toUpperCase();

  return {
    value: g,
    label: `group ${g}`
  };
});

const eventSelectOptions = Array.from({ length: 50 }, (_, index) => index + 1).map(
  (eventNumber) => {
    return {
      value: eventNumber,
      label: `Event #${eventNumber}`
    };
  }
);

const customStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    color: "black",
    fontSize: "16px",
    padding: "0",
    minHeight: "30px",
    backgroundColor: "rgb(41,45,57)"
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: "0px",
    paddingLeft: "2px",
    paddingRight: "2px"
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "rgb(41,45,57)",
    maxHeight: "200px",
    position: "relative",
    overflowY: "auto",
    padding: "0"
  }),
  option: (provided, state) => ({
    ...provided,
    borderRadius: "4px",
    fontSize: "16px",
    backgroundColor: state.isSelected
      ? "rgb(64, 207, 142)"
      : state.isFocused
      ? "rgba(255, 255, 255, 0.16)"
      : "transparent"
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "rgb(223, 230, 233)"
  })
};

const eventService = new EventService();

export default function FileActions(): JSX.Element {
  const dispatch = useAppDispatch();
  const eventNumber = useAppSelector(selectEventNumber);
  const [error, setError] = useState(false);
  const isLoading = useAppSelector(selectEventIsLoading);
  const [eventNum, setEventNum] = useState({ eventGroup: "F", eventIndex: 5 });
  const [showGroupSelection, setShowGroupSelection] = useState(false);

  useEffect(() => {
    setError(false);
  }, []);

  const loadPreviousEvent = (): void => {
    const index = eventNumber.eventIndex === 1 ? 50 : eventNumber.eventIndex - 1;

    dispatch(
      setEventNumber({
        ...eventNumber,
        eventIndex: index
      })
    );
  };
  const loadNextEvent = (): void => {
    const index = eventNumber.eventIndex === 50 ? 1 : eventNumber.eventIndex + 1;

    dispatch(
      setEventNumber({
        ...eventNumber,
        eventIndex: index
      })
    );
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files) {
      const file = event.target.files[0];
      const fileName = file.name;

      if (file && file.name.endsWith(".xml")) {
        const reader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>): void => {
          if (e.target) {
            const xmlContent = e.target.result as string;
            const parsedXmlData = eventService.parseXmlAsJSON(xmlContent);

            if (eventFileIsValid(parsedXmlData)) {
              dispatch(setEventDetailsXML({ event: parsedXmlData, fileName }));
              setError(false);
            } else {
              setError(true);
            }
          }
        };

        reader.onerror = (): void => {
          console.error("Error reading file:", reader.error);
          // Handle the error, e.g., display an error message to the user
        };

        reader.readAsText(file);
        event.target.value = "";
      } else {
        console.error("Invalid file type. Please upload a .xml file.");
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
      <div className="flex w-full items-center justify-between text-accent3">
        <input
          hidden
          type="file"
          accept=".xml"
          id="handleFileUpload"
          onChange={handleFileUpload}
        />
        <button
          title="Upload file"
          onClick={(): void => document.getElementById("handleFileUpload")?.click()}
        >
          <ArrowUpTrayIcon className="icon text-accent3" />
        </button>
        <div className="flex items-center gap-2">
          <button
            title="Load previous event"
            disabled={isLoading}
            onClick={loadPreviousEvent}
          >
            <ChevronLeftIcon className="icon text-accent3" />
          </button>
          <span className="font-mediumt select-none text-xs">
            Group {eventNumber.eventGroup}{" "}
            {eventNumber.eventIndex.toString().padStart(2, "0")}/50
          </span>
          <button
            title="Load Next event"
            disabled={isLoading}
            onClick={loadNextEvent}
          >
            <ChevronRightIcon className="icon text-accent3" />
          </button>
        </div>
        <button
          title="Load event from database"
          onClick={(): void => setShowGroupSelection((prev) => !prev)}
        >
          <FolderIcon className="icon text-accent3" />
        </button>
      </div>
      <div
        className={`flex flex-col gap-2  transition-all duration-700 ${
          showGroupSelection
            ? "mt-4 max-h-96 overflow-y-auto"
            : "mt-0 max-h-0 overflow-y-hidden"
        }`}
      >
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
        <button
          className="rounded bg-accent2 px-2 py-2 text-xs uppercase text-textColor transition hover:bg-black dark:bg-accent1"
          onClick={handleLoad}
        >
          Load
        </button>
      </div>
      {error && <p className="text-xs text-red-500">Unsupported file</p>}
    </>
  );
}
