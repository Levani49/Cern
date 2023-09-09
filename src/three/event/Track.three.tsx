import { useMemo } from "react";

import type { TrackMesh } from "#/types/app.types";
import useEvent from "#/hooks/useEvent.hook";

export default function Track() {
  const { event, eventParameters, trackFilterValues, TRACK } = useEvent();

  const tracksToDraw = useMemo(() => {
    if (event) {
      if (Array.isArray(event.Event.Track)) {
        TRACK.init(event.Event.Track[0]);
      } else {
        TRACK.init(event.Event.Track);
      }
      return TRACK.drawTracksMain(trackFilterValues);
    }
    return null;
  }, [event, trackFilterValues, TRACK]);

  if (tracksToDraw && eventParameters.tracks) {
    return (
      <group name="tracks">
        {tracksToDraw.map((track: TrackMesh, i: number) => {
          return (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <line key={i} geometry={track.geometry}>
              <lineBasicMaterial
                attach="material"
                color="#ffff00"
                linewidth={1}
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
