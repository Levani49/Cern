import { useIntl } from 'react-intl';

import { ReactComponent as PlusCircleIcon } from '../../../../../assets/svg/plusCircleIcon.svg';
import EventLine from './EventLine.component';
import { useEffect, useState } from 'react';

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
  time,
}: Props): JSX.Element {
  const [show, setShow] = useState(false);
  const intl = useIntl();

  useEffect(() => {
    if (showEventDetails) {
      setShow(true);
    }
  }, [showEventDetails]);

  const infoTitle = intl.formatMessage({ id: 'modal.events.info.name' });
  const infoNumber = intl.formatMessage({ id: 'modal.events.info.number' });
  const lumiB = intl.formatMessage({ id: 'modal.events.info.lumiB' });
  const runN = intl.formatMessage({ id: 'modal.events.info.runN' });
  const eventDate = intl.formatMessage({ id: 'modal.events.info.date' });

  return (
    <div className="mt-1">
      <div className="flex gap-2 items-center">
        <PlusCircleIcon className="icon" onClick={(): void => setShow((prev) => !prev)} />
        <span className="text-blue text-xs">{`${infoTitle} ${eventName}`}</span>
      </div>
      <div className={`${!show && 'hidden'}`}>
        <EventLine titleLabel={infoNumber} title={num} />
        <EventLine titleLabel={lumiB} title={lumiBlocks} />
        <EventLine titleLabel={runN} title={runNumber} />
        <EventLine titleLabel={eventDate} title={`${date} - ${time}`} lastEvent />
      </div>
    </div>
  );
}
