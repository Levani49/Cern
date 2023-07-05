import { useEffect, useState } from "react";

import { Leva, useControls } from "leva";

import { ModelCut } from "@type/app.types";

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
