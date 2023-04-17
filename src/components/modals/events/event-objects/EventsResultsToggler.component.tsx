import { useIntl } from 'react-intl';

import Checkbox from './Checkbox.component';

export default function EventsResultsToggler(): JSX.Element {
  const intl = useIntl();
  const tracks = intl.formatMessage({ id: 'modal.events.tracks' });
  const jets = intl.formatMessage({ id: 'modal.events.jets' });
  const met = intl.formatMessage({ id: 'modal.events.met' });
  const cells = intl.formatMessage({ id: 'modal.events.cells' });
  const clusters = intl.formatMessage({ id: 'modal.events.clusters' });
  const hits = intl.formatMessage({ id: 'modal.events.hits' });

  return (
    <div className="grid grid-cols-3  gap-2 justify-items-center">
      <Checkbox title={tracks} />
      <Checkbox title={jets} className="relative left-[-12px]" />
      <Checkbox title={met} />
      <Checkbox title={cells} className="relative left-[-5px]" />
      <Checkbox title={clusters} />
      <Checkbox title={hits} />
    </div>
  );
}
