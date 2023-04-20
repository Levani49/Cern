import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../app/store';
import { DefinedGeneralInfoType, EventsSlice } from './eventSlice.types';

const initialState: EventsSlice = {
  xmlGeneralInfo: {
    runNumber: '',
    eventNumber: '',
    lumiBlock: '',
    dateTime: '',
    date: '',
    time: '',
  },
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setXmlGeneralInfo: (state, action: PayloadAction<DefinedGeneralInfoType>) => {
      state.xmlGeneralInfo = action.payload;
    },
  },
});

export default eventSlice.reducer;

export const { setXmlGeneralInfo } = eventSlice.actions;

export const selectXmlGeneralInfo = (state: RootState): DefinedGeneralInfoType =>
  state.events.xmlGeneralInfo;
