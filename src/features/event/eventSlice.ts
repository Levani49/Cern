import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "@store/store";

import EventService from "@services/event/event.service";
import {
  EventDetailsXML,
  EventOverviewData
} from "@services/event/event.service.types";

import { EventsSlice, LoadedEvents } from "./eventSlice.types";

const eventService = new EventService();

const initialState: EventsSlice = {
  eventNumber: {
    eventGroup: "E",
    eventIndex: 5
  },
  loadedEvents: [],
  eventGeneralInfo: {
    runNumber: "",
    eventNumber: "",
    lumiBlock: "",
    date: "",
    time: ""
  },
  eventsToShow: {
    tracks: true,
    jets: true,
    met: true
  },
  event: null,
  isLoading: false,
  trackFilter: {
    phi: undefined,
    eta: undefined,
    theta: undefined,
    pt: undefined
  },
  jetFilter: {
    phi: undefined,
    eta: undefined,
    theta: undefined,
    et: undefined
  }
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    rehydrate: (state, action) => {
      return action.payload.event || state;
    },
    setTrackFilters: (
      state,
      action: PayloadAction<EventsSlice["trackFilter"]>
    ) => {
      state.trackFilter = action.payload;
    },
    setJetFilters: (state, action: PayloadAction<EventsSlice["jetFilter"]>) => {
      state.jetFilter = action.payload;
    },
    setEventDetailsXML: (state, action: PayloadAction<EventDetailsXML>) => {
      const eventGeneralInfo = eventService.getEventGeneralInfo(action.payload);
      const eventName = `${state.eventNumber.eventGroup} ${state.eventNumber.eventIndex}/50`;
      state.event = action.payload;
      state.eventGeneralInfo = eventGeneralInfo;
      state.loadedEvents.push({ ...eventGeneralInfo, eventName });
    },
    setEventNumber: (
      state,
      action: PayloadAction<EventsSlice["eventNumber"]>
    ) => {
      state.eventNumber = action.payload;
      state.isLoading = true;
    },
    setEventParameters: (
      state,
      action: PayloadAction<EventsSlice["eventsToShow"]>
    ) => {
      state.eventsToShow = action.payload;
    },
    setEventLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  }
});

export default eventSlice.reducer;
export const {
  setEventDetailsXML,
  setEventNumber,
  setEventLoading,
  setEventParameters,
  setTrackFilters,
  setJetFilters,
  rehydrate
} = eventSlice.actions;
export const selectEventGeneralInfo = (state: RootState): EventOverviewData =>
  state.event.eventGeneralInfo;

export const selectEventIsLoading = (state: RootState): boolean =>
  state.event.isLoading;
export const selectEvent = (state: RootState): EventDetailsXML | null =>
  state.event.event;
export const selectEventParameters = (
  state: RootState
): EventsSlice["eventsToShow"] => state.event.eventsToShow;
export const selectEventNumber = (
  state: RootState
): EventsSlice["eventNumber"] => state.event.eventNumber;

export const selectLoadedEvents = (state: RootState): LoadedEvents[] =>
  state.event.loadedEvents;

export const selectTrackFilter = (
  state: RootState
): EventsSlice["trackFilter"] => state.event.trackFilter;
export const selectJetFilter = (state: RootState): EventsSlice["jetFilter"] =>
  state.event.jetFilter;