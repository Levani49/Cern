import { ChangeEvent } from "react";

import Checkbox from "@/components/modal/event/event-objects/Checkbox.component";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import {
  selectModelModal,
  setModelModal,
  setModelsOpacity,
  setModelWireframe
} from "@features/model/modelSlice";

import useSelectedModel from "@hooks/useSelectedModel/useSelectedModel";

import Modal from "../Modal.component";
import ModelAttribute from "./ModelAttribute.component";

export default function ModelInfo(): JSX.Element {
  const dispatch = useAppDispatch();

  const show = useAppSelector(selectModelModal);
  const { selectedModel, modelOpacityLevel, modelWireframe } = useSelectedModel();

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

  return (
    <Modal title="model info" show={show} onCloseHandler={handleClick}>
      <div className="flex flex-col justify-center">
        <ModelAttribute title="name" value={selectedModel?.name} />
        <ModelAttribute
          title="cut type"
          value={selectedModel?.cutType?.replace("-", "")}
        />
        <div className="flex items-center justify-between gap-1 px-2 py-[0.25rem] text-xs">
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
          <span className="text-blue dark:text-green">
            {(modelOpacityLevel * 100).toFixed(0)}%
          </span>
        </div>
        <div className="flex items-center justify-between px-2 py-[0.25rem] text-xs">
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
