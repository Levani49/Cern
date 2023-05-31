import ShowOnly from '../show-only/ShowOnly.component';
import FilterContainer from './FilterContainer.component';
import FilterInput from './FilterInput.component';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import {
  selectTrackFilter,
  setTrackFilters,
  selectJetFilter,
  setJetFilters,
} from '../../../../../features/event/eventSlice';

const testing = false;

export default function FilterTool(): JSX.Element {
  const dispatch = useAppDispatch();
  const trackFilterValues = useAppSelector(selectTrackFilter);
  const jetFilterValues = useAppSelector(selectJetFilter);

  const trackFilter = (key: string, value: string): void => {
    dispatch(
      setTrackFilters({
        ...trackFilterValues,
        [key]: value,
      }),
    );
  };
  const jetFilter = (key: string, value: string): void => {
    dispatch(
      setJetFilters({
        ...jetFilterValues,
        [key]: value,
      }),
    );
  };

  return (
    <div className="flex justify-between flex-col gap-2 p-2">
      <div className="flex flex-col w-full gap-2 md:flex-row md:justify-between">
        <FilterContainer title="Tracks">
          <FilterInput
            filterProp="φ"
            filter="phi"
            onChangeHandler={trackFilter}
            value={trackFilterValues.phi}
          />
          <FilterInput
            filterProp="η"
            filter="eta"
            onChangeHandler={trackFilter}
            value={trackFilterValues.eta}
          />
          <FilterInput
            filterProp="Pt"
            filter="pt"
            onChangeHandler={trackFilter}
            value={trackFilterValues.pt}
          />
          <FilterInput
            filterProp="θ"
            filter="theta"
            onChangeHandler={trackFilter}
            value={trackFilterValues.theta}
          />
        </FilterContainer>
        <FilterContainer title="Jets">
          <FilterInput
            filterProp="φ"
            filter="phi"
            onChangeHandler={jetFilter}
            value={jetFilterValues.phi}
          />
          <FilterInput
            filterProp="η"
            filter="eta"
            onChangeHandler={jetFilter}
            value={jetFilterValues.eta}
          />
          <FilterInput
            filterProp="Et"
            filter="et"
            onChangeHandler={jetFilter}
            value={jetFilterValues.et}
          />
          <FilterInput
            filterProp="θ"
            filter="theta"
            onChangeHandler={jetFilter}
            value={jetFilterValues.theta}
          />
        </FilterContainer>
      </div>
      {testing && <ShowOnly />}
    </div>
  );
}
