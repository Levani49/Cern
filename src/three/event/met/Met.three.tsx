import { useEffect, useMemo, useRef } from "react";

import { useAppSelector } from "@store/hooks";

import { selectEvent, selectEventParameters } from "@features/event/eventSlice";

import MetModel from "@models/event/met/met.model";

const metModel = new MetModel();

export default function Met(): JSX.Element {
  const event = useAppSelector(selectEvent);
  const eventParameters = useAppSelector(selectEventParameters);
  const lineRef = useRef(null);

  useEffect(() => {
    if (lineRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      lineRef.current.computeLineDistances();
    }
  }, [lineRef, event]);

  const metToDraw = useMemo(() => {
    if (event) {
      if (Array.isArray(event.Event.ETMis)) {
        metModel.init(event.Event.ETMis[0]);
      } else {
        metModel.init(event.Event.ETMis);
      }
      return metModel.drawMet();
    }
    return null;
  }, [event]);

  if (metToDraw && eventParameters.met) {
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <line ref={lineRef} geometry={metToDraw.geometry}>
        <lineDashedMaterial
          attach="material"
          color="#ff0000"
          dashSize={0.5}
          gapSize={0.1}
        />
      </line>
    );
  }

  return <></>;
}
