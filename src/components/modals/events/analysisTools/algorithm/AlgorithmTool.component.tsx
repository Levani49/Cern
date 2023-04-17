import { useIntl } from 'react-intl';

import AlgorithmSectionFor from './AlgorithmSectionFor.component';

import {
  TRACK_ALGORITHMS,
  JET_ALGORITHMS,
  Hits_Algorithms,
} from '../../../../../constants/events';

export default function AlgorithmTool(): JSX.Element {
  const intl = useIntl();

  const tracks = intl.formatMessage({ id: 'modal.events.algorithms.tracks' });
  const jets = intl.formatMessage({ id: 'modal.events.algorithms.jets' });
  const clusters = intl.formatMessage({
    id: 'modal.events.algorithms.clusters',
  });

  return (
    <div className="flex flex-col gap-2 p-2">
      <AlgorithmSectionFor title={tracks} algorithmsList={TRACK_ALGORITHMS} />
      <AlgorithmSectionFor title={jets} algorithmsList={JET_ALGORITHMS} />
      <AlgorithmSectionFor title={clusters} algorithmsList={Hits_Algorithms} />
    </div>
  );
}
