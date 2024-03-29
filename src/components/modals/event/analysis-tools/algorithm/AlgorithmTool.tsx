import {
  Hits_Algorithms,
  JET_ALGORITHMS,
  TRACK_ALGORITHMS,
} from "#/constants/event";

import AlgorithmSectionFor from "./AlgorithmSectionFor";

export default function AlgorithmTool() {
  return (
    <div className="flex flex-col gap-2 p-2">
      <AlgorithmSectionFor title="Tracks" algorithmsList={TRACK_ALGORITHMS} />
      <AlgorithmSectionFor title="Jets" algorithmsList={JET_ALGORITHMS} />
      <AlgorithmSectionFor title="Algorithms" algorithmsList={Hits_Algorithms} />
    </div>
  );
}
