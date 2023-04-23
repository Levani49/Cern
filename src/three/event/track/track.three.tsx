import { useAppSelector } from '../../../app/hooks';
import { selectEvent } from '../../../features/event/eventsSlice';
import TrackService from '../../../services/event/track/track.service';

const trackService = new TrackService();

export default function Track(): JSX.Element {
  const event = useAppSelector(selectEvent);

  if (event) {
    if (Array.isArray(event.Event.Track)) {
      trackService.init(event.Event.Track[0]);
    } else {
      trackService.init(event.Event.Track);
    }
  }

  return <></>;
}
