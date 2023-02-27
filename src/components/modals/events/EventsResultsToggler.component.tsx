import Checkbox from "./Checkbox.component";

/**
 *
 */
export default function EventsResultsToggler(): JSX.Element {
  return (
    <div className="grid grid-cols-3  gap-2 justify-items-center">
      <Checkbox title="Tracks" />
      <Checkbox title="Jets" className="relative left-[-10px]" />
      <Checkbox title="Met" />
      <Checkbox title="Cells" className="relative left-[-5px]" />
      <Checkbox title="Clusters" />
      <Checkbox title="Hits" />
    </div>
  );
}
