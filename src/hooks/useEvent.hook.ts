import MetModel from "#/models//Met";
import JetModel from "#/models/Jet";
import TrackModel from "#/models/Track";

import { useMemo } from "react";

import type {
  EventDetailsXML,
  EventNumber,
  EventsToShow,
  JetFilter,
  TrackFilter,
} from "#/types/app.types";
import {
  selectEvent,
  selectEventNumber,
  selectEventParameters,
  selectJetFilter,
  selectTrackFilter,
} from "#/store/features/eventSlice";
import { useAppSelector } from "#/store/hooks";

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
      TRACK: trackService,
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
