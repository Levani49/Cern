import { useEffect, useState } from "react";

import type { UploadedEvent } from "#/types/app.types";
import Icons from "#/utils/icons";
import { setEventDetailsXML } from "#/store/features/eventSlice";
import { useAppDispatch } from "#/store/hooks";

import EventLine from "./EventLine";

interface Props {
  eventName: string;
  showEventDetails: boolean;
  num: string;
  lumiBlocks: string;
  runNumber: string;
  date: string;
  time: string;
  active?: boolean;
  loadedEvent: UploadedEvent;
}

export default function InfoTool({
  eventName,
  showEventDetails,
  num,
  lumiBlocks,
  runNumber,
  date,
  time,
  loadedEvent,
  active = false,
}: Props) {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (showEventDetails) {
      setShow(true);
    }
  }, [showEventDetails]);

  const handleEventLoad = (): void => {
    if (active) {
      return;
    }

    const { event, name } = loadedEvent;

    dispatch(setEventDetailsXML({ event, fileName: name }));
  };

  return (
    <div className="mt-1">
      <div className="flex items-center gap-2">
        {show ? (
          <Icons.MinusCircleIcon
            className="icon h-4 w-4 text-highlight1"
            onClick={(): void => setShow((prev) => !prev)}
          />
        ) : (
          <Icons.PlusCircleIcon
            className="icon  h-4 w-4  text-highlight1"
            onClick={(): void => setShow((prev) => !prev)}
          />
        )}

        <span
          role="presentation"
          onClick={handleEventLoad}
          className={`cursor-pointer select-none text-xs capitalize hover:text-accent2 dark:hover:text-accent1  ${
            active && "text-accent2 dark:text-accent1"
          }`}
        >{`event ${eventName}`}</span>
      </div>
      <div className={`${!show && "hidden"}`}>
        <EventLine titleLabel="event id" title={num} />
        <EventLine titleLabel="lumiB" title={lumiBlocks} />
        <EventLine titleLabel="runN" title={runNumber} />
        <EventLine titleLabel="date" title={`${date} - ${time}`} lastEvent />
      </div>
    </div>
  );
}
