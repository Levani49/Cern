import {
  selectEventParameters,
  setEventParameters,
} from "#/store/features/eventSlice";
import { useAppDispatch, useAppSelector } from "#/store/hooks";

import Checkbox from "./Checkbox.component";

export default function EventsResultsToggler() {
  const dispatch = useAppDispatch();
  const eventParameters = useAppSelector(selectEventParameters);

  const eventLabels = [
    { key: "tracks", label: "tracks" },
    { key: "jets", label: "jets" },
    { key: "met", label: "met" },
  ];

  const handleEventToggle = (key: string) => () => {
    dispatch(
      setEventParameters({
        ...eventParameters,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        [key]: !eventParameters[key],
      })
    );
  };

  return (
    <div className="mt-4 flex justify-between gap-2">
      {eventLabels.map(({ key, label }) => {
        return (
          <div className="flex items-center gap-2" key={key + label}>
            <Checkbox
              id={label}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              checked={eventParameters[key]}
              onClick={handleEventToggle(key)}
            />
            <p className="select-none text-xs text-textColor">
              {label.toUpperCase()}
            </p>
          </div>
        );
      })}
    </div>
  );
}
