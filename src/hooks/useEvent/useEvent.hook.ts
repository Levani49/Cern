import { useMemo } from "react";

import { useAppSelector } from "@store/hooks";

import {
  selectEvent,
  selectEventNumber,
  selectEventParameters,
  selectJetFilter,
  selectTrackFilter
} from "@features/event/eventSlice";
import {
  EventNumber,
  EventsToShow,
  JetFilter,
  TrackFilter
} from "@features/event/eventSlice.types";

import { EventDetailsXML } from "@services/event/event.service.types";

import JetModel from "@models/event/jet/jet.model";
import MetModel from "@models/event/met/met.model";
import TrackModel from "@models/event/track/track.model";

const jetService = new JetModel();
const trackService = new TrackModel();
const metModel = new MetModel();

export default function useEvent(): useEvent {
  const event = useAppSelector(selectEvent);
  const eventParameters = useAppSelector(selectEventParameters);
  const jetFilterValues = useAppSelector(selectJetFilter);
  const trackFilterValues = useAppSelector(selectTrackFilter);
  const eventNumber = useAppSelector(selectEventNumber);

  const payload = useMemo(
    (): useEvent => ({
      event,
      eventNumber,
      eventParameters,
      jetFilterValues,
      trackFilterValues,
      JET: jetService,
      MET: metModel,
      TRACK: trackService
    }),
    [event, eventParameters, trackFilterValues, eventNumber, jetFilterValues]
  );
  return payload;
}

interface useEvent {
  event: EventDetailsXML | null;
  eventParameters: EventsToShow;
  jetFilterValues: JetFilter;
  trackFilterValues: TrackFilter;
  eventNumber: EventNumber;
  JET: JetModel;
  MET: MetModel;
  TRACK: TrackModel;
}
