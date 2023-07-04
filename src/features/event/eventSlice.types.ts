import {
  EventDetailsXML,
  EventOverviewData
} from "@services/event/event.service.types";

export interface UploadedEvent {
  isCustom: boolean;
  event: EventDetailsXML;
  name: string;
}

export interface LoadedEvents extends EventOverviewData {
  eventName: string;
  loadedEvent: UploadedEvent;
}

export type EventsToShow = {
  tracks: boolean;
  jets: boolean;
  met: boolean;
};

export type JetFilter = {
  phi: string | undefined;
  eta: string | undefined;
  et: string | undefined;
  theta: string | undefined;
};

export type TrackFilter = {
  phi: string | undefined;
  eta: string | undefined;
  pt: string | undefined;
  theta: string | undefined;
};

export type EventNumber = {
  eventGroup: string;
  eventIndex: number;
};

export interface EventsSlice {
  drawEvents: boolean;
  eventNumber: EventNumber;
  loadedEvents: LoadedEvents[];
  eventGeneralInfo: EventOverviewData;
  eventsToShow: EventsToShow;
  event: EventDetailsXML | null;
  isLoading: boolean;
  trackFilter: TrackFilter;
  jetFilter: JetFilter;
}
