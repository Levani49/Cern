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
    <div className="flex justify-between gap-4">
      {eventLabels.map(({ key, label }) => (
        <Checkbox
          key={key}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          checked={eventParameters[key]}
          onClick={handleEventToggle(key)}
          title={label}
        />
      ))}
    </div>
  );
}
