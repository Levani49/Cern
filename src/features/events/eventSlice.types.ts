import { GeneralInfoType, XmlEvent } from '../../services/event/xml/xml.service.types';

export type DefinedGeneralInfoType = Exclude<GeneralInfoType, undefined>;

export interface EventsSlice {
  xmlGeneralInfo: DefinedGeneralInfoType;
  xmlEvent: XmlEvent | null;
}
