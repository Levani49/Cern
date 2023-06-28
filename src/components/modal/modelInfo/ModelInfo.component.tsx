import { ChangeEvent } from "react";

import { ModelCut } from "@type/app.types";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import {
  selectModelModal,
  setModelModal,
  setModelsOpacity,
  setModelWireframe,
  updateLocalModelCut
} from "@features/model/modelSlice";

import Checkbox from "@components/modal/event/event-objects/Checkbox.component";

import useSelectedModel from "@hooks/useSelectedModel/useSelectedModel";

import Modal from "../Modal.component";
import ModelAttribute from "./ModelAttribute.component";

const cutTypes = ["-cut1", "-cut2", "-cut3", "-cut4", "No cut"];

export default function ModelInfo(): JSX.Element {
  const dispatch = useAppDispatch();

  const show = useAppSelector(selectModelModal);
  const { selectedModel, modelOpacityLevel, modelWireframe, cutType } =
    useSelectedModel();

  const handleClick = (): void => {
    dispatch(setModelModal(false));
  };

  const handleWireframeToggle = (): void => {
    if (selectedModel) {
      dispatch(setModelWireframe(!modelWireframe));
    }
  };

  const handleOpacityChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (selectedModel) {
      dispatch(setModelsOpacity(+e.target.value));
    }
  };

  const handleCutTypeUpdate = (e: ChangeEvent<HTMLSelectElement>): void => {
    if (e.target.value === "No cut") {
      dispatch(updateLocalModelCut(""));
    } else {
      dispatch(updateLocalModelCut(e.target.value as ModelCut));
    }
  };

  const sortedCutTypes = cutType
    ? sortCutTypes(cutType)
    : [...cutTypes.slice(0, cutTypes.length - 1), "No cut"];

  const cutTypeOptions = sortedCutTypes?.map((cutType) => (
    <option key={cutType} value={cutType}>
      {cutType.replace("-", "")}
    </option>
  ));

  return (
    <Modal title="model info" show={show} onCloseHandler={handleClick}>
      <div className="flex flex-col justify-center gap-1 ">
        <ModelAttribute title="name" value={selectedModel?.name} />
        {/* <ModelAttribute
          title="cut type"
          value={selectedModel?.cutType?.replace("-", "")}
        /> */}
        <div className="flex items-center justify-between gap-1 rounded bg-transparentDark px-2 py-3 text-xs">
          <span>Cut type</span>
          {selectedModel && (
            <select
              onChange={handleCutTypeUpdate}
              className="bg-transparent text-blue outline-none dark:text-green"
            >
              {cutTypeOptions}
            </select>
          )}
        </div>
        <div className="flex items-center justify-between gap-1 rounded bg-transparentDark px-2 py-3 text-xs">
          <label htmlFor="modelOpacity">Opacity</label>
          <input
            id="modelOpacity"
            min={0}
            max={1}
            step={0.01}
            type="range"
            value={modelOpacityLevel}
            className="range-sm h-[3px] w-[40%] cursor-pointer appearance-none rounded-lg bg-gray-700"
            onChange={handleOpacityChange}
          />
          <span className="w-8 text-center text-blue dark:text-green">
            {(modelOpacityLevel * 100).toFixed(0)}%
          </span>
        </div>
        <div className="flex items-center justify-between rounded bg-transparentDark px-2 py-3 text-xs">
          <label htmlFor="modelWireframe">Wireframe</label>
          <Checkbox
            id="modelWireframe"
            checked={modelWireframe}
            onClick={handleWireframeToggle}
          />
        </div>
      </div>
    </Modal>
  );
}

function sortCutTypes(currentCutType: ModelCut | undefined): ModelCut[] | void {
  if (!currentCutType) {
    return;
  }

  const sortedCutTypes = [...cutTypes];
  const currentIndex = sortedCutTypes.indexOf(currentCutType);

  sortedCutTypes.splice(currentIndex, 1);
  sortedCutTypes.unshift(currentCutType);

  return sortedCutTypes as ModelCut[];
}
