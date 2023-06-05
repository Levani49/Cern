import { useMemo } from 'react';
import { useAppSelector } from '../../../app/hooks';
import {
  selectEvent,
  selectEventParameters,
  selectTrackFilter,
} from '../../../features/event/eventSlice';
import { TrackMesh } from '../../../model/event/track/track.model.types';
import TrackService from '../../../model/event/track/track.model';

const trackService = new TrackService();

export default function Track(): JSX.Element {
  const event = useAppSelector(selectEvent);
  const eventParameters = useAppSelector(selectEventParameters);
  const trackFilterValues = useAppSelector(selectTrackFilter);

  const tracksToDraw = useMemo(() => {
    if (event) {
      if (Array.isArray(event.Event.Track)) {
        trackService.init(event.Event.Track[0]);
      } else {
        trackService.init(event.Event.Track);
      }
      return trackService.drawTracksMain(trackFilterValues);
    }
    return null;
  }, [event, trackFilterValues]);

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
