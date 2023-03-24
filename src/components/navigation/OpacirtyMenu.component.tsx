import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ReactComponent as WaterDropIcon } from "../../assets/svg/water-drop.svg";
import {
  selectGlobalOpacity,
  selectModelsOpacity,
  selectSelectedModel,
  setGlobalOpacity,
  setModelsOpacity,
} from "../../features/geometryMenuSlice/geometryMenuSlice";

import MenuDropdown from "./MenuDropdown.component";
import MenuIcon from "./MenuIcon.component";

/**
 * Provides functionality which controls opacity of geometries
 *
 * @returns {JSX.Element} ReactElemet
 */
export default function OpacirtyMenu(): JSX.Element {
  const dispatch = useAppDispatch();

  const { globalOpacityLevel, modelOpacityLevel, isModelSelected } =
    useAppSelector((state) => ({
      globalOpacityLevel: selectGlobalOpacity(state),
      modelOpacityLevel: selectModelsOpacity(state),
      isModelSelected: selectSelectedModel(state),
    }));

  const onChangeHandlerForModelOpacity = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    dispatch(setModelsOpacity(+e.target.value));
  };

  const onChangeHandlerForGlobalOpacity = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    dispatch(setGlobalOpacity(+e.target.value));
  };

  const opacity = isModelSelected ? modelOpacityLevel : globalOpacityLevel;
  const onChangeHandler = isModelSelected
    ? onChangeHandlerForModelOpacity
    : onChangeHandlerForGlobalOpacity;

  return (
    <div className="inline-flex group">
      <MenuIcon Icon={WaterDropIcon} title="Transparency of geometries" />
      <MenuDropdown className="ml-[-50px] mt-8">
        <div className="w-auto flex justify-center items-center h-6 p-1">
          <input
            min={0}
            max={1}
            step={0.01}
            type="range"
            value={opacity}
            className="w-auto h-[3px] rounded-lg appearance-none cursor-pointer range-sm bg-gray-700"
            onChange={onChangeHandler}
          />
        </div>
      </MenuDropdown>
    </div>
  );
}
