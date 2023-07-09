import { ModelCut } from "@type/app.types";

import { ReactComponent as CarretDown } from "@assets/svg/carretDown.svg";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import {
  selectModelModal,
  setModelsOpacity,
  setModelWireframe,
  setSelectedModel,
  updateLocalModelCut
} from "@features/model/modelSlice";

import Checkbox from "@components/modal/event/event-objects/Checkbox.component";
import Modal from "@components/modal/Modal.component";
import Slider from "@components/slider/slider.component";

import useSelectedModel from "@hooks/useSelectedModel/useSelectedModel";

const cutTypes = ["cut1", "cut2", "cut3", "cut4", "Full cut"];

export default function ModelInformation(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectModelModal);
  const { selectedModel } = useSelectedModel();

  const cutOptions = cutTypes.map((option) => (
    <option key={option}>{option}</option>
  ));

  const handleCutOptionChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    if (e.target.value === "Full cut") {
      dispatch(updateLocalModelCut(""));
    } else {
      dispatch(updateLocalModelCut(("-" + e.target.value) as ModelCut));
    }
  };

  const handleOpacity = (e: number | number[]): void => {
    if (typeof e !== "object") {
      dispatch(setModelsOpacity(e));
    }
  };

  const handleWireframe = (): void => {
    if (selectedModel) {
      dispatch(setModelWireframe(!selectedModel.wireframe));
    }
  };

  const cutType =
    selectedModel && selectedModel?.cutType
      ? selectedModel?.cutType.replaceAll("-", "")
      : "Full cut";

  console.log(cutType);
  return (
    <Modal
      show={show}
      onCloseHandler={(): void => {
        dispatch(setSelectedModel(null));
      }}
      title="Model"
    >
      <div className="flex w-full flex-col gap-[7px] px-1 pt-1 text-xs">
        <div className="relative grid grid-cols-[auto,120px] items-center gap-[7px]">
          <label htmlFor="name">Name</label>
          <input
            id="Name"
            readOnly
            value={selectedModel?.name}
            className="rounded bg-gray2 px-1 py-1"
          />
        </div>
        <div className="relative grid grid-cols-[auto,120px] items-center gap-[7px] ">
          <div className="relative flex h-full items-center">
            <label htmlFor="label" className="overflow-hidden whitespace-nowrap ">
              Cuttype
            </label>
          </div>
          <select
            key={cutType}
            className="absolute left-0 top-0 h-full w-full opacity-0"
            defaultValue={cutType}
            onChange={handleCutOptionChange}
          >
            {cutOptions}
          </select>
          <div className="flex h-6 w-full cursor-pointer items-center justify-between rounded bg-gray2  p-1">
            <span>{cutType}</span>
            <CarretDown className="mr-1 h-2 w-2 fill-accent3" />
          </div>
        </div>
        <div className="relative  grid grid-cols-[auto,120px] items-center gap-[7px]">
          <label htmlFor="Opacity">Opacity</label>
          <div className="flex w-full items-center justify-between gap-6">
            <div className="w-[90%]">
              <Slider
                step={0.01}
                min={0}
                max={1}
                defaultValue={selectedModel?.opacity || 1}
                onChange={handleOpacity}
              />
            </div>
            <p className="w-16 select-none rounded  bg-gray2 px-1 py-1 text-center text-xs">
              {selectedModel && (selectedModel?.opacity * 100).toFixed(0)}%
            </p>
          </div>
        </div>
        <div className="relative grid grid-cols-[auto,120px] items-center gap-[7px]">
          <label htmlFor="Wireframe">Wireframe</label>
          <Checkbox
            checked={selectedModel?.wireframe || false}
            id="Wireframe"
            onClick={handleWireframe}
          />
        </div>
      </div>
    </Modal>
  );
}
