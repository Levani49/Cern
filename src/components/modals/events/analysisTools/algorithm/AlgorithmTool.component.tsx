import AlgorithmSectionFor from "./AlgorithmSectionFor.component";

const TRACKS_APLGORITHMS = [
  "Staco Track",
  "Particles",
  "Combined Fit Muon Particles",
  "Converted Staco Tracks",
  "Muon Spectrometer Tracks",
  "Combined Fit Muon Tracks",
  "Tracks",
];

/**
 *
 */
export default function AlgorithmTool(): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <AlgorithmSectionFor title="tracks" algorithmsList={TRACKS_APLGORITHMS} />
      <AlgorithmSectionFor title="tracks" algorithmsList={TRACKS_APLGORITHMS} />
    </div>
  );
}
