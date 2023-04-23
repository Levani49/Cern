import { useIntl } from 'react-intl';

import { ReactComponent as PlusCircleIcon } from '../../../../../assets/svg/plusCircleIcon.svg';
import EventLine from './EventLine.component';

interface Props {
  show: boolean;
  eventName: string;
  num: string;
  lumiBlocks: string;
  runNumber: string;
  date: string;
  time: string;
}

export default function InfoTool({
  show,
  eventName,
  num,
  lumiBlocks,
  runNumber,
  date,
  time,
}: Props): JSX.Element {
  const intl = useIntl();

  const infoTitle = intl.formatMessage({ id: 'modal.events.info.name' });
  const infoNumber = intl.formatMessage({ id: 'modal.events.info.number' });
  const lumiB = intl.formatMessage({ id: 'modal.events.info.lumiB' });
  const runN = intl.formatMessage({ id: 'modal.events.info.runN' });
  const eventDate = intl.formatMessage({ id: 'modal.events.info.date' });

  return (
    <div className={`${!show && 'hidden'} ml-2`}>
      <div className="flex gap-2 items-center">
        <PlusCircleIcon className="icon" />
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
