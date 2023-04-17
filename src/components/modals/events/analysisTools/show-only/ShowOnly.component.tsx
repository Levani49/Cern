import { useIntl } from 'react-intl';
import Checkbox from '../../event-objects/Checkbox.component';

export default function ShowOnly(): JSX.Element {
  const intl = useIntl();

  const showOnly = intl.formatMessage({ id: 'modal.events.filter.showOnly' });
  const muons = intl.formatMessage({ id: 'modal.events.filter.muons' });
  const electrons = intl.formatMessage({ id: 'modal.events.filter.electrons' });

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xs">{showOnly}</h3>
      <div className="flex gap-2 w-full">
        <Checkbox title={muons} />
        <Checkbox title={electrons} />
      </div>
    </div>
  );
}
