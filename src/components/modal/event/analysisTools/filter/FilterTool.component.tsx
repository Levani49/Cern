import { useAppDispatch, useAppSelector } from "#/store/hooks";
import {
  selectJetFilter,
  selectTrackFilter,
  setJetFilters,
  setTrackFilters,
} from "#/features/event/eventSlice";

import FilterContainer from "./FilterContainer.component";
import FilterInput from "./FilterInput.component";

export default function FilterTool() {
  const dispatch = useAppDispatch();
  const trackFilterValues = useAppSelector(selectTrackFilter);
  const jetFilterValues = useAppSelector(selectJetFilter);

  const trackFilter = (key: string, value: string): void => {
    dispatch(
      setTrackFilters({
        ...trackFilterValues,
        [key]: value,
      })
    );
  };
  const jetFilter = (key: string, value: string): void => {
    dispatch(
      setJetFilters({
        ...jetFilterValues,
        [key]: value,
      })
    );
  };

  const onTraksFieldsReset = (): void => {
    dispatch(
      setTrackFilters({
        phi: undefined,
        eta: undefined,
        theta: undefined,
        pt: "0.7",
      })
    );
  };

  const onJetsFieldsReset = (): void => {
    dispatch(
      setJetFilters({
        phi: undefined,
        eta: undefined,
        theta: undefined,
        et: undefined,
      })
    );
  };

  return (
    <div className="flex flex-col justify-between  p-2">
      <div className="flex w-full flex-col gap-2 md:flex-row md:justify-between">
        <FilterContainer
          title="Tracks"
          resetButtonTitle="Reset track values"
          onFieldsReset={onTraksFieldsReset}
        >
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
        <FilterContainer
          title="Jets"
          resetButtonTitle="Reset JET values"
          onFieldsReset={onJetsFieldsReset}
        >
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
    </div>
  );
}
