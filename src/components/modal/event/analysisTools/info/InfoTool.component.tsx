import { useEffect, useState } from "react";

import { ReactComponent as MinusCircleIcon } from "@assets/svg/minusCircleIcon.svg";
import { ReactComponent as PlusCircleIcon } from "@assets/svg/plusCircleIcon.svg";

import { useAppDispatch } from "@store/hooks";

import { setEventDetailsXML } from "@features/event/eventSlice";
import { UploadedEvent } from "@features/event/eventSlice.types";

import EventLine from "./EventLine.component";

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
  active = false
}: Props): JSX.Element {
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

    // if (isCustom) {
    //   if (event) {
    //     dispatch(setEventDetailsXML({ event, fileName: name }));
    //   }
    // } else {
    //   const eventGroup = eventName.split(" ")[0];
    //   const eventIndex = eventName.split(" ")[1].split("/")[0];

    //   dispatch(
    //     setEventNumber({
    //       eventGroup,
    //       eventIndex: Number(eventIndex)
    //     })
    //   );
    // }
  };

  return (
    <div className="mt-1">
      <div className="flex items-center gap-2">
        {show ? (
          <MinusCircleIcon
            className="icon h-4 w-4 text-[rgb(55,60,75)]"
            onClick={(): void => setShow((prev) => !prev)}
          />
        ) : (
          <PlusCircleIcon
            className="icon  h-4 w-4  text-[rgb(55,60,75)]"
            onClick={(): void => setShow((prev) => !prev)}
          />
        )}

        <span
          role="presentation"
          onClick={handleEventLoad}
          className={`cursor-pointer select-none text-xs capitalize hover:text-blue dark:hover:text-green  ${
            active && "text-blue dark:text-green"
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
