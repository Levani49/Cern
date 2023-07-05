import { useAppDispatch, useAppSelector } from "@store/hooks";

import {
  selectEventParameters,
  setEventParameters
} from "@features/event/eventSlice";

import Checkbox from "./Checkbox.component";

export default function EventsResultsToggler(): JSX.Element {
  const dispatch = useAppDispatch();
  const eventParameters = useAppSelector(selectEventParameters);

  const eventLabels = [
    { key: "tracks", label: "tracks" },
    { key: "jets", label: "jets" },
    { key: "met", label: "met" }
  ];

  const handleEventToggle = (key: string) => () => {
    dispatch(
      setEventParameters({
        ...eventParameters,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        [key]: !eventParameters[key]
      })
    );
  };

  return (
    <div className="flex justify-between gap-2">
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
            <p className="text-xs text-textColor">{label.toUpperCase()}</p>
          </div>
        );
      })}
    </div>
  );
}
