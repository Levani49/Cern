import { EventOverviewData, EventDetailsXML } from '../../services/event/event.service.types';

export interface LoadedEvents extends EventOverviewData {
  eventName: string;
}

export interface EventsSlice {
  eventNumber: {
    eventGroup: string;
    eventIndex: number;
  };
  loadedEvents: LoadedEvents[];
  eventGeneralInfo: EventOverviewData;
  eventsToShow: {
    tracks: boolean;
    jets: boolean;
    met: boolean;
  };
  event: EventDetailsXML | null;
  isLoading: boolean;
}
