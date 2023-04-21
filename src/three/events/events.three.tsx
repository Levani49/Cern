import { useEffect } from 'react';
import XmlService from '../../services/xml/Xml.service';
import { setXmlGeneralInfo } from '../../features/events/eventsSlice';
import { useAppDispatch } from '../../app/hooks';

const xmlService = new XmlService();

export default function Events(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const asyncCallback = async (): Promise<void> => {
      const xml = await xmlService.fetch('groupA/event005');
      const info = xmlService.getXmlGeneralInfo(xml);

      if (info) {
        dispatch(setXmlGeneralInfo(info));
      } else {
        throw new Error(
          'Error while fetching events, please refresh the page or try again later...',
        );
      }
    };
    asyncCallback();
  }, [dispatch]);

  return <></>;
}
