import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../app/store';
import { EventsSlice } from './eventSlice.types';
import { EventOverviewData, EventDetailsXML } from '../../services/event/event.service.types';
import EventService from '../../services/event/event.service';

const eventService = new EventService();

const initialState: EventsSlice = {
  eventNumber: {
    eventGroup: 'E',
    eventIndex: 5,
  },
  eventGeneralInfo: {
    runNumber: '',
    eventNumber: '',
    lumiBlock: '',
    date: '',
    time: '',
  },
  eventsToShow: {
    tracks: true,
    jets: true,
    met: false,
    cells: false,
    clusters: false,
    hits: false,
  },
  event: null,
  isLoading: false,
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
      state.isLoading = true;
    },
    setEventParameters: (state, action: PayloadAction<EventsSlice['eventsToShow']>) => {
      state.eventsToShow = action.payload;
    },
    setEventLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export default eventSlice.reducer;
export const { setEventDetailsXML, setEventNumber, setEventLoading, setEventParameters } =
  eventSlice.actions;
export const selectEventGeneralInfo = (state: RootState): EventOverviewData =>
  state.event.eventGeneralInfo;

export const selectEventIsLoading = (state: RootState): boolean => state.event.isLoading;
export const selectEvent = (state: RootState): EventDetailsXML | null => state.event.event;
export const selectEventParameters = (state: RootState): EventsSlice['eventsToShow'] =>
  state.event.eventsToShow;
export const selectEventNumber = (state: RootState): EventsSlice['eventNumber'] =>
  state.event.eventNumber;
