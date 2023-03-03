import AlgorithmSectionFor from "./AlgorithmSectionFor.component";

const TRACK_ALGORITHMS = [
  "Staco Track",
  "Particles",
  "Combined Fit Muon Particles",
  "Converted Staco Tracks",
  "Muon Spectrometer Tracks",
  "Combined Fit Muon Tracks",
  "Tracks",
];

const JET_ALGORITHMS = [
  "Anti KT6 Ghost Tower Jets_AOD",
  "Anti KT6 Tower Jets_AOD",
  "Anti KT6LC TopoJets_AOD",
  "Anti KT4LC TopoJets_AOD",
  "Anti KT6 Tower Jets",
  "Anti KT6LC Topo Jets",
  "Anti KT4LC Topo Jets",
  "Anti KT4 Topo EM Jets",
];

const Hits_Algorithms = ["MDT", "RPC", "TGC", "CSCD"];

/**
 *
 */
export default function AlgorithmTool(): JSX.Element {
  return (
    <div className="flex flex-col gap-2 p-2">
      <AlgorithmSectionFor title="tracks" algorithmsList={TRACK_ALGORITHMS} />
      <AlgorithmSectionFor title="Jets" algorithmsList={JET_ALGORITHMS} />
      <AlgorithmSectionFor title="Clusters" algorithmsList={Hits_Algorithms} />
    </div>
  );
}
