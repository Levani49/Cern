import { useIntl } from 'react-intl';

import ShowOnly from '../show-only/ShowOnly.component';
import FilterContainer from './FilterContainer.component';
import FilterInput from './FilterInput.component';

export default function FilterTool(): JSX.Element {
  const intl = useIntl();

  const tracks = intl.formatMessage({ id: 'modal.events.filter.track' });
  const jets = intl.formatMessage({ id: 'modal.events.filter.jet' });

  return (
    <div className="flex justify-between flex-col gap-2 p-2">
      <div className="flex flex-col w-full gap-2 md:flex-row md:justify-between">
        <FilterContainer title={tracks}>
          <FilterInput />
          <FilterInput />
          <FilterInput />
          <FilterInput />
        </FilterContainer>
        <FilterContainer title={jets}>
          <FilterInput />
          <FilterInput />
          <FilterInput />
          <FilterInput />
        </FilterContainer>
      </div>
      <ShowOnly />
    </div>
  );
}