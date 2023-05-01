import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../app/store';
import { EventsSlice } from './eventSlice.types';
import { EventOverviewData, EventDetailsXML } from '../../services/event/event/event.service.types';
import EventService from '../../services/event/event/event.service';

const eventService = new EventService();

const initialState: EventsSlice = {
  eventNumber: {
    eventGroup: 'E',
    eventIndex: 6,
  },
  eventGeneralInfo: {
    runNumber: '',
    eventNumber: '',
    lumiBlock: '',
    date: '',
    time: '',
  },
  event: null,
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setEventDetailsXML: (state, action: PayloadAction<EventDetailsXML>) => {
      state.event = action.payload;
      state.eventGeneralInfo = eventService.getEventGeneralInfo(action.payload);
    },
    setEventNumber: (state, action: PayloadAction<EventsSlice['eventNumber']>) => {
      state.eventNumber = action.payload;
    },
  },
});

export default eventSlice.reducer;
export const { setEventDetailsXML, setEventNumber } = eventSlice.actions;

export const selectEventGeneralInfo = (state: RootState): EventOverviewData =>
  state.event.eventGeneralInfo;

export const selectEvent = (state: RootState): EventDetailsXML | null => state.event.event;
export const selectEventNumber = (state: RootState): EventsSlice['eventNumber'] =>
  state.event.eventNumber;
