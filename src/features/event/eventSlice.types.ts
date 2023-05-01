import { EventOverviewData, EventDetailsXML } from '../../services/event/event/event.service.types';

export interface EventsSlice {
  eventNumber: {
    eventGroup: string;
    eventIndex: number;
  };
  eventGeneralInfo: EventOverviewData;
  eventsToShow: {
    tracks: boolean;
    jets: boolean;
    met: boolean;
    cells: boolean;
    clusters: boolean;
    hits: boolean;
  };
  event: EventDetailsXML | null;
  isLoading: boolean;
}
