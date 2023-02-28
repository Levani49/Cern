import { PlusCircleIcon } from "@heroicons/react/24/outline";
import EventLine from "./EventLine.component";

interface Props {
  show: boolean;
  eventName: string;
  num: string;
  lumiBlocks: string;
  runNumber: string;
  date: string;
  time: string;
}

/**
 *
 * @param root0
 * @param root0.lastEvent
 * @param root0.eventName
 * @param root0.num
 * @param root0.lumiBlocks
 * @param root0.runNumber
 * @param root0.date
 * @param root0.time
 * @param root0.show
 */
export default function InfoTool({
  show,
  eventName,
  num,
  lumiBlocks,
  runNumber,
  date,
  time,
}: Props): JSX.Element {
  return (
    <div className={`${!show && "hidden"}`}>
      <div className="flex gap-2 items-center">
        <PlusCircleIcon className="icon" />
        <span className="text-blue text-xs">{eventName}</span>
      </div>
      <div className={`${!show && "hidden"}`}>
        <EventLine titleLabel="Num" title={num} />
        <EventLine titleLabel="LumiB" title={lumiBlocks} />
        <EventLine titleLabel="RunN" title={runNumber} />
        <EventLine titleLabel="Date" title={date} />
        <EventLine titleLabel="Time" title={time} lastEvent />
      </div>
    </div>
  );
}
