import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../app/store';
import { EventsSlice } from './eventSlice.types';
import { GeneralInfoType } from '../../services/xml/Xml.service.types';
// import type { ModelSlice } from './modelSlice.types';
// import { ModelCut, ModelLoadingStates, selectedModel } from '../../types/app.types';

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
    setXmlGeneralInfo: (state, action: PayloadAction<GeneralInfoType>) => {
      state.xmlGeneralInfo = action.payload;
    },
  },
});

export default eventSlice.reducer;

export const { setXmlGeneralInfo } = eventSlice.actions;

export const selectXmlGeneralInfo = (state: RootState): GeneralInfoType =>
  state.events.xmlGeneralInfo;
// export const selectModelsOpacity = (state: RootState): number => state.model.modelOpacity;
// export const selectModelWireframe = (state: RootState): boolean => state.model.modelWireframe;
// export const selectGeometriesCutType = (state: RootState): ModelCut => state.model.modelCut;
// export const selectLocalGeometryCutType = (state: RootState): ModelCut => state.model.localCut;
// export const selectModelModal = (state: RootState): boolean => state.model.showModelModal;
// export const selectModelsLoadingState = (state: RootState): ModelLoadingStates =>
//   state.model.modelsLoadingState;

// export const selectPreviousSelectedModel = (state: RootState): selectedModel =>
//   state.model.previousSelectedModel;
