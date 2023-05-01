import { useMemo } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectEvent, selectEventParameters } from '../../../features/event/eventSlice';
import { TrackMesh } from '../../../services/event/track/track.service.types';
import TrackService from '../../../services/event/track/track.service';

const trackService = new TrackService();

export default function Track(): JSX.Element {
  const event = useAppSelector(selectEvent);
  const eventParameters = useAppSelector(selectEventParameters);

  const tracksToDraw = useMemo(() => {
    if (event) {
      if (Array.isArray(event.Event.Track)) {
        trackService.init(event.Event.Track[0]);
      } else {
        trackService.init(event.Event.Track);
      }
      return trackService.drawTracksMain();
    }
    return null;
  }, [event]);

  if (tracksToDraw && eventParameters.tracks) {
    return (
      <group name="tracks">
        {tracksToDraw.map((track: TrackMesh, i: number): JSX.Element => {
          return (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <line key={i} geometry={track.geometry}>
              <lineBasicMaterial
                attach="material"
                color="#ffff00"
                linewidth={10}
                linecap="round"
                linejoin="round"
              />
            </line>
          );
        })}
      </group>
    );
  }

  return <></>;
}
