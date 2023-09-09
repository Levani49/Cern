import EventService from "#/services/event/event.service";

import { memo, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "#/store/hooks";
import {
  selectDrawEvents,
  selectEventNumber,
  setEventDetailsXML,
  setEventLoading,
} from "#/features/event/eventSlice";

import Jet from "../jet/Jet.three";
import Met from "../met/Met.three";
import Tracks from "../track/track.three";

const eventService = new EventService();

function Event() {
  const dispatch = useAppDispatch();
  const eventNumber = useAppSelector(selectEventNumber);
  const drawEvents = useAppSelector(selectDrawEvents);

  useEffect(() => {
    const asyncCallback = async (): Promise<void> => {
      const xmlString = await eventService.fetch(
        `group${eventNumber.eventGroup}/event${eventNumber.eventIndex
          .toString()
          .padStart(3, "0")}`
      );
      const event = eventService.parseXmlAsJSON(xmlString);
      dispatch(setEventDetailsXML({ event: event }));
      dispatch(setEventLoading(false));
    };
    asyncCallback();
  }, [dispatch, eventNumber]);

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

export default memo(Event);
