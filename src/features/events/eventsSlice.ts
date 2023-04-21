import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../app/store';
import { EventsSlice } from './eventSlice.types';
import { GeneralInfoType, XmlEvent } from '../../services/event/event/event.service.types';
import EventService from '../../services/event/event/event.service';

const eventService = new EventService();

const initialState: EventsSlice = {
  eventGeneralInfo: {
    runNumber: '',
    eventNumber: '',
    lumiBlock: '',
    date: '',
    time: '',
  },
  xmlEvent: null,
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setXmlEvent: (state, action: PayloadAction<XmlEvent>) => {
      state.xmlEvent = action.payload;
      state.eventGeneralInfo = eventService.getEventGeneralInfo(action.payload);
    },
  },
});

export default eventSlice.reducer;

export const { setXmlEvent } = eventSlice.actions;

export const selectEventGeneralInfo = (state: RootState): GeneralInfoType =>
  state.events.eventGeneralInfo;

export const selectXmlEvent = (state: RootState): XmlEvent | null => state.events.xmlEvent;
