import { useEffect, useState } from "react";

import { ReactComponent as MinusCircleIcon } from "@assets/svg/minusCircleIcon.svg";
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
  active?: boolean;
}

export default function InfoTool({
  eventName,
  showEventDetails,
  num,
  lumiBlocks,
  runNumber,
  date,
  time,
  active = false
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
        {show ? (
          <MinusCircleIcon className="icon" onClick={(): void => setShow((prev) => !prev)} />
        ) : (
          <PlusCircleIcon className="icon" onClick={(): void => setShow((prev) => !prev)} />
        )}

        <span
          className={`select-none text-xs ${active && "text-blue"} ${active && "dark:text-green"}`}
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
