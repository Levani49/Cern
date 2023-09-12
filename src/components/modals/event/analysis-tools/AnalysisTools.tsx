import type { CurrentAnalysisTool } from "#/types/app.types";
import {
  selectCurrentEventAnalysisTool,
  setEventCurrentAnalysisTool,
} from "#/store/features/modalSlice";
import { useAppDispatch, useAppSelector } from "#/store/hooks";

import AnalysisTool from "./AnalysisTool";

export default function AnalysisTools() {
  const dispatch = useAppDispatch();
  const currentTool = useAppSelector(selectCurrentEventAnalysisTool);

  const handleClick = (tool: CurrentAnalysisTool): void => {
    dispatch(setEventCurrentAnalysisTool(tool));
  };

  const tools = {
    filter: "filter",
    info: "info",
  };

  const innerHtml = Object.entries(tools).map(([tool, title]) => (
    <AnalysisTool
      key={tool}
      title={title}
      active={currentTool === tool}
      onClick={(): void => handleClick(tool as CurrentAnalysisTool)}
    />
  ));

  return (
    <div className="mt-4 flex items-center justify-between gap-2 text-xs">
      {innerHtml}
    </div>
  );
}
