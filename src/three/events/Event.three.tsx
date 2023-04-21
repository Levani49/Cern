import { useEffect, useState } from 'react';
import XmlService from '../../services/event/xml/xml.service';
import { setXmlGeneralInfo } from '../../features/events/eventsSlice';
import { useAppDispatch } from '../../app/hooks';
import Tracks from './tracks/tracks.three';
import TileCalCells from './tile-cal-cells/TileCalCells.three';
import Jet from './jet/Jet.three';
import Met from '../met/Met.three';
import Clusters from './clusters/Clusters.three';
import Hits from '../hits/Hits.three';

const xmlService = new XmlService();

export default function Events(): JSX.Element {
  const [xmlData, setXmlData] = useState<null | Document>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const asyncCallback = async (): Promise<void> => {
      const xmlString = await xmlService.fetch('groupA/event005');

      const xml = xmlService.parseXml(xmlString);

      const info = xmlService.getXmlGeneralInfo(xml);

      if (info) {
        dispatch(setXmlGeneralInfo(info));
      } else {
        throw new Error(
          'Error while fetching events, please refresh the page or try again later...',
        );
      }

      setXmlData(xml);
    };
    asyncCallback();
  }, [dispatch]);

  console.log(xmlData);

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
