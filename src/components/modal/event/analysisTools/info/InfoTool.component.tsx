import { useEffect, useState } from "react";

import { ReactComponent as PlusCircleIcon } from "@assets/svg/plusCircleIcon.svg";

import EventLine from "./EventLine.component";

interface Props {
  eventName: string;
  showEventDetails: boolean;
  num: string;
  lumiBlocks: string;
  runNumber: string;
  date: string;
  time: string;
}

export default function InfoTool({
  eventName,
  showEventDetails,
  num,
  lumiBlocks,
  runNumber,
  date,
  time
}: Props): JSX.Element {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (showEventDetails) {
      setShow(true);
    }
  }, [showEventDetails]);

  return (
    <div className="mt-1">
      <div className="flex items-center gap-2">
        <PlusCircleIcon
          className="icon"
          onClick={(): void => setShow((prev) => !prev)}
        />
        <span className="text-xs text-blue dark:text-green">{`event ${eventName}`}</span>
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