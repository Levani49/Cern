import { useMemo } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectEvent } from '../../../features/event/eventsSlice';
import TrackService from '../../../services/event/track/track.service';

const trackService = new TrackService();

export default function Track(): JSX.Element {
  const event = useAppSelector(selectEvent);

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

  if (tracksToDraw) {
    return (
      <group name="tracks">
        {tracksToDraw.map((track, i) => {
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
          // return (
          //   <mesh key={i}>
          //     <primitive object={line} />
          //     <meshBasicMaterial attach="material" color="#d1e70e" />
          //   </mesh>
          // );
        })}
      </group>
    );
  }

  // const points = [];
  // points.push(new Vector3(-10, 0, 0));
  // points.push(new Vector3(0, 10, 0));
  // points.push(new Vector3(10, 0, 0));

  // const lineGeometry = new BufferGeometry().setFromPoints(points);

  return <></>;
}
