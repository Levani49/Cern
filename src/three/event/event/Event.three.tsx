import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  selectEventNumber,
  setEventDetailsXML,
  setEventLoading,
} from '../../../features/event/eventSlice';
import EventService from '../../../services/event/event/event.service';

import Jet from '../jet/Jet.three';
import Met from '../met/Met.three';
import Tracks from '../track/track.three';

const eventService = new EventService();

export default function Event(): JSX.Element {
  const dispatch = useAppDispatch();
  const eventNumber = useAppSelector(selectEventNumber);

  useEffect(() => {
    const asyncCallback = async (): Promise<void> => {
      const xmlString = await eventService.fetch(
        `group${eventNumber.eventGroup}/event${eventNumber.eventIndex.toString().padStart(3, '0')}`,
      );
      const event = eventService.parseXmlAsJSON(xmlString);
      dispatch(setEventDetailsXML(event));
      dispatch(setEventLoading(false));
    };
    asyncCallback();
  }, [dispatch, eventNumber]);

  return (
    <>
      <Tracks />
      <Jet />
      <Met />
    </>
  );
}
