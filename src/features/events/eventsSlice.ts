import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../app/store';
import { DefinedGeneralInfoType, EventsSlice } from './eventSlice.types';
import { XmlEvent } from '../../services/event/xml/xml.service.types';

const initialState: EventsSlice = {
  xmlGeneralInfo: {
    runNumber: '',
    eventNumber: '',
    lumiBlock: '',
    dateTime: '',
    date: '',
    time: '',
  },
  xmlEvent: null,
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setXmlGeneralInfo: (state, action: PayloadAction<DefinedGeneralInfoType>) => {
      state.xmlGeneralInfo = action.payload;
    },
    setXmlEvent: (state, action: PayloadAction<XmlEvent>) => {
      state.xmlEvent = action.payload;
    },
  },
});

export default eventSlice.reducer;

export const { setXmlGeneralInfo } = eventSlice.actions;

export const selectXmlGeneralInfo = (state: RootState): DefinedGeneralInfoType =>
  state.events.xmlGeneralInfo;
