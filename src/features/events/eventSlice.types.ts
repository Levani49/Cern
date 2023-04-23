import { EventOverviewData, EventDetailsXML } from '../../services/event/event/event.service.types';

export interface EventsSlice {
  eventGeneralInfo: EventOverviewData;
  event: EventDetailsXML | null;
}
