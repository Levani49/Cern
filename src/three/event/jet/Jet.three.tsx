import { useAppSelector } from '../../../app/hooks';
import { selectEvent } from '../../../features/event/eventSlice';
import JetService from '../../../services/event/jet/jet.service';

const jetService = new JetService();

export default function Jet(): JSX.Element {
  const event = useAppSelector(selectEvent);
  // console.log(event);
  if (event?.Event.Jet) {
    if (Array.isArray(event.Event.Jet)) {
      jetService.init(event.Event.Jet[0]);
    } else {
      jetService.init(event.Event.Jet);
    }
  }

  return <></>;
}
