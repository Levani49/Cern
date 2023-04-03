import { CurrentAnalysisTool } from '../../types/app.types';

export interface Modals {
  aboutModalIsOpen: boolean;
  settingsModalIsOpen: boolean;
  eventsModalIsOpen: boolean;
  events: {
    analysisTools: {
      currentTool: CurrentAnalysisTool;
    };
  };
}
