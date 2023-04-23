import { useIntl } from 'react-intl';

import AnalysisTool from './AnalysisTool.component';

import {
  selectCurrentEventAnalysisTool,
  setEventCurrentAnalysisTool,
} from '../../../../features/modal/modalSlice';

import { useAppDispatch, useAppSelector } from '../../../../app/hooks';

import type { CurrentAnalysisTool } from '../../../../types/app.types';

export default function AnalysisTools(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentTool = useAppSelector(selectCurrentEventAnalysisTool);

  const intl = useIntl();
  const filter = intl.formatMessage({ id: 'modal.events.filter' });
  const algorithm = intl.formatMessage({ id: 'modal.events.algorithms' });
  const info = intl.formatMessage({ id: 'modal.events.info' });

  const handleClick = (tool: CurrentAnalysisTool): void => {
    dispatch(setEventCurrentAnalysisTool(tool));
  };

  const tools = {
    filter: filter,
    algorithm: algorithm,
    info: info,
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
