import { useEffect } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { setXmlEvent } from '../../features/events/eventsSlice';
import EventService from '../../services/event/event/event.service';

import Jet from './jet/Jet.three';
import Met from '../met/Met.three';
import Tracks from './tracks/tracks.three';
import Hits from '../hits/Hits.three';
import Clusters from './clusters/Clusters.three';
import TileCalCells from './tileCal-cells/TileCalCells.three';

const eventService = new EventService();

export default function Events(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const asyncCallback = async (): Promise<void> => {
      const xmlString = await eventService.fetch('groupA/event005');
      const xml = eventService.parseXmlAsJSON(xmlString);
      dispatch(setXmlEvent(xml));
    };
    asyncCallback();
  }, [dispatch]);

  return (
    <>
      <Tracks />
      <Jet />
      <Met />
      <TileCalCells />
      <Clusters />
      <Hits />
    </>
  );
}
