import { GeneralInfoType, XmlEvent } from '../../services/event/event/event.service.types';

export interface EventsSlice {
  eventGeneralInfo: GeneralInfoType;
  xmlEvent: XmlEvent | null;
}
