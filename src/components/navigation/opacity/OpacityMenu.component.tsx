import { ReactComponent as WaterDropIcon } from "../../../assets/svg/water-drop.svg";
import {
  selectGlobalOpacity,
  setGlobalOpacity
} from "../../../features/global/globalsSlice";
import {
  selectModelsOpacity,
  selectSelectedModel,
  setModelsOpacity
} from "../../../features/model/modelSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import MenuDropdown from "../dropdown/MenuDropdown.component";
import NavIcon from "../navIcon/navIcon";

export default function OpacirtyMenu(): JSX.Element {
  const dispatch = useAppDispatch();

  const { globalOpacityLevel, modelOpacityLevel, isModelSelected } =
    useAppSelector((state) => ({
      globalOpacityLevel: selectGlobalOpacity(state),
      modelOpacityLevel: selectModelsOpacity(state),
      isModelSelected: selectSelectedModel(state)
    }));

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
    <div className="group inline-flex">
      <NavIcon Icon={WaterDropIcon} title="Adjust Geometry Transparency" />
      <MenuDropdown className="ml-[-50px] mt-8">
        <div className="flex h-6 w-auto items-center justify-center p-1">
          <input
            min={0}
            max={1}
            step={0.01}
            type="range"
            value={opacity}
            className="range-sm h-[3px] w-auto cursor-pointer appearance-none rounded-lg bg-gray-700"
            onChange={onChangeHandler}
          />
        </div>
      </MenuDropdown>
    </div>
  );
}
