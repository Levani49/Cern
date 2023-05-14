import { useEffect, useMemo, useRef } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectEvent } from '../../../features/event/eventSlice';
import MetService from '../../../model/event/met/met.model';

const metService = new MetService();

export default function Met(): JSX.Element {
  const event = useAppSelector(selectEvent);
  const lineRef = useRef(null);

  useEffect(() => {
    if (lineRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      lineRef.current.computeLineDistances();
    }
  }, []);

  const metToDraw = useMemo(() => {
    if (event) {
      if (Array.isArray(event.Event.ETMis)) {
        metService.init(event.Event.ETMis[0]);
      } else {
        metService.init(event.Event.ETMis);
      }
      return metService.drawMet();
    }
    return null;
  }, [event]);

  if (metToDraw) {
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <line ref={lineRef} geometry={metToDraw.geometry}>
        <lineDashedMaterial attach="material" color="#ff0000" dashSize={0.5} gapSize={0.1} />
      </line>
    );
  }

  return <></>;
}
