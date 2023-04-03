import ShowOnly from '../show-only/ShowOnly.component';
import FilterContainer from './FilterContainer.component';
import FilterInput from './FilterInput.component';

export default function FilterTool(): JSX.Element {
  return (
    <div className="flex justify-between flex-col gap-2 p-2">
      <div className="flex flex-col w-full gap-2 md:flex-row md:justify-between">
        <FilterContainer title="Track Values">
          <FilterInput />
          <FilterInput />
          <FilterInput />
          <FilterInput />
        </FilterContainer>
        <FilterContainer title="Jet Values">
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
