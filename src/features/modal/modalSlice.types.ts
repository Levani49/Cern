import { CurrentAnalysisTool } from "@type/app.types";

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
