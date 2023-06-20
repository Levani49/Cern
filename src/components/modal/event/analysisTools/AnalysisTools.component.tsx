import type { CurrentAnalysisTool } from "@type/app.types";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import {
  selectCurrentEventAnalysisTool,
  setEventCurrentAnalysisTool
} from "@features/modal/modalSlice";

import AnalysisTool from "./AnalysisTool.component";

export default function AnalysisTools(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentTool = useAppSelector(selectCurrentEventAnalysisTool);

  const handleClick = (tool: CurrentAnalysisTool): void => {
    dispatch(setEventCurrentAnalysisTool(tool));
  };

  const tools = {
    filter: "filter",
    info: "info"
  };

  const innerHtml = Object.entries(tools).map(([tool, title]) => (
    <AnalysisTool
      key={tool}
      title={title}
      active={currentTool === tool}
      onClick={(): void => handleClick(tool as CurrentAnalysisTool)}
    />
  ));

  return <div className="flex items-center justify-between gap-2 text-xs">{innerHtml}</div>;
}
