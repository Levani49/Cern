import Checkbox from '../../event-objects/Checkbox.component';

export default function ShowOnly(): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xs">Show only</h3>
      <div className="flex gap-2 w-full">
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
