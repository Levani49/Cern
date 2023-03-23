import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  CurrentAnalysisTool,
  selectCurrentEventAnalysisTool,
  setEventCurrentAnalysisTool,
} from "../../../../features/modalsSlice";
import AnalysisTool from "./AnalysisTool.component";

/**
 *
 */
export default function AnalysisTools(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentTool = useAppSelector(selectCurrentEventAnalysisTool);

  /**
   *
   * @param tool
   */
  const handleClick = (tool: CurrentAnalysisTool): void => {
    dispatch(setEventCurrentAnalysisTool(tool));
  };

  const tools = {
    filter: "Filter",
    algorithm: "Algorithms",
    info: "Info",
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
    <div className="flex border-b-[1px] border-transparentLight justify-between items-center text-xs">
      {innerHtml}
    </div>
  );
}