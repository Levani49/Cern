import AlgorithmSectionFor from './AlgorithmSectionFor.component';

import { TRACK_ALGORITHMS, JET_ALGORITHMS, Hits_Algorithms } from '../../../../../constants/events';

export default function AlgorithmTool(): JSX.Element {
  return (
    <div className="flex flex-col gap-2 p-2">
      <AlgorithmSectionFor title="tracks" algorithmsList={TRACK_ALGORITHMS} />
      <AlgorithmSectionFor title="Jets" algorithmsList={JET_ALGORITHMS} />
      <AlgorithmSectionFor title="Clusters" algorithmsList={Hits_Algorithms} />
    </div>
  );
}
