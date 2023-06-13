import Checkbox from "../../event-objects/Checkbox.component";

export default function ShowOnly(): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xs">Show only</h3>
      <div className="flex w-full gap-2">
        <Checkbox
          title="muons"
          checked={false}
          onClick={(): void => {
            /* */
          }}
        />
        <Checkbox
          title="electrons"
          checked={false}
          onClick={(): void => {
            /* */
          }}
        />
      </div>
    </div>
  );
}
