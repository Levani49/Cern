import { CurrentAnalysisTool } from "#/types/app.types";

export interface Modal {
  aboutModalIsOpen: boolean;
  settingsModalIsOpen: boolean;
  eventsModalIsOpen: boolean;
  events: {
    analysisTools: {
      currentTool: CurrentAnalysisTool;
    };
  };
}
