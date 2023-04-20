import { GeneralInfoType } from '../../services/xml/Xml.service.types';

export type DefinedGeneralInfoType = Exclude<GeneralInfoType, undefined>;

export interface EventsSlice {
  xmlGeneralInfo: DefinedGeneralInfoType;
}
