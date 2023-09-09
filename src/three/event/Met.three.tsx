import { useEffect, useMemo, useRef } from "react";

import useEvent from "#/hooks/useEvent.hook";

export default function Met() {
  const { event, eventParameters, MET } = useEvent();
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
        MET.init(event.Event.ETMis[0]);
      } else {
        MET.init(event.Event.ETMis);
      }
      return MET.drawMet();
    }
    return null;
  }, [event, MET]);

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
