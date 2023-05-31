import AlgorithmSectionFor from './AlgorithmSectionFor.component';

import { TRACK_ALGORITHMS, JET_ALGORITHMS, Hits_Algorithms } from '../../../../../constants/event';

export default function AlgorithmTool(): JSX.Element {
  return (
    <div className="flex flex-col gap-2 p-2">
      <AlgorithmSectionFor title="Tracks" algorithmsList={TRACK_ALGORITHMS} />
      <AlgorithmSectionFor title="Jets" algorithmsList={JET_ALGORITHMS} />
      <AlgorithmSectionFor title="Algorithms" algorithmsList={Hits_Algorithms} />
    </div>
  );
}
