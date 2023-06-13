import { useMemo } from "react";

import { useAppSelector } from "@store/hooks";

import { selectGlobalOpacity, selectGlobalWireframe } from "@features/global/globalsSlice";
import {
  selectLocalGeometryCutType,
  selectModelsOpacity,
  selectModelWireframe,
  selectSelectedModel
} from "@features/model/modelSlice";

import type { UseSelectedModel } from "./useSelectedModel.types";

export default function useSelectedModel(): UseSelectedModel {
  const selectedModel = useAppSelector(selectSelectedModel);
  const modelOpacityLevel = useAppSelector(selectModelsOpacity);
  const globalOpacityLevel = useAppSelector(selectGlobalOpacity);
  const modelWireframe = useAppSelector(selectModelWireframe);
  const globalWireframe = useAppSelector(selectGlobalWireframe);
  const cutType = useAppSelector(selectLocalGeometryCutType);

  return useMemo(
    () => ({
      selectedModel,
      modelOpacityLevel,
      globalOpacityLevel,
      modelWireframe,
      globalWireframe,
      cutType
    }),
    [cutType, selectedModel, modelOpacityLevel, globalOpacityLevel, modelWireframe, globalWireframe]
  );
}
