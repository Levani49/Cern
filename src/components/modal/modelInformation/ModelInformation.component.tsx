import { useEffect, useState } from "react";

import { ModelCut } from "@/types/app.types";
import { Leva, useControls } from "leva";

import { useAppDispatch, useAppSelector } from "@store/hooks";

import {
  selectModelModal,
  setModelsOpacity,
  setModelWireframe,
  updateLocalModelCut
} from "@features/model/modelSlice";

import useSelectedModel from "@hooks/useSelectedModel/useSelectedModel";

type Position = {
  x?: number;
  y?: number;
};

const cutTypes = ["cut1", "cut2", "cut3", "cut4", "Full cut"];

export default function ModelInformation(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectModelModal);

  const [lastPosition, setLastPosition] = useState<Position>({
    x: -16,
    y: 56
  });
  const { selectedModel } = useSelectedModel();

  const [data, set] = useControls(() => ({
    Name: {
      value: ""
    },
    Cuttype: {
      value: "cut3",
      options: cutTypes
    },
    Opacity: {
      value: 4,
      min: 0,
      max: 1,
      step: 0.01
    },
    Wireframe: false
  }));

  useEffect(() => {
    if (selectedModel) {
      const { name, opacity, wireframe, cutType } = selectedModel;
      let cType: string;

      if (cutType) {
        cType = selectedModel.cutType.replace("-", "");
      } else {
        cType = "Full cut";
      }

      set({
        Name: name,
        Opacity: opacity,
        Wireframe: wireframe,
        Cuttype: cType
      });
    }
  }, [selectedModel, set]);

  useEffect(() => {
    const { Wireframe, Opacity, Cuttype } = data;

    if (selectedModel) {
      dispatch(setModelWireframe(Wireframe));
      dispatch(setModelsOpacity(Opacity));

      if (Cuttype === "Full cut") {
        dispatch(updateLocalModelCut(""));
      } else {
        dispatch(updateLocalModelCut(("-" + Cuttype) as ModelCut));
      }
    }
  }, [selectedModel, dispatch, data]);

  return (
    <div className="z-99999999">
      <Leva
        hidden={!show}
        theme={{
          sizes: {
            rootWidth: "220px",
            controlWidth: "120px"
          },
          colors: {
            accent1: "#dfe6e9",
            accent2: "rgb(50, 207, 142)",
            accent3: "rgb(38,38,38)"
          }
        }}
        titleBar={{
          title: "Model information",
          drag: true,
          onDragEnd: (e): void => {
            setLastPosition(e);
          },
          filter: false,
          position: lastPosition
        }}
      />
    </div>
  );
}

// import { ChangeEvent } from "react";

// import { ModelCut } from "@type/app.types";

// import { useAppDispatch, useAppSelector } from "@store/hooks";

// import {
//   selectModelModal,
//   setModelModal,
//   setModelsOpacity,
//   setModelWireframe,
//   updateLocalModelCut
// } from "@features/model/modelSlice";

// import Checkbox from "@components/modal/event/event-objects/Checkbox.component";

// import useSelectedModel from "@hooks/useSelectedModel/useSelectedModel";

// import Modal from "../Modal.component";
// import ModelAttribute from "./ModelAttribute.component";

// const cutTypes = ["-cut1", "-cut2", "-cut3", "-cut4", "No cut"];

// export default function ModelInfo(): JSX.Element {
//   const dispatch = useAppDispatch();

//   const show = useAppSelector(selectModelModal);
//   const { selectedModel, modelOpacityLevel, modelWireframe, cutType } =
//     useSelectedModel();

//   const handleClick = (): void => {
//     dispatch(setModelModal(false));
//   };

//   const handleWireframeToggle = (): void => {
//     if (selectedModel) {
//       dispatch(setModelWireframe(!modelWireframe));
//     }
//   };

//   const handleOpacityChange = (e: ChangeEvent<HTMLInputElement>): void => {
//     if (selectedModel) {
//       dispatch(setModelsOpacity(+e.target.value));
//     }
//   };

//   const handleCutTypeUpdate = (e: ChangeEvent<HTMLSelectElement>): void => {
//     if (e.target.value === "No cut") {
//       dispatch(updateLocalModelCut(""));
//     } else {
//       dispatch(updateLocalModelCut(e.target.value as ModelCut));
//     }
//   };

//   const sortedCutTypes = cutType
//     ? sortCutTypes(cutType)
//     : [...cutTypes.slice(0, cutTypes.length - 1), "No cut"];

//   const cutTypeOptions = sortedCutTypes?.map((cutType) => (
//     <option key={cutType} value={cutType}>
//       {cutType.replace("-", "")}
//     </option>
//   ));

//   return (
//     <Modal title="model info" show={show} onCloseHandler={handleClick}>
//       <div className="flex flex-col justify-center gap-1 ">
//         <ModelAttribute title="name" value={selectedModel?.name} />
//         <div className="flex items-center justify-between gap-1 rounded bg-transparentDark px-2 py-3 text-xs">
//           <span className="select-none">Cut type</span>
//           {selectedModel && (
//             <select
//               onChange={handleCutTypeUpdate}
//               className="bg-transparent text-blue outline-none dark:text-green"
//             >
//               {cutTypeOptions}
//             </select>
//           )}
//         </div>
//         <div className="flex items-center justify-between gap-1 rounded bg-transparentDark px-2 py-3 text-xs">
//           <label className="select-none" htmlFor="modelOpacity">
//             Opacity
//           </label>
//           <input
//             id="modelOpacity"
//             min={0}
//             max={1}
//             step={0.01}
//             type="range"
//             value={modelOpacityLevel}
//             className="range-sm h-[3px] w-[40%] cursor-pointer appearance-none rounded-lg bg-gray-700"
//             onChange={handleOpacityChange}
//           />
//           <span className="w-8 select-none text-center text-blue dark:text-green">
//             {(modelOpacityLevel * 100).toFixed(0)}%
//           </span>
//         </div>
//         <div className="flex items-center justify-between rounded bg-transparentDark px-2 py-3 text-xs">
//           <label className="select-none" htmlFor="modelWireframe">
//             Wireframe
//           </label>
//           <Checkbox
//             id="modelWireframe"
//             checked={modelWireframe}
//             onClick={handleWireframeToggle}
//           />
//         </div>
//       </div>
//     </Modal>
//   );
// }

// function sortCutTypes(currentCutType: ModelCut | undefined): ModelCut[] | void {
//   if (!currentCutType) {
//     return;
//   }

//   const sortedCutTypes = [...cutTypes];
//   const currentIndex = sortedCutTypes.indexOf(currentCutType);

//   sortedCutTypes.splice(currentIndex, 1);
//   sortedCutTypes.unshift(currentCutType);

//   return sortedCutTypes as ModelCut[];
// }
