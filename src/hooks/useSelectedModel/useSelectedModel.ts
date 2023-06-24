import { useMemo } from "react";

import type { ModelCut, selectedModel } from "@type/app.types";

import { useAppSelector } from "@store/hooks";

import {
  selectGlobalOpacity,
  selectGlobalWireframe
} from "@features/global/globalsSlice";
import {
  selectLocalGeometryCutType,
  selectModelsOpacity,
  selectModelWireframe,
  selectSelectedModel
} from "@features/model/modelSlice";

export default function useSelectedModel(): UseSelectedModel {
  const selectedModel = useAppSelector(selectSelectedModel);
  const modelOpacityLevel = useAppSelector(selectModelsOpacity);
  const globalOpacityLevel = useAppSelector(selectGlobalOpacity);
  const modelWireframe = useAppSelector(selectModelWireframe);
  const globalWireframe = useAppSelector(selectGlobalWireframe);
  const cutType = useAppSelector(selectLocalGeometryCutType);

  return useMemo(
    (): UseSelectedModel => ({
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

interface UseSelectedModel {
  selectedModel: selectedModel;
  modelOpacityLevel: number;
  globalOpacityLevel: number;
  modelWireframe: boolean;
  globalWireframe: boolean;
  cutType: ModelCut;
}
