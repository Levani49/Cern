import { useMemo } from "react";

import {
  selectGlobalOpacity,
  selectGlobalWireframe
} from "../../features/global/globalsSlice";
import {
  selectLocalGeometryCutType,
  selectModelsOpacity,
  selectModelWireframe,
  selectSelectedModel
} from "../../features/model/modelSlice";
import { useAppSelector } from "../../store/hooks";
import type { UseSelectedModel } from "./useSelectedModel.types";

export default function useSelectedModel(): UseSelectedModel {
  const {
    cutType,
    selectedModel,
    modelOpacityLevel,
    globalOpacityLevel,
    modelWireframe,
    globalWireframe
  } = useAppSelector((state) => ({
    selectedModel: selectSelectedModel(state),
    modelOpacityLevel: selectModelsOpacity(state),
    globalOpacityLevel: selectGlobalOpacity(state),
    modelWireframe: selectModelWireframe(state),
    globalWireframe: selectGlobalWireframe(state),
    cutType: selectLocalGeometryCutType(state)
  }));

  return useMemo(
    () => ({
      selectedModel,
      modelOpacityLevel,
      globalOpacityLevel,
      modelWireframe,
      globalWireframe,
      cutType
    }),
    [
      cutType,
      selectedModel,
      modelOpacityLevel,
      globalOpacityLevel,
      modelWireframe,
      globalWireframe
    ]
  );
}
