import Icons from "#/utils/icons";
import {
  selectGlobalOpacity,
  setGlobalOpacity,
} from "#/store/features/globalsSlice";
import {
  selectModelsOpacity,
  selectSelectedModel,
  setModelsOpacity,
} from "#/store/features/modelSlice";
import { useAppDispatch, useAppSelector } from "#/store/hooks";
import MenuDropdown from "#/components/navigation/MenuDropdown";
import NavIcon from "#/components/navigation/NavIcon";

export default function OpacityMenu(): JSX.Element {
  const dispatch = useAppDispatch();

  const globalOpacityLevel = useAppSelector(selectGlobalOpacity);
  const modelOpacityLevel = useAppSelector(selectModelsOpacity);
  const isModelSelected = useAppSelector(selectSelectedModel);

  const onChangeHandlerForModelOpacity = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch(setModelsOpacity(+e.target.value));
  };

  const onChangeHandlerForGlobalOpacity = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch(setGlobalOpacity(+e.target.value));
  };

  const opacity = isModelSelected ? modelOpacityLevel : globalOpacityLevel;
  const onChangeHandler = isModelSelected
    ? onChangeHandlerForModelOpacity
    : onChangeHandlerForGlobalOpacity;

  return (
    <div className="group relative inline-flex">
      <NavIcon Icon={Icons.WaterDropIcon} title="Adjust Geometry Transparency" />
      <MenuDropdown>
        <div className="flex h-6 w-auto items-center justify-center p-1">
          <input
            min={0}
            max={1}
            step={0.01}
            type="range"
            value={opacity}
            className="range-sm h-[3px] w-[100px] cursor-pointer appearance-none rounded-lg bg-highlight1 accent-accent2 dark:accent-accent1"
            onChange={onChangeHandler}
          />
        </div>
      </MenuDropdown>
    </div>
  );
}
