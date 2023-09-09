import Event from "#/models/Event";

import { memo, useEffect } from "react";

import {
  selectDrawEvents,
  selectEventNumber,
  setEventDetailsXML,
  setEventLoading,
} from "#/store/features/eventSlice";
import { useAppDispatch, useAppSelector } from "#/store/hooks";

import Jet from "./Jet.three";
import Met from "./Met.three";
import Tracks from "./track.three";

const EventHandler = new Event();

function EventVisualisation() {
  const dispatch = useAppDispatch();
  const eventParams = useAppSelector(selectEventNumber);
  const drawEvents = useAppSelector(selectDrawEvents);

  useEffect(() => {
    const asyncCallback = async (): Promise<void> => {
      const path = EventHandler.buildURLWithOptions(eventParams);
      const xmlString = await EventHandler.fetch(path);
      const event = EventHandler.parseXmlAsJSON(xmlString);
      dispatch(setEventDetailsXML({ event: event }));
      dispatch(setEventLoading(false));
    };
    asyncCallback();
  }, [dispatch, eventParams]);

  return (
    <>
      {drawEvents && (
        <>
          <Tracks />
          <Jet />
          <Met />
        </>
      )}
    </>
  );
}

export default memo(EventVisualisation);
