import { EventOverviewData, EventDetailsXML } from '../../services/event/event/event.service.types';

export interface EventsSlice {
  eventNumber: {
    eventGroup: string;
    eventIndex: number;
  };
  eventGeneralInfo: EventOverviewData;
  event: EventDetailsXML | null;
}
